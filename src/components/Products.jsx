import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';

function Products() {
    const products = [
        { title: "arqitel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus numquam alias earum odit.", live: true, case: false },
        { title: "TTR", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus numquam alias earum odit.", live: true, case: false },
        { title: "YIR 2024", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus numquam alias earum odit.", live: true, case: true },
        { title: "Yahoo!", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus numquam alias earum odit.", live: true, case: true },
    ];
    const [position, setPosition] = useState(0);
    const mover = (val) => {
        setPosition(val * 22);
    }

    return (
        <div className='mt-20 relative'>
            {products.map((item, index) => (
                <Product val={item} key={index} mover={mover} index={index} />
            ))}
            <div className='w-full h-full absolute top-0 pointer-events-none'>
                <motion.div initial={{ y: position, X: "-50%" }}
                    animate={{ y: position + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                    className='window absolute w-[30rem] h-[22rem] bg-white left-[25%] overflow-hidden'>
                    <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className=' w-full h-full bg-sky-200'></motion.div>
                    <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className=' w-full h-full bg-sky-300'></motion.div>
                    <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className=' w-full h-full bg-sky-400'></motion.div>
                    <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className=' w-full h-full bg-sky-500'></motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products;