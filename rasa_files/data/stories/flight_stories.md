## flight checkpoint
* greet
    - action_utter_greet
* flights
    - utter_flights_path_details
> flight_checkpoint

## ask flight schedule simple

* greet
  - action_utter_greet
* ask_flight_schedule{"flight_ID":"xyz"}
  - action_get_flight_schedule
  - utter_enquiry


## ask flight schedule options

* greet
  - action_utter_greet
* ask_flight_schedule
  - utter_ask_flight_id
* inform{"flight_ID":"xyx"}
  - action_get_flight_schedule
  - utter_enquiry

## ask flight arrival simple

* greet
  - action_utter_greet
* ask_flight_arrival{"flight_ID":"xyx"}
  - action_get_flight_arrival
  - utter_enquiry

## ask flight arrival options

* greet
  - action_utter_greet
* ask_flight_arrival
  - utter_ask_flight_id
* inform{"flight_ID":"xyx"}
  - action_get_flight_arrival
  - utter_enquiry

## ask flight details through options, direct

> flight_checkpoint
* ask_flight_schedule{"flight_ID":"xyz"}
  - action_get_flight_schedule
  - utter_enquiry

## ask flight details through options, ask id

> flight_checkpoint
* ask_flight_schedule
  - utter_ask_flight_id
* inform{"flight_ID":"xyx"}
  - action_get_flight_schedule
  - utter_enquiry

## ask flight schedule direct

* ask_flight_schedule
  - utter_ask_flight_id
* inform{"flight_ID":"xyx"}
  - action_get_flight_schedule
  - utter_enquiry

## ask flight schedule direct with id

* ask_flight_schedule{"flight_ID":"xyz"}
  - action_get_flight_schedule
  - utter_enquiry

## ask flight arrival options 

> flight_checkpoint
* ask_flight_arrival
  - utter_ask_flight_id
* inform{"flight_ID":"xyx"}
  - action_get_flight_arrival
  - utter_enquiry

## ask flight arrival options direct

> flight_checkpoint
* ask_flight_arrival{"flight_ID":"xyx"}
  - action_get_flight_arrival
  - utter_enquiry