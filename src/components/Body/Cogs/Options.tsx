import { useState } from "react";
import { motion, Variants } from "framer-motion";


const itemsVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

function Options(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="Contate-me"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-black rounded-xl h-8 w-28 text-base mt-4 mx-3 font-bold"
          >
            Contate-me
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }

              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
            </motion.div>
          </motion.button>
          <motion.ul
            className="bg-black h-auto items-center "
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05
                }
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
                }
              }
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <motion.li variants={itemsVariants}><button onClick={() => { window.open("https://wa.me/5551986027476")}}> <div className="flex flex-row"> 
                <img className="h-6 w-6 mr-3" src="src/assets/NavBarIcons/WhatsAppWhite2.svg" alt="" />WhatsApp
              </div> </button> </motion.li>
            <motion.li variants={itemsVariants}><button onClick={() => { window.open("mailto:leonardoms.2010@hotmail.com?subject=Contato&body=Olá,%20gostaria%20de%20entrar%20em%20contato.")}}> <div className="flex flex-row"> 
                <img className="h-6 w-6 mr-3" src="src/assets/NavBarIcons/EmailWhiteVF.svg" alt="" />Email
              </div> </button></motion.li>
          </motion.ul>
        </motion.nav>
    );
}

export default Options;
