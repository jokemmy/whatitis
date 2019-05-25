
export default function isClassOf( Cls ) {
  return function( obj ) {
    return ( obj instanceof Cls );
  };
}
