# S4sFull.SsUserApi

All URIs are relative to *https://api.saas4saas.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountAdd**](SsUserApi.md#accountAdd) | **POST** /s4s-user/account | 
[**accountAutoLogin**](SsUserApi.md#accountAutoLogin) | **GET** /s4s-user/account/autoLogin | 
[**accountChangePasswordPatch**](SsUserApi.md#accountChangePasswordPatch) | **PATCH** /s4s-user/account/changePassword | 
[**accountGetAll**](SsUserApi.md#accountGetAll) | **GET** /s4s-user/account | 
[**accountIdGet**](SsUserApi.md#accountIdGet) | **GET** /s4s-user/account/{account-id} | 
[**accountIdKeysAdd**](SsUserApi.md#accountIdKeysAdd) | **POST** /s4s-user/account/{account-id}/keys | 
[**accountIdKeysDel**](SsUserApi.md#accountIdKeysDel) | **DELETE** /s4s-user/account/{account-id}/keys/{user-id} | 
[**accountIdKeysGetAll**](SsUserApi.md#accountIdKeysGetAll) | **GET** /s4s-user/account/{account-id}/keys | 
[**accountIdPrivateDataPut**](SsUserApi.md#accountIdPrivateDataPut) | **PUT** /s4s-user/account/{account-id}/privateData | 
[**accountIdPut**](SsUserApi.md#accountIdPut) | **PUT** /s4s-user/account/{account-id} | 
[**accountIdStatusPut**](SsUserApi.md#accountIdStatusPut) | **PUT** /s4s-user/account/{account-id}/status | 
[**accountIdUserAdd**](SsUserApi.md#accountIdUserAdd) | **POST** /s4s-user/account/{account-id}/user | 
[**accountIdUserChangePwdToken**](SsUserApi.md#accountIdUserChangePwdToken) | **GET** /s4s-user/account/{account-id}/user/{user-id}/changePwdToken | 
[**accountIdUserGet**](SsUserApi.md#accountIdUserGet) | **GET** /s4s-user/account/{account-id}/user/{user-id} | 
[**accountIdUserLogin**](SsUserApi.md#accountIdUserLogin) | **GET** /s4s-user/account/{account-id}/user/{user-id}/login | 
[**accountIdUserPut**](SsUserApi.md#accountIdUserPut) | **PUT** /s4s-user/account/{account-id}/user/{user-id} | 
[**accountIdUserResendEmailConfirmation**](SsUserApi.md#accountIdUserResendEmailConfirmation) | **GET** /s4s-user/account/{account-id}/user/{user-id}/resendEmailConfirmation | 
[**accountLogin**](SsUserApi.md#accountLogin) | **POST** /s4s-user/account/login | 
[**accountLoginOrAdd**](SsUserApi.md#accountLoginOrAdd) | **POST** /s4s-user/account/loginOr | 
[**accountRecover**](SsUserApi.md#accountRecover) | **POST** /s4s-user/account/recover | 
[**accountUserChangePwdToken**](SsUserApi.md#accountUserChangePwdToken) | **GET** /s4s-user/account/user/{user-id}/changePwdToken | 
[**accountUserGet**](SsUserApi.md#accountUserGet) | **GET** /s4s-user/account/user/{user-id} | 
[**accountUserLogin**](SsUserApi.md#accountUserLogin) | **GET** /s4s-user/account/user/{user-id}/login | 
[**accountUserPut**](SsUserApi.md#accountUserPut) | **PUT** /s4s-user/account/user/{user-id} | 
[**accountUserResendEmailConfirmation**](SsUserApi.md#accountUserResendEmailConfirmation) | **GET** /s4s-user/account/user/{user-id}/resendEmailConfirmation | 
[**accountUsernameChangePwdToken**](SsUserApi.md#accountUsernameChangePwdToken) | **GET** /s4s-user/account/username/changePwdToken | 
[**accountUsernameGet**](SsUserApi.md#accountUsernameGet) | **GET** /s4s-user/account/username | 
[**accountUsernameLogin**](SsUserApi.md#accountUsernameLogin) | **GET** /s4s-user/account/username/login | 
[**accountUsernamePut**](SsUserApi.md#accountUsernamePut) | **PUT** /s4s-user/account/username | 
[**accountUsernameResendEmailConfirmation**](SsUserApi.md#accountUsernameResendEmailConfirmation) | **GET** /s4s-user/account/username/resendEmailConfirmation | 
[**authenticate**](SsUserApi.md#authenticate) | **GET** /s4s-user/authenticate | 
[**config**](SsUserApi.md#config) | **GET** /s4s-user/config | 
[**googleLogin**](SsUserApi.md#googleLogin) | **POST** /s4s-user/googleLogin | 
[**htmlConf**](SsUserApi.md#htmlConf) | **GET** /s4s-user/htmlConf | 
[**selfAccountGet**](SsUserApi.md#selfAccountGet) | **GET** /s4s-user/selfAccount | 
[**selfAccountKeysAdd**](SsUserApi.md#selfAccountKeysAdd) | **POST** /s4s-user/selfAccount/keys | 
[**selfAccountKeysDel**](SsUserApi.md#selfAccountKeysDel) | **DELETE** /s4s-user/selfAccount/keys/{user-id} | 
[**selfAccountKeysGetAll**](SsUserApi.md#selfAccountKeysGetAll) | **GET** /s4s-user/selfAccount/keys | 
[**selfAccountPrivateDataPut**](SsUserApi.md#selfAccountPrivateDataPut) | **PUT** /s4s-user/selfAccount/privateData | 
[**selfAccountPut**](SsUserApi.md#selfAccountPut) | **PUT** /s4s-user/selfAccount | 
[**selfAccountStatusPut**](SsUserApi.md#selfAccountStatusPut) | **PUT** /s4s-user/selfAccount/status | 
[**selfAccountUserAdd**](SsUserApi.md#selfAccountUserAdd) | **POST** /s4s-user/selfAccount/user | 
[**selfAccountUserChangePwdToken**](SsUserApi.md#selfAccountUserChangePwdToken) | **GET** /s4s-user/selfAccount/user/{user-id}/changePwdToken | 
[**selfAccountUserGet**](SsUserApi.md#selfAccountUserGet) | **GET** /s4s-user/selfAccount/user/{user-id} | 
[**selfAccountUserLogin**](SsUserApi.md#selfAccountUserLogin) | **GET** /s4s-user/selfAccount/user/{user-id}/login | 
[**selfAccountUserPut**](SsUserApi.md#selfAccountUserPut) | **PUT** /s4s-user/selfAccount/user/{user-id} | 
[**selfAccountUserResendEmailConfirmation**](SsUserApi.md#selfAccountUserResendEmailConfirmation) | **GET** /s4s-user/selfAccount/user/{user-id}/resendEmailConfirmation | 
[**selfUserChangePwdToken**](SsUserApi.md#selfUserChangePwdToken) | **GET** /s4s-user/selfUser/changePwdToken | 
[**selfUserGet**](SsUserApi.md#selfUserGet) | **GET** /s4s-user/selfUser | 
[**selfUserLogin**](SsUserApi.md#selfUserLogin) | **GET** /s4s-user/selfUser/login | 
[**selfUserPut**](SsUserApi.md#selfUserPut) | **PUT** /s4s-user/selfUser | 
[**selfUserResendEmailConfirmation**](SsUserApi.md#selfUserResendEmailConfirmation) | **GET** /s4s-user/selfUser/resendEmailConfirmation | 
[**userConfigGet**](SsUserApi.md#userConfigGet) | **GET** /s4s-user/userConfig | 
[**userConfigPut**](SsUserApi.md#userConfigPut) | **PUT** /s4s-user/userConfig | 
[**userUiConfigGet**](SsUserApi.md#userUiConfigGet) | **GET** /s4s-user/userUiConfig | 
[**userUiConfigPut**](SsUserApi.md#userUiConfigPut) | **PUT** /s4s-user/userUiConfig | 


<a name="accountAdd"></a>
# **accountAdd**
> Account accountAdd(opts)





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

var apiInstance = new S4sFull.SsUserApi();

var opts = { 
  'newAccount': new S4sFull.Account() // Account | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountAdd(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newAccount** | [**Account**](Account.md)|  | [optional] 

### Return type

[**Account**](Account.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountAutoLogin"></a>
# **accountAutoLogin**
> Session accountAutoLogin(rememberMeToken)





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

var apiInstance = new S4sFull.SsUserApi();

var rememberMeToken = "rememberMeToken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountAutoLogin(rememberMeToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rememberMeToken** | **String**|  | 

### Return type

[**Session**](Session.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountChangePasswordPatch"></a>
# **accountChangePasswordPatch**
> &#39;String&#39; accountChangePasswordPatch(changePwdToken, opts)





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

var apiInstance = new S4sFull.SsUserApi();

var changePwdToken = "changePwdToken_example"; // String | 

var opts = { 
  'recover': new S4sFull.EmailRecover() // EmailRecover | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountChangePasswordPatch(changePwdToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePwdToken** | **String**|  | 
 **recover** | [**EmailRecover**](EmailRecover.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountGetAll"></a>
# **accountGetAll**
> InlineResponse2006 accountGetAll(page, numberPerPage, loadDefaultUser)





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

var apiInstance = new S4sFull.SsUserApi();

var page = 56; // Integer | 

var numberPerPage = 56; // Integer | 

var loadDefaultUser = true; // Boolean | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountGetAll(page, numberPerPage, loadDefaultUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**|  | 
 **numberPerPage** | **Integer**|  | 
 **loadDefaultUser** | **Boolean**|  | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdGet"></a>
# **accountIdGet**
> Account accountIdGet(accountId)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdGet(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 

### Return type

[**Account**](Account.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdKeysAdd"></a>
# **accountIdKeysAdd**
> UserApi accountIdKeysAdd(accountId)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdKeysAdd(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 

### Return type

[**UserApi**](UserApi.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdKeysDel"></a>
# **accountIdKeysDel**
> &#39;String&#39; accountIdKeysDel(accountId, userId)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdKeysDel(accountId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdKeysGetAll"></a>
# **accountIdKeysGetAll**
> InlineResponse2007 accountIdKeysGetAll(accountId, page, numberPerPage)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 

var page = 56; // Integer | 

var numberPerPage = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdKeysGetAll(accountId, page, numberPerPage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **page** | **Integer**|  | 
 **numberPerPage** | **Integer**|  | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdPrivateDataPut"></a>
# **accountIdPrivateDataPut**
> &#39;String&#39; accountIdPrivateDataPut(accountId, opts)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 

var opts = { 
  'privateData': null // Object | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdPrivateDataPut(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **privateData** | **Object**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdPut"></a>
# **accountIdPut**
> Account accountIdPut(accountId, opts)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 

var opts = { 
  'newAccount': new S4sFull.Account() // Account | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdPut(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **newAccount** | [**Account**](Account.md)|  | [optional] 

### Return type

[**Account**](Account.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdStatusPut"></a>
# **accountIdStatusPut**
> &#39;String&#39; accountIdStatusPut(accountId, status)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 

var status = "status_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdStatusPut(accountId, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **status** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdUserAdd"></a>
# **accountIdUserAdd**
> User accountIdUserAdd(accountId, opts)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 

var opts = { 
  'user': new S4sFull.User() // User | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdUserAdd(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdUserChangePwdToken"></a>
# **accountIdUserChangePwdToken**
> &#39;String&#39; accountIdUserChangePwdToken(accountId, userId, currentPwd)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 

var userId = "userId_example"; // String | 

var currentPwd = "currentPwd_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdUserChangePwdToken(accountId, userId, currentPwd, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **userId** | **String**|  | 
 **currentPwd** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdUserGet"></a>
# **accountIdUserGet**
> User accountIdUserGet(accountId, userId)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdUserGet(accountId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdUserLogin"></a>
# **accountIdUserLogin**
> Session accountIdUserLogin(accountId, userId)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdUserLogin(accountId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

[**Session**](Session.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdUserPut"></a>
# **accountIdUserPut**
> User accountIdUserPut(accountId, userId, opts)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 

var userId = "userId_example"; // String | 

var opts = { 
  'user': new S4sFull.User() // User | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdUserPut(accountId, userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **userId** | **String**|  | 
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountIdUserResendEmailConfirmation"></a>
# **accountIdUserResendEmailConfirmation**
> &#39;String&#39; accountIdUserResendEmailConfirmation(accountId, userId)





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

var apiInstance = new S4sFull.SsUserApi();

var accountId = "accountId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountIdUserResendEmailConfirmation(accountId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountLogin"></a>
# **accountLogin**
> Session accountLogin(opts)





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

var apiInstance = new S4sFull.SsUserApi();

var opts = { 
  'login': new S4sFull.Login() // Login | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountLogin(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | [**Login**](Login.md)|  | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountLoginOrAdd"></a>
# **accountLoginOrAdd**
> Session accountLoginOrAdd(opts)





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

var apiInstance = new S4sFull.SsUserApi();

var opts = { 
  'account': new S4sFull.Account() // Account | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountLoginOrAdd(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | [**Account**](Account.md)|  | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountRecover"></a>
# **accountRecover**
> &#39;String&#39; accountRecover(opts)





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

var apiInstance = new S4sFull.SsUserApi();

var opts = { 
  'recover': new S4sFull.EmailRecover() // EmailRecover | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountRecover(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recover** | [**EmailRecover**](EmailRecover.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountUserChangePwdToken"></a>
# **accountUserChangePwdToken**
> &#39;String&#39; accountUserChangePwdToken(userId, currentPwd)





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

var apiInstance = new S4sFull.SsUserApi();

var userId = "userId_example"; // String | 

var currentPwd = "currentPwd_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountUserChangePwdToken(userId, currentPwd, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **currentPwd** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountUserGet"></a>
# **accountUserGet**
> User accountUserGet(userId)





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

var apiInstance = new S4sFull.SsUserApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountUserGet(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountUserLogin"></a>
# **accountUserLogin**
> Session accountUserLogin(userId)





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

var apiInstance = new S4sFull.SsUserApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountUserLogin(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**Session**](Session.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountUserPut"></a>
# **accountUserPut**
> User accountUserPut(userId, opts)





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

var apiInstance = new S4sFull.SsUserApi();

var userId = "userId_example"; // String | 

var opts = { 
  'user': new S4sFull.User() // User | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountUserPut(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountUserResendEmailConfirmation"></a>
# **accountUserResendEmailConfirmation**
> &#39;String&#39; accountUserResendEmailConfirmation(userId)





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

var apiInstance = new S4sFull.SsUserApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountUserResendEmailConfirmation(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountUsernameChangePwdToken"></a>
# **accountUsernameChangePwdToken**
> &#39;String&#39; accountUsernameChangePwdToken(usr, currentPwd)





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

var apiInstance = new S4sFull.SsUserApi();

var usr = "usr_example"; // String | 

var currentPwd = "currentPwd_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountUsernameChangePwdToken(usr, currentPwd, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 
 **currentPwd** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountUsernameGet"></a>
# **accountUsernameGet**
> User accountUsernameGet(usr)





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

var apiInstance = new S4sFull.SsUserApi();

var usr = "usr_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountUsernameGet(usr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountUsernameLogin"></a>
# **accountUsernameLogin**
> Session accountUsernameLogin(usr)





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

var apiInstance = new S4sFull.SsUserApi();

var usr = "usr_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountUsernameLogin(usr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 

### Return type

[**Session**](Session.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountUsernamePut"></a>
# **accountUsernamePut**
> User accountUsernamePut(usr, opts)





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

var apiInstance = new S4sFull.SsUserApi();

var usr = "usr_example"; // String | 

var opts = { 
  'user': new S4sFull.User() // User | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountUsernamePut(usr, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountUsernameResendEmailConfirmation"></a>
# **accountUsernameResendEmailConfirmation**
> &#39;String&#39; accountUsernameResendEmailConfirmation(usr)





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

var apiInstance = new S4sFull.SsUserApi();

var usr = "usr_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountUsernameResendEmailConfirmation(usr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usr** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authenticate"></a>
# **authenticate**
> UtUser authenticate(authtoken)





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

var apiInstance = new S4sFull.SsUserApi();

var authtoken = "authtoken_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authenticate(authtoken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authtoken** | **String**|  | 

### Return type

[**UtUser**](UtUser.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="config"></a>
# **config**
> UserConfig config()





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

var apiInstance = new S4sFull.SsUserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.config(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserConfig**](UserConfig.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="googleLogin"></a>
# **googleLogin**
> Session googleLogin(opts)





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

var apiInstance = new S4sFull.SsUserApi();

var opts = { 
  'google': new S4sFull.GoogleAuth() // GoogleAuth | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.googleLogin(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **google** | [**GoogleAuth**](GoogleAuth.md)|  | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="htmlConf"></a>
# **htmlConf**
> UserUiConf htmlConf()





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

var apiInstance = new S4sFull.SsUserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.htmlConf(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserUiConf**](UserUiConf.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountGet"></a>
# **selfAccountGet**
> Account selfAccountGet()





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

var apiInstance = new S4sFull.SsUserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Account**](Account.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountKeysAdd"></a>
# **selfAccountKeysAdd**
> UserApi selfAccountKeysAdd()





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

var apiInstance = new S4sFull.SsUserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountKeysAdd(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserApi**](UserApi.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountKeysDel"></a>
# **selfAccountKeysDel**
> &#39;String&#39; selfAccountKeysDel(userId)





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

var apiInstance = new S4sFull.SsUserApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountKeysDel(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountKeysGetAll"></a>
# **selfAccountKeysGetAll**
> InlineResponse2007 selfAccountKeysGetAll(page, numberPerPage)





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

var apiInstance = new S4sFull.SsUserApi();

var page = 56; // Integer | 

var numberPerPage = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountKeysGetAll(page, numberPerPage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**|  | 
 **numberPerPage** | **Integer**|  | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountPrivateDataPut"></a>
# **selfAccountPrivateDataPut**
> &#39;String&#39; selfAccountPrivateDataPut(opts)





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

var apiInstance = new S4sFull.SsUserApi();

var opts = { 
  'privateData': null // Object | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountPrivateDataPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **privateData** | **Object**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountPut"></a>
# **selfAccountPut**
> Account selfAccountPut(opts)





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

var apiInstance = new S4sFull.SsUserApi();

var opts = { 
  'newAccount': new S4sFull.Account() // Account | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newAccount** | [**Account**](Account.md)|  | [optional] 

### Return type

[**Account**](Account.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountStatusPut"></a>
# **selfAccountStatusPut**
> &#39;String&#39; selfAccountStatusPut(status)





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

var apiInstance = new S4sFull.SsUserApi();

var status = "status_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountStatusPut(status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountUserAdd"></a>
# **selfAccountUserAdd**
> User selfAccountUserAdd(opts)





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

var apiInstance = new S4sFull.SsUserApi();

var opts = { 
  'user': new S4sFull.User() // User | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountUserAdd(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountUserChangePwdToken"></a>
# **selfAccountUserChangePwdToken**
> &#39;String&#39; selfAccountUserChangePwdToken(userId, currentPwd)





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

var apiInstance = new S4sFull.SsUserApi();

var userId = "userId_example"; // String | 

var currentPwd = "currentPwd_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountUserChangePwdToken(userId, currentPwd, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **currentPwd** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountUserGet"></a>
# **selfAccountUserGet**
> User selfAccountUserGet(userId)





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

var apiInstance = new S4sFull.SsUserApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountUserGet(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountUserLogin"></a>
# **selfAccountUserLogin**
> Session selfAccountUserLogin(userId)





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

var apiInstance = new S4sFull.SsUserApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountUserLogin(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**Session**](Session.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountUserPut"></a>
# **selfAccountUserPut**
> User selfAccountUserPut(userId, opts)





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

var apiInstance = new S4sFull.SsUserApi();

var userId = "userId_example"; // String | 

var opts = { 
  'user': new S4sFull.User() // User | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountUserPut(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfAccountUserResendEmailConfirmation"></a>
# **selfAccountUserResendEmailConfirmation**
> &#39;String&#39; selfAccountUserResendEmailConfirmation(userId)





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

var apiInstance = new S4sFull.SsUserApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfAccountUserResendEmailConfirmation(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfUserChangePwdToken"></a>
# **selfUserChangePwdToken**
> &#39;String&#39; selfUserChangePwdToken(currentPwd)





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

var apiInstance = new S4sFull.SsUserApi();

var currentPwd = "currentPwd_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfUserChangePwdToken(currentPwd, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPwd** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfUserGet"></a>
# **selfUserGet**
> User selfUserGet()





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

var apiInstance = new S4sFull.SsUserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfUserGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfUserLogin"></a>
# **selfUserLogin**
> Session selfUserLogin()





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

var apiInstance = new S4sFull.SsUserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfUserLogin(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Session**](Session.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfUserPut"></a>
# **selfUserPut**
> User selfUserPut(opts)





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

var apiInstance = new S4sFull.SsUserApi();

var opts = { 
  'user': new S4sFull.User() // User | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfUserPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="selfUserResendEmailConfirmation"></a>
# **selfUserResendEmailConfirmation**
> &#39;String&#39; selfUserResendEmailConfirmation()





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

var apiInstance = new S4sFull.SsUserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.selfUserResendEmailConfirmation(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userConfigGet"></a>
# **userConfigGet**
> UserConfig userConfigGet()





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

var apiInstance = new S4sFull.SsUserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userConfigGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserConfig**](UserConfig.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userConfigPut"></a>
# **userConfigPut**
> &#39;String&#39; userConfigPut(opts)





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

var apiInstance = new S4sFull.SsUserApi();

var opts = { 
  'a': new S4sFull.UserConfig() // UserConfig | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userConfigPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **a** | [**UserConfig**](UserConfig.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userUiConfigGet"></a>
# **userUiConfigGet**
> UserUiConf userUiConfigGet()





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

var apiInstance = new S4sFull.SsUserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUiConfigGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserUiConf**](UserUiConf.md)

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userUiConfigPut"></a>
# **userUiConfigPut**
> &#39;String&#39; userUiConfigPut(opts)





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

var apiInstance = new S4sFull.SsUserApi();

var opts = { 
  'a': new S4sFull.UserUiConf() // UserUiConf | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUiConfigPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **a** | [**UserUiConf**](UserUiConf.md)|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[tenantid](../README.md#tenantid), [token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

