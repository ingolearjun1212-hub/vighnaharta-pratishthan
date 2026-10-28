const socialLinks =[

   {

  name:"Instagram",
  ico:'image copy 2.png',
  colo:"hover:bg-pink-100",
  url:"https://www.instagram.com/pratishthan_cha_raja_?vrfl=MW85bTdsaXdpb2FvZQ==",



   }]

function SocialMedia() {
  return (
    <div>
      <section className='bg-white px-5 py-8 md:px-10'>

        <div className='mx-auto max-w-7xl text-center '>
            <h2 className='text-2xl font-bold text-black'> सोशल मीडियावर आमच्याशी जोडले जा</h2>
            <p className='mt-2 text-sm text-black '>आमच्या Instagram पेजला भेट द्या मंडळाचे नवीन फोटो, व्हिडिओ आणि अपडेट्स पाहण्यासाठी Instagram लोगोवर क्लिक करा.
</p>


            <div className='mt-5  flex justify-center gap-4'>
                {socialLinks.map((social) =>(
                
                <a   
                 key={social.name}
               href={social.url || undefined} 
               aria-label={social.name}
               title={social.name}
               
                onClick={(e) => {
                if (!social.url) e.preventDefault();

               }}
             
              className={`flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-[#172B3A] shadow-sm transition ${social.colo}`}
                
                >

               
              <img
              
              src={social.ico}
              className="scale-200 m-5 rounded-4xl"
              
              
              />
               

                </a>
                
                ))}

            </div>

        </div>

      </section>
    </div>
  )
}

export default SocialMedia
