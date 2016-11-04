# S4sFull.SsUserNotificationApi

All URIs are relative to *https://api.saas4saas.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operatorConf**](SsUserNotificationApi.md#operatorConf) | **GET** /s4s-user-notification/operator/conf/{notification-key} | 
[**operatorSend**](SsUserNotificationApi.md#operatorSend) | **GET** /s4s-user-notification/operator/send/{notification-key} | 
[**operatorSendEmail**](SsUserNotificationApi.md#operatorSendEmail) | **POST** /s4s-user-notification/operator/sendEmail | 
[**userSend**](SsUserNotificationApi.md#userSend) | **GET** /s4s-user-notification/user/send/{notification-key} | 
[**userSendEmail**](SsUserNotificationApi.md#userSendEmail) | **POST** /s4s-user-notification/user/sendEmail | 


<a name="operatorConf"></a>
# **operatorConf**
> OperatorConfiguration operatorConf(notificationKey)





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

var apiInstance = new S4sFull.SsUserNotificationApi();

var notificationKey = "notificationKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.operatorConf(notificationKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationKey** | **String**|  | 

### Return type

[**OperatorConfiguration**](OperatorConfiguration.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="operatorSend"></a>
# **operatorSend**
> &#39;String&#39; operatorSend(notificationKey)





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

var apiInstance = new S4sFull.SsUserNotificationApi();

var notificationKey = "notificationKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.operatorSend(notificationKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationKey** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="operatorSendEmail"></a>
# **operatorSendEmail**
> &#39;String&#39; operatorSendEmail(notificationKey, opts)





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

var apiInstance = new S4sFull.SsUserNotificationApi();

var notificationKey = "notificationKey_example"; // String | 

var opts = { 
  'email': new S4sFull.Email() // Email | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.operatorSendEmail(notificationKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationKey** | **String**|  | 
 **email** | [**Email**](Email.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userSend"></a>
# **userSend**
> &#39;String&#39; userSend(userId, notificationKey)





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

var apiInstance = new S4sFull.SsUserNotificationApi();

var userId = "userId_example"; // String | 

var notificationKey = "notificationKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userSend(userId, notificationKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **notificationKey** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userSendEmail"></a>
# **userSendEmail**
> &#39;String&#39; userSendEmail(userId, opts)





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

var apiInstance = new S4sFull.SsUserNotificationApi();

var userId = "userId_example"; // String | 

var opts = { 
  'email': new S4sFull.Email() // Email | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userSendEmail(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **email** | [**Email**](Email.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

