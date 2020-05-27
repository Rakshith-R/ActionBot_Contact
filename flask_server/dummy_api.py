from flask import Flask, request, render_template, jsonify, send_from_directory
from datetime import datetime
from twilio.rest import Client
import random
import requests
import threading
from functools import wraps
from pymongo import MongoClient
from flask_cors import CORS

client = MongoClient()
db = client.rasa

def delay(delay=0.):
    """
    Decorator delaying the execution of a function for a while.
    """
    def wrap(f):
        @wraps(f)
        def delayed(*args, **kwargs):
            timer = threading.Timer(delay, f, args=args, kwargs=kwargs)
            timer.start()
        return delayed
    return wrap

app = Flask(__name__,static_folder="build/static", template_folder="build")
# app = Flask(__name__)
CORS(app)

@delay(30)
def reset_cab_booking_slots(sender_id,from_loc,to_loc):
    url = "http://localhost:5005/conversations/{}/tracker/events/".format(sender_id)
    json = { "event": "slot", "name": "", "value": None}
    slots = ["from_loc","to_loc","time","porter","terminal","driver"]
    for i in slots:
        json['name'] = i
        requests.post(url,json=json,headers={'Content-Type':'application/json'})
    json['name'] = 'prev_cab'
    json['value'] = {'from_loc':from_loc,'to_loc':to_loc}
    requests.post(url,json=json,headers={'Content-Type':'application/json'})
    json['name'] = 'pc_from_loc'
    json['value'] = from_loc
    requests.post(url,json=json,headers={'Content-Type':'application/json'})
    json['name'] = 'pc_to_loc'
    json['value'] = to_loc
    requests.post(url,json=json,headers={'Content-Type':'application/json'})
    # print(data.text)

# @app.route('/ad')
# def dashboard():
#     # return send_from_directory('./build','index.html')
#     return render_template('index.html')

@app.route('/home')
@app.route('/admin/dashboard')
def home():
    return render_template('index.html')
    # return send_from_directory('./build_bot','index.html')

@app.route('/book_cab', methods=['POST'])
def book_cab():
    from_loc = request.json['from_loc']
    to_loc = request.json['to_loc']
    sender_id = request.json['sender_id']
    time = datetime.strptime(request.json['time'],'%Y-%m-%d %H:%M:%S')
    urgent=False
    if datetime.now() > time:
        urgent = True
    driver = "Naren Chandra"
    driver_pic = "https://partners.olacabs.com/public/img/type2.98e5661.png"
    car_number = "KA 04 MH 5432"
    driver_num = "9036993095"
    my_num = "9036993095"
    account_sid = 'twilio sid'
    auth_token = 'twilio auth token'
    # client = Client(account_sid, auth_token)
    otp = random.randrange(1000,9999,2)
    msg = "Your OTP for cab booking is "+str(otp)+" .Driver Name: "+driver+" Driver number: "+driver_num+"Have a great journey!"
    # message = client.messages \
    #             .create(
    #                  body=msg,
    #                  from_='+12564948594',
    #                  to='+91'+my_num
    #              )
    # print(message.sid)
    reset_cab_booking_slots(sender_id,from_loc,to_loc)
    return {"status":"success",
            "from_loc":from_loc,
            "to_loc":to_loc,
            "driver":driver,
            "driver_pic":driver_pic,
            "car_number":car_number,
            "driver_num":driver_num,
            "urgent":urgent,
            "time":request.json['time']}

@app.route('/curr_exchange', methods=['POST'])
def curr_exchange():
    curr1 = request.json['curr1'].upper()
    curr2 = request.json['curr2'].upper()
    urgent=False
    # Where USD is the base currency you want to use
    url = 'https://api.exchangerate-api.com/v4/latest/'+curr1
    res1 = requests.get(url)
    data = res1.json()
    print(data)
    if data.get("result")==None:
        # print(data)
        if data["rates"][curr2]!=None:
            curr2rate = data["rates"][curr2]
        else:
            curr2rate = 1.67
        return {
            "status":"success",
            "curr2rate":curr2rate
        }
    else:
        return {
            "status":"fail",
            "rate": 1.87
        }
        
@app.route('/api')
def get_details():
    resp = {'Incidents':[],'Actions':[],'frequentActions':{'labels':[],'series':[]}}
    actions = db.actions.find().limit(50).sort('timestamp',-1)
    incidents = db.incidents.find().limit(50).sort('timestamp',-1)
    for (i,action) in enumerate(actions):
        resp['Actions'].append([str(i+1),action['action'],action['timestamp']])
    for(i,incident) in enumerate(incidents):
        resp['Incidents'].append([str(i+1),incident['user_message'],incident['timestamp']])
    # print(actions)
    actions = [x[1] for x in resp['Actions']]
    print(actions)
    actions_set = set(actions)
    print(actions_set)
    act_freq = []
    for i in actions_set:
        act_freq.append([i,actions.count(i)])
    act_freq.sort(key=lambda x: x[1],reverse=True)
    most_freq = act_freq[:4] + [['Others',sum([x[1] for x in act_freq[4:]])]]
    print(most_freq)
    total = sum([x[1] for x in most_freq])
    resp['frequentActions']['labels'] = [x[0] for x in most_freq]
    resp['frequentActions']['series'] = [int((x[1]/total)*100) for x in most_freq]
    print(resp['frequentActions'])
    return jsonify(resp)

if(__name__=="__main__"):
    app.run(debug=True,host="0.0.0.0")   
