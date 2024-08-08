import React from 'react'
import { motion } from 'framer-motion'

function AboutMe() {
    return (
        <>
            <section
                id="about-me"
                className="flex flex-row flex-wrap items-center justify-evenly mt-5 rounded-box"
            >
                <motion.div
                    className="flex flex-col gap-5 max-w-2xl"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-6xl self-center lg:self-start">
                        About Me
                    </h1>
                    <p className="text-xl">
                        Hello, I am Hasan Majid, and I am a full-stack developer
                        with experience in mobile and web development to solve
                        real-world problems. I have a passion for learning new
                        technologies and I am currently pursuing my BSc in
                        Computer Science at Toronto Metropolitan University.
                    </p>
                </motion.div>
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src="/MyImage.png"
                    alt="My Image"
                    className=""
                />
            </section>
            <div className="divider"></div>
        </>
    )
}

export default AboutMe
