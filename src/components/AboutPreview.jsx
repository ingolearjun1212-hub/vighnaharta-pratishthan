import { Link } from 'react-router-dom'

function AboutPreview() {
  return (
    <div className='bg-black'>
      
      <section className='   px-5 py-8  md:px-8  lg:px-12'>

      <div className='mx-auto grid max-w-7xl grid-cols-1 items-center 
      gap-6 md:grid-cols-2 lg:grid-cols-12'>

        <div className='lg:col-span-5 border-4 rounded-4xl border-amber-700 p-5'>
          <div className='flex items-center gap-2 '>
            <span className='h-0.5 w-5 mt-4 bg-amber-500'/>

              <h2 className='text-2xl font-bold text-white'>
                आमच्या मंडळाविषयी 🙏
              </h2>
          </div>

           <p className='mt-4 text-sm leading-6 text-white'>

            विघ्नहर्ता प्रतिष्ठान, सुरपिंपरी ही धार्मिक, सांस्कृतिक आणि सामाजिक मूल्यांचा
             प्रसार करण्यासाठी कार्य करणारी एक समर्पित सामाजिक संस्था आहे.
              समाजाची सेवा करणे, आपल्या परंपरांचे जतन करणे आणि 
              समाजामध्ये सकारात्मकता पसरवणे हे समान ध्येय
               असलेल्या लोकांना आमचे मंडळ एकत्र आणते.
           </p>
         
        <Link to="/about"
        
        className='mt-4 inline-flex items-center gap-2 rounded-full border
         border-amber-500 px-5 py-2 text-sm 
          text-white font-semibold transition hover:bg-amber-400'>

            आमच्याविषयी अधिक जाणून घ्या →
        </Link>     
        </div>
   
       <div className='lg:col-span-4'>

        <img
        
        src="https://res.cloudinary.com/dgdxl274u/image/upload/v1791619382/WhatsApp_Image_2026-10-10_at_1.30.35_PM_aak5h7.jpg"
        alt="Ganesh festival at Vighnaharta Pratishthan img "
        className='h-60 w-full rounded-xl'
        
        />
       </div>

  <div  className='rounded-xl bg-black  p-5 lg:col-span-3'>
    <div className='flex items-start gap-3'>
      <span className='text-2xl text-amber-500' aria-hidden="true"> ▦</span>
        <div>
          <h3 className='text-lg font-bold text-white '>
             आगामी कार्यक्रम
          </h3>
          <p className='mt-2 text-sm leading-5 text-white '>
             आमच्या आगामी कार्यक्रमांची आणि उत्सवांची माहिती मिळवत राहा! 🙏
          </p>
          <Link
          className='mt-4 inline-flex items-center gap-2 rounded-full
           border border-amber-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-amber-800'
          
          >
          सर्व कार्यक्रम पहा  <span>→</span>
          </Link>
        </div>
      
    </div>
  </div>

        




      </div>

      </section>
      
    </div>
  )
}

export default AboutPreview
