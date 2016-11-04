/**
 * s4s-full
 * description
 *
 * OpenAPI spec version: stable
 * Contact: rui.p.oliveira@impactinglabs.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/S4sError', 'model/PaymentConf', 'model/CustomerInfo', 'model/StripeCustomer', 'model/PaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/S4sError'), require('../model/PaymentConf'), require('../model/CustomerInfo'), require('../model/StripeCustomer'), require('../model/PaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.S4sFull) {
      root.S4sFull = {};
    }
    root.S4sFull.SsPaymentApi = factory(root.S4sFull.ApiClient, root.S4sFull.S4sError, root.S4sFull.PaymentConf, root.S4sFull.CustomerInfo, root.S4sFull.StripeCustomer, root.S4sFull.PaymentRequest);
  }
}(this, function(ApiClient, S4sError, PaymentConf, CustomerInfo, StripeCustomer, PaymentRequest) {
  'use strict';

  /**
   * SsPayment service.
   * @module api/SsPaymentApi
   * @version stable
   */

  /**
   * Constructs a new SsPaymentApi. 
   * @alias module:api/SsPaymentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the conf operation.
     * @callback module:api/SsPaymentApi~confCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentConf} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {module:api/SsPaymentApi~confCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentConf}
     */
    this.conf = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PaymentConf;

      return this.apiClient.callApi(
        '/s4s-payment/conf', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerInfoCurrency operation.
     * @callback module:api/SsPaymentApi~customerInfoCurrencyCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {String} customerId 
     * @param {String} currency 
     * @param {module:api/SsPaymentApi~customerInfoCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.customerInfoCurrency = function(customerId, currency, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling customerInfoCurrency";
      }

      // verify the required parameter 'currency' is set
      if (currency == undefined || currency == null) {
        throw "Missing the required parameter 'currency' when calling customerInfoCurrency";
      }


      var pathParams = {
        'customer-id': customerId
      };
      var queryParams = {
        'currency': currency
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/s4s-payment/customer/{customer-id}/info/currency', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerInfoGet operation.
     * @callback module:api/SsPaymentApi~customerInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {String} customerId 
     * @param {module:api/SsPaymentApi~customerInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerInfo}
     */
    this.customerInfoGet = function(customerId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling customerInfoGet";
      }


      var pathParams = {
        'customer-id': customerId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CustomerInfo;

      return this.apiClient.callApi(
        '/s4s-payment/customer/{customer-id}/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerInfoHasPaymentInfo operation.
     * @callback module:api/SsPaymentApi~customerInfoHasPaymentInfoCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {String} customerId 
     * @param {module:api/SsPaymentApi~customerInfoHasPaymentInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.customerInfoHasPaymentInfo = function(customerId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling customerInfoHasPaymentInfo";
      }


      var pathParams = {
        'customer-id': customerId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/s4s-payment/customer/{customer-id}/info/hasPaymentInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerInfoStripeCustomer operation.
     * @callback module:api/SsPaymentApi~customerInfoStripeCustomerCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {String} customerId 
     * @param {Object} opts Optional parameters
     * @param {module:model/StripeCustomer} opts.stripeCustomer 
     * @param {module:api/SsPaymentApi~customerInfoStripeCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.customerInfoStripeCustomer = function(customerId, opts, callback) {
      opts = opts || {};
      var postBody = opts['stripeCustomer'];

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling customerInfoStripeCustomer";
      }


      var pathParams = {
        'customer-id': customerId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/s4s-payment/customer/{customer-id}/info/stripeCustomer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerPaymentAdd operation.
     * @callback module:api/SsPaymentApi~customerPaymentAddCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {String} customerId 
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentRequest} opts.paymentRequest 
     * @param {module:api/SsPaymentApi~customerPaymentAddCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentRequest}
     */
    this.customerPaymentAdd = function(customerId, opts, callback) {
      opts = opts || {};
      var postBody = opts['paymentRequest'];

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling customerPaymentAdd";
      }


      var pathParams = {
        'customer-id': customerId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PaymentRequest;

      return this.apiClient.callApi(
        '/s4s-payment/customer/{customer-id}/payment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerPaymentCancelPatch operation.
     * @callback module:api/SsPaymentApi~customerPaymentCancelPatchCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {String} customerId 
     * @param {String} paymentId 
     * @param {module:api/SsPaymentApi~customerPaymentCancelPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.customerPaymentCancelPatch = function(customerId, paymentId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling customerPaymentCancelPatch";
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId == undefined || paymentId == null) {
        throw "Missing the required parameter 'paymentId' when calling customerPaymentCancelPatch";
      }


      var pathParams = {
        'customer-id': customerId,
        'payment-id': paymentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/s4s-payment/customer/{customer-id}/payment/{payment-id}/cancel', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerPaymentGet operation.
     * @callback module:api/SsPaymentApi~customerPaymentGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {String} customerId 
     * @param {String} paymentId 
     * @param {module:api/SsPaymentApi~customerPaymentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentRequest}
     */
    this.customerPaymentGet = function(customerId, paymentId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling customerPaymentGet";
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId == undefined || paymentId == null) {
        throw "Missing the required parameter 'paymentId' when calling customerPaymentGet";
      }


      var pathParams = {
        'customer-id': customerId
      };
      var queryParams = {
        'payment-id': paymentId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PaymentRequest;

      return this.apiClient.callApi(
        '/s4s-payment/customer/{customer-id}/payment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerPaymentPayPatch operation.
     * @callback module:api/SsPaymentApi~customerPaymentPayPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {String} customerId 
     * @param {String} paymentId 
     * @param {module:api/SsPaymentApi~customerPaymentPayPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentRequest}
     */
    this.customerPaymentPayPatch = function(customerId, paymentId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling customerPaymentPayPatch";
      }

      // verify the required parameter 'paymentId' is set
      if (paymentId == undefined || paymentId == null) {
        throw "Missing the required parameter 'paymentId' when calling customerPaymentPayPatch";
      }


      var pathParams = {
        'customer-id': customerId,
        'payment-id': paymentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PaymentRequest;

      return this.apiClient.callApi(
        '/s4s-payment/customer/{customer-id}/payment/{payment-id}/pay', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customerPaymentValues operation.
     * @callback module:api/SsPaymentApi~customerPaymentValuesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {String} customerId 
     * @param {Integer} page 
     * @param {Integer} numberPerPage 
     * @param {module:api/SsPaymentApi~customerPaymentValuesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.customerPaymentValues = function(customerId, page, numberPerPage, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId == undefined || customerId == null) {
        throw "Missing the required parameter 'customerId' when calling customerPaymentValues";
      }

      // verify the required parameter 'page' is set
      if (page == undefined || page == null) {
        throw "Missing the required parameter 'page' when calling customerPaymentValues";
      }

      // verify the required parameter 'numberPerPage' is set
      if (numberPerPage == undefined || numberPerPage == null) {
        throw "Missing the required parameter 'numberPerPage' when calling customerPaymentValues";
      }


      var pathParams = {
        'customer-id': customerId
      };
      var queryParams = {
        'page': page,
        'number-per-page': numberPerPage
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/s4s-payment/customer/{customer-id}/payment/values', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentConfigGet operation.
     * @callback module:api/SsPaymentApi~paymentConfigGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentConf} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {module:api/SsPaymentApi~paymentConfigGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentConf}
     */
    this.paymentConfigGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PaymentConf;

      return this.apiClient.callApi(
        '/s4s-payment/paymentConfig', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentConfigPut operation.
     * @callback module:api/SsPaymentApi~paymentConfigPutCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentConf} opts.a 
     * @param {module:api/SsPaymentApi~paymentConfigPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.paymentConfigPut = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['a'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/s4s-payment/paymentConfig', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentGetAll operation.
     * @callback module:api/SsPaymentApi~paymentGetAllCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Integer} page 
     * @param {Integer} numberPerPage 
     * @param {module:api/SsPaymentApi~paymentGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.paymentGetAll = function(page, numberPerPage, callback) {
      var postBody = null;

      // verify the required parameter 'page' is set
      if (page == undefined || page == null) {
        throw "Missing the required parameter 'page' when calling paymentGetAll";
      }

      // verify the required parameter 'numberPerPage' is set
      if (numberPerPage == undefined || numberPerPage == null) {
        throw "Missing the required parameter 'numberPerPage' when calling paymentGetAll";
      }


      var pathParams = {
      };
      var queryParams = {
        'page': page,
        'number-per-page': numberPerPage
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['tenantid', 'token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/s4s-payment/payment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));