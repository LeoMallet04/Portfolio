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
      <br />
      <br /> 
      <br />
      <Topics title={"About me"} description={descriptions.ABOUTME} children={""} />
      <br />
      <br />
      <Line></Line>
      <Topics title={"Skills"} description={""} >
          <BlocTecList
            children1={
              <>
                  
                  <BlocTec title="HTML" img_url='/assets/tec/html.png' setCurrentPage={() => renderPage("HTML","/assets/tec/html.png", descriptions.HTML)} currentPage={currentPage} description="" />
                  <BlocTec title="CSS" img_url='/assets/tec/css.png' setCurrentPage={() => renderPage("CSS","/assets/tec/css.png",descriptions.CSS)} currentPage={currentPage} description=" " />
                  <BlocTec title="JAVA" img_url="/assets/tec/java.png" setCurrentPage={() => renderPage("JAVA","/assets/tec/java.png",descriptions.Java)} currentPage={currentPage} description=" " ></BlocTec>
                  <BlocTec title="JavaScript" img_url='/assets/tec/javascript.png' setCurrentPage={() => renderPage("JavaScript","/assets/tec/javascript.png", descriptions.JavaScript)} currentPage={currentPage} description=" " />
                  <BlocTec title="TypeScript" img_url="/assets/tec/typescript.png" setCurrentPage={() => renderPage("TypeScript","/assets/tec/typescript.png", descriptions.TypeScript)} currentPage={currentPage} description=" " ></BlocTec>
                  <BlocTec title="GIT" img_url="/assets/tec/git.png" setCurrentPage={() => renderPage("Git","/assets/tec/git.png", descriptions.GIT)} currentPage={currentPage} description=" " ></BlocTec>

              </>
}
            
            children2={
              <>
                <BlocTec title="REACT" img_url="/assets/tec/react.png" setCurrentPage={() => renderPage("REACT","/assets/tec/react.png",descriptions.React)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="TAILWIND" img_url="/assets/tec/tailwind.png" setCurrentPage={() => renderPage("TAILWIND","/assets/tec/tailwind.png", descriptions.Tailwind)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="FLUTTER" img_url="/assets/tec/flutter.png" setCurrentPage={() => renderPage("FLUTTER","/assets/tec/flutter.png", descriptions.Flutter)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="NODE.JS" img_url="/assets/tec/nodejs.png" setCurrentPage={() => renderPage("NODE.JS","/assets/tec/nodejs.png", descriptions.NodeJS)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="PRISMA" img_url="/assets/tec/prisma.png" setCurrentPage={() => renderPage("PRISMA","/assets/tec/prisma.png", descriptions.Prisma)} currentPage={currentPage} description=" " ></BlocTec>
                <BlocTec title="MONGODB" img_url="/assets/tec/mongodb.png" setCurrentPage={() => renderPage("MONGODB","/assets/tec/mongodb.png", descriptions.MongoDB)} currentPage={currentPage} description=" " ></BlocTec>
              </>
            }
            
            children3={
              <>
                <BlocTec title="DOCKER" img_url="/assets/tec/docker.png" setCurrentPage={() => renderPage("DOCKER","/assets/tec/docker.png", descriptions.Docker)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="POSTMAN" img_url="/assets/tec/postman.png" setCurrentPage={() => renderPage("POSTMAN","/assets/tec/postman.png",descriptions.Postman)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="SPRINGBOOT" img_url="/assets/tec/springboot.png" setCurrentPage={() => renderPage("SPRINGBOOT","/assets/tec/springboot.png", descriptions.SpringBoot)} currentPage={currentPage} description=" "  ></BlocTec>
                <BlocTec title="FIGMA" img_url="/assets/tec/figma.png"  setCurrentPage={() => renderPage("FIGMA","/assets/tec/figma.png", descriptions.Figma)} currentPage={currentPage} description=" " ></BlocTec> 
              </>
            }
          />
         <BlocTecVisual currentPage={currentPage} ></BlocTecVisual>
      </Topics>
      <Line></Line>
      <Topics title={"Projects"} description={""} >
        <BlocProjectList></BlocProjectList>
      </Topics>
    </div>
    
    </>
  )
}

export default App
