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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.S4sFull);
  }
}(this, function(expect, S4sFull) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new S4sFull.SsUserApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SsUserApi', function() {
    describe('accountAdd', function() {
      it('should call accountAdd successfully', function(done) {
        //uncomment below and update the code to test accountAdd
        //instance.accountAdd(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountAutoLogin', function() {
      it('should call accountAutoLogin successfully', function(done) {
        //uncomment below and update the code to test accountAutoLogin
        //instance.accountAutoLogin(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountChangePasswordPatch', function() {
      it('should call accountChangePasswordPatch successfully', function(done) {
        //uncomment below and update the code to test accountChangePasswordPatch
        //instance.accountChangePasswordPatch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountGetAll', function() {
      it('should call accountGetAll successfully', function(done) {
        //uncomment below and update the code to test accountGetAll
        //instance.accountGetAll(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdGet', function() {
      it('should call accountIdGet successfully', function(done) {
        //uncomment below and update the code to test accountIdGet
        //instance.accountIdGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdKeysAdd', function() {
      it('should call accountIdKeysAdd successfully', function(done) {
        //uncomment below and update the code to test accountIdKeysAdd
        //instance.accountIdKeysAdd(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdKeysDel', function() {
      it('should call accountIdKeysDel successfully', function(done) {
        //uncomment below and update the code to test accountIdKeysDel
        //instance.accountIdKeysDel(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdKeysGetAll', function() {
      it('should call accountIdKeysGetAll successfully', function(done) {
        //uncomment below and update the code to test accountIdKeysGetAll
        //instance.accountIdKeysGetAll(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdPrivateDataPut', function() {
      it('should call accountIdPrivateDataPut successfully', function(done) {
        //uncomment below and update the code to test accountIdPrivateDataPut
        //instance.accountIdPrivateDataPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdPut', function() {
      it('should call accountIdPut successfully', function(done) {
        //uncomment below and update the code to test accountIdPut
        //instance.accountIdPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdStatusPut', function() {
      it('should call accountIdStatusPut successfully', function(done) {
        //uncomment below and update the code to test accountIdStatusPut
        //instance.accountIdStatusPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdUserAdd', function() {
      it('should call accountIdUserAdd successfully', function(done) {
        //uncomment below and update the code to test accountIdUserAdd
        //instance.accountIdUserAdd(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdUserChangePwdToken', function() {
      it('should call accountIdUserChangePwdToken successfully', function(done) {
        //uncomment below and update the code to test accountIdUserChangePwdToken
        //instance.accountIdUserChangePwdToken(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdUserGet', function() {
      it('should call accountIdUserGet successfully', function(done) {
        //uncomment below and update the code to test accountIdUserGet
        //instance.accountIdUserGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdUserLogin', function() {
      it('should call accountIdUserLogin successfully', function(done) {
        //uncomment below and update the code to test accountIdUserLogin
        //instance.accountIdUserLogin(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdUserPut', function() {
      it('should call accountIdUserPut successfully', function(done) {
        //uncomment below and update the code to test accountIdUserPut
        //instance.accountIdUserPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountIdUserResendEmailConfirmation', function() {
      it('should call accountIdUserResendEmailConfirmation successfully', function(done) {
        //uncomment below and update the code to test accountIdUserResendEmailConfirmation
        //instance.accountIdUserResendEmailConfirmation(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountLogin', function() {
      it('should call accountLogin successfully', function(done) {
        //uncomment below and update the code to test accountLogin
        //instance.accountLogin(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountLoginOrAdd', function() {
      it('should call accountLoginOrAdd successfully', function(done) {
        //uncomment below and update the code to test accountLoginOrAdd
        //instance.accountLoginOrAdd(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountRecover', function() {
      it('should call accountRecover successfully', function(done) {
        //uncomment below and update the code to test accountRecover
        //instance.accountRecover(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountUserChangePwdToken', function() {
      it('should call accountUserChangePwdToken successfully', function(done) {
        //uncomment below and update the code to test accountUserChangePwdToken
        //instance.accountUserChangePwdToken(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountUserGet', function() {
      it('should call accountUserGet successfully', function(done) {
        //uncomment below and update the code to test accountUserGet
        //instance.accountUserGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountUserLogin', function() {
      it('should call accountUserLogin successfully', function(done) {
        //uncomment below and update the code to test accountUserLogin
        //instance.accountUserLogin(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountUserPut', function() {
      it('should call accountUserPut successfully', function(done) {
        //uncomment below and update the code to test accountUserPut
        //instance.accountUserPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountUserResendEmailConfirmation', function() {
      it('should call accountUserResendEmailConfirmation successfully', function(done) {
        //uncomment below and update the code to test accountUserResendEmailConfirmation
        //instance.accountUserResendEmailConfirmation(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountUsernameChangePwdToken', function() {
      it('should call accountUsernameChangePwdToken successfully', function(done) {
        //uncomment below and update the code to test accountUsernameChangePwdToken
        //instance.accountUsernameChangePwdToken(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountUsernameGet', function() {
      it('should call accountUsernameGet successfully', function(done) {
        //uncomment below and update the code to test accountUsernameGet
        //instance.accountUsernameGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountUsernameLogin', function() {
      it('should call accountUsernameLogin successfully', function(done) {
        //uncomment below and update the code to test accountUsernameLogin
        //instance.accountUsernameLogin(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountUsernamePut', function() {
      it('should call accountUsernamePut successfully', function(done) {
        //uncomment below and update the code to test accountUsernamePut
        //instance.accountUsernamePut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountUsernameResendEmailConfirmation', function() {
      it('should call accountUsernameResendEmailConfirmation successfully', function(done) {
        //uncomment below and update the code to test accountUsernameResendEmailConfirmation
        //instance.accountUsernameResendEmailConfirmation(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authenticate', function() {
      it('should call authenticate successfully', function(done) {
        //uncomment below and update the code to test authenticate
        //instance.authenticate(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('config', function() {
      it('should call config successfully', function(done) {
        //uncomment below and update the code to test config
        //instance.config(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('googleLogin', function() {
      it('should call googleLogin successfully', function(done) {
        //uncomment below and update the code to test googleLogin
        //instance.googleLogin(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('htmlConf', function() {
      it('should call htmlConf successfully', function(done) {
        //uncomment below and update the code to test htmlConf
        //instance.htmlConf(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountGet', function() {
      it('should call selfAccountGet successfully', function(done) {
        //uncomment below and update the code to test selfAccountGet
        //instance.selfAccountGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountKeysAdd', function() {
      it('should call selfAccountKeysAdd successfully', function(done) {
        //uncomment below and update the code to test selfAccountKeysAdd
        //instance.selfAccountKeysAdd(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountKeysDel', function() {
      it('should call selfAccountKeysDel successfully', function(done) {
        //uncomment below and update the code to test selfAccountKeysDel
        //instance.selfAccountKeysDel(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountKeysGetAll', function() {
      it('should call selfAccountKeysGetAll successfully', function(done) {
        //uncomment below and update the code to test selfAccountKeysGetAll
        //instance.selfAccountKeysGetAll(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountPrivateDataPut', function() {
      it('should call selfAccountPrivateDataPut successfully', function(done) {
        //uncomment below and update the code to test selfAccountPrivateDataPut
        //instance.selfAccountPrivateDataPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountPut', function() {
      it('should call selfAccountPut successfully', function(done) {
        //uncomment below and update the code to test selfAccountPut
        //instance.selfAccountPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountStatusPut', function() {
      it('should call selfAccountStatusPut successfully', function(done) {
        //uncomment below and update the code to test selfAccountStatusPut
        //instance.selfAccountStatusPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountUserAdd', function() {
      it('should call selfAccountUserAdd successfully', function(done) {
        //uncomment below and update the code to test selfAccountUserAdd
        //instance.selfAccountUserAdd(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountUserChangePwdToken', function() {
      it('should call selfAccountUserChangePwdToken successfully', function(done) {
        //uncomment below and update the code to test selfAccountUserChangePwdToken
        //instance.selfAccountUserChangePwdToken(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountUserGet', function() {
      it('should call selfAccountUserGet successfully', function(done) {
        //uncomment below and update the code to test selfAccountUserGet
        //instance.selfAccountUserGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountUserLogin', function() {
      it('should call selfAccountUserLogin successfully', function(done) {
        //uncomment below and update the code to test selfAccountUserLogin
        //instance.selfAccountUserLogin(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountUserPut', function() {
      it('should call selfAccountUserPut successfully', function(done) {
        //uncomment below and update the code to test selfAccountUserPut
        //instance.selfAccountUserPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfAccountUserResendEmailConfirmation', function() {
      it('should call selfAccountUserResendEmailConfirmation successfully', function(done) {
        //uncomment below and update the code to test selfAccountUserResendEmailConfirmation
        //instance.selfAccountUserResendEmailConfirmation(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfUserChangePwdToken', function() {
      it('should call selfUserChangePwdToken successfully', function(done) {
        //uncomment below and update the code to test selfUserChangePwdToken
        //instance.selfUserChangePwdToken(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfUserGet', function() {
      it('should call selfUserGet successfully', function(done) {
        //uncomment below and update the code to test selfUserGet
        //instance.selfUserGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfUserLogin', function() {
      it('should call selfUserLogin successfully', function(done) {
        //uncomment below and update the code to test selfUserLogin
        //instance.selfUserLogin(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfUserPut', function() {
      it('should call selfUserPut successfully', function(done) {
        //uncomment below and update the code to test selfUserPut
        //instance.selfUserPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfUserResendEmailConfirmation', function() {
      it('should call selfUserResendEmailConfirmation successfully', function(done) {
        //uncomment below and update the code to test selfUserResendEmailConfirmation
        //instance.selfUserResendEmailConfirmation(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userConfigGet', function() {
      it('should call userConfigGet successfully', function(done) {
        //uncomment below and update the code to test userConfigGet
        //instance.userConfigGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userConfigPut', function() {
      it('should call userConfigPut successfully', function(done) {
        //uncomment below and update the code to test userConfigPut
        //instance.userConfigPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userUiConfigGet', function() {
      it('should call userUiConfigGet successfully', function(done) {
        //uncomment below and update the code to test userUiConfigGet
        //instance.userUiConfigGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userUiConfigPut', function() {
      it('should call userUiConfigPut successfully', function(done) {
        //uncomment below and update the code to test userUiConfigPut
        //instance.userUiConfigPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
