import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-10 flex gap-40'>
        <div className='basis-1/2'>
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">sportster.</h1>
        </div>

        <div className='basis-1/2 flex gap-4'>
          <div className='basis-1/3'> {/* ✅ fixed className typo */}
            <h4 className='text-zinc-600'>socials</h4>
            {["socials", "twitter(x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className='block mt-3 text-zinc-600'>{item}</a>
            ))}
          </div>

          <div className='basis-1/3'> {/* ✅ fixed className typo */}
            <h4 className='text-zinc-600'>socials</h4>
            {["socials", "twitter(x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className='block mt-3 text-zinc-600'>{item}</a>
            ))}
          </div>

          <div className='basis-1/3 flex flex-col items-end'>
            <p className='text-right'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem assumenda repellat optio?
            </p>
            {/* ✅ either keep external URL OR move to /public/footer-logo.svg */}
            <img
              src="/footer-logo.svg"  // if stored in public/
              alt="Footer Logo"
              className='mt-10 w-32'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
