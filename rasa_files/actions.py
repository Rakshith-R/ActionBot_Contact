# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/core/actions/#custom-actions/


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List, Union, Optional
from rasa_sdk import Action, Tracker
from rasa_sdk.forms import FormAction, EventType
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet, FollowupAction, UserUtteranceReverted
from rasa.core.events import Event
from rasa.core.actions.action import ActionUtterTemplate
import random
import requests
from nltk.tokenize import word_tokenize
from datetime import datetime
import re
from pymongo import MongoClient

REQUESTED_SLOT = 'requested_slot'

client = MongoClient()
db = client.rasa

class ActionBookCab(Action):

    def name(self) -> Text:
        return "action_book_cab"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:


        from_loc = tracker.get_slot('from_loc')
        to_loc = tracker.get_slot('to_loc')
        if tracker.get_slot('book_same_cab'):
            prev_cab = tracker.get_slot('prev_cab')
            from_loc = prev_cab['from_loc']
            to_loc = prev_cab['to_loc']
        time = tracker.get_slot('time')
        time = time[:10]+" "+time[11:19]
        time = datetime.strptime(time, '%Y-%m-%d %H:%M:%S')
        name = tracker.get_slot('name')
        number = tracker.get_slot('number')
        porter = tracker.get_slot("porter")
        terminal = tracker.get_slot("terminal")
        sender_id = tracker.sender_id
        # print(time)
        url = "http://127.0.0.1:5000/book_cab"
        det = {"from_loc":from_loc,"to_loc":to_loc,"time":datetime.strftime(time,'%Y-%m-%d %H:%M:%S'),"name":name,"number":number,'sender_id':sender_id}
        # print(det)
        response = requests.post(url,json=det).json()
        # print(response)
        if response['status'] == "success":
            driver = response['driver']
            if response['urgent']:
                dispatcher.utter_message(text="Succesfully Booked Cab from {} to {}. Your driver {} will be there in 5 mins".format(from_loc,to_loc,driver),image=response['driver_pic'])
            else:
                dispatcher.utter_message(text="Succesfully Booked Cab from {} to {}. Your driver {} will be there at {}".format(from_loc,to_loc,driver,response['time']),image=response['driver_pic'])
            dispatcher.utter_message(text="Contact Number: {}  \nCar Number: {}".format(response['driver_num'],response['car_number']))
            if porter==True:
                dispatcher.utter_message("Your porter will be arriving at Terminal {} shortly.".format(terminal))
            dispatcher.utter_message(template="utter_enquiry")

            action = {'action':'Cab Booking','timestamp': int(datetime.timestamp(datetime.now()))}
            db.actions.insert_one(action)
            return [SlotSet("driver",driver),SlotSet('book_same_cab',None),SlotSet('from_loc',from_loc),SlotSet('to_loc',to_loc), FollowupAction('action_listen')]
        else:
            dispatcher.utter_message("Sorry. Was unable to book cab")
            dispatcher.utter_message(template="enquiry")
            return [SlotSet('book_same_cab', None), SlotSet('from_loc',from_loc), SlotSet('to_loc',to_loc), FollowupAction('action_listen')]

class ActionGetFlightSchedule(Action):

    def name(self) -> Text:
        return "action_get_flight_schedule"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        flight_ID = [x['value'] for x in tracker.latest_message['entities'] if x['extractor'] == 'RegexEntityExtractor'][0]
        flight_ID = re.split(r"[-\s]",flight_ID)
        if len(flight_ID)==1:
            flight_ID = flight_ID[0][:2].upper() + flight_ID[0][2:]
        else:
            flight_ID = flight_ID[0].upper()+flight_ID[1]

        url= f"http://api.aviationstack.com/v1/flights?access_key=API_KEY&flight_iata={flight_ID}"

        try:
            resp = requests.get(url).json()
        except:
            dispatcher.utter_message("Sorry. Unable to connect to Flight Details Server 😔.  \nPlease try again")
            return []

        print(datetime.now())
        action = {'action':'Flight Details','timestamp': int(datetime.timestamp(datetime.now()))}
        db.actions.insert_one(action)

        if resp['pagination']['count']:
            flight = resp['data'][0]
            dep_sch_time = flight['departure']['scheduled'].split('T')[1].split('+')[0]
            dep_est_time = flight['departure']['estimated'].split('T')[1].split('+')[0]
            arr_date = flight['arrival']['estimated'].split('T')[0]
            arr_time = flight['arrival']['estimated'].split('T')[1].split('+')[0]
            dep_terminal = flight['departure']['terminal'] if flight['departure']['terminal'] else 'Not Yet Assigned'
            arr_terminal = flight['arrival']['terminal'] if flight['arrival']['terminal'] else 'Not Yet Assigned'
            if flight['flight_status'] == 'scheduled':
                dispatcher.utter_message(f"Flight ID: {flight_ID}  \nFlight Date: {flight['flight_date']}  \nFlight Status: Scheduled")
                dispatcher.utter_message("Departure:  \n" +
                f"Airport: {flight['departure']['airport']}  \n" +
                f"Scheduled Departure: {dep_sch_time}  \n" +
                f"Estimated Departure: {dep_est_time}  \n" +
                f"Terminal: {dep_terminal}  \n")

                dispatcher.utter_message("Arrival:  \n" +
                f"Airport: {flight['arrival']['airport']}  \n" +
                f"Estimated Arrival: {arr_date + ' ' + arr_time}  \n" +
                f"Terminal: {arr_terminal}")

                return []

            elif flight['flight_status'] == 'cancelled':
                dispatcher.utter_message("Your flight has been cancelled")
                return []

        dispatcher.utter_message("Sorry. Could not find any flight with the respective Flight ID 😔")
        return []

class ActionGetFlightArrival(Action):

    def name(self) -> Text:
        return "action_get_flight_arrival"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        arr_time = random.randrange(0,24,1)
        flight_ID = [x['value'] for x in tracker.latest_message['entities'] if x['extractor'] == 'RegexEntityExtractor'][0]
        dispatcher.utter_message("Your flight {} will be arriving at time {}".format(flight_ID, arr_time))
        return []     


class ActionGetNearbyHotels(Action):

    def name(self) -> Text:
        return "action_get_nearby_hotels"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        action = {'action':'Show Nearby Hotels','timestamp': int(datetime.timestamp(datetime.now()))}
        db.actions.insert_one(action)
        dispatcher.utter_message("[Taj Bangalore](https://goo.gl/maps/qh7gXfH8VV2B6gtW9)  \t4.6 stars  \t0.5km\t Rs.13000/night")
        dispatcher.utter_message("[Attide Boutique](https://goo.gl/maps/THizZgUeJrxCgnjC6)  \t4.1 stars  \t9.8km\t Rs.3600/night")
        dispatcher.utter_message("[Regenta Inn Bangalore](https://goo.gl/maps/nbTe9pGTUzjnuuZH9)  \t3.9 stars  \t6.0km\t Rs.5200/night")
        return []

class ActionHandoff(Action):

    def name(self) -> Text:
        return "action_handoff"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        action = {'action':'Handoff','timestamp': int(datetime.timestamp(datetime.now()))}
        db.actions.insert_one(action)
        dispatcher.utter_message("Here's a few numbers you can contact\nCustomer Care: 080-52342342\nToll Free Number: 080-3446456")
        return []

class ActionGetParkingDetails(Action):

    def name(self) -> Text:
        return "action_get_parking_details"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        action = {'action':'Show Parking','timestamp': int(datetime.timestamp(datetime.now()))}
        db.actions.insert_one(action)

        dispatcher.utter_message("The nearest parking facility is at [KIAL parking 3](https://goo.gl/maps/XLkXqxTrDuEvddoh8). The price per hour is Rs.80. ")
        return []

class ActionGetMetroDetails(Action):

    def name(self) -> Text:
        return "action_get_metro_details"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        time = random.randrange(0,60,1)
        action = {'action':'Metro Details','timestamp': int(datetime.timestamp(datetime.now()))}
        db.actions.insert_one(action)
        dispatcher.utter_message("[Here](https://goo.gl/maps/qxMrN5iQjBMi7Kw47) is the closest metro. The next metro train arrives in {} minutes.".format(time))
        return []

