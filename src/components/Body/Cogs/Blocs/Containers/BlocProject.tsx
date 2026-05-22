import { motion } from "framer-motion";


function BlocProject(props: {img_url:string, link:string}){ {
    const parent = {
        VariantA: {scale: 1},
        VariantB: {scale: 1.1}        
    }
    return(
        <motion.div 
        variants={parent}
        initial="VariantA"
        whileHover="VariantB"
        >
        <button onClick= {() => window.open(props.link)}className="h-[275px] w-[325px] bg-bloc-color1 rounded-xl shadow-gray m-2"> 
            <img src={props.img_url} alt="" />
        </button>
        </motion.div>
    )
}
}
export default BlocProject;