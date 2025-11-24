
import { Link, NavLink } from 'react-router-dom'
import HamburgerIcon from '../assets/HamburgerIcon'
import { useState } from 'react';
import CrossIcon from '../assets/CrossIcon';
import "../App.css"
// import { MyComponent } from './Tile';
// import Placeholder from '../assets/ImgIcon';
// import ImgIcon from '../assets/ImgIcon';
import GraphicDesign from './Graphic Design/GraphicDesign';
import Rendering from './3D Rendering/Rendering';
import Branding from './Branding/Branding';
import Photography from './Photography/Photography';
import Social from './Social Media/Social';
import UI from './UI/UI';
import Hero from './Hero Section/Hero';
import Ribbon from './Ribbon/Ribbon';
import { SlSocialInstagram } from 'react-icons/sl';
// import { TiSocialLinkedin } from 'react-icons/ti';
import { FaLinkedin } from 'react-icons/fa';
import Animation from './Png Animation/Animation';
import Box from './Box/Box';
import Sibz from '../assets/Sibz.svg';

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)


  const toggleMenu = () => {
    setIsOpen(!isOpen);
};
  return (
    <div className="dark bg-hero text-white min-h-screen flex flex-col">
      <header className="px-4 bg-black bg-opacity-50 fixed w-full lg:px-6 py-6 h-14 flex items-center justify-between pt-6 z-50">
        <Link to="#" className="flex items-center">
          <img src={Sibz} alt="Sibz Logo" className="size-6 text-primary" />
          {/* <span className='text-xl font-bold ml-5 space'>Sibz Portfolio</span> */}
        </Link>
        <nav className="">
        <div className='hidden md:flex gap-4 sm:gap-10 space'>
          <NavLink to="#" className="text-sm font-medium hover:text-primary">
            Graphic Design
          </NavLink>
          <NavLink to="#" className="text-sm font-medium hover:text-primary">
            UI/UX
          </NavLink>
          <NavLink to="#" className="text-sm font-medium hover:text-primary">
            Branding
          </NavLink>
          <NavLink to="#" className="text-sm font-medium hover:text-primary">
            3D Rendering
          </NavLink>
          <NavLink to="#" className="text-sm font-medium hover:text-primary">
            Photography
          </NavLink>
          <NavLink to="#" className="text-sm font-medium hover:text-primary">
            Social Media
          </NavLink>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <CrossIcon/> :<HamburgerIcon className="h-6 w-6" />  }
          </button>
          {isOpen && (
            <div className='md:hidden bg-black fixed left-0 top-20 w-full z-50 space'>
            <div className='flex flex-col items-center gap-8 p-5'>
            <NavLink to="#" className="text-sm font-medium hover:text-primary ">
            Graphic Design
          </NavLink>
          <NavLink to="#" className="text-sm font-medium hover:text-primary ">
            UI/UX
          </NavLink>
          <NavLink to="#" className="text-sm font-medium hover:text-primary ">
            Branding
          </NavLink>
          <NavLink to="#" className="text-sm font-medium hover:text-primary ">
            3D Rendering
          </NavLink>
          <NavLink to="#" className="text-sm font-medium hover:text-primary ">
            Photography
          </NavLink>
          <NavLink to="#" className="text-sm font-medium hover:text-primary ">
            Social Media
          </NavLink>
          </div>
          </div>
          )}
        </nav>
      </header>
      <main className="flex-1">
        {/* Sections */}
        <main className="flex-1">
        <section className="w-full lg:py-28">
          <Hero/>
        
        </section>
        <section className="w-full ">
          <Ribbon/>
        </section>
        <Animation/>
        <Box/>
        <section id="graphic-design" className="w-full py-12 md:py-24 lg:py-32 bg-[#E11D48]">
          <GraphicDesign/>
        </section>
        <section id="ui-ux" className="w-full py-12 md:py-24 lg:py-32">
          <UI/>
        </section>
        <section id="branding" className="w-full py-12 md:py-24 lg:py-32 bg-[#E11D48]">
          <Branding/>
        </section>
        <section id="3d-rendering" className="w-full py-12 md:py-24 lg:py-32">
          <Rendering/>
        </section>
        <section id="photography" className="w-full py-12 md:py-24 lg:py-32 bg-[#E11D48]">
          <Photography/>
        </section>
        <section id="social-media" className="w-full py-12 md:py-24 lg:py-32">
          <Social/>
        </section>
      </main>
      </main>
  
      <footer className="flex flex-col bg-black gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Sibz Portfolio . All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-xs hover:text-primary">
            Terms of Service
          </Link>
          <Link to="#" className="text-xs hover:text-primary">
            Privacy
          </Link>
          <Link to="#" className="text-xs hover:text-primary"><SlSocialInstagram size={20}/></Link>
          <Link to="#" className="text-xs hover:text-primary"><FaLinkedin  size={20}/></Link>
          
        </nav>
      </footer>
    </div>
  )
}

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }

