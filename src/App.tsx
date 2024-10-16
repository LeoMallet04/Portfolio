import './components/NavBar/NavBar.tsx'
import './App.css'
import NavBar from './components/NavBar/NavBar.tsx';
import Topics from './components/Body/Topics.tsx';
import FirstScreen from './components/Body/FirstScreen.tsx';
import Line from './components/Body/Cogs/Line.tsx';
import BlocList from './components/Body/Cogs/BlocList.tsx';
import Bloc from './components/Body/Cogs/Bloc.tsx';


function App() {
  
  return (
    <>
    <NavBar />
    <FirstScreen />
    <div className='bg-sections-color'>
      <Topics title={"Sobre mim"} description={"BLABLABLABLABLABLABLABlABLABLA"} children={""} />
      <Line></Line>
      <Topics title={"Tecnologias "} description={""} >
        <BlocList option={1}></BlocList>
      </Topics>
      <Line></Line>
      <Topics title={"Projetos"} description={""} >
        <BlocList option={2}></BlocList>
      </Topics>
    </div>
    
    </>
  )
}

// function changeColor(){
//   return document.body.style.backgroundColor = 'black'
// }

export default App