class ActionGetTrainDetails(Action):

    def name(self) -> Text:
        return "action_get_train_details"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        action = {'action':'Train Details','timestamp': int(datetime.timestamp(datetime.now()))}
        db.actions.insert_one(action)
        train_pnr = tracker.latest_message['entities'][0]['value']
        arr_time = random.randrange(0,24,1)
        dep_time = arr_time+random.randrange(1,2,1)
        dispatcher.utter_message("Details for train {}:  \nArrival Time: {}  \nDeparture Time: {}".format(train_pnr, arr_time, dep_time))
        return []

class ActionGetCurrencyCounter(Action):

    def name(self) -> Text:
        return "action_get_currency_counter"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        #print(tracker.latest_message)
        action = {'action':'Currency Counter','timestamp': int(datetime.timestamp(datetime.now()))}
        db.actions.insert_one(action)
        dispatcher.utter_message("Currency counter is located at [Centrum Forex](https://goo.gl/maps/hkJBW2weDRSihKjTA).")
        return []

class ActionGetCurrencyExchange(Action):

    def name(self) -> Text:
        return "action_get_currency_exchange"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        action = {'action':'Currency Exchange','timestamp': int(datetime.timestamp(datetime.now()))}
        db.actions.insert_one(action)
        currencies = [x for x in tracker.latest_message['entities'] if x['entity']=='currency']
        curr1 = currencies[0]['value']
        curr2 = currencies[1]['value']
        number = [x['value'] for x in tracker.latest_message['entities'] if x['entity']=='number']
        url = "http://127.0.0.1:5000/curr_exchange"
        det = {"curr1":curr1,"curr2":curr2}
        response = requests.post(url,json=det).json()
        if response['status'] == "success":
            rate = response['curr2rate']
            if number:
                dispatcher.utter_message("The current exchange rate for {} {} is {:.2f} {}".format(number[0],curr1.upper(), rate*number[0], curr2.upper()))
            else:
                dispatcher.utter_message("The current exchange rate for 1 {} is {:.2f} {}".format(curr1.upper(), rate, curr2.upper()))
        else:
            dispatcher.utter_message("Sorry. Couldn't find the exchange rate")
        return []

class ActionGetStorePromos(Action):

    def name(self) -> Text:
        return "action_get_store_promos"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        action = {'action':'Store Promos','timestamp': int(datetime.timestamp(datetime.now()))}
        db.actions.insert_one(action)
        dispatcher.utter_message("I found the following promotions: ")
        dispatcher.utter_message("\nH&M -- \tFLAT 50% OFF ON SUMMER COLLECTION")
        dispatcher.utter_message("\nUCB -- \tBUY ONE GET ONE FREE ON KIDS WEAR")
        dispatcher.utter_message("\nNIKE -- \t20% OFF ON SELECT SNEAKERS")
        return []


class ActionGetBusStation(Action):

    def name(self) -> Text:
        return "action_get_bus_station"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        action = {'action':'Show Bus Stop','timestamp': int(datetime.timestamp(datetime.now()))}
        db.actions.insert_one(action)
        dispatcher.utter_message("The bus terminal is located at [Flybus booking](https://goo.gl/maps/4kQPpX1YQLBmMx3VA). The next bus leaves in 5 minutes.")
        return []
        
class ActionExtractLocations(Action):

    def name(self) -> Text:
        return "action_extract_locations"

    def extract_locations(self,sentence,locs):
        from_loc, to_loc = None,None
        sent_lower = sentence.lower()
        from_ind, to_ind = -1,-1
        if len(locs)==1:
            loc_ind = sent_lower.find(locs[0])
            from_ind = sent_lower.find("from ")
            to_ind = sent_lower.find("to ")
            if from_ind == -1 and to_ind == -1:
                return (from_loc,to_loc)
            if from_ind == -1:
                # print("From found")
                to_loc = sentence[loc_ind:loc_ind+len(locs[0])]
            elif to_ind == -1:
                # print("to found")
                from_loc = sentence[loc_ind:loc_ind+len(locs[0])]
            else:
                if loc_ind > from_ind and loc_ind > to_ind:
                    if from_ind > to_ind:
                        from_loc = sentence[loc_ind:loc_ind+len(locs[0])]
                    else:
                        to_loc = sentence[loc_ind:loc_ind+len(locs[0])]
                elif loc_ind < from_ind:
                    to_loc = sentence[loc_ind:loc_ind+len(locs[0])]
                else:
                    from_loc = sentence[loc_ind:loc_ind+len(locs[0])]
            return(from_loc,to_loc)

        loc_ind = [sent_lower.find(locs[0]),sent_lower.find(locs[1])]
        locs = [sentence[loc_ind[0]:loc_ind[0]+len(locs[0])],sentence[loc_ind[1]:loc_ind[1]+len(locs[1])]]
        print(locs)
        try:
            from_ind = sent_lower.find("from ")
        except ValueError:
            if loc_ind[0]<loc_ind[1]:
                from_loc,to_loc = locs[0],locs[1]
            else:
                from_loc,to_loc = locs[1],locs[0]
        try:
            to_ind = sent_lower.find("to ")
        except ValueError:
            if loc_ind[0]<loc_ind[1]:
                from_loc,to_loc = locs[1],locs[0]
            else:
                from_loc,to_loc = locs[0],locs[1]
        
        if from_ind > -1 and to_ind > -1:
            if from_ind < to_ind:
                if loc_ind[0]<loc_ind[1]:
                    from_loc,to_loc = locs[0],locs[1]
                else:
                    from_loc,to_loc = locs[1],locs[0]
            else:
                if loc_ind[0]<loc_ind[1]:
                    from_loc,to_loc = locs[1],locs[0]
                else:
                    from_loc,to_loc = locs[0],locs[1]
        return(from_loc,to_loc)

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        locs = [x['value'] for x in tracker.latest_message['entities'] if x['entity']=="loc" and x['extractor'] == 'CRFEntityExtractor']
        sentence = tracker.latest_message['text']
        print(locs)
        from_loc,to_loc = self.extract_locations(sentence,locs)
        print(from_loc,to_loc)
        if from_loc and to_loc:
            return [SlotSet("from_loc",from_loc),SlotSet("to_loc",to_loc)]
        elif from_loc:
            return [SlotSet("from_loc",from_loc)]
        elif to_loc:
            return [SlotSet("to_loc",to_loc)]
        else:
            return []

class ActionGetRestaurants(Action):

    def name(self) -> Text:
        return "action_get_restaurants"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        action = {'action':'Show Restaurants','timestamp': int(datetime.timestamp(datetime.now()))}
        db.actions.insert_one(action)
        dispatcher.utter_message("Here are a few places you could eat at.")
        dispatcher.utter_message("[Subway](https://goo.gl/maps/v8wsCRYEnKBvwHER7). 3.1/5 stars")
        dispatcher.utter_message("[Hatti Kaapi](https://goo.gl/maps/ds1o6MQNsaLoHS2a8) 4.0/5 stars")
        dispatcher.utter_message("[Cafe Coffee Day](https://goo.gl/maps/zeJa7A59XM2ZDBAp6). 3.9/5 stars")


class ActionResetCabBookingInfo(Action):

    def name(self) -> Text:
        return "action_reset_cab_booking_info"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        return [SlotSet("from_loc",None),SlotSet("to_loc",None),SlotSet("time",None),SlotSet("porter",None),SlotSet("terminal",None),SlotSet("driver",None)]


