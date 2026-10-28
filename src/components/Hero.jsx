import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
      <section className=' relative flex min-h-[300px] items-center overflow-hidden bg-[#07131A]
      
        px-5 py-16 text-white md:min-h-[450px]  md:px-12 lg:px-20
      
      '>

        <img 
        
        src="https://res.cloudinary.com/dgdxl274u/image/upload/v1791527286/WhatsApp_Image_2026-10-09_at_11.57.13_AM_juzzbk.jpg"
        alt="Lord Ganesha"
        className='absolute inset-0  h-[300px] sm:h-[500px] w-full object-cover object-center'
        
        />

           <div className=' p-2 absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20'>

            <div className='relative z-10  max-w-2xl '>
            <p className='mb-4 text-sm font-semibold text-amber-400 md:text-base'> || गणपति बाप्पा मोरया ||</p>

            
            <h1 className='text-1xl font-extrabold leading-tight md:text-6xl '>
                
                Ganpati Bappa 
                <span className='block text-amber-400'>Morya</span>
                </h1>


                <h2 className='mt-4  text-[13px] font-bold md:text-2xl'>विघ्नहर्ता प्रतिष्ठान, सुरपिंपरी
</h2>

                <p className='mt-4 max-w-lg md:text-base  text-[10px] leading-6 text-gray-200'>श्रद्धा, संस्कृती आणि उज्ज्वल उद्यासाठी आपण एकत्र <br/>येऊया. चला, एक अधिक मजबूत समाज घडवूया.
                </p>
                
                <div className='mt-7 flex flex-wrap gap-2'>
                    <Link  to="/about"
                    
                    className='rounded-full  bg-amber-400 px-5 py-1 font-bold text-black transition hover:bg-amber-300'
                    
                    >Our Story →</Link>

               
               <Link className='rounded-full border border-amber-400 
               px-5 py-1 font-bold text-white transition hover:bg-amber-400 hover:text-black'>देणगी द्या 🙏 </Link>


                </div>

            </div>

           </div>




      </section>
    </div>
  )
}

export default Hero
