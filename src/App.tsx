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
                  
                  <BlocTec title="HTML" img_url='src/assets/tecicons/html.png' setCurrentPage={() => renderPage("HTML","src/assets/tecicons/html.png", descriptions.HTML)} currentPage={currentPage} description="" />
                  <BlocTec title="CSS" img_url='src/assets/tecicons/css.png' setCurrentPage={() => renderPage("CSS","src/assets/tecicons/css.png",descriptions.CSS)} currentPage={currentPage} description=" " />
                  <BlocTec title="JAVA" img_url="src/assets/tecicons/java.png" setCurrentPage={() => renderPage("JAVA","src/assets/tecicons/java.png",descriptions.Java)} currentPage={currentPage} description=" " ></BlocTec>
                  <BlocTec title="JavaScript" img_url='src/assets/tecicons/javascript.png' setCurrentPage={() => renderPage("JavaScript","src/assets/tecicons/javascript.png", descriptions.JavaScript)} currentPage={currentPage} description=" " />
                  <BlocTec title="TypeScript" img_url="src/assets/tecicons/typescript.png" setCurrentPage={() => renderPage("TypeScript","src/assets/tecicons/typescript.png", descriptions.TypeScript)} currentPage={currentPage} description=" " ></BlocTec>
                  <BlocTec title="GIT" img_url="src/assets/tecicons/git.png" setCurrentPage={() => renderPage("Git","src/assets/tecicons/git.png", descriptions.GIT)} currentPage={currentPage} description=" " ></BlocTec>

              </>
}
            
            children2={
              <>
                <BlocTec title="REACT" img_url="src/assets/tecicons/react.png" setCurrentPage={() => renderPage("REACT","src/assets/tecicons/react.png",descriptions.React)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="TAILWIND" img_url="src/assets/tecicons/tailwind.png" setCurrentPage={() => renderPage("TAILWIND","src/assets/tecicons/tailwind.png", descriptions.Tailwind)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="FLUTTER" img_url="src/assets/tecicons/flutter.png" setCurrentPage={() => renderPage("FLUTTER","src/assets/tecicons/flutter.png", descriptions.Flutter)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="NODE.JS" img_url="src/assets/tecicons/nodejs.png" setCurrentPage={() => renderPage("NODE.JS","src/assets/tecicons/nodejs.png", descriptions.NodeJS)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="PRISMA" img_url="src/assets/tecicons/prisma.png" setCurrentPage={() => renderPage("PRISMA","src/assets/tecicons/prisma.png", descriptions.Prisma)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="MONGODB" img_url="src/assets/tecicons/mongodb.png" setCurrentPage={() => renderPage("MONGODB","src/assets/tecicons/mongodb.png", descriptions.MongoDB)} currentPage={currentPage} description=" " ></BlocTec>
              </>
            }
            
            children3={
              <>
                <BlocTec title="DOCKER" img_url="src/assets/tecicons/docker.png" setCurrentPage={() => renderPage("DOCKER","src/assets/tecicons/docker.png", descriptions.Docker)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="POSTMAN" img_url="src/assets/tecicons/postman.png" setCurrentPage={() => renderPage("POSTMAN","src/assets/tecicons/postman.png",descriptions.Postman)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="SPRINGBOOT" img_url="src/assets/tecicons/springboot.png" setCurrentPage={() => renderPage("SPRINGBOOT","src/assets/tecicons/springboot.png", descriptions.SpringBoot)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="FIGMA" img_url="src/assets/tecicons/figma.png"  setCurrentPage={() => renderPage("FIGMA","src/assets/tecicons/figma.png", descriptions.Figma)} currentPage={currentPage} description=" " ></BlocTec> 
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
