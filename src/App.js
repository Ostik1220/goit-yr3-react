// import './App.css';
import x from './App.module.css'
import { Btn } from './components/Btn';
import { Text } from './Text/Text';
import PropTypes from 'prop-types';



const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(x);



function App({test}) {

  // console.log(props); це обєкт в якому лежать дані які ми передавали в цей компонент функцію
  // const {test} = props;
  return (
    <div className="App">
        <h1 style={{color: "green"}}>Привіт</h1>
        <p className={x.text}>список фруктів</p>
        <Text context="тест класів"/>
      <ul className='list'>
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
