import { motion } from "framer-motion";
import React from "react";

function Bloc(props: {img_url: string, option: number}){
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
        {props.option === 1 ? (
        <div className="h-[90px] w-[90px] bg-[linear-gradient(#FFFFFF_87%,_#9E0000_100%)] rounded-xl shadow-red m-2  "> <img src={props.img_url} alt="" /></div>

        ): props.option === 2 ? (
            <div className="h-[275px] w-[325px] bg-bloc-color1 rounded-xl shadow-gray m-2"></div>

        ): props.option === 3? (
            <div className="h-[275px] w-[325px] bg-bloc-color1 rounded-xl shadow-gray m-2"></div>
        ):null}
        </motion.div>
        
    )
}

export default Bloc;