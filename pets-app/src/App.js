import './App.css';
// import Header, {food1, food2} from "./components/Header"
import Header from "./components/Header"
import PetList from "./components/PetList"

// console.log(Header)
// console.log(food1)
// console.log(food2)

function App() {
  return (
    <div className="app">
      <Header/>
      <PetList/>
      {/* <h1>hello</h1> */}
      {/* <img className="pet" src="./images/dog.jpeg"/>
      <img className="pet" src="./images/cat.png"/> */}
    </div>
  );
}

export default App;
