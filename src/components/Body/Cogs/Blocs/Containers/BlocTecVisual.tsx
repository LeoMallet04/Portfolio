import { motion } from "framer-motion";
type CurrentPage = {
    img_url: string;
    title: string;
    description: string;
    isExpanded: boolean;
    
  }

function BlocTecVisual(props: {currentPage : CurrentPage}) {
    const parent = {
        VariantA: {scale: 0},
        VariantB: {scale: 1}
    }
    
    
    return (
        <motion.div
        key = {props.currentPage.title}
        initial="VariantA"
        animate={props.currentPage.isExpanded ? "VariantB" : "VariantA"}
        variants={parent}
        >    
            <div className="h-[425px] w-[375px] bg-[linear-gradient(#FFFFFF_92%,_#9E0000_100%)] rounded-xl shadow-gray m-2 mr-32 mb-10 flex flex-col items-center justify-center">
            <div>
                {props.currentPage.img_url && (
                    <img className="h-[150px] w-[150px] mb-10" src={props.currentPage.img_url} alt={props.currentPage.title} />
                )}
                <h1 className="text-black font-bold">{props.currentPage.title}</h1>
            </div>
            
            <p className="text-black font-semibold">{props.currentPage.description}</p>
        </div>
        </motion.div>
        
    );
}

export default BlocTecVisual;
