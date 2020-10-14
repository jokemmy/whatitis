
# Whatitis
A type checker.

## Install
```js
npm install whatitis -save
```

## Test
```js
npm run test
```

## Usage
```js
imoprt is from 'whatitis';

is.Undefined( null ); // true
is.Undefined( undefined ); // true
is.Defined( null ); // false
is.Defined( undefined ); // false
is.Array( [] ); // true
is.Number( 1 ); // true
is.Function( function() {} ); // true
is.RegExp( /\w/ ); // true
is.Boolean( true ); // true
is.Date( new Date()); // true
is.Error( new Error( 'error' )); // true
is.Null( null ); // true
is.String( '' ); // true
is.ArrayLike({ length: 1 }); // true
is.Element( domNode ); // true

// arguments
function testArguments() {
  return is.Arguments( arguments );
}
testArguments(); // true

// classOf
class EXample {}
isEXample = is.classOf( EXample );
isEXample( new EXample()); // true
```

## License
MIT Licensed. Copyright (c) Syzmex 2017.
