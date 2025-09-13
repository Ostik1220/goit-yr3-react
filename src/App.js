import './App.css';
import { Btn } from './Btn/Btn';
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
      <Btn text={info} message="btn"/>
      <p>{test}</p>
    </div>
  );
}

export default App;
