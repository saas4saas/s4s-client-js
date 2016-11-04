# S4sFull.SsPaymentApi

All URIs are relative to *https://api.saas4saas.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conf**](SsPaymentApi.md#conf) | **GET** /s4s-payment/conf | 
[**customerInfoCurrency**](SsPaymentApi.md#customerInfoCurrency) | **GET** /s4s-payment/customer/{customer-id}/info/currency | 
[**customerInfoGet**](SsPaymentApi.md#customerInfoGet) | **GET** /s4s-payment/customer/{customer-id}/info | 
[**customerInfoHasPaymentInfo**](SsPaymentApi.md#customerInfoHasPaymentInfo) | **GET** /s4s-payment/customer/{customer-id}/info/hasPaymentInfo | 
[**customerInfoStripeCustomer**](SsPaymentApi.md#customerInfoStripeCustomer) | **POST** /s4s-payment/customer/{customer-id}/info/stripeCustomer | 
[**customerPaymentAdd**](SsPaymentApi.md#customerPaymentAdd) | **POST** /s4s-payment/customer/{customer-id}/payment | 
[**customerPaymentCancelPatch**](SsPaymentApi.md#customerPaymentCancelPatch) | **PATCH** /s4s-payment/customer/{customer-id}/payment/{payment-id}/cancel | 
[**customerPaymentGet**](SsPaymentApi.md#customerPaymentGet) | **GET** /s4s-payment/customer/{customer-id}/payment | 
[**customerPaymentPayPatch**](SsPaymentApi.md#customerPaymentPayPatch) | **PATCH** /s4s-payment/customer/{customer-id}/payment/{payment-id}/pay | 
[**customerPaymentValues**](SsPaymentApi.md#customerPaymentValues) | **GET** /s4s-payment/customer/{customer-id}/payment/values | 
[**paymentConfigGet**](SsPaymentApi.md#paymentConfigGet) | **GET** /s4s-payment/paymentConfig | 
[**paymentConfigPut**](SsPaymentApi.md#paymentConfigPut) | **PUT** /s4s-payment/paymentConfig | 
[**paymentGetAll**](SsPaymentApi.md#paymentGetAll) | **GET** /s4s-payment/payment | 


<a name="conf"></a>
# **conf**
> PaymentConf conf()





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.conf(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PaymentConf**](PaymentConf.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerInfoCurrency"></a>
# **customerInfoCurrency**
> &#39;String&#39; customerInfoCurrency(customerId, currency)





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var customerId = "customerId_example"; // String | 

var currency = "currency_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerInfoCurrency(customerId, currency, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **currency** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerInfoGet"></a>
# **customerInfoGet**
> CustomerInfo customerInfoGet(customerId)





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var customerId = "customerId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerInfoGet(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**CustomerInfo**](CustomerInfo.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerInfoHasPaymentInfo"></a>
# **customerInfoHasPaymentInfo**
> &#39;Boolean&#39; customerInfoHasPaymentInfo(customerId)





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var customerId = "customerId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerInfoHasPaymentInfo(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerInfoStripeCustomer"></a>
# **customerInfoStripeCustomer**
> &#39;String&#39; customerInfoStripeCustomer(customerId, opts)





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var customerId = "customerId_example"; // String | 

var opts = { 
  'stripeCustomer': new S4sFull.StripeCustomer() // StripeCustomer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerInfoStripeCustomer(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **stripeCustomer** | [**StripeCustomer**](StripeCustomer.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerPaymentAdd"></a>
# **customerPaymentAdd**
> PaymentRequest customerPaymentAdd(customerId, opts)





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var customerId = "customerId_example"; // String | 

var opts = { 
  'paymentRequest': new S4sFull.PaymentRequest() // PaymentRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerPaymentAdd(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **paymentRequest** | [**PaymentRequest**](PaymentRequest.md)|  | [optional] 

### Return type

[**PaymentRequest**](PaymentRequest.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerPaymentCancelPatch"></a>
# **customerPaymentCancelPatch**
> &#39;String&#39; customerPaymentCancelPatch(customerId, paymentId)





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var customerId = "customerId_example"; // String | 

var paymentId = "paymentId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerPaymentCancelPatch(customerId, paymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **paymentId** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerPaymentGet"></a>
# **customerPaymentGet**
> PaymentRequest customerPaymentGet(customerId, paymentId)





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var customerId = "customerId_example"; // String | 

var paymentId = "paymentId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerPaymentGet(customerId, paymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **paymentId** | **String**|  | 

### Return type

[**PaymentRequest**](PaymentRequest.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerPaymentPayPatch"></a>
# **customerPaymentPayPatch**
> PaymentRequest customerPaymentPayPatch(customerId, paymentId)





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var customerId = "customerId_example"; // String | 

var paymentId = "paymentId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerPaymentPayPatch(customerId, paymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **paymentId** | **String**|  | 

### Return type

[**PaymentRequest**](PaymentRequest.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerPaymentValues"></a>
# **customerPaymentValues**
> customerPaymentValues(customerId, page, numberPerPage)





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var customerId = "customerId_example"; // String | 

var page = 56; // Integer | 

var numberPerPage = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customerPaymentValues(customerId, page, numberPerPage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **page** | **Integer**|  | 
 **numberPerPage** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentConfigGet"></a>
# **paymentConfigGet**
> PaymentConf paymentConfigGet()





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentConfigGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PaymentConf**](PaymentConf.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentConfigPut"></a>
# **paymentConfigPut**
> &#39;String&#39; paymentConfigPut(opts)





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var opts = { 
  'a': new S4sFull.PaymentConf() // PaymentConf | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentConfigPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **a** | [**PaymentConf**](PaymentConf.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentGetAll"></a>
# **paymentGetAll**
> paymentGetAll(page, numberPerPage)





### Example
```javascript
var S4sFull = require('s4s_full');
var defaultClient = S4sFull.ApiClient.default;

// Configure API key authorization: tenantid
var tenantid = defaultClient.authentications['tenantid'];
tenantid.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tenantid.apiKeyPrefix = 'Token';

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new S4sFull.SsPaymentApi();

var page = 56; // Integer | 

var numberPerPage = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.paymentGetAll(page, numberPerPage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**|  | 
 **numberPerPage** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

