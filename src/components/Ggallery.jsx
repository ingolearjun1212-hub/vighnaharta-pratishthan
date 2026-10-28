import React from 'react'
import {Link} from 'react-router-dom'

export const galleryMedia = [
  {
    id: 1,
    type: "image",
    url: "/ganesh-ji1.jpeg",
  },
  {
    id: 2,
    type: "video",
     url:"/ganesh-gallery.mp4",
  },
  {
    id: 3,
    type: "image",
    url: "/ganesh-ji2.jpeg",
  },
  {
    id: 4,
    type: "video",
    url: "/ganesh-video.mp4",
  },
];


const Ggallery = () => {
  return (
    <div className='bg-black'>

      <div className='p-5'>
        <img
          src='image copy.png'
          className='w-full object-cover'
        />

         
         <div className='bg-amber-950 mt-5 text-white  rounded-2xl text-center p-5 border border-amber-700'>

          <h2 className='text-4xl text-amber-300'>आमच्या आठवणी</h2>
          <p className='text-2xl mt-1'>(OUR MEMORIES)</p>
          <p className='text-2xl text-amber-400 mt-1'>भक्ती आणि उत्सवाचे अविस्मरणीय क्षण</p>
          <p  className='mt-1 text-amber-100'>आमच्या गणेशोत्सवातील सुंदर आठवणी, अन्नदान, सांस्कृतिक कार्यक्रम आणि मंडळाच्या विविध उपक्रमांचे क्षण अनुभवा.</p>

         </div>

        <div className='grid grid-cols-2 md:grid-cols-4 p-5 gap-5 bg-black '>


          {galleryMedia.map((media) =>

            <div

              key={`${media.id}`}

              className='bg-amber-400 rounded-2xl'

            >

              {media.type === "image" ? (


                <img

                  src={media.url}
                  className='aspect-video w-full object-cover rounded-2xl '

                />

              ) : (

                <video

                  src={media.url}
                  controls
                  className='aspect-video w-full h-full rounded-2xl'
                />
              )}

            </div>
     )}

               </div>


      </div>

      <a
  href="https://www.instagram.com/pratishthan_cha_raja_?vrfl=MW85bTdsaXdpb2FvZQ=="
  target="_blank"
  rel="noopener noreferrer"
  className='text-amber-300 text-xl bg-amber-900 rounded-4xl p-5 mt-2 pb-5   mx-5'
>
  आणखी फोटो व व्हिडिओ पहा →
</a>

    


    </div>
  )
}

export default Ggallery
