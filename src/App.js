import './App.css';
import { Btn } from './Btn/Btn';
import PropTypes from 'prop-types';
const fruits = ['Apple', 'Banana', 'Cherry'];

function App({test}) {
  const info = "react";
  // console.log(props); це обєкт в якому лежать дані які ми передавали в цей компонент функцію
  // const {test} = props;
  return (
    <div className="App">
      <ul>
{
        fruits.map((fruit) => {
        return <li>{fruit}</li>
})  
}
      </ul>
      <Btn text={fruits} message="btn"/>
      <p>{test}</p>
    </div>
  );
}

App.propTypes = {
  test: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
}
export default App;
