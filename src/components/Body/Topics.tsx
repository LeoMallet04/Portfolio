import { useEffect} from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Topics(props: {title: string, description: string | null, children: any}) {
        const controls: AnimationControls = useAnimation();
        const {ref, inView } = useInView({ threshold: 0.1, rootMargin: '-150px 0px'});

        useEffect(() => {
            if (inView) {
              controls.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.3 },
              });
            }
          }, [controls, inView, 0.3]);
    

    return (
        <motion.div 
        initial={{ x: -150, opacity: 0 }} 
        animate={controls}
        >    
        <div ref={ref} >
        <section className="flex flex-col h-auto items-start p-14 pt-36">
            <h1 className="text-4xl font-bold pl-5">
                {props.title}
            </h1>

            {props.description && (
                <p className="pl-6 pt-5 text-left text-xl"> {props.description}</p>
            )}
            <div className="flex flex-row w-full justify-between">
                {props.children}
            </div>
          
        </section>
        </div>

        </motion.div>
        
    )
}

export default Topics;