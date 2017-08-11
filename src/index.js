
import kindOf from 'kind-of';
import isObject from 'isobject';
import isPlainObject from 'is-plain-object';

import isDefined from './isDefined';
import isUndefined from './isUndefined';
import isItClass from './isItClass';
import isWindow from './isWindow';
import isElement from './isElement';
import isDocument from './isDocument';

const MAX_ARRAY_INDEX = ( 2 ** 53 ) - 1;


// Number, Function, RegExp, Boolean, Date, Error, Arguments,
// PlainObject, Object, Array, ArrayLike, Element
const itis = {
  Undefined: isUndefined,
  Defined: isDefined,
  Element: isElement,
  Window: isWindow,
  Document: isDocument,
  PlainObject: isPlainObject,
  Object: isObject,
  isItClass,
  kindOf // https://github.com/jonschlinkert/kind-of
};


[ 'Array', 'Number', 'Function', 'RegExp', 'Boolean', 'Date', 'Error',
  'Arguments', 'Null', 'String' ].forEach( name => {
    itis[name] = v => kindOf( v ) === name.toLowerCase();
  });


const getLength = function( obj ) {
  return itis.Object( obj ) ? obj.length : undefined;
};

itis.ArrayLike = function( collection ) {
  const length = getLength( collection );
  return itis.Number( length ) && length >= 0 && length <= MAX_ARRAY_INDEX;
};

export default itis;
