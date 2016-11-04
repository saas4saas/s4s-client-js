# S4sFull.SsResourceApi

All URIs are relative to *https://api.saas4saas.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerResourceGet**](SsResourceApi.md#customerResourceGet) | **GET** /s4s-resource/customer/{customer-id}/resource/{resourceid} | 
[**customerResourceLimitGet**](SsResourceApi.md#customerResourceLimitGet) | **GET** /s4s-resource/customer/{customer-id}/resource/{resourceid}/limit | 
[**customerResourcePatch**](SsResourceApi.md#customerResourcePatch) | **PATCH** /s4s-resource/customer/{customer-id}/resource/{resourceid} | 
[**customerResourceProductGet**](SsResourceApi.md#customerResourceProductGet) | **GET** /s4s-resource/customer/{customer-id}/resource/{resourceid}/product/{customer-product-id} | 
[**customerResourceProductLimitGet**](SsResourceApi.md#customerResourceProductLimitGet) | **GET** /s4s-resource/customer/{customer-id}/resource/{resourceid}/product/{customer-product-id}/limit | 


<a name="customerResourceGet"></a>
# **customerResourceGet**
> &#39;Integer&#39; customerResourceGet(customerId, resourceid)





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

var apiInstance = new S4sFull.SsResourceApi();

var customerId = "customerId_example"; // String | 

var resourceid = "resourceid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerResourceGet(customerId, resourceid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **resourceid** | **String**|  | 

### Return type

**&#39;Integer&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerResourceLimitGet"></a>
# **customerResourceLimitGet**
> &#39;Integer&#39; customerResourceLimitGet(customerId, resourceid)





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

var apiInstance = new S4sFull.SsResourceApi();

var customerId = "customerId_example"; // String | 

var resourceid = "resourceid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerResourceLimitGet(customerId, resourceid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **resourceid** | **String**|  | 

### Return type

**&#39;Integer&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerResourcePatch"></a>
# **customerResourcePatch**
> ResourcePatchResult customerResourcePatch(customerId, resourceid, opts)



Updates a resource of a customer

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

var apiInstance = new S4sFull.SsResourceApi();

var customerId = "customerId_example"; // String | 

var resourceid = "resourceid_example"; // String | 

var opts = { 
  'value': new S4sFull.ResourcePatch() // ResourcePatch | The Operation and value to update the resource
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerResourcePatch(customerId, resourceid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **resourceid** | **String**|  | 
 **value** | [**ResourcePatch**](ResourcePatch.md)| The Operation and value to update the resource | [optional] 

### Return type

[**ResourcePatchResult**](ResourcePatchResult.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerResourceProductGet"></a>
# **customerResourceProductGet**
> &#39;Integer&#39; customerResourceProductGet(customerId, resourceid, customerProductId)





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

var apiInstance = new S4sFull.SsResourceApi();

var customerId = "customerId_example"; // String | 

var resourceid = "resourceid_example"; // String | 

var customerProductId = "customerProductId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerResourceProductGet(customerId, resourceid, customerProductId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **resourceid** | **String**|  | 
 **customerProductId** | **String**|  | 

### Return type

**&#39;Integer&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customerResourceProductLimitGet"></a>
# **customerResourceProductLimitGet**
> &#39;Integer&#39; customerResourceProductLimitGet(customerId, resourceid, customerProductId)





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

var apiInstance = new S4sFull.SsResourceApi();

var customerId = "customerId_example"; // String | 

var resourceid = "resourceid_example"; // String | 

var customerProductId = "customerProductId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customerResourceProductLimitGet(customerId, resourceid, customerProductId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **resourceid** | **String**|  | 
 **customerProductId** | **String**|  | 

### Return type

**&#39;Integer&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

