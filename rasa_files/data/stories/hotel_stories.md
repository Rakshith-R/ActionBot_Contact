## hotel checkpoint
* greet
  - action_utter_greet
* hotels
  - utter_hotels_path_details
> hotels_checkpoint

## ask show hotels simple

* greet
  - action_utter_greet
* ask_nearby_hotels
  - action_get_nearby_hotels
  - utter_enquiry

## ask show hotels direct

* ask_nearby_hotels
  - action_get_nearby_hotels
  - utter_enquiry

## show hotels through options

> hotels_checkpoint
* ask_nearby_hotels
  - action_get_nearby_hotels
  - utter_enquiry