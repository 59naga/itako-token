Itako Token
---

<p align="right">
  <a href="https://npmjs.org/package/itako-token">
    <img src="https://img.shields.io/npm/v/itako-token.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/itakojs/itako-token">
    <img src="http://img.shields.io/travis/itakojs/itako-token.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/itakojs/itako-token/coverage">
    <img src="https://img.shields.io/codeclimate/github/itakojs/itako-token.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/itakojs/itako-token">
    <img src="https://img.shields.io/codeclimate/coverage/github/itakojs/itako-token.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/itakojs/itako-token">
    <img src="https://img.shields.io/gemnasium/itakojs/itako-token.svg?style=flat-square">
  </a>
</p>

Installation
---
```bash
npm install itako-token --save
```

Usage
---
`itako-token` has `type` and `value` and reader `options`.

```js
import Itako from 'itako';
import Reader from 'itako-text-reader-speech-synthesis';
import Token from 'itako-token';

const token = new Token('text', 'greeting', {volume: 1, pitch: 1.5});

// speech-synthesis say "greeting" using option
new Itako([new Reader]).readToken(read);
```

API
---
each property is read-only., but by performing a `set*` method, can be changed.

## `setType(type)` -> `this`
## `setValue(value)` -> `this`
## `setOption(key, value)` -> `this`
## `setOptions(options)` -> `this`
## `setMeta(key, value)` -> `this`

## `clone(meta)` -> `token`
create a new instance using an instance.

```js
const token = new Token('text', 'greeting', { volume: 1, pitch: 1.5 });
const clonedToken = token.clone({ cloned: true }).setOptions({ volume: 0.5 });

console.log(JSON.stringify(token));
// {"type":"text","value":"greeting","options":{"volume":1,"pitch":1.5},"meta":{}}
console.log(JSON.stringify(clonedToken));
// {"type":"text","value":"greeting","options":{"volume":0.5,"pitch":1.5},"meta":{"cloned":true}}
```

Stacktrace was broken
---
```bash
node
> require('itako-token')('error')
# TypeError: Cannot convert undefined or null to object
# at f (/Users/itakojs/itako-token/lib/index.js:1:2469)
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
git clone https://github.com/itakojs/itako-token
cd itako-token
npm install

npm test
```

License
---
[MIT](http://59naga.mit-license.org/)
