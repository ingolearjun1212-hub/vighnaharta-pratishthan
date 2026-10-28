import {Link} from "react-router-dom"

function DonationPreview() {
  return (
    <div>
      <section className='bg-gradient-to-r 
       from-[#07131a] via-[#3a160d] to-[#6b2b12] 
       px-5 py-8 texy-white md:px-10 md:py-10 md:mt-72 mt-[600px] '>


        <div className='mx-auto flex max-w-7xl flex-cols items-center gap-3
         text-center md:flex-row md:justify-between md:gap-8 md:text-left'>
            <div className='text-5xl text-amber-400 ' aria-hidden="true"> 
                ♡
            </div>

       <div className='flex-1'>
        <h2 className='text-2xl font-bold md:text-3xl text-white'>
          विघ्नहर्ता प्रतिष्ठानला सहकार्य करा
        </h2>

        <p className='text-gray-200 mt-2 max-w-2xl md:-text-base leading-6 text-sm'>
          आपले सहकार्य आम्हाला धार्मिक, सांस्कृतिक आणि सामाजिक उपक्रम सुरू ठेवण्यासाठी मदत करते.


        </p>
       </div>

       <Link 
       
       className='inline-flex shrink-0 items-center  rounded-full
        bg-amber-400 px-2 py-3 font-bold text-[#071307] transition hover:bg-amber-300'
       
       >

       देणगी द्या <span>→</span>
       </Link>




        </div>

      </section>
    </div>
  )
}

export default DonationPreview
