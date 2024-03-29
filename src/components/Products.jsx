import React from 'react'
import Product from './Product'

function Products() {
    const products = [
        { title: "arqitel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus numquam alias earum odit.", live: true, case: false },
        { title: "TTR", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus numquam alias earum odit.", live: true, case: false },
        { title: "YIR 2024", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus numquam alias earum odit.", live: true, case: true },
        { title: "Yahoo!", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus numquam alias earum odit.", live: true, case: true },
    ]
    return (
        <div className='mt-20'>
            {products.map((item, index) => (
                <Product val={item} />
            ))}
        </div>
    )
}

export default Products;