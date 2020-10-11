
export default function( array ) {
  return ( variable ) => {
    return array.indexOf( variable ) !== -1;
  };
}
