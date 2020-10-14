
import isObject from 'isobject';
import isPlainObject from 'is-plain-object';
import itis from './base';
import isDefined from './isDefined';
import isUndefined from './isUndefined';
import isClassOf from './isClassOf';
import isWindow from './isWindow';
import isElement from './isElement';
import isDocument from './isDocument';
import isArrayLike from './isArrayLike';
import isOneOf from './isOneOf';
import isOneOfType from './isOneOfType';


// Number, Function, RegExp, Boolean, Date, Error, Arguments,
// PlainObject, Object, Array, ArrayLike, Element
export default Object.assign( itis, {
  Undefined: isUndefined,
  Defined: isDefined,
  Element: isElement,
  Window: isWindow,
  Document: isDocument,
  PlainObject: isPlainObject,
  Object: isObject,
  ArrayLike: isArrayLike,
  classOf: isClassOf,
  oneOfType: isOneOfType,
  oneOf: isOneOf
});
