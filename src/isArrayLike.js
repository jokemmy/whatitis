
import isObject from 'isobject';
import itis from './base';


const MAX_ARRAY_INDEX = ( 2 ** 53 ) - 1;

function getLength( obj ) {
  return isObject( obj ) ? obj.length : undefined;
}

export default function( collection ) {
  const length = getLength( collection );
  return itis.Number( length ) && length >= 0 && length <= MAX_ARRAY_INDEX;
}
