// no dependencies
const TYPE = Symbol();
const VALUE = Symbol();
const OPTS = Symbol();
const META = Symbol();

// @class Token
export default class Token {
  /**
  * @constructor
  * @param {string} [type='text'] - a token type
  * @param {any} [value=null] - a token value
  * @param {object} [options={}] - a token options
  * @param {object} [meta={}] - a token meta information
  */
  constructor(type = 'text', value = null, options = {}, meta = {}) {
    this[TYPE] = type;
    this[VALUE] = value;
    this[OPTS] = { ...options };
    this[META] = { ...meta };
  }

  get type() {
    return this[TYPE];
  }
  get value() {
    return this[VALUE];
  }
  get options() {
    return this[OPTS];
  }
  get meta() {
    return this[META];
  }
  toJSON() {
    return {
      type: this.type,
      value: this.value,
      options: this.options,
      meta: this.meta,
    };
  }

  /**
  * @method clone
  * @param {object} [meta={}] - a token meta information
  * @returns {Token} token
  */
  clone(meta = {}) {
    return new this.constructor(this.type, this.value, this.options, { ...this.meta, ...meta });
  }

  /**
  * @method setType
  * @param {string} type - a token type
  * @returns {this} this
  */
  setType(type) {
    this[TYPE] = type;
    return this;
  }

  /**
  * @method setValue
  * @param {any} value - a token value
  * @returns {this} this
  */
  setValue(value) {
    this[VALUE] = value;
    return this;
  }

  /**
  * @method setOption
  * @param {string} key - a option key
  * @param {any} value - a option value
  * @returns {this} this
  */
  setOption(key, value) {
    this[OPTS][key] = value;
    return this;
  }

  /**
  * @method setMeta
  * @param {string} key - a meta key
  * @param {any} value - a meta value
  * @returns {this} this
  */
  setMeta(key, value) {
    this[META][key] = value;
    return this;
  }
}
