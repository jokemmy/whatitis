
# whatitis
Whatitis is a type checker.

## Install
```js
npm install whatitis -save
```

## Usage
```js
imoprt itis from 'whatitis';

itis.Undefiend( null ); // true
itis.Undefiend( undefined ); // true
itis.Defined( null ); // false
itis.Defined( undefined ); // false
itis.Element( docment ); // true
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

// arguments
function testArguments() {
  return itis.Arguments( arguments ); // true
}
testArguments(); // true

// itIsClass
class EXample {}
itisEXample = itis.isItClass( EXample );
itisEXample( new EXample()); // true
```

## License
MIT Licensed. Copyright (c) Syzmex 2017.
