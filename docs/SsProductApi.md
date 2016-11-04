# S4sFull.SsProductApi

All URIs are relative to *https://api.saas4saas.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerEnjoyAdd**](SsProductApi.md#customerEnjoyAdd) | **POST** /s4s-product/customer/{customer-id}/enjoy | 
[**customerEnjoyClose**](SsProductApi.md#customerEnjoyClose) | **GET** /s4s-product/customer/{customer-id}/enjoy/{enjoy-id}/close | 
[**customerEnjoyGet**](SsProductApi.md#customerEnjoyGet) | **GET** /s4s-product/customer/{customer-id}/enjoy/{enjoy-id} | 
[**customerEnjoyGetAll**](SsProductApi.md#customerEnjoyGetAll) | **GET** /s4s-product/customer/{customer-id}/enjoy | 
[**customerEnjoySpend**](SsProductApi.md#customerEnjoySpend) | **GET** /s4s-product/customer/{customer-id}/enjoy/{customer-pack-id}/spend | 
[**customerEnjoyValues**](SsProductApi.md#customerEnjoyValues) | **GET** /s4s-product/customer/{customer-id}/enjoy/values | 
[**customerHistoryPackGet**](SsProductApi.md#customerHistoryPackGet) | **GET** /s4s-product/customer/{customer-id}/history/pack/{id} | 
[**customerHistoryPackGetAll**](SsProductApi.md#customerHistoryPackGetAll) | **GET** /s4s-product/customer/{customer-id}/history/pack | 
[**customerHistoryPackValues**](SsProductApi.md#customerHistoryPackValues) | **GET** /s4s-product/customer/{customer-id}/history/pack/values | 
[**customerHistorySubscriptionGet**](SsProductApi.md#customerHistorySubscriptionGet) | **GET** /s4s-product/customer/{customer-id}/history/subscription/{id} | 
[**customerHistorySubscriptionGetAll**](SsProductApi.md#customerHistorySubscriptionGetAll) | **GET** /s4s-product/customer/{customer-id}/history/subscription | 
[**customerHistorySubscriptionValues**](SsProductApi.md#customerHistorySubscriptionValues) | **GET** /s4s-product/customer/{customer-id}/history/subscription/values | 
[**customerResource**](SsProductApi.md#customerResource) | **GET** /s4s-product/customer/{customer-id}/resource | 
[**customerSubscriptionAdd**](SsProductApi.md#customerSubscriptionAdd) | **POST** /s4s-product/customer/{customer-id}/subscription | 
[**customerSubscriptionClose**](SsProductApi.md#customerSubscriptionClose) | **GET** /s4s-product/customer/{customer-id}/subscription/{subscription-id}/close | 
[**customerSubscriptionGet**](SsProductApi.md#customerSubscriptionGet) | **GET** /s4s-product/customer/{customer-id}/subscription/{subscription-id} | 
[**customerSubscriptionGetAll**](SsProductApi.md#customerSubscriptionGetAll) | **GET** /s4s-product/customer/{customer-id}/subscription | 
[**customerSubscriptionRenew**](SsProductApi.md#customerSubscriptionRenew) | **GET** /s4s-product/customer/{customer-id}/subscription/{subscription-id}/renew | 
[**customerSubscriptionSpend**](SsProductApi.md#customerSubscriptionSpend) | **GET** /s4s-product/customer/{customer-id}/subscription/{customer-subscription-id}/spend | 
[**customerSubscriptionValues**](SsProductApi.md#customerSubscriptionValues) | **GET** /s4s-product/customer/{customer-id}/subscription/values | 
[**productConfigGet**](SsProductApi.md#productConfigGet) | **GET** /s4s-product/productConfig | 
[**productConfigPut**](SsProductApi.md#productConfigPut) | **PUT** /s4s-product/productConfig | 


<a name="customerEnjoyAdd"></a>
# **customerEnjoyAdd**
> CustomerPack customerEnjoyAdd(customerId, expirationOffset, overrideEnjoyId, overrideSubscriptionId, opts)



Relationate a new product with the customer

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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var expirationOffset = 789; // Integer | 

var overrideEnjoyId = "overrideEnjoyId_example"; // String | 

var overrideSubscriptionId = "overrideSubscriptionId_example"; // String | 

var opts = { 
  'newEnjoy': new S4sFull.CustomerPack() // CustomerPack | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerEnjoyAdd(customerId, expirationOffset, overrideEnjoyId, overrideSubscriptionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **expirationOffset** | **Integer**|  | 
 **overrideEnjoyId** | **String**|  | 
 **overrideSubscriptionId** | **String**|  | 
 **newEnjoy** | [**CustomerPack**](CustomerPack.md)|  | [optional] 

### Return type

[**CustomerPack**](CustomerPack.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerEnjoyClose"></a>
# **customerEnjoyClose**
> CustomerPack customerEnjoyClose(customerId, enjoyId)



Will close the enjoyId product, an create the the a new equivalent EnjoyProduct. Only refreshing the limits if its need

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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var enjoyId = "enjoyId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerEnjoyClose(customerId, enjoyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **enjoyId** | **String**|  | 

### Return type

[**CustomerPack**](CustomerPack.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerEnjoyGet"></a>
# **customerEnjoyGet**
> CustomerPack customerEnjoyGet(customerId, enjoyId)



Get a certain product releated to customer

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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var enjoyId = "enjoyId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerEnjoyGet(customerId, enjoyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **enjoyId** | **String**|  | 

### Return type

[**CustomerPack**](CustomerPack.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerEnjoyGetAll"></a>
# **customerEnjoyGetAll**
> [&#39;String&#39;] customerEnjoyGetAll(customerId)



Get all the current products relationed with the customer

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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerEnjoyGetAll(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 

### Return type

**[&#39;String&#39;]**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerEnjoySpend"></a>
# **customerEnjoySpend**
> {&#39;String&#39;: &#39;Integer&#39;} customerEnjoySpend(customerId, customerPackId)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var customerPackId = "customerPackId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerEnjoySpend(customerId, customerPackId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **customerPackId** | **String**|  | 

### Return type

**{&#39;String&#39;: &#39;Integer&#39;}**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerEnjoyValues"></a>
# **customerEnjoyValues**
> customerEnjoyValues(customerId, page, numberPerPage, loadResourceStatusList)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var page = 56; // Integer | 

var numberPerPage = 56; // Integer | 

var loadResourceStatusList = true; // Boolean | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customerEnjoyValues(customerId, page, numberPerPage, loadResourceStatusList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **page** | **Integer**|  | 
 **numberPerPage** | **Integer**|  | 
 **loadResourceStatusList** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerHistoryPackGet"></a>
# **customerHistoryPackGet**
> CustomerPack customerHistoryPackGet(customerId, id)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerHistoryPackGet(customerId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **id** | **String**|  | 

### Return type

[**CustomerPack**](CustomerPack.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerHistoryPackGetAll"></a>
# **customerHistoryPackGetAll**
> [&#39;String&#39;] customerHistoryPackGetAll(customerId)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerHistoryPackGetAll(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 

### Return type

**[&#39;String&#39;]**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerHistoryPackValues"></a>
# **customerHistoryPackValues**
> customerHistoryPackValues(customerId, page, numberPerPage, loadResourceStatusList)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var page = 56; // Integer | 

var numberPerPage = 56; // Integer | 

var loadResourceStatusList = true; // Boolean | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customerHistoryPackValues(customerId, page, numberPerPage, loadResourceStatusList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **page** | **Integer**|  | 
 **numberPerPage** | **Integer**|  | 
 **loadResourceStatusList** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerHistorySubscriptionGet"></a>
# **customerHistorySubscriptionGet**
> CustomerPack customerHistorySubscriptionGet(customerId, id)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerHistorySubscriptionGet(customerId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **id** | **String**|  | 

### Return type

[**CustomerPack**](CustomerPack.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerHistorySubscriptionGetAll"></a>
# **customerHistorySubscriptionGetAll**
> [&#39;String&#39;] customerHistorySubscriptionGetAll(customerId)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerHistorySubscriptionGetAll(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 

### Return type

**[&#39;String&#39;]**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerHistorySubscriptionValues"></a>
# **customerHistorySubscriptionValues**
> customerHistorySubscriptionValues(customerId, page, numberPerPage, loadResourceStatusList)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var page = 56; // Integer | 

var numberPerPage = 56; // Integer | 

var loadResourceStatusList = true; // Boolean | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customerHistorySubscriptionValues(customerId, page, numberPerPage, loadResourceStatusList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **page** | **Integer**|  | 
 **numberPerPage** | **Integer**|  | 
 **loadResourceStatusList** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerResource"></a>
# **customerResource**
> customerResource(customerId, page, numberPerPage)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var page = 56; // Integer | 

var numberPerPage = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customerResource(customerId, page, numberPerPage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **page** | **Integer**|  | 
 **numberPerPage** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerSubscriptionAdd"></a>
# **customerSubscriptionAdd**
> CustomerPackSubscription customerSubscriptionAdd(customerId, overrideSubscriptionId, overrideEnjoyId, opts)



Add a new subscription to customer

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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var overrideSubscriptionId = "overrideSubscriptionId_example"; // String | 

var overrideEnjoyId = "overrideEnjoyId_example"; // String | 

var opts = { 
  'newSubscription': new S4sFull.CustomerPackSubscription() // CustomerPackSubscription | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerSubscriptionAdd(customerId, overrideSubscriptionId, overrideEnjoyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **overrideSubscriptionId** | **String**|  | 
 **overrideEnjoyId** | **String**|  | 
 **newSubscription** | [**CustomerPackSubscription**](CustomerPackSubscription.md)|  | [optional] 

### Return type

[**CustomerPackSubscription**](CustomerPackSubscription.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerSubscriptionClose"></a>
# **customerSubscriptionClose**
> &#39;String&#39; customerSubscriptionClose(customerId, subscriptionId)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var subscriptionId = "subscriptionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerSubscriptionClose(customerId, subscriptionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **subscriptionId** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerSubscriptionGet"></a>
# **customerSubscriptionGet**
> CustomerPackSubscription customerSubscriptionGet(customerId, subscriptionId)



Get a subscription by its Ids

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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var subscriptionId = "subscriptionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerSubscriptionGet(customerId, subscriptionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **subscriptionId** | **String**|  | 

### Return type

[**CustomerPackSubscription**](CustomerPackSubscription.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerSubscriptionGetAll"></a>
# **customerSubscriptionGetAll**
> [&#39;String&#39;] customerSubscriptionGetAll(customerId)



Get all the current subscriptions of a customer

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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerSubscriptionGetAll(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 

### Return type

**[&#39;String&#39;]**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerSubscriptionRenew"></a>
# **customerSubscriptionRenew**
> &#39;String&#39; customerSubscriptionRenew(customerId, subscriptionId)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var subscriptionId = "subscriptionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerSubscriptionRenew(customerId, subscriptionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **subscriptionId** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerSubscriptionSpend"></a>
# **customerSubscriptionSpend**
> {&#39;String&#39;: &#39;Integer&#39;} customerSubscriptionSpend(customerId, customerSubscriptionId)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var customerSubscriptionId = "customerSubscriptionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerSubscriptionSpend(customerId, customerSubscriptionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **customerSubscriptionId** | **String**|  | 

### Return type

**{&#39;String&#39;: &#39;Integer&#39;}**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerSubscriptionValues"></a>
# **customerSubscriptionValues**
> customerSubscriptionValues(customerId, page, numberPerPage, loadDefaultUser)





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

var apiInstance = new S4sFull.SsProductApi();

var customerId = "customerId_example"; // String | The given id from the user service

var page = 56; // Integer | 

var numberPerPage = 56; // Integer | 

var loadDefaultUser = true; // Boolean | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customerSubscriptionValues(customerId, page, numberPerPage, loadDefaultUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The given id from the user service | 
 **page** | **Integer**|  | 
 **numberPerPage** | **Integer**|  | 
 **loadDefaultUser** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productConfigGet"></a>
# **productConfigGet**
> ProductConf productConfigGet()





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

var apiInstance = new S4sFull.SsProductApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productConfigGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProductConf**](ProductConf.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productConfigPut"></a>
# **productConfigPut**
> &#39;String&#39; productConfigPut(opts)





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

var apiInstance = new S4sFull.SsProductApi();

var opts = { 
  'a': new S4sFull.ProductConf() // ProductConf | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.productConfigPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **a** | [**ProductConf**](ProductConf.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

