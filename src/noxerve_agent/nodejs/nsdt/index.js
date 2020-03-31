/**
 * @file NoXerveAgent NoXerve Supported Data Type index file. [index.js]
 * @author nooxy <thenooxy@gmail.com>
 * @author noowyee <magneticchen@gmail.com>
 * @copyright 2019-2020 nooxy. All Rights Reserved.
 */

'use strict';

/**
 * @module NSDT
 */

const CallableStructure = require('./callable_structure');

// NSTD cheatsheet
// Code | Type
// 0 blob
// 1 json
// 2 noxerve callback dictionary

/**
 * @constructor module:NSDT
 * @param {object} settings
 * @description NoXerve Supported Data Type module. Encode, Decode from and to
 * blob and supported data type.
 */
function NSDT(settings) {
  /**
   * @memberof module:NSDT
   * @type {object}
   * @private
   */
  this._settings = settings;

  /**
   * @memberof module:NSDT
   * @type {object}
   * @private
   */
   this._event_listeners = {
     'callable-structure-local-request': ()=> {

     },
     'callable-structure-remote-request': ()=> {

     }
   };
}

/**
 * @memberof module:NSDT
 * @description CallableStructure multiplexing and demultiplexing strutures
 * using one data channel.
 */
NSDT.prototype.createCallableStructure = function(callback) {
  this._event_listeners('callbale-structure-create')(callback);
};

/**
 * @callback module:NSDT~callback_of_on
 * @description callback parameter based on event's type.
 */
/**
 * @memberof module:NSDT
 * @param {string} event_name
 * @param {module:NSDT~callback_of_on} callback
 * @description NSDT events registeration.
 */
NSDT.prototype.on = function(event_name, listener) {
  this._event_listeners[event_name] = listener;
}

/**
 * @memberof module:NSDT
 * @param {string} event_name
 * @description NSDT events emitter.
 */
NSDT.prototype.emitEventListener = function(event_name, ...params) {
  this._event_listeners[event_name].apply(null, params);
}

module.exports = NSDT;
