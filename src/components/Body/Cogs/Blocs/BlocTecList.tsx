function BlocTecList(props: {children1: any, children2: any, children3: any}){
    return(
        <div className="pt-10">
            <ul className="flex flex-row pr-5 pl-5 pb-2">
                {props.children1}
                {/* <BlocTec title="HTML" img_url="src/assets/Html.svg" ></BlocTec>
                <BlocTec title="CSS" img_url="src/assets/CSS.svg" ></BlocTec>
                <BlocTec title="JAVA" img_url="src/assets/Java.svg" ></BlocTec>
                <BlocTec title="JAVASCRIPT" img_url="src/assets/JavaScript.svg" ></BlocTec>
                <BlocTec title="TYPESCRIPT" img_url="src/assets/TypeScript.svg" ></BlocTec>
                <BlocTec title="GIT" img_url="src/assets/Git.svg" ></BlocTec> */}
            </ul>
            <ul className="flex flex-row pr-5 pl-5 pb-2">
                {props.children2}
                {/* <BlocTec title="REACT" img_url="src/assets/React2.svg" ></BlocTec>
                <BlocTec title="TAILWIND" img_url="src/assets/TailWind.svg" ></BlocTec>
                <BlocTec title="NODE.JS" img_url="src/assets/Nodejs.svg" ></BlocTec>
                <BlocTec title="PRISMA" img_url="src/assets/Prisma.svg"  ></BlocTec>
                <BlocTec title="MONGODB" img_url="src/assets/Mongodb.svg"  ></BlocTec>
                <BlocTec title="FIGMA" img_url="src/assets/Figma.svg"  ></BlocTec> */}
            </ul>
            <ul className="flex flex-row pr-5 pl-5 pb-2">
                {props.children3}
                {/* <BlocTec title="DOCKER" img_url="src/assets/React2.svg" ></BlocTec>
                <BlocTec title="POSTMAN" img_url="src/assets/TailWind.svg" ></BlocTec>
                <BlocTec title="SPRINGBOOT" img_url="src/assets/Springboot.svg" ></BlocTec> */}
            </ul>
        </div>
    
    )
}

export default BlocTecList;