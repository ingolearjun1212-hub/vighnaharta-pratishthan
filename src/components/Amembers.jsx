import React from 'react'

const AmemberS  = [
  { name: "कृष्णा कदम" },
  { name: "प्रकाश सराटे" },
  { name: "अर्जुन कदम" },
   { name: "अर्जुन इंगोले" },
  { name: "अनिल खंडांगळे" },
  { name: "अभि कदम" },
  { name: "ज्योतिबा कदम" },
  { name: "ज्योतिबा इंगोले" },
  { name: "शंकर कदम" },
  { name: "वैभव बाबर" },
  { name: "विशाल बाबर" },
  { name: "प्रशांत धुमाळ" },
  { name: "गणेश गुंड" },
  { name: "माऊली हराळे" },
   { name: "महेश हराळे" },
  { name: "संतोष येडे" },
  { name: "रावण येडे" },
  { name: "नृसिंह कदम" },
  { name: "मदन शिंदे" },
  { name: "मुंजा बाबर" },
  { name: "गोपाल सराटे" },
  { name: "तुकाराम धुमाळ" },
  { name: "भीमराव धुमाळ" },
  { name: "बालाजी धुमाळ" },
  { name: "विष्णु बाबर" },
  { name: "पिंटू बाबर" },
  { name: "मारोती धुमाळ" },
  { name: "सखाराम गाडेकर" },
  { name: "युवराज ताकटे" },
  { name: "शिवाजी इंगोले" },
  { name: "बबन बाबर" },
  { name: "तुकाराम कदम" },
  { name: "माऊली कदम" },
  { name: "दिगांबर अंभोरे" },
  { name: "पांडुरंग कदम" },
  { name: "हरिभाऊ धुमाळ" },
  { name: "शिवा चापके" },
  { name: "जाकिर शेख" },
  { name: "युवराज शितोळे" },
  { name: "समाधान धुमाळ" },
  { name: "सचिन धुमाळ" },
  { name: "सचिन बाबर" },
  { name: "गणेश हळाळे" },
  { name: "सुरेश सराटे" },
  { name: "सुरज कदम" },
  

];




const Amembers = () => {
  return (
    <div className=' bg-black text-center p-5' >
       
       <div className='text-white bg-amber-950  p-5 rounded-3xl'>

         <h2 className='text-4xl'>आमच्या मंडळाचे सदस्य</h2>
         <p className='text-sm mt-2'>( OUR MEMBERS )</p>
         <p className='mt-1 font-stretch-105%'>मंडळाच्या कार्यात योगदान देणारे आमचे सर्व सन्माननीय सदस्य.</p>
         <div className='bg-amber-400 h-2 rounded-4xl mt-2'/>

         </div>


         <div className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4'>

          {AmemberS.map((person,index)=>
        
        <article
        
        key={`${person.name}-${index}`}
        className='bg-amber-800 p-2 rounded-4xl text-white '
        
        >

           {person.name}
        </article>
        
        )}  

         </div>

    </div>
  )
}

export default Amembers
