import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto  py-10 flex gap-40'>
            <div className='basis-1/2'>
                <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">sportster.</h1>
            
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div classNmae='basis-1/3'>
                    <h4 className='text-zinc-600'>socials</h4>
                    {["socials","twitter(x?)","LinkedIn"].map((item,index)=><a className='block mt-3 text-zinc-600'>{item}</a>)}
                </div>
                <div classNmae='basis-1/3'>
                    <h4 className='text-zinc-600'>socials</h4>
                    {["socials","twitter(x?)","LinkedIn"].map((item,index)=><a className='block mt-3 text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/3 flex flex-col items-end'>
                    <p className='text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda repellat optio?</p>
                    <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" className='mt-10 w-32'/>
                </div>

            
            </div>
            
        </div>
    </div>
  )
}

export default Footer