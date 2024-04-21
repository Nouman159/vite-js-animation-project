import React from 'react'

const About = () => {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='text-[4vw] leading-[4.1vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className='w-full flex gap-5 mt-20 pt-10 border-t-[1px] border-[#a1b562]'>
                <div className='w-1/2'>
                    <h1 className='text-6xl'>Our approach : </h1>
                    <button className='px-10 py-6 uppercase mt-10 bg-zinc-900 rounded-full text-white flex gap-10 items-center'>Read More
                        <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl'></div>
            </div>
        </div>
    )
}

export default About