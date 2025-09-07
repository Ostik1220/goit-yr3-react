import './App.css';

const fruits = ['Apple', 'Banana', 'Cherry'];

function App() {
  return (
    <div className="App">
      <ul>
{
        fruits.map((fruit) => {
        return <li>{fruit}</li>
})  
}
      </ul>
    </div>
  );
}

export default App;
