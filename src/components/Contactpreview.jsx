import {Link} from "react-router-dom"

function Contactpreview() {
  return (
    <div>
      <section className='bg-[#fffdf7] px-5 py-6  md:px-10'>

        <div className=' mx-auto flex max-w-7xl flex-col gap-4 
        sm:flex-row sm:items-center sm:justify-between '>
            <div className='flex items-center gap-3'>
                <div className='flex h-11 w-11 shrink-0 items-center justify-center 
                rounded-full bg-orange-100 text-xl text-orange-600'>
                     ☎
                     </div>

                     <div> 
                        <h2 className='text-lg font-bold text-[#172b3a]'>
                            Contact Us
                        </h2>  

                        <p className='mt-1 text-sm text-gray-600'>
                            Get in touch with us. We are here to help.
                       </p>  

                       <a
                        href='tel:7972507734'
                        className='mt-1 inline-block text-sm 
                        font-semibold text-[#172b3a] hover:text-amber-600'
                       >
                        7972507734
                       </a>

                     </div>
            </div>

       
              <Link
              to='/contact'
              className='inline-flex items-center justify-center gap-2 self-start 
              rounded-full border border-amber-500 px-5 py-2.5 text-sm font-semibold
               text-[#172b3a] transition hover:bg-amber-400  sm:self-auto'
              
                      >
              
              Contact Us  <span>→</span>
              
              </Link>




        </div>

      </section>
    </div>
  )
}

export default Contactpreview
