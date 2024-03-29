import React from 'react'

function Work() {
    var images = [
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp', top: "55%", left: "45%", isActive: true },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png', top: "53%", left: "47%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg', top: "51%", left: "49%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp', top: "49%", left: "51%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png', top: "47%", left: "53%", isActive: false },
    ]
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