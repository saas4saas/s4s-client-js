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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.S4sFull) {
      root.S4sFull = {};
    }
    root.S4sFull.CustomerBill = factory(root.S4sFull.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomerBill model module.
   * @module model/CustomerBill
   * @version stable
   */

  /**
   * Constructs a new <code>CustomerBill</code>.
   * Model description
   * @alias module:model/CustomerBill
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>CustomerBill</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerBill} obj Optional instance to populate.
   * @return {module:model/CustomerBill} The populated <code>CustomerBill</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customerPlanId')) {
        obj['customerPlanId'] = ApiClient.convertToType(data['customerPlanId'], 'String');
      }
      if (data.hasOwnProperty('creationTimespan')) {
        obj['creationTimespan'] = ApiClient.convertToType(data['creationTimespan'], 'Integer');
      }
      if (data.hasOwnProperty('lasUpdateTimespan')) {
        obj['lasUpdateTimespan'] = ApiClient.convertToType(data['lasUpdateTimespan'], 'Integer');
      }
      if (data.hasOwnProperty('customerId')) {
        obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('totalInPayment')) {
        obj['totalInPayment'] = ApiClient.convertToType(data['totalInPayment'], {'String': 'Integer'});
      }
      if (data.hasOwnProperty('paymentIdList')) {
        obj['paymentIdList'] = ApiClient.convertToType(data['paymentIdList'], ['String']);
      }
      if (data.hasOwnProperty('planId')) {
        obj['planId'] = ApiClient.convertToType(data['planId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} customerPlanId
   */
  exports.prototype['customerPlanId'] = undefined;
  /**
   * @member {Integer} creationTimespan
   */
  exports.prototype['creationTimespan'] = undefined;
  /**
   * @member {Integer} lasUpdateTimespan
   */
  exports.prototype['lasUpdateTimespan'] = undefined;
  /**
   * @member {String} customerId
   */
  exports.prototype['customerId'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/CustomerBill.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Object.<String, Integer>} totalInPayment
   */
  exports.prototype['totalInPayment'] = undefined;
  /**
   * @member {Array.<String>} paymentIdList
   */
  exports.prototype['paymentIdList'] = undefined;
  /**
   * @member {String} planId
   */
  exports.prototype['planId'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "S3Forgiven"
     * @const
     */
    "S3Forgiven": "S3Forgiven",
    /**
     * value: "S4Paid"
     * @const
     */
    "S4Paid": "S4Paid",
    /**
     * value: "S1WaitingPayment"
     * @const
     */
    "S1WaitingPayment": "S1WaitingPayment",
    /**
     * value: "S2WaitingPlanExpiration"
     * @const
     */
    "S2WaitingPlanExpiration": "S2WaitingPlanExpiration"  };


  return exports;
}));


