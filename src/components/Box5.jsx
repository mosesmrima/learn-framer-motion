import {motion, useAnimation} from "framer-motion";

export default function Box5() {
    const control = useAnimation()
    return (
        <div className={"pb-80"}>
            <button onClick={() => control.start(
                {
                    x: "50vw",
                    transition: {
                        duration: 1
                    }
                }
            )} className={"text-white p-2 mr-3 mb-12 bg-blue-200"} >Right</button>
            <button onClick={() => control.start(
                {
                    x: 0,
                    transition: {
                        duration: 1
                    }
                }
            )} className={"text-white p-2 mr-3 mb-12 bg-blue-200"} >Left</button>
            <button onClick={() => control.start(
                {
                    borderRadius: "50%",
                    transition: {
                        duration: 1
                    }
                }
            )} className={"text-white p-2 mr-3 mb-12 bg-blue-200"} >Circle</button>
            <button onClick={() => control.start(
                {
                    borderRadius: 0,
                    transition: {
                        duration: 3
                    }
                }
            )} className={"text-white p-2 mr-3 mb-12 bg-blue-200"} >Square</button>
            <button onClick={() => control.stop()} className={"text-white p-2 mr-3 mb-12 bg-blue-200"} >Stop</button>
            <motion.div
                className={"w-80 h-80 bg-blue-300 flex flex-col items-center justify-center"}
                animate={control}
            >
            </motion.div>
        </div>
    );
}