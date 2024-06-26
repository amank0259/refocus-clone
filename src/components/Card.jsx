import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io'

function Card({ width, start, para, hover }) {
    return (
        <div className={`${width} ${hover} hover:p-6 bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between`}>
            <div className='w-full'>
                <div className='w-full flex justify-between items-center'>
                    <h3>one heading</h3>
                    <IoIosArrowRoundForward />
                </div>
                <h1 className='text-3xl font-medium mt-5'>Whatever Heading. </h1>
            </div>
            <div className='down w-full'>
                {start &&
                    <>
                        <h1 className='text-6xl font-semibold tracking-tight leading-none'>start a project</h1>
                        <button className='rounded-full py-2 px-5 border border-zinc-50 mt-5'>Contact Us</button>
                    </>
                }

                {para && <p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet consectetur.</p>}
            </div>
        </div>
    )
}

export default Card