import { motion } from "framer-motion";

// function BlocTec(props: {title: string, img_url: string}){
//     function Event(){
//         console.log("Clicou")
//     }
    
//     const parent = {
//         VariantA: {scale: 1},
//         VariantB: {scale: 1.1}        
//     }
//     return(
//         <motion.div 
//         variants={parent}
//         initial="VariantA"
//         whileHover="VariantB"
//         >    
//         <button onClick={() => Event()}className="h-[90px] w-[90px] bg-[linear-gradient(#FFFFFF_87%,_#9E0000_100%)] rounded-xl shadow-red m-2"> 
//             <div className="flex flex-col mb-2">
//                 <h1 className="text-black font-extrabold text-xs">{props.title}</h1>
//                 <img src={props.img_url} alt="" className="h-[50px] w-[50px] ml-5   " />
//             </div>
            
//         </button> 
//         </motion.div>      
//     )

// }

// export default BlocTec;
type CurrentPage = {
    img_url: string;
    title: string;
    description: string;
    isExpanded: boolean;
    
  }

function BlocTec(props: {title: string, img_url: string, description: string, currentPage: CurrentPage, setCurrentPage: (page: CurrentPage) => void}){
   
    
    const parent = {
        VariantA: {scale: 1},
        VariantB: {scale: 1.1}        
    }

    function setPage(){
        props.setCurrentPage({title: props.title, img_url: props.img_url, description: props.description, isExpanded: true})
    }

    return(
        <motion.div 
        variants={parent}
        initial="VariantA"
        whileHover="VariantB"
        >    
        <button onClick={() => setPage()} className="h-[90px] w-[90px] bg-[linear-gradient(#FFFFFF_87%,_#9E0000_100%)] rounded-xl shadow-red m-2"> 
            <div className="flex flex-col mb-2">
                <h1 className="text-black font-extrabold text-xs">{props.title}</h1>
                <img src={props.img_url} alt="" className="h-[50px] w-[50px] ml-5   " />
            </div>
            
        </button> 
        </motion.div>      
    )

}

export default BlocTec;