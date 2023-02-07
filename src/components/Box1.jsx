import {motion}  from "framer-motion"
import {useState} from "react";

export default function Box1 (){
    const [isAnimating, setIsAnimating] = useState(false)
    return (
        <div className={"pb-80"}>
            <motion.div
                className={"w-80 h-80 bg-blue-300 flex flex-col items-center justify-center"}
                initial={{opacity: 0.1}}
                animate={{
                    x: isAnimating? "60vw":0,
                    y: isAnimating?"20vh":0,
                    opacity: isAnimating?1:0.1,
                    backgroundColor: isAnimating?"yellow":"",
                    rotate: isAnimating?360:0
                }}
                transition={{
                    type: "spring",
                    stiffness: 5,
                    damping: 100
                }}
                onClick={()=> setIsAnimating(!isAnimating)}
            >
            </motion.div>
        </div>
    );
}