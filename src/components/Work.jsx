import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

function Work() {
    const [images, setImages] = useState([
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp', top: "52%", left: "40%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png', top: "61%", left: "42%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg', top: "65%", left: "45%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp', top: "70%", left: "48%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png', top: "71%", left: "51%", isActive: false },
    ])
    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (data) => {
        function imagesShow(arr) {
            setImages(prev => (
                prev.map((item, index) => (
                    arr.indexOf(index) === -1 ? (
                        { ...item, isActive: false }
                    )
                        : { ...item, isActive: true }
                ))
            ))
        }
        switch (Math.floor(data * 100)) {
            case 0:
                imagesShow([]);
                break;
            case 1:
                imagesShow([0])
                break;
            case 2:
                imagesShow([0, 1])
                break;
            case 3:
                imagesShow([0, 1, 2])
                break;
            case 4:
                imagesShow([0, 1, 2, 3])
                break;
            case 5:
                imagesShow([0, 1, 2, 3, 4])
                break;
        }
    })

    return (
        <div className='w-full mt-10'>
            <div className='relative max-w-screen-xl mx-auto '>
                <h1 className='text-[30vw] leading-none text-center tracking-tight select-none'>Work</h1>
                <div className='absolute top-0 w-full h-full'>
                    {images.map((item, index) => (
                        item.isActive && (<img key={index} src={item.url} alt="image" className='w-60 rounded-lg absolute -traslate-x-[50%] -translate-y-[50%]' style={{ top: item.top, left: item.left }} />)
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work