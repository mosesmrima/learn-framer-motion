import {motion} from "framer-motion";

export default function Box4() {
    const boxVariant = {
        animate: {
            scale: [1, 0.4, 1.4, 1.4, 1, 1],
            borderRadius: ["0%", "20%", "50%", "50%", "20%", "0%"],
            rotate: [0, 270, 180, 360, 360, 0],
            transition: {
                duration: 4}
        }
    }
    return (
        <div className={"pb-80"}>
            <motion.div
                className={"w-80 h-80 bg-blue-300 flex flex-col items-center justify-center"}
                variants={boxVariant}
                animate={"animate"}
            >

            </motion.div>
        </div>
    );
}