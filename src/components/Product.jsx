import React from 'react'
import Button from './Button'

function Product({ val, mover, index }) {
    return (
        <div className='w-full py-20 h-[22rem] text-white'>
            <div onMouseEnter={() => { mover(index) }} className='max-w-screen-xl mx-auto flex items-center justify-between'>
                <h1 className='text-6xl capitalize font-medium'>{val.title}</h1>
                <div className='dets w-1/2'>
                    <p className='mb-6'>{val.description}</p>
                    <div className='flex gap-4 items-center'>
                        {val.live && <Button title='Live Website' />}
                        {val.case && <Button title='Case Study' />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;