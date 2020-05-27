from twilio.rest import Client
import random
account_sid = 'twilio sid'
auth_token = 'twilio auth'
client = Client(account_sid, auth_token)
otp = random.randrange(1000,9999,2)
msg = "Your OTP for cab booking is "+str(otp)+" . Have a great journey!"
user_num = 'enter phone no here'
message = client.messages \
                .create(
                     body=msg,
                     from_='+12564948594',
                     to='+91'+str(user_num)
                 )

print(message.sid)