import { motion } from "framer-motion";
type CurrentBlock = {
    img_url: string;
    title: string;
    description: string;
    isExpanded: boolean;
    
  }

function BlocTecVisual(props: {currentBlock : CurrentBlock}) {
    const parent = {
        VariantA: {scale: 0},
        VariantB: {scale: 1}
    }
    
    
    return (
        <motion.div
        key = {props.currentBlock.title}
        initial="VariantA"
        animate={props.currentBlock.isExpanded ? "VariantB" : "VariantA"}
        variants={parent}
        >    
            <div className="h-[425px] w-[375px] bg-[linear-gradient(#FFFFFF_92%,_#9E0000_100%)] rounded-xl shadow-gray m-2 mr-32 mb-10 flex flex-col items-center justify-center">
            <div>
                {props.currentBlock.img_url && (
                    <img className="h-[150px] w-[150px] mb-10" src={props.currentBlock.img_url} alt={props.currentBlock.title} />
                )}
                <h1 className="text-black font-bold">{props.currentBlock.title}</h1>
            </div>
            
            <p className="text-black font-semibold">{props.currentBlock.description}</p>
        </div>
        </motion.div>
        
    );
}

export default BlocTecVisual;
