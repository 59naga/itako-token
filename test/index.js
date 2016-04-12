// dependencies
import test from 'ava';
import { throws } from 'assert-exception';

// target
import Token from '../src';

// specs
test('token should be initialized with the text type', (t) => {
  const token = new Token;
  t.true(token.type === 'text');
  t.true(token.value === null);
});

test('properties should provide getter only', (t) => {
  const token = new Token('text', 'foo');

  t.true(
    throws(() => {token.type = 'illegal';})
    .message === 'Cannot set property type of #<Token> which has only a getter'
  );
});

test('should be change the properties via the `set*` method', (t) => {
  const token = new Token('text', 'foo');
  t.true(token.type === 'text');
  t.true(token.value === 'foo');

  t.true(token.setType('audio').type === 'audio');
  t.true(token.setValue('bar').value === 'bar');
  t.true(token.setOption('volume', 100).options.volume === 100);
  t.true(token.setMeta('transformer', 'johndue').meta.transformer === 'johndue');
});

test('clone is should be changed meta-information only', (t) => {
  const token = new Token('text', 'foo');
  t.true(token.type === 'text');
  t.true(token.value === 'foo');

  const clonedToken = token.clone({ transformer: 'johndue' });
  t.true(token !== clonedToken);
  t.true(token.type === clonedToken.type);
  t.true(token.value === clonedToken.value);
  t.true(token.meta.transformer === undefined);
  t.true(clonedToken.meta.transformer === 'johndue');
});