class ActionUtterGreet(Action):

    def name(self) -> Text:
        return "action_utter_greet"

    def run(self, dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        name = tracker.get_slot('name') if tracker.get_slot('name') else ""
        dispatcher.utter_message(template="utter_greet",name=name)
        return []


class ActionCheckBookingExists(Action):

    def name(self) -> Text:
        return "action_check_booking_exists"

    def run(self, dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        if tracker.get_slot("driver"):
            # dispatcher.utter_message(template="utter_ask_cancel_previous_cab")
            return [SlotSet("booking_exists",True)]
        return [SlotSet("booking_exists",False)]


# class ActionAskBookSameCab(Action):

#     def name(self) -> Text:
#         return "action_ask_book_same_cab"

#     def run(self, dispatcher: CollectingDispatcher,
#         tracker: Tracker,
#         domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

#         prev_cab = tracker.get_slot('prev_cab')
#         dispatcher.utter_message("You recently booked a cab from {} to {}. Would you like to book the same cab ?".format(prev_cab['from_loc'],prev_cab['to_loc']))
#         return []

        
class ActionCustomFallback(Action):

    def name(self) -> Text:
        return "action_custom_fallback"

    def run(self, dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        incident = {'user_message':tracker.latest_message['text'],'timestamp':int(datetime.timestamp(datetime.now()))}
        db.incidents.insert_one(incident)
        dispatcher.utter_message(template='utter_default')
        return [UserUtteranceReverted()]


class BookCabForm(FormAction):

    def name(self) -> Text:
        return "book_cab_form"

    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        BookCabForm.my_tracker = tracker
        # def get_basic_slots():
        if not tracker.get_slot('from_loc') and not tracker.get_slot('to_loc'):
            if tracker.get_slot('book_same_cab'):
                if tracker.get_slot('prev_cab')['from_loc'].lower() not in ['kia', 'airport','kempegowda international airport','kempegowda','bangalore airport']:
                    return ['time','name','number']
                if tracker.get_slot('porter'):
                    return ['time','name','number','porter','terminal']
                return ['time','name','number','porter']

            if tracker.get_slot('prev_cab') and tracker.get_slot('book_same_cab')==None:
                return ['book_same_cab']

        if type(tracker.get_slot('from_loc'))==str and tracker.get_slot("from_loc").lower() not in ['kia', 'airport','kempegowda international airport','kempegowda','bangalore airport']:
            return ["from_loc","to_loc","time","name","number"]
        if tracker.get_slot("porter"):
            return ["from_loc","to_loc","time","name","number","porter","terminal"]
        return ["from_loc","to_loc","time","name","number","porter"]

        # if tracker.get_slot("driver"):
        #     if tracker.get_slot("cancel_previous_cab"):
        #         SlotSet("from_loc",None)
        #         SlotSet("to_loc",None)
        #         SlotSet("time",None)
        #         SlotSet("porter",None)
        #         SlotSet("terminal",None)
        #         SlotSet("driver",None)
        #         return get_basic_slots()
        #     return ["cancel_previous_cab"]
            
        # return get_basic_slots()


    def submit(
        self,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> List[Dict]:
        """Define what the form has to do
            after all required slots are filled"""

        # utter submit template
        dispatcher.utter_message(template="utter_submit")
        return [FollowupAction('action_book_cab')]

    def get_address(self,tracker):
        loc = tracker.get_slot('location')
        url = f"https://api.opencagedata.com/geocode/v1/json?q={loc['lat']}+{loc['long']}&key=8343385927904c18b1adb9c0f9f18673"
        resp = requests.get(url).json()
        if resp['results']:
            addr = resp['results'][0]['components']
            loc_type = addr['_type']
            if loc_type in addr.keys():
                return addr[loc_type]
            if 'suburb' in addr.keys():
                return addr['suburb']
        return None

    def validate_from_loc(
        self,
        value: Text,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> Dict[Text, Any]:
        if value=='slot:current_location':
            value = self.get_address(tracker)
        return {'from_loc':value}


    def slot_mappings(self) -> Dict[Text, Union[Dict, List[Dict]]]:
        return{
            "from_loc": [self.from_intent(intent='current_location',value='slot:current_location'),self.from_text(not_intent=["cancel_form","affirm","deny","ask_for_reason","current_location"])],
            "to_loc": self.from_text(not_intent=["cancel_form","affirm","deny","ask_for_reason"]),
            # "from_loc": self.from_text(intent=None),
            # "to_loc": self.from_text(intent=None),
            "name": self.from_text(not_intent=["cancel_form","affirm","deny","ask_for_reason"]),
            "number": self.from_entity(entity="number", intent=None),
            "time": self.from_entity(entity="time", not_intent=["cancel_form","affirm","deny","ask_for_reason"]),
            "porter": [self.from_intent(intent="affirm", value=True), self.from_intent(intent="deny", value=False)],
            "terminal": self.from_entity(entity="number", not_intent=["cancel_form","affirm","deny","ask_for_reason"]),
            "cancel_previous_cab": [self.from_intent(intent="affirm", value=True), self.from_intent(intent="deny", value=False)],
            "book_same_cab": [self.from_intent(intent="affirm", value=True), self.from_intent(intent="deny", value=False)]
        }
