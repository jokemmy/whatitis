
import kindOf from 'kind-of'; // https://github.com/jonschlinkert/kind-of

const itis = {};

[ 'Array', 'Number', 'Function', 'RegExp', 'Boolean', 'Date', 'Error',
  'Arguments', 'Null', 'String' ].forEach( name => {
    itis[name] = v => kindOf( v ) === name.toLowerCase();
  });

export default itis;
