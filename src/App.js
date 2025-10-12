// import './App.css';
import x from './App.module.css'
import { Btn } from './components/Btn';
import { Text } from './Text/Text';
import PropTypes from 'prop-types';
import { ButtonElement } from './components/Button/Button.jsx';
import { MyContainer } from './components/Container/Container.jsx';
import { GlobalStyle } from './GlobalStyle.js';


const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(x);


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ButtonElement type="button"/>
    </div>
  );
}



export default App;
