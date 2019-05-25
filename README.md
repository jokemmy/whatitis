
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
imoprt itis from 'whatitis';

itis.Undefined( null ); // true
itis.Undefined( undefined ); // true
itis.Defined( null ); // false
itis.Defined( undefined ); // false
itis.Array( [] ); // true
itis.Number( 1 ); // true
itis.Function( function() {} ); // true
itis.RegExp( /\w/ ); // true
itis.Boolean( true ); // true
itis.Date( new Date()); // true
itis.Error( new Error( 'error' )); // true
itis.Null( null ); // true
itis.String( '' ); // true
itis.ArrayLike({ length: 1 }); // true
itis.Element( dom ); // true

// arguments
function testArguments() {
  return itis.Arguments( arguments ); // true
}
testArguments(); // true

// itIsClass
class EXample {}
itisEXample = itis.isClassOf( EXample );
itisEXample( new EXample()); // true
```

## License
MIT Licensed. Copyright (c) Syzmex 2017.
