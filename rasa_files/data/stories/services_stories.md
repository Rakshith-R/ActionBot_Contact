## services checkpoint
* greet
  - action_utter_greet
* services
  - utter_services_path_details
> services_checkpoint

## ask for ticker counter simple
* greet
  - action_utter_greet
* ask_ticket_counter
  - utter_ticket_counter_location
  - utter_enquiry

## ask for ticket counter direct
* ask_ticket_counter
  - utter_ticket_counter_location
  - utter_enquiry

## ask for ticket counter through options
> services_checkpoint
* ask_ticket_counter
  - utter_ticket_counter_location
  - utter_enquiry


## get nearby parking structures simple

* greet
  - action_utter_greet
* ask_parking_details
  - action_get_parking_details
  - utter_enquiry

## get nearby parking structures direct

* ask_parking_details
  - action_get_parking_details
  - utter_enquiry


## get nearby parking structures through options

> services_checkpoint
* ask_parking_details
  - action_get_parking_details
  - utter_enquiry

## currency counter simple

* greet
  - action_utter_greet
* ask_currency_counter
  - action_get_currency_counter
  - utter_enquiry

## currency counter direct

* ask_currency_counter
  - action_get_currency_counter
  - utter_enquiry

## currency counter options

> services_checkpoint
* ask_currency_counter
  - action_get_currency_counter
  - utter_enquiry

## currency exchange direct

* ask_currency_exchange{"currency":"USD", "currency":"INR"}
  - action_get_currency_exchange
  - utter_enquiry

## currency exchange options

> services_checkpoint
* ask_currency_exchange{"currency":"USD", "currency":"INR"}
  - action_get_currency_exchange
  - utter_enquiry

## currency exchange indirect, simple

* greet
  - action_utter_greet
* ask_currency_exchange
  - utter_ask_currency_exchange
* inform{"currency":"USD", "currency":"INR"}
  - action_get_currency_exchange
  - utter_enquiry

## currency exchange indirect

* ask_currency_exchange
  - utter_ask_currency_exchange
* inform{"currency":"USD", "currency":"INR"}
  - action_get_currency_exchange
  - utter_enquiry

## currency exchange indirect options

> services_checkpoint
* ask_currency_exchange
  - utter_ask_currency_exchange
* inform{"currency":"USD", "currency":"INR"}
  - action_get_currency_exchange
  - utter_enquiry


