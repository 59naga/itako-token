Itako Token
---

<p align="right">
  <a href="https://npmjs.org/package/itako-token">
    <img src="https://img.shields.io/npm/v/itako-token.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/itako-token">
    <img src="http://img.shields.io/travis/59naga/itako-token.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/itako-token/coverage">
    <img src="https://img.shields.io/codeclimate/github/59naga/itako-token.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/itako-token">
    <img src="https://img.shields.io/codeclimate/coverage/github/59naga/itako-token.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/59naga/itako-token">
    <img src="https://img.shields.io/gemnasium/59naga/itako-token.svg?style=flat-square">
  </a>
</p>

> Work in progress

Installation
---
```bash
npm install itako-token --save
```

Stacktrace was broken
---
```bash
node
> require('itako-token')('error')
# TypeError: Cannot convert undefined or null to object
# at f (/Users/59naga/itako-token/lib/index.js:1:2469)
```
published code is compressed and the source map is provided.
not supported by the sourcemap in NodeJS. but this resolved in the [node-source-map-support](https://github.com/evanw/node-source-map-support#readme).

```bash
npm install source-map-support --save-dev
```
```js
import 'source-map-support/register';
```
or...
```bash
$ mocha --require source-map-support/register
```

Development
---
Requirement global
* NodeJS v5.10.0
* Npm v3.8.3

```bash
git clone https://github.com/59naga/itako-token
cd itako-token
npm install

npm test
```

License
---
[MIT](http://59naga.mit-license.org/)
