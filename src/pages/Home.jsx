import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview"
import GalleryPreview from '../components/GalleryPreview'      
import DonationPreview from '../components/DonationPreview';
import Contactpreview from '../components/Contactpreview';
import Socialmedia from '../components/SocialMedia'
import Footer from '../components/Footer'
function Home() {
  return (
    <div className="overflow-x-hidden bg-black">
       <Navbar/>
       <Hero/>
       <AboutPreview/>
      
       <GalleryPreview/>
       <DonationPreview/>
       
       <Socialmedia/>
       <Footer/>
    </div>
  )
}

export default Home
