import { motion } from "framer-motion";
import fotoBia from "../assets/IMG_6124.jpg";
import { TypeAnimation } from "react-type-animation";
import { AppButton } from "./app-button";

export function HeroSection() {
    return (
        <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 flex flex-col justify-center text-center sm:text-left lg:justify-self-start"
            >
            <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">
                Hi, I'm
                </span>
                <br></br>
                <TypeAnimation
                sequence={["Bia Miranda", 3000, "Web Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </h1>
            <div>
                <AppButton>Hire me</AppButton>
                <a
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-700 to-pink-500 hover:bg-slate-800 mt-3 lg:text-xl"
                >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                    Download CV
                </span>
                </a>
            </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
                <img
                src={fotoBia}
                alt="Avatar da Bia"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={300}
                height={300}
                />
            </div>
            </motion.div>
        </div>
        </section>
    );
}
