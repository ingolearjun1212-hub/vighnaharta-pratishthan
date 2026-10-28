import React from 'react'

 const donors = [
  { name: "शिवराज गजानन खंडागळे", date: "15/09/2026", day: "मंगळवार" },
  { name: "नवनाथ रावण बाबर", date: "16/09/2026", day: "बुधवार" },
  { name: "गणेश बंडू गुंड", date: "17/09/2026", day: "गुरुवार" },
  { name: "अप्पासाहेब शितोळे", date: "18/09/2026", day: "शुक्रवार" },
  { name: "इसाक शेख", date: "18/09/2026", day: "शुक्रवार" },
  { name: "ज्ञानेश्वर हराळे", date: "19/09/2026", day: "शनिवार" },
  { name: "तुकाराम धुमाळ", date: "19/09/2026", day: "शनिवार" },
  { name: "विष्णू धुमाळ", date: "20/09/2026", day: "रविवार" },
  { name: "लक्ष्मण हराळे", date: "20/09/2026", day: "रविवार" },
  { name: "छगन शिंदे", date: "21/09/2026", day: "सोमवार" },
  { name: "रावण येडे", date: "21/09/2026", day: "सोमवार" },
  { name: "ज्ञानोबा पवार", date: "22/09/2026", day: "मंगळवार" },
  { name: "परमेश्वर बाबर", date: "22/09/2026", day: "मंगळवार" },
  { name: "हरिभाऊ गिन्यानदेव धुमाळ", date: "23/09/2026", day: "बुधवार" },
  { name: "आमोल उत्तमराव पवार", date: "24/09/2026", day: "गुरुवार" },
  { name: "श्रीकृष्ण विष्णू कदम", date: "25/09/2026", day: "शुक्रवार" },
];



const Afdoner = () => {
  return (
    <div className='p-5 bg-black '>
       <div className='bg-amber-950 rounded-4xl text-white text-center p-5'> 

       <h2 className='text-4xl'>आमचे अन्नदाते</h2>
       <p className='mt-1 text-sm '>( OUR FOOD DONORS )</p>
       <div className='bg-amber-300 h-3 w-full mt-3 rounded-full'/>
       </div>



       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-black'>

         {donors.map((person,index)=>
         
         <article
          
          key={`${person.name}-${index}`}
          className='bg-amber-950 p-5 text-white text-center rounded-4xl'
          >
            

            <h2 className='text-2xl'>
                {person.name}
            </h2>

            <p className='mt-1'>
                {person.date}
            </p>

            <p className='mt-1'>
                {person.day}
            </p>


         </article>
        
        )}
       </div>

    </div>
  )
}

export default Afdoner
