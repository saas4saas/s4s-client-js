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
    define(['ApiClient', 'model/Plan', 'model/PricingPolicy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Plan'), require('./PricingPolicy'));
  } else {
    // Browser globals (root is window)
    if (!root.S4sFull) {
      root.S4sFull = {};
    }
    root.S4sFull.PricingConf = factory(root.S4sFull.ApiClient, root.S4sFull.Plan, root.S4sFull.PricingPolicy);
  }
}(this, function(ApiClient, Plan, PricingPolicy) {
  'use strict';




  /**
   * The PricingConf model module.
   * @module model/PricingConf
   * @version stable
   */

  /**
   * Constructs a new <code>PricingConf</code>.
   * Model description
   * @alias module:model/PricingConf
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PricingConf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PricingConf} obj Optional instance to populate.
   * @return {module:model/PricingConf} The populated <code>PricingConf</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currencies')) {
        obj['currencies'] = ApiClient.convertToType(data['currencies'], ['String']);
      }
      if (data.hasOwnProperty('defaultCurrency')) {
        obj['defaultCurrency'] = ApiClient.convertToType(data['defaultCurrency'], 'String');
      }
      if (data.hasOwnProperty('plans')) {
        obj['plans'] = ApiClient.convertToType(data['plans'], {'String': Plan});
      }
      if (data.hasOwnProperty('policy')) {
        obj['policy'] = PricingPolicy.constructFromObject(data['policy']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} currencies
   */
  exports.prototype['currencies'] = undefined;
  /**
   * @member {String} defaultCurrency
   */
  exports.prototype['defaultCurrency'] = undefined;
  /**
   * @member {Object.<String, module:model/Plan>} plans
   */
  exports.prototype['plans'] = undefined;
  /**
   * @member {module:model/PricingPolicy} policy
   */
  exports.prototype['policy'] = undefined;



  return exports;
}));

