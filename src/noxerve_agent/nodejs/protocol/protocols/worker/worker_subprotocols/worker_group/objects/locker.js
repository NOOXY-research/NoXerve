/**
 * @file NoXerveAgent Locker file. [locker_scope.js]
 * @author nooxy <thenooxy@gmail.com>
 * @author noowyee <magneticchen@gmail.com>
 * @copyright 2019-2020 nooxy. All Rights Reserved.
 */

'use strict';

/**
 * @module Locker
 */

const Errors = require('../../errors');

/**
 * @constructor module:Locker
 * @param {object} settings
 * @description Locker Object.
 */

function Locker(settings) {
  /**
   * @memberof module:Locker
   * @type {object}
   * @private
   */
  this._settings = settings;

  /**
   * @memberof module:Locker
   * @type {object}
   * @private
   */
  this._event_listeners = {
    'pause'
  };
}

Locker.prototype.lock = function(lock_value, callback) {
}

Locker.prototype.unlock = function(callback) {
}

Locker.prototype.toggle = function(lock_value, callback) {
}

Locker.prototype.pause = function(lock_value, callback) {
}

Locker.prototype.destroy = function(lock_value, callback) {
}

/**
 * @callback module:Locker~callback_of_on
 * @description callback parameter based on event's type.
 */
/**
 * @memberof module:Locker
 * @param {string} event_name
 * @param {module:Locker~callback_of_on} callback
 * @description Register event listener.
 */
Locker.prototype.on = function(event_name, callback) {
  this._event_listeners[event_name] = callback;
}

/**
 * @memberof module:Locker
 * @param {string} event_name
 * @description Locker events emitter. For internal uses.
 */
Locker.prototype.emitEventListener = function(event_name, ...params) {
  return this._event_listeners[event_name].apply(null, params);
}

module.exports = Locker;
