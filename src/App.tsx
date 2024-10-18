// React Server Components
import './components/NavBar/NavBar.tsx'
import './App.css'
import NavBar from './components/NavBar/NavBar.tsx';
import Topics from './components/Body/Topics.tsx';
import FirstScreen from './components/Body/FirstScreen.tsx';
import Line from './components/Body/Cogs/Line.tsx';
import BlocTecList from './components/Body/Cogs/Blocs/BlocTecList.tsx';
import BlocTecVisual from './components/Body/Cogs/Blocs/Containers/BlocTecVisual.tsx';
import descriptions from './components/Body/Cogs/Enum.tsx';
import BlocProjectList from './components/Body/Cogs/Blocs/BlocProjectList.tsx';
import { useState } from 'react';
// import VisualConteiner from './components/Body/Cogs/VisualConteiner.tsx';
import BlocTec from './components/Body/Cogs/Blocs/Containers/BlocTec.tsx';


type currentPage = {
  img_url: string;
  title: string;
  description: string;
  isExpanded: boolean;
  
}

function App() {
  
  const [currentPage, setCurrentPage] = useState<currentPage>({
    title: "",
    img_url: "", 
    description: "",
    isExpanded: false,
  });
  
  function renderPage(newTitle: string, newImgUrl: string, newDescription: string){ {
    setCurrentPage({
      title: newTitle,
      img_url: newImgUrl,
      description: newDescription,
      isExpanded: true,
    });
  }
  } 


  return (
    <>
  
    <NavBar />
    <FirstScreen />
    <div className='bg-sections-color'>
      <br />
      <br />  
      <Topics title={"Sobre mim"} description={descriptions.ABOUTME} children={""} />
      <br />
      <br />
      <Line></Line>
      <Topics title={"Tecnologias "} description={""} >
          <BlocTecList
            children1={
              <>
                  
                  <BlocTec title="HTML" img_url='src/assets/TecIcons/Html.svg' setCurrentPage={() => renderPage("HTML","./src/assets/TecIcons/Html.svg", descriptions.HTML)} currentPage={currentPage} description="" />
                  <BlocTec title="CSS" img_url='src/assets/TecIcons/CSS.svg' setCurrentPage={() => renderPage("CSS","src/assets/TecIcons/CSS.svg",descriptions.CSS)} currentPage={currentPage} description=" " />
                  <BlocTec title="JAVA" img_url="src/assets/TecIcons/Java.svg" setCurrentPage={() => renderPage("JAVA","src/assets/TecIcons/Java.svg",descriptions.Java)} currentPage={currentPage} description=" " ></BlocTec>
                  <BlocTec title="JavaScript" img_url='src/assets/TecIcons/JavaScript.svg' setCurrentPage={() => renderPage("JavaScript","src/assets/TecIcons/JavaScript.svg", descriptions.JavaScript)} currentPage={currentPage} description=" " />
                  <BlocTec title="TypeScript" img_url="src/assets/TecIcons/TypeScript.svg" setCurrentPage={() => renderPage("TypeScript","src/assets/TecIcons/TypeScript.svg", descriptions.TypeScript)} currentPage={currentPage} description=" " ></BlocTec>
                  <BlocTec title="GIT" img_url="src/assets/TecIcons/Git.svg" setCurrentPage={() => renderPage("Git","src/assets/TecIcons/Git.svg", descriptions.GIT)} currentPage={currentPage} description=" " ></BlocTec>

              </>
}
            
            children2={
              <>
                <BlocTec title="REACT" img_url="src/assets/TecIcons/React2.svg" setCurrentPage={() => renderPage("REACT","src/assets/TecIcons/React2.svg",descriptions.React)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="TAILWIND" img_url="src/assets/TecIcons/TailWind.svg" setCurrentPage={() => renderPage("TAILWIND","src/assets/TecIcons/TailWind.svg", descriptions.Tailwind)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="FLUTTER" img_url="src/assets/TecIcons/Flutter.svg" setCurrentPage={() => renderPage("FLUTTER","src/assets/TecIcons/Flutter.svg", descriptions.Flutter)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="NODE.JS" img_url="src/assets/TecIcons/Nodejs.svg" setCurrentPage={() => renderPage("NODE.JS","src/assets/TecIcons/Nodejs.svg", descriptions.NodeJS)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="PRISMA" img_url="src/assets/TecIcons/Prisma.svg" setCurrentPage={() => renderPage("PRISMA","src/assets/TecIcons/Prisma.svg", descriptions.Prisma)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="MONGODB" img_url="src/assets/TecIcons/Mongodb.svg" setCurrentPage={() => renderPage("MONGODB","src/assets/TecIcons/Mongodb.svg", descriptions.MongoDB)} currentPage={currentPage} description=" " ></BlocTec>
              </>
            }
            
            children3={
              <>
                <BlocTec title="DOCKER" img_url="src/assets/TecIcons/Docker.svg" setCurrentPage={() => renderPage("DOCKER","src/assets/TecIcons/Docker.svg", descriptions.Docker)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="POSTMAN" img_url="src/assets/TecIcons/Postman.svg" setCurrentPage={() => renderPage("POSTMAN","src/assets/TecIcons/Postman.svg",descriptions.Postman)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="SPRINGBOOT" img_url="src/assets/TecIcons/Springboot.svg" setCurrentPage={() => renderPage("SPRINGBOOT","src/assets/TecIcons/Springboot.svg", descriptions.SpringBoot)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="FIGMA" img_url="src/assets/TecIcons/Figma.svg"  setCurrentPage={() => renderPage("FIGMA","src/assets/TecIcons/Figma.svg", descriptions.Figma)} currentPage={currentPage} description=" " ></BlocTec> 
              </>
            }
          />
         <BlocTecVisual currentPage={currentPage} ></BlocTecVisual>
      </Topics>
      <Line></Line>
      <Topics title={"Projetos"} description={""} >
        <BlocProjectList></BlocProjectList>
      </Topics>
    </div>
    
    </>
  )
}

export default App
