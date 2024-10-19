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
                  
                  <BlocTec title="HTML" img_url='src/assets/TecIcons/Html.png' setCurrentPage={() => renderPage("HTML","src/assets/TecIcons/Html.png", descriptions.HTML)} currentPage={currentPage} description="" />
                  <BlocTec title="CSS" img_url='src/assets/TecIcons/CSS.png' setCurrentPage={() => renderPage("CSS","src/assets/TecIcons/CSS.png",descriptions.CSS)} currentPage={currentPage} description=" " />
                  <BlocTec title="JAVA" img_url="src/assets/TecIcons/Java.png" setCurrentPage={() => renderPage("JAVA","src/assets/TecIcons/Java.png",descriptions.Java)} currentPage={currentPage} description=" " ></BlocTec>
                  <BlocTec title="JavaScript" img_url='src/assets/TecIcons/JavaScript.png' setCurrentPage={() => renderPage("JavaScript","src/assets/TecIcons/JavaScript.png", descriptions.JavaScript)} currentPage={currentPage} description=" " />
                  <BlocTec title="TypeScript" img_url="src/assets/TecIcons/TypeScript.png" setCurrentPage={() => renderPage("TypeScript","src/assets/TecIcons/TypeScript.png", descriptions.TypeScript)} currentPage={currentPage} description=" " ></BlocTec>
                  <BlocTec title="GIT" img_url="src/assets/TecIcons/Git.png" setCurrentPage={() => renderPage("Git","src/assets/TecIcons/Git.png", descriptions.GIT)} currentPage={currentPage} description=" " ></BlocTec>

              </>
}
            
            children2={
              <>
                <BlocTec title="REACT" img_url="src/assets/TecIcons/React2.png" setCurrentPage={() => renderPage("REACT","src/assets/TecIcons/React2.png",descriptions.React)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="TAILWIND" img_url="src/assets/TecIcons/TailWind.png" setCurrentPage={() => renderPage("TAILWIND","src/assets/TecIcons/TailWind.png", descriptions.Tailwind)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="FLUTTER" img_url="src/assets/TecIcons/Flutter.png" setCurrentPage={() => renderPage("FLUTTER","src/assets/TecIcons/Flutter.png", descriptions.Flutter)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="NODE.JS" img_url="src/assets/TecIcons/Nodejs.png" setCurrentPage={() => renderPage("NODE.JS","src/assets/TecIcons/Nodejs.png", descriptions.NodeJS)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="PRISMA" img_url="src/assets/TecIcons/Prisma.png" setCurrentPage={() => renderPage("PRISMA","src/assets/TecIcons/Prisma.png", descriptions.Prisma)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="MONGODB" img_url="src/assets/TecIcons/Mongodb.png" setCurrentPage={() => renderPage("MONGODB","src/assets/TecIcons/Mongodb.png", descriptions.MongoDB)} currentPage={currentPage} description=" " ></BlocTec>
              </>
            }
            
            children3={
              <>
                <BlocTec title="DOCKER" img_url="src/assets/TecIcons/Docker.png" setCurrentPage={() => renderPage("DOCKER","src/assets/TecIcons/Docker.png", descriptions.Docker)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="POSTMAN" img_url="src/assets/TecIcons/Postman.png" setCurrentPage={() => renderPage("POSTMAN","src/assets/TecIcons/Postman.png",descriptions.Postman)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="SPRINGBOOT" img_url="src/assets/TecIcons/Springboot.png" setCurrentPage={() => renderPage("SPRINGBOOT","src/assets/TecIcons/Springboot.png", descriptions.SpringBoot)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="FIGMA" img_url="src/assets/TecIcons/Figma.png"  setCurrentPage={() => renderPage("FIGMA","src/assets/TecIcons/Figma.png", descriptions.Figma)} currentPage={currentPage} description=" " ></BlocTec> 
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
