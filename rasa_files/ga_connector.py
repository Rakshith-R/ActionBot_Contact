import logging
import json
from sanic import Blueprint, response
from sanic.request import Request
from typing import Text, Optional, List, Dict, Any

from rasa.core.channels.channel import UserMessage, OutputChannel
from rasa.core.channels.channel import InputChannel
from rasa.core.channels.channel import CollectingOutputChannel



logger = logging.getLogger(__name__)


		
class GoogleConnector(InputChannel):
    """A custom http input channel.
    This implementation is the basis for a custom implementation of a chat
    frontend. You can customize this to send messages to Rasa Core and
    retrieve responses from the agent."""

    @classmethod
    def name(cls):
        return "google_assistant"


    def blueprint(self, on_new_message):
	    
        google_webhook = Blueprint('google_webhook', __name__)
        @google_webhook.route("/", methods=['GET'])
        async def health(request):
            return response.json({"status": "ok"})

        @google_webhook.route("/webhook", methods=['GET'])
        async def update_ok(request):
        	return response.json({"status": "ok"})
        	
        @google_webhook.route("/webhook", methods=['POST'])
        async def receive(request):
            payload = request.json	
            intent = payload['inputs'][0]['intent'] 			
            text = payload['inputs'][0]['rawInputs'][0]['query'] 
            buttons = [{"title":"Hello!"}]
            if intent == 'actions.intent.MAIN':	
                message = "Hi, I'm CONTACT."			 
            else:
                out = CollectingOutputChannel()			
                await on_new_message(UserMessage(text, out))
                # need to debug and somehow send payload -> make bot understand
                # look at other connectors and write
                responses = [m["text"] for m in out.messages]
                buttons = []
                b = [m["buttons"] for m in out.messages if "buttons" in m]
                if len(buttons)>0:
                  buttons = b[0]
                for button in buttons:
                  del button['payload']
                message = "\n".join(responses)
                #logger.debug(buttons)
                #logger.debug(message, responses)
            r = {
                  "expectUserResponse": 'true',
                  "expectedInputs": [
                    {
                      "possibleIntents": [
                        {
                          "intent": "actions.intent.TEXT"
                        }
                    ],
                    "inputPrompt": {
                      "richInitialPrompt": {
                        "items": [
                          {
                            "simpleResponse": {
                              "textToSpeech": message,
                              "displayText": message
                              }
                            }
                          ],
                          "suggestions": buttons,
                        }
                      }
                    }
                  ]
                }

            return response.json(r)				
          		
        return google_webhook
