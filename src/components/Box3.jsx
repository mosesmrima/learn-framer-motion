import {motion} from "framer-motion";

export default function Box3() {
    const boxVariant = {
        hidden: {
           x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.5
            },
        }
    }
    const listVariant = {
        hidden: {
            opacity: 0,
            x: -10
        },
        visible: {
            opacity: 1,
            x: 0,
        }
    }
    return (
        <div className={"pb-80"}>
            <motion.div
                className={"w-80 h-80 bg-blue-300 flex flex-col items-center justify-center"}
                variants={boxVariant}
                animate={"visible"}
                initial={"hidden"}
            >
                {
                    [1, 2, 3].map(_ => {
                        return <motion.li className={"w-2 list-none h-2 p-8 m-2 bg-black"}
                                          variants={listVariant}
                        ></motion.li>
                    })
                }
            </motion.div>
        </div>
    );
}