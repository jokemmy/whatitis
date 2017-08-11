
export default function isItClass( Cls ) {
  return function( obj ) {
    return ( obj instanceof Cls );
  };
}
