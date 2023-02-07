import {motion} from "framer-motion";

export default function Box2() {
    return (
        <div className={"pb-80"}>
            <motion.div
                className={"w-80 h-80 bg-blue-300 flex flex-col items-center justify-center"}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
                drag={"y"}
                dragConstraints={{
                    top: 0,
                    bottom: 0
                }}
            >

            </motion.div>
        </div>
    );
}