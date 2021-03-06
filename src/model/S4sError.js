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
    define(['ApiClient', 'model/S4sError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./S4sError'));
  } else {
    // Browser globals (root is window)
    if (!root.S4sFull) {
      root.S4sFull = {};
    }
    root.S4sFull.S4sError = factory(root.S4sFull.ApiClient, root.S4sFull.S4sError);
  }
}(this, function(ApiClient, S4sError) {
  'use strict';




  /**
   * The S4sError model module.
   * @module model/S4sError
   * @version stable
   */

  /**
   * Constructs a new <code>S4sError</code>.
   * An Error
   * @alias module:model/S4sError
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>S4sError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/S4sError} obj Optional instance to populate.
   * @return {module:model/S4sError} The populated <code>S4sError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'Boolean');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('msg')) {
        obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
      }
      if (data.hasOwnProperty('cause')) {
        obj['cause'] = S4sError.constructFromObject(data['cause']);
      }
    }
    return obj;
  }

  /**
   * if there is an error the response will have the 'error' field with true value, other wise they are undefined
   * @member {Boolean} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} msg
   */
  exports.prototype['msg'] = undefined;
  /**
   * @member {module:model/S4sError} cause
   */
  exports.prototype['cause'] = undefined;



  return exports;
}));


