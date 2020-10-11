
import itis from './base';


export default function( array ) {
  return ( variable ) => {
    return array.reduce(( result, type ) => {
      const funName = `is${type[0].toUpperCase() + type.slice( 1 )}`;
      if ( itis[funName]) {
        return result || itis[funName]( variable );
      }
      return result || false;
    }, false );
  };
}
