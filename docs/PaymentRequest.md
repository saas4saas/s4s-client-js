# S4sFull.PaymentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creationTimespan** | **Integer** |  | [optional] 
**paidTimespan** | **Integer** |  | [optional] 
**state** | **String** |  | [optional] 
**whatPays** | **{String: Integer}** |  | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**billId** | **String** |  | [optional] 
**customerId** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**stripeChargeId** | **String** |  | [optional] 
**currency** | **String** |  | [optional] 
**value** | **Integer** |  | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `status2WaitPayment` (value: `"status2WaitPayment"`)

* `status3Canceled` (value: `"status3Canceled"`)

* `status4Paid` (value: `"status4Paid"`)

* `status1Failed` (value: `"status1Failed"`)

* `status3Paid` (value: `"status3Paid"`)




