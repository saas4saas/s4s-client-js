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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/CustomerBill', 'model/CustomerInfo', 'model/CustomerPack', 'model/CustomerPackSubscription', 'model/CustomerPayment', 'model/CustomerPlan', 'model/CustomerPlanPeriod', 'model/Email', 'model/EmailRecover', 'model/FinalInterval', 'model/GoogleAuth', 'model/GoogleTokenId', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/Login', 'model/OneTimePay', 'model/OperatorConfiguration', 'model/Pack', 'model/PaymentConf', 'model/PaymentPaypal', 'model/PaymentRequest', 'model/Plan', 'model/Price', 'model/PricingConf', 'model/PricingPolicy', 'model/PricingTable2Full', 'model/PricingTable2Plan', 'model/PricingTableFull', 'model/PricingTablePack', 'model/PricingTablePlan', 'model/PricingTablePlanCost', 'model/PricingTableResource', 'model/PricingUiConf', 'model/PricingUiConfPack', 'model/PricingUiConfPlan', 'model/PricingUiConfResource', 'model/ProductConf', 'model/QuantiyIntervalPrice', 'model/Resource', 'model/ResourcePatch', 'model/ResourcePatchResult', 'model/ResourceStatus', 'model/S4sError', 'model/Session', 'model/StripeAccessCode', 'model/StripeConf', 'model/StripeCustomer', 'model/Subscription', 'model/User', 'model/UserApi', 'model/UserConfig', 'model/UserContact', 'model/UserEntity', 'model/UserUiConf', 'model/UtUser', 'model/VariableCost', 'model/VariableCostIntervalCost', 'model/VariableCostIntervalPerUnit', 'model/VariableCostPerUnit', 'api/SsPaymentApi', 'api/SsPricingApi', 'api/SsProductApi', 'api/SsResourceApi', 'api/SsUserApi', 'api/SsUserNotificationApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/CustomerBill'), require('./model/CustomerInfo'), require('./model/CustomerPack'), require('./model/CustomerPackSubscription'), require('./model/CustomerPayment'), require('./model/CustomerPlan'), require('./model/CustomerPlanPeriod'), require('./model/Email'), require('./model/EmailRecover'), require('./model/FinalInterval'), require('./model/GoogleAuth'), require('./model/GoogleTokenId'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/Login'), require('./model/OneTimePay'), require('./model/OperatorConfiguration'), require('./model/Pack'), require('./model/PaymentConf'), require('./model/PaymentPaypal'), require('./model/PaymentRequest'), require('./model/Plan'), require('./model/Price'), require('./model/PricingConf'), require('./model/PricingPolicy'), require('./model/PricingTable2Full'), require('./model/PricingTable2Plan'), require('./model/PricingTableFull'), require('./model/PricingTablePack'), require('./model/PricingTablePlan'), require('./model/PricingTablePlanCost'), require('./model/PricingTableResource'), require('./model/PricingUiConf'), require('./model/PricingUiConfPack'), require('./model/PricingUiConfPlan'), require('./model/PricingUiConfResource'), require('./model/ProductConf'), require('./model/QuantiyIntervalPrice'), require('./model/Resource'), require('./model/ResourcePatch'), require('./model/ResourcePatchResult'), require('./model/ResourceStatus'), require('./model/S4sError'), require('./model/Session'), require('./model/StripeAccessCode'), require('./model/StripeConf'), require('./model/StripeCustomer'), require('./model/Subscription'), require('./model/User'), require('./model/UserApi'), require('./model/UserConfig'), require('./model/UserContact'), require('./model/UserEntity'), require('./model/UserUiConf'), require('./model/UtUser'), require('./model/VariableCost'), require('./model/VariableCostIntervalCost'), require('./model/VariableCostIntervalPerUnit'), require('./model/VariableCostPerUnit'), require('./api/SsPaymentApi'), require('./api/SsPricingApi'), require('./api/SsProductApi'), require('./api/SsResourceApi'), require('./api/SsUserApi'), require('./api/SsUserNotificationApi'));
  }
}(function(ApiClient, Account, CustomerBill, CustomerInfo, CustomerPack, CustomerPackSubscription, CustomerPayment, CustomerPlan, CustomerPlanPeriod, Email, EmailRecover, FinalInterval, GoogleAuth, GoogleTokenId, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, InlineResponse2007, Login, OneTimePay, OperatorConfiguration, Pack, PaymentConf, PaymentPaypal, PaymentRequest, Plan, Price, PricingConf, PricingPolicy, PricingTable2Full, PricingTable2Plan, PricingTableFull, PricingTablePack, PricingTablePlan, PricingTablePlanCost, PricingTableResource, PricingUiConf, PricingUiConfPack, PricingUiConfPlan, PricingUiConfResource, ProductConf, QuantiyIntervalPrice, Resource, ResourcePatch, ResourcePatchResult, ResourceStatus, S4sError, Session, StripeAccessCode, StripeConf, StripeCustomer, Subscription, User, UserApi, UserConfig, UserContact, UserEntity, UserUiConf, UtUser, VariableCost, VariableCostIntervalCost, VariableCostIntervalPerUnit, VariableCostPerUnit, SsPaymentApi, SsPricingApi, SsProductApi, SsResourceApi, SsUserApi, SsUserNotificationApi) {
  'use strict';

  /**
   * description.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var S4sFull = require('index'); // See note below*.
   * var xxxSvc = new S4sFull.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new S4sFull.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new S4sFull.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new S4sFull.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version stable
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The CustomerBill model constructor.
     * @property {module:model/CustomerBill}
     */
    CustomerBill: CustomerBill,
    /**
     * The CustomerInfo model constructor.
     * @property {module:model/CustomerInfo}
     */
    CustomerInfo: CustomerInfo,
    /**
     * The CustomerPack model constructor.
     * @property {module:model/CustomerPack}
     */
    CustomerPack: CustomerPack,
    /**
     * The CustomerPackSubscription model constructor.
     * @property {module:model/CustomerPackSubscription}
     */
    CustomerPackSubscription: CustomerPackSubscription,
    /**
     * The CustomerPayment model constructor.
     * @property {module:model/CustomerPayment}
     */
    CustomerPayment: CustomerPayment,
    /**
     * The CustomerPlan model constructor.
     * @property {module:model/CustomerPlan}
     */
    CustomerPlan: CustomerPlan,
    /**
     * The CustomerPlanPeriod model constructor.
     * @property {module:model/CustomerPlanPeriod}
     */
    CustomerPlanPeriod: CustomerPlanPeriod,
    /**
     * The Email model constructor.
     * @property {module:model/Email}
     */
    Email: Email,
    /**
     * The EmailRecover model constructor.
     * @property {module:model/EmailRecover}
     */
    EmailRecover: EmailRecover,
    /**
     * The FinalInterval model constructor.
     * @property {module:model/FinalInterval}
     */
    FinalInterval: FinalInterval,
    /**
     * The GoogleAuth model constructor.
     * @property {module:model/GoogleAuth}
     */
    GoogleAuth: GoogleAuth,
    /**
     * The GoogleTokenId model constructor.
     * @property {module:model/GoogleTokenId}
     */
    GoogleTokenId: GoogleTokenId,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The Login model constructor.
     * @property {module:model/Login}
     */
    Login: Login,
    /**
     * The OneTimePay model constructor.
     * @property {module:model/OneTimePay}
     */
    OneTimePay: OneTimePay,
    /**
     * The OperatorConfiguration model constructor.
     * @property {module:model/OperatorConfiguration}
     */
    OperatorConfiguration: OperatorConfiguration,
    /**
     * The Pack model constructor.
     * @property {module:model/Pack}
     */
    Pack: Pack,
    /**
     * The PaymentConf model constructor.
     * @property {module:model/PaymentConf}
     */
    PaymentConf: PaymentConf,
    /**
     * The PaymentPaypal model constructor.
     * @property {module:model/PaymentPaypal}
     */
    PaymentPaypal: PaymentPaypal,
    /**
     * The PaymentRequest model constructor.
     * @property {module:model/PaymentRequest}
     */
    PaymentRequest: PaymentRequest,
    /**
     * The Plan model constructor.
     * @property {module:model/Plan}
     */
    Plan: Plan,
    /**
     * The Price model constructor.
     * @property {module:model/Price}
     */
    Price: Price,
    /**
     * The PricingConf model constructor.
     * @property {module:model/PricingConf}
     */
    PricingConf: PricingConf,
    /**
     * The PricingPolicy model constructor.
     * @property {module:model/PricingPolicy}
     */
    PricingPolicy: PricingPolicy,
    /**
     * The PricingTable2Full model constructor.
     * @property {module:model/PricingTable2Full}
     */
    PricingTable2Full: PricingTable2Full,
    /**
     * The PricingTable2Plan model constructor.
     * @property {module:model/PricingTable2Plan}
     */
    PricingTable2Plan: PricingTable2Plan,
    /**
     * The PricingTableFull model constructor.
     * @property {module:model/PricingTableFull}
     */
    PricingTableFull: PricingTableFull,
    /**
     * The PricingTablePack model constructor.
     * @property {module:model/PricingTablePack}
     */
    PricingTablePack: PricingTablePack,
    /**
     * The PricingTablePlan model constructor.
     * @property {module:model/PricingTablePlan}
     */
    PricingTablePlan: PricingTablePlan,
    /**
     * The PricingTablePlanCost model constructor.
     * @property {module:model/PricingTablePlanCost}
     */
    PricingTablePlanCost: PricingTablePlanCost,
    /**
     * The PricingTableResource model constructor.
     * @property {module:model/PricingTableResource}
     */
    PricingTableResource: PricingTableResource,
    /**
     * The PricingUiConf model constructor.
     * @property {module:model/PricingUiConf}
     */
    PricingUiConf: PricingUiConf,
    /**
     * The PricingUiConfPack model constructor.
     * @property {module:model/PricingUiConfPack}
     */
    PricingUiConfPack: PricingUiConfPack,
    /**
     * The PricingUiConfPlan model constructor.
     * @property {module:model/PricingUiConfPlan}
     */
    PricingUiConfPlan: PricingUiConfPlan,
    /**
     * The PricingUiConfResource model constructor.
     * @property {module:model/PricingUiConfResource}
     */
    PricingUiConfResource: PricingUiConfResource,
    /**
     * The ProductConf model constructor.
     * @property {module:model/ProductConf}
     */
    ProductConf: ProductConf,
    /**
     * The QuantiyIntervalPrice model constructor.
     * @property {module:model/QuantiyIntervalPrice}
     */
    QuantiyIntervalPrice: QuantiyIntervalPrice,
    /**
     * The Resource model constructor.
     * @property {module:model/Resource}
     */
    Resource: Resource,
    /**
     * The ResourcePatch model constructor.
     * @property {module:model/ResourcePatch}
     */
    ResourcePatch: ResourcePatch,
    /**
     * The ResourcePatchResult model constructor.
     * @property {module:model/ResourcePatchResult}
     */
    ResourcePatchResult: ResourcePatchResult,
    /**
     * The ResourceStatus model constructor.
     * @property {module:model/ResourceStatus}
     */
    ResourceStatus: ResourceStatus,
    /**
     * The S4sError model constructor.
     * @property {module:model/S4sError}
     */
    S4sError: S4sError,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The StripeAccessCode model constructor.
     * @property {module:model/StripeAccessCode}
     */
    StripeAccessCode: StripeAccessCode,
    /**
     * The StripeConf model constructor.
     * @property {module:model/StripeConf}
     */
    StripeConf: StripeConf,
    /**
     * The StripeCustomer model constructor.
     * @property {module:model/StripeCustomer}
     */
    StripeCustomer: StripeCustomer,
    /**
     * The Subscription model constructor.
     * @property {module:model/Subscription}
     */
    Subscription: Subscription,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserApi model constructor.
     * @property {module:model/UserApi}
     */
    UserApi: UserApi,
    /**
     * The UserConfig model constructor.
     * @property {module:model/UserConfig}
     */
    UserConfig: UserConfig,
    /**
     * The UserContact model constructor.
     * @property {module:model/UserContact}
     */
    UserContact: UserContact,
    /**
     * The UserEntity model constructor.
     * @property {module:model/UserEntity}
     */
    UserEntity: UserEntity,
    /**
     * The UserUiConf model constructor.
     * @property {module:model/UserUiConf}
     */
    UserUiConf: UserUiConf,
    /**
     * The UtUser model constructor.
     * @property {module:model/UtUser}
     */
    UtUser: UtUser,
    /**
     * The VariableCost model constructor.
     * @property {module:model/VariableCost}
     */
    VariableCost: VariableCost,
    /**
     * The VariableCostIntervalCost model constructor.
     * @property {module:model/VariableCostIntervalCost}
     */
    VariableCostIntervalCost: VariableCostIntervalCost,
    /**
     * The VariableCostIntervalPerUnit model constructor.
     * @property {module:model/VariableCostIntervalPerUnit}
     */
    VariableCostIntervalPerUnit: VariableCostIntervalPerUnit,
    /**
     * The VariableCostPerUnit model constructor.
     * @property {module:model/VariableCostPerUnit}
     */
    VariableCostPerUnit: VariableCostPerUnit,
    /**
     * The SsPaymentApi service constructor.
     * @property {module:api/SsPaymentApi}
     */
    SsPaymentApi: SsPaymentApi,
    /**
     * The SsPricingApi service constructor.
     * @property {module:api/SsPricingApi}
     */
    SsPricingApi: SsPricingApi,
    /**
     * The SsProductApi service constructor.
     * @property {module:api/SsProductApi}
     */
    SsProductApi: SsProductApi,
    /**
     * The SsResourceApi service constructor.
     * @property {module:api/SsResourceApi}
     */
    SsResourceApi: SsResourceApi,
    /**
     * The SsUserApi service constructor.
     * @property {module:api/SsUserApi}
     */
    SsUserApi: SsUserApi,
    /**
     * The SsUserNotificationApi service constructor.
     * @property {module:api/SsUserNotificationApi}
     */
    SsUserNotificationApi: SsUserNotificationApi
  };

  return exports;
}));
