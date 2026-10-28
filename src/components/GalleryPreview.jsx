import React from 'react'
import { Link } from "react-router-dom"



function GalleryPreview() {
  return (
    
    <section className=' h-96  bg-black  p-5'> 
 

 <div className=' flex justify-between p-5'>
 <div className='flex  gap-2 p-2'>

  
  <span className="mt-5 block h-0.5 w-5 bg-amber-500 " />
  <h2 className='font-bold text-xl text-white'>आमची गॅलरी</h2>
   
 </div>


 <Link
  
  to="/gallery"
  className='bg-amber-400 px-5 py-2 rounded-full
   hover:bg-amber-300 text-sm font-semibold gap-2 inline-flex'
  >
 
 view more  →
 
 </Link>

 </div>


          <div className='grid grid-cols-1 md:grid-cols-2 p-1 gap-5 md:gap-5  mt-5 shrink-5' >


<div className='overflow-hidden rounded-4xl h-96 '>
 
<img 
 src="Ganesh-img.png"
 className=' h-96 w-full rounded4-xl object-cover '

/>
</div>




<div className='overflow-hidden rounded-4xl h-96'>
<video  

 src="ganesh-video.mp4"
 controls
 playsInline
 
 className="h-96 w-full  rounded-4xl  p-1 object-cover "

/>

</div>



 </div>
   




    </section>
  )
}

export default GalleryPreview
