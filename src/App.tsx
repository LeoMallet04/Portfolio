import './components/NavBar.tsx'
import './App.css'
import NavBar from './components/NavBar.tsx';
import Pessoa from './components/SayMyName.tsx';

function App() {
  const name = 'João'
  const age = 25
  const profession = 'Psicólogo'
  return (
    

    <>
       <NavBar />
    <Pessoa
    name={name} 
    age={age} 
    profession={profession}
    />
    </>
  )
}

// function changeColor(){
//   return document.body.style.backgroundColor = 'black'
// }

export default App
