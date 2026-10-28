import {Link} from "react-router-dom"


      
    


const Footer = () => {
  return (
    <footer className="bg-[#07131A] px-20 py-10 text-white md:px-10 mx-2">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {/* Logo and Mandal Name */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dgdxl274u/image/upload/v1791516308/Jun_16_2026_10_09_45_AM_a9sdbu.png"
              alt="Mandal Logo"
              className="h-14 w-14 rounded-full object-cover"
            />

            <h2 className="text-lg font-bold">
              विघ्नहर्ता प्रतिष्ठान ,
              <span className="block text-amber-400">
                 सुरपिंपरी
              </span>
            </h2>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-300">
            श्रद्धा, संस्कृती आणि उज्ज्वल उद्यासाठी एकत्र!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-amber-400">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber-400">About</Link></li>
            <li><Link to="/gallery" className="hover:text-amber-400">Gallery</Link></li>
            
          </ul>
        </div>

        {/* Contact Information */}
        <div>
      
       <h3 className="mb-4 text-lg font-bold text-amber-400">contact</h3>

          <p className="text-sm leading-6 text-gray-300">
            सुरपिंपरी,
            <br />
            तालुका , जिल्हा परभणी,
            <br />
            महाराष्ट्र, भारत.
          </p>

          <a
            href="tel:7972507734"
            className="mt-3 inline-block text-sm text-gray-300 hover:text-amber-400"
          >
            +91 7972507734
          </a>

          <a
            href="https://wa.me/917972507734"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm text-gray-300 hover:text-amber-400"
          >
            WhatsApp Us →
          </a>
        </div>

        {/* Donation */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-amber-400">
            आपल्या मंडळाला सहकार्य करा
          </h3>

          <p className="mb-4 text-sm leading-6 text-gray-300">
            आपले सहकार्य आम्हाला धार्मिक, सांस्कृतिक आणि सामाजिक उपक्रम सुरू ठेवण्यासाठी मदत करते.
          </p>

          <Link
            
            className="inline-block rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-[#07131A] transition hover:bg-amber-300"
          >
            देणगी द्या  →
          </Link>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-5 text-center">
        <p className="text-xs leading-5 text-gray-400">
          © {new Date().getFullYear()} Vighnaharta Pratishthan
          Surpimpari. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;

