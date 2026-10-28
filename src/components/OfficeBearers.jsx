import React from "react";

const officeBearers = [
  { position: "अध्यक्ष", english: "( President )", name: "उद्धव भैय्या कदम" },
  { position: "उपाध्यक्ष", english: "( Vice President )", name: "पवन काटे" },
  { position: "सचिव", english: "( Secretary )", name: "अशोक धुमाळ" },
  { position: "सचिव", english: "( Secretary )", name: "विष्णु धुमाळ" },
  { position: "सहसचिव", english: "( Joint Secretary )", name: "अनिल जाधव" },
  { position: "सहसचिव", english: "( Joint Secretary )", name: "प्रशांत कदम" },
  { position: "सहसचिव", english: "( Joint Secretary )", name: "शिवम काटे" },
  { position: "कोषाध्यक्ष", english: "( Treasurer )", name: "विशाल कदम" },
  { position: "कोषाध्यक्ष", english: "( Treasurer )", name: "पांडुरंग शिंदे" },
];

function OfficeBearers() {
  return (

    <section>

      <div className="p-5 bg-black">

        <div className="bg-amber-800 p-2 rounded-4xl text-center"> 
           <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl py-2">
            आमचे <span className="text-amber-400">पदाधिकारी</span>
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xl leading-7 text-gray-300 sm:text-base">
            मंडळाच्या कार्यात महत्त्वपूर्ण योगदान देणारे आमचे पदाधिकारी.
          </p>

         
</div>

        

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-black text-white gap-5 p-5">

         {officeBearers.map((person,index) =>
        
        <article
        
          key={`${person.name}-${index}`}
          className="rounded-3xl bg-amber-800 p-2 text-center "
      
        >
        
        <h3 className="text-xl font-semibold">
          {person.position}
        </h3>
         
         <h1 className="text-sm">
          {person.english}
         </h1>
        
        <p className="bg-black px-5 py-2 rounded-2xl">
          {person.name}
        </p>
        </article>
        
        
        
        )}
        
        </div>


      </div>



    </section>

  )
};

export default OfficeBearers;