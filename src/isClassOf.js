
export default function classOf( Cls ) {
  return function( obj ) {
    return ( obj instanceof Cls );
  };
}
