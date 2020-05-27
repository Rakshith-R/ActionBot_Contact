## say goodbye

* goodbye
  - utter_goodbye

## others checkpoint

* greet
  - action_utter_greet
* others
  - utter_others_path_details
> others_checkpoint

## ask handoff simple
* greet
  - action_utter_greet
* ask_for_handoff
   - action_handoff
   - utter_enquiry

## ask handoff direct

* ask_for_handoff
   - action_handoff
   - utter_enquiry

## ask handoff through options

> others_checkpoint
* ask_for_handoff
   - action_handoff
   - utter_enquiry

## store promos direct

* ask_store_promos
  - action_get_store_promos
  - utter_enquiry

## store promos options

> others_checkpoint
* ask_store_promos
  - action_get_store_promos
  - utter_enquiry

## store promos simple

* greet
  - action_utter_greet
* ask_store_promos
  - action_get_store_promos
  - utter_enquiry

## restaurant simple

* greet
   - action_utter_greet
* ask_restaurant_details
   - action_get_restaurants
   - utter_enquiry

## restaurant direct

* ask_restaurant_details
   - action_get_restaurants
   - utter_enquiry

## restaurant options

> others_checkpoint
* ask_restaurant_details
   - action_get_restaurants
   - utter_enquiry

## ask what bot can do simple

* greet
   - action_utter_greet
* ask_what_can_you_do
   - utter_functionalities
   - utter_enquiry

## ask what bot can do direct

* ask_what_can_you_do
   - utter_functionalities
   - utter_enquiry

## ask what bot can do options

> others_checkpoint
* ask_what_can_you_do
   - utter_functionalities
   - utter_enquiry

