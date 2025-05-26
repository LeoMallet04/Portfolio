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


type CurrentBlock = {
  img_url: string;
  title: string;
  description: string;
  isExpanded: boolean;
  
}

function App() {
  
  const [currentBlock, setCurrentBlock] = useState<CurrentBlock>({
    title: "",
    img_url: "", 
    description: "",
    isExpanded: false,
  });
  
  function renderBlock(newTitle: string, newImgUrl: string, newDescription: string){ {
    setCurrentBlock({
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
      <div className='h-36'></div>
      <Topics title={"About me"} description={descriptions.ABOUTME} children={""} />
      <div className='h-12'></div>
      <Line></Line>
      <Topics title={"Skills"} description={""} >
          <BlocTecList
            children1={
              <>
                  
                  <BlocTec title="HTML" img_url='/assets/tec/html.png' setCurrentBlock={() => renderBlock("HTML","/assets/tec/html.png", descriptions.HTML)} currentBlock={currentBlock} description="" />
                  <BlocTec title="CSS" img_url='/assets/tec/css.png' setCurrentBlock={() => renderBlock("CSS","/assets/tec/css.png",descriptions.CSS)} currentBlock={currentBlock} description=" " />
                  <BlocTec title="JAVA" img_url="/assets/tec/java.png" setCurrentBlock={() => renderBlock("JAVA","/assets/tec/java.png",descriptions.Java)} currentBlock={currentBlock} description=" " ></BlocTec>
                  <BlocTec title="JavaScript" img_url='/assets/tec/javascript.png' setCurrentBlock={() => renderBlock("JavaScript","/assets/tec/javascript.png", descriptions.JavaScript)} currentBlock={currentBlock} description=" " />
                  <BlocTec title="TypeScript" img_url="/assets/tec/typescript.png" setCurrentBlock={() => renderBlock("TypeScript","/assets/tec/typescript.png", descriptions.TypeScript)} currentBlock={currentBlock} description=" " ></BlocTec>
                  <BlocTec title="GIT" img_url="/assets/tec/git.png" setCurrentBlock={() => renderBlock("Git","/assets/tec/git.png", descriptions.GIT)} currentBlock={currentBlock} description=" " ></BlocTec>

              </>
}
            
            children2={
              <>
                <BlocTec title="REACT" img_url="/assets/tec/react.png" setCurrentBlock={() => renderBlock("REACT","/assets/tec/react.png",descriptions.React)} currentBlock={currentBlock} description=" "  ></BlocTec>
                <BlocTec title="TAILWIND" img_url="/assets/tec/tailwind.png" setCurrentBlock={() => renderBlock("TAILWIND","/assets/tec/tailwind.png", descriptions.Tailwind)} currentBlock={currentBlock} description=" " ></BlocTec>
                <BlocTec title="FLUTTER" img_url="/assets/tec/flutter.png" setCurrentBlock={() => renderBlock("FLUTTER","/assets/tec/flutter.png", descriptions.Flutter)} currentBlock={currentBlock} description=" " ></BlocTec>
                <BlocTec title="NODE.JS" img_url="/assets/tec/nodejs.png" setCurrentBlock={() => renderBlock("NODE.JS","/assets/tec/nodejs.png", descriptions.NodeJS)} currentBlock={currentBlock} description=" " ></BlocTec>
                <BlocTec title="PRISMA" img_url="/assets/tec/prisma.png" setCurrentBlock={() => renderBlock("PRISMA","/assets/tec/prisma.png", descriptions.Prisma)} currentBlock={currentBlock} description=" " ></BlocTec>
                <BlocTec title="MONGODB" img_url="/assets/tec/mongodb.png" setCurrentBlock={() => renderBlock("MONGODB","/assets/tec/mongodb.png", descriptions.MongoDB)} currentBlock={currentBlock} description=" " ></BlocTec>
              </>
            }
            
            children3={
              <>
                <BlocTec title="DOCKER" img_url="/assets/tec/docker.png" setCurrentBlock={() => renderBlock("DOCKER","/assets/tec/docker.png", descriptions.Docker)} currentBlock={currentBlock} description=" "  ></BlocTec>
                <BlocTec title="POSTMAN" img_url="/assets/tec/postman.png" setCurrentBlock={() => renderBlock("POSTMAN","/assets/tec/postman.png",descriptions.Postman)} currentBlock={currentBlock} description=" "  ></BlocTec>
                <BlocTec title="SPRINGBOOT" img_url="/assets/tec/springboot.png" setCurrentBlock={() => renderBlock("SPRINGBOOT","/assets/tec/springboot.png", descriptions.SpringBoot)} currentBlock={currentBlock} description=" "  ></BlocTec>
                <BlocTec title="FIGMA" img_url="/assets/tec/figma.png"  setCurrentBlock={() => renderBlock("FIGMA","/assets/tec/figma.png", descriptions.Figma)} currentBlock={currentBlock} description=" " ></BlocTec> 
              </>
            }
          />
         <BlocTecVisual currentBlock={currentBlock} ></BlocTecVisual>
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
