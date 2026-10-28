import { useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from "@gsap/react";
import {useRef} from 'react'

gsap.registerPlugin(useGSAP);


function Navbar() {
     const  Navref = useRef(null)



  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useGSAP(() => {
   
     const tl = gsap.timeline();

     tl.from(".Nav-logo",{

      y:-60,
      duration:0.7,
      opacity:0,
      ease:"power3.out",

     });


      tl.from(".Nav-links",{

       y:-40,
       opacity:0,
       duration:1,
       stagger:0.12,
       ease:'power3.out'

      } , 
      '-=0.2'
    );


      tl.from("nav-donate",{

        y:60,
        opacity:0,
        duration:2,
        ease:"power3.out",

      },
      "-=0.2"
    
    )







  })
    



  return (
    <header ref={Navref} className='bg-[#07131A] w-full text-white px-4 py-3'>
      <div className='flex items-center justify-between p-1'>
        <Link to='/'  className=' Nav-logo flex items-center gap-3' onClick={closeMenu}>
          <img
            src='https://res.cloudinary.com/dgdxl274u/image/upload/v1791516308/Jun_16_2026_10_09_45_AM_a9sdbu.png'
            alt='Mandal Logo'
            className='h-12 w-12 rounded-full object-cover'
          />
          <span className='   md:text-lg'>विघ्नहर्ता प्रतिष्ठान  <br/> सुरपिंपरी
</span>
        </Link>

        <nav className=' Nav-links hidden items-center gap-10 md:flex' aria-label='Main navigation'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About-Us</Link>
          <Link to='/gallery'>Gallery</Link>
          
        </nav>

        <button
          type='button'
          className=' Nav-donate text-2xl md:hidden '
          aria-label={menuOpen  ?'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen  ?'╳' : ' ☰'}
        </button>
      </div>

      {menuOpen && (
        <nav className=' flex flex-col gap-4 px-2 pb-3 md:hidden' aria-label='Mobile navigation'>
          <Link onClick={closeMenu} to='/'>Home</Link>
          <Link onClick={closeMenu} to='/about'>About</Link>
          <Link onClick={closeMenu} to='/gallery'>Gallery</Link>
          
        </nav>
      )}
    </header>
  )
}

export default Navbar
