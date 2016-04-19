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
    this.type = type;
    this.value = value;
    this.options = { ...options };
    this.meta = { ...meta };
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
    this.type = type;
    return this;
  }

  /**
  * @method setValue
  * @param {any} value - a token value
  * @returns {this} this
  */
  setValue(value) {
    this.value = value;
    return this;
  }

  /**
  * @method setOption
  * @param {string} key - a option key
  * @param {any} value - a option value
  * @returns {this} this
  */
  setOption(key, value) {
    this.options[key] = value;
    return this;
  }

  /**
  * @method setOptions
  * @param {object} options - override the options
  * @returns {this} this
  */
  setOptions(options) {
    this.options = { ...this.options, ...options };
    return this;
  }

  /**
  * @method setMeta
  * @param {string} key - a meta key
  * @param {any} value - a meta value
  * @returns {this} this
  */
  setMeta(key, value) {
    this.meta[key] = value;
    return this;
  }
}
