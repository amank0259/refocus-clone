import React from 'react'

function Footer() {
    return (
        <div className='w-full'>
            <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
                <div className='basis-1/2'>
                    <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
                </div>
                <div className='basis-1/2 flex gap-4'>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                        {["Instagram", "Twitter", "LinkedIn", "Github"].map((item, index) => (
                            <a className='block mt-2 text-zinc-600 capitalize'>{item}</a>
                        ))}
                    </div>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                        {["Instagram", "Twitter", "LinkedIn", "Github"].map((item, index) => (
                            <a className='block mt-2 text-zinc-600 capitalize'>{item}</a>
                        ))}
                    </div>
                    <div className='basis-1/2 flex items-end flex-col text-right'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum veritatis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer