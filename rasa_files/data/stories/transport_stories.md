## transport checkpoint

* greet
  - action_utter_greet
* transport
  - utter_transport_path_details
> transport_checkpoint

## book cab when booking exists, ask new booking

* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":true}
  - utter_ask_cancel_previous_cab
* affirm
  - action_reset_cab_booking_info
  - book_cab_form
  - form{"name": "book_cab_form"}
  - form{"name": null}
  - slot{"driver":"Naren Chandra"}
  - utter_enquiry

## book cab when exists, with loc

* book_cab{"loc":"xyz", "loc": "abc"}
  - action_check_booking_exists
  - slot{"booking_exists":true}
  - utter_ask_cancel_previous_cab
* affirm
  - action_reset_cab_booking_info
  - book_cab_form
  - form{"name": "book_cab_form"}
  - form{"name": null}
  - slot{"driver":"Naren Chandra"}
  - utter_enquiry

## book cab when exists, cancel in middle

* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":true}
  - utter_ask_cancel_previous_cab
* affirm
  - action_reset_cab_booking_info
  - book_cab_form
  - form{"name": "book_cab_form"}
* cancel_form
  - utter_ask_confirmation
* affirm
  - action_deactivate_form
  - form{"name": null}
  - action_reset_cab_booking_info
  - utter_cancelled
  - utter_enquiry

## book cab when exists, cancel with deny in middle

* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":true}
  - utter_ask_cancel_previous_cab
* affirm
  - action_reset_cab_booking_info
  - book_cab_form
  - form{"name": "book_cab_form"}
* deny
  - utter_ask_confirmation
* affirm
  - action_deactivate_form
  - form{"name": null}
  - action_reset_cab_booking_info
  - utter_cancelled
  - utter_enquiry


## book cab when exists, cancel and change mind

* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":true}
  - utter_ask_cancel_previous_cab
* affirm
  - action_reset_cab_booking_info
  - book_cab_form
  - form{"name": "book_cab_form"}
* cancel_form
  - utter_ask_confirmation
* deny
  - book_cab_form
  - form{"name": null}
  - slot{"driver":"Naren"}
  - utter_enquiry


## book cab when exists, cancel with deny and change mind

* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":true}
  - utter_ask_cancel_previous_cab
* affirm
  - action_reset_cab_booking_info
  - book_cab_form
  - form{"name": "book_cab_form"}
* deny
  - utter_ask_confirmation
* deny
  - book_cab_form
  - form{"name": null}
  - slot{"driver":"Naren"}
  - utter_enquiry



## book cab when booking exists, don't cancel previous

* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":true}
  - utter_ask_cancel_previous_cab
* deny
  - utter_enquiry

## book cab simple

* greet
  - action_utter_greet
* book_cab{"loc":"xyz", "loc": "abc"}
  - action_check_booking_exists
  - slot{"booking_exists":false}
  - action_extract_locations
  - book_cab_form
  - form{"name": "book_cab_form"}
  - form{"name": null}
  - slot{"driver":"Naren Chandra"}
  - utter_enquiry

## book cab direct simple
* book_cab{"loc":"xyz", "loc": "abc"}
  - action_check_booking_exists
  - slot{"booking_exists":false}
  - action_extract_locations
  - book_cab_form
  - form{"name": "book_cab_form"}
  - form{"name": null}
  - slot{"driver":"Naren Chandra"}
  - utter_enquiry

## book cab ask location

* greet
  - action_utter_greet
* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":false}
  - book_cab_form
  - form{"name": "book_cab_form"}
  - form{"name": null}
  - slot{"driver":"Naren"}
  - utter_enquiry

## ask driver details

* greet
  - action_utter_greet
* get_driver_details
  - utter_driver_details
  - utter_enquiry

## book cab by selecting options direct

> transport_checkpoint
* book_cab{"loc":"xyz", "loc": "abc"}
  - action_check_booking_exists
  - slot{"booking_exists":false}
  - action_extract_locations
  - book_cab_form
  - form{"name": "book_cab_form"}
  - form{"name": null}
  - slot{"driver":"Naren Chandra"}
  - utter_enquiry

## book cab by selecting options, ask location

> transport_checkpoint
* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":false}
  - book_cab_form
  - form{"name": "book_cab_form"}
  - form{"name": null}
  - slot{"driver":"Naren"}
  - utter_enquiry

## cancel book cab in middle

* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":false}
  - book_cab_form
  - form{"name": "book_cab_form"}
* cancel_form
  - utter_ask_confirmation
* affirm
  - action_deactivate_form
  - form{"name": null}
  - action_reset_cab_booking_info
  - utter_cancelled
  - utter_enquiry

## cancel book cab with deny

* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":false}
  - book_cab_form
  - form{"name": "book_cab_form"}
* deny
  - utter_ask_confirmation
* affirm
  - action_deactivate_form
  - form{"name": null}
  - action_reset_cab_booking_info
  - utter_cancelled
  - utter_enquiry

## cancel but change mind with deny

* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":false}
  - book_cab_form
  - form{"name": "book_cab_form"}
* deny
  - utter_ask_confirmation
* deny
  - book_cab_form
  - form{"name": null}
  - slot{"driver":"Naren"}
  - utter_enquiry

## book cab cancel but change mind when asked for confirmation

* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":false}
  - book_cab_form
  - form{"name": "book_cab_form"}
* cancel_form
  - utter_ask_confirmation
* deny
  - book_cab_form
  - form{"name": null}
  - slot{"driver":"Naren"}
  - utter_enquiry


## book cab ask reason for details

* book_cab
  - action_check_booking_exists
  - slot{"booking_exists":false}
  - book_cab_form
  - form{"name": "book_cab_form"}
* ask_for_reason
  - utter_reason
  - book_cab_form
  - form{"name": null}
  - slot{"driver":"Naren"}
  - utter_enquiry


## get nearby metro direct

* ask_metro_details
  - action_get_metro_details
  - utter_enquiry

## get nearby metro simple

* greet
  - action_utter_greet
* ask_metro_details
  - action_get_metro_details
  - utter_enquiry

## get nearby metro direct, through options

> transport_checkpoint
* ask_metro_details
  - action_get_metro_details
  - utter_enquiry

## ask train schedule direct with pnr

* ask_train_details{"train_pnr":"12345"}
  - action_get_train_details
  - utter_enquiry

## ask train schedule direct without pnr

* ask_train_details
  - utter_ask_train_pnr
* inform{"train_pnr":"12345"}
  - action_get_train_details
  - utter_enquiry

## ask train schedule direct with pnr, options

> transport_checkpoint
* ask_train_details{"train_pnr":"12345"}
  - action_get_train_details
  - utter_enquiry

## ask train schedule direct without pnr, options

> transport_checkpoint
* ask_train_details
  - utter_ask_train_pnr
* inform{"train_pnr":"12345"}
  - action_get_train_details
  - utter_enquiry

## ask train schedule without pnr, simple

* greet
  - action_utter_greet
* ask_train_details
  - utter_ask_train_pnr
* inform{"train_pnr":"12345"}
  - action_get_train_details
  - utter_enquiry

## ask train schedule direct with pnr, simple

* greet
  - action_utter_greet
* ask_train_details{"train_pnr":"12345"}
  - action_get_train_details
  - utter_enquiry

## get bus station direct, simple

* greet
  - action_utter_greet
* ask_bus_station
  - action_get_bus_station
  - utter_enquiry

## get bus station direct

* ask_bus_station
  - action_get_bus_station
  - utter_enquiry

## get bus station direct options

> transport_checkpoint
* ask_bus_station
  - action_get_bus_station
  - utter_enquiry

