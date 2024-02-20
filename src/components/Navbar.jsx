import { useState } from 'react'
import { Link } from 'react-scroll';
// logo
import logo from '/assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav)

  return (
    <nav>
        <div className="w-100 bg-accent rounded-b-2xl md:rounded-none fixed top-0 right-0 left-0 z-30">
            <div className="w-11/12 mx-auto md:w-5/6">
                <div className="flex justify-between h-16 items-center">
                    <img src={logo} alt="website-logo" className='w-14 h-14' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={toggleNav} className="w-9 h-9 cursor-pointer text-secondary lg:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d={nav ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"} /></svg>

                    {/* Desktop */}
                    <div className="lg:flex flex-row gap-8 text-secondary text-xl hidden">
                        <Link to="hero" smooth={true} offset={-100} duration={500} className='font-notosansjp cursor-pointer hover:underline underline-offset-4 decoration-2 hover:scale-105 transition-all'>Home</Link>

                        <Link to="about" smooth={true} offset={-100} duration={500} className='font-notosansjp cursor-pointer hover:underline underline-offset-4 decoration-2 hover:scale-105 transition-all'>About</Link>

                        <Link to="menu" smooth={true} offset={-100} duration={500} className='font-notosansjp cursor-pointer hover:underline underline-offset-4 decoration-2 hover:scale-105 transition-all'>Menu</Link>

                        <Link to="faq" smooth={true} offset={-50} duration={500} className='font-notosansjp cursor-pointer hover:underline underline-offset-4 decoration-2 hover:scale-105 transition-all'>FAQs</Link>

                    </div>
                    <div className="lg:flex items-center hidden">
                        <Link to="book" smooth={true} offset={200} duration={500} className="btn font-notosansjp btn-secondary btn-outline">Book Now</Link>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            {nav ? 
                <div className='w-11/12 mx-auto mt-4 lg:hidden'>
                    <div className="flex flex-col items-start gap-4 text-secondary text-xl">
                        <Link onClick={() => setNav(false)} to="hero" smooth={true} offset={-100} duration={500} className='font-notosansjp hover:underline underline-offset-4 decoration-2 transition-all'>Home</Link>

                        <Link onClick={() => setNav(false)} to="about" smooth={true} offset={-100} duration={500} className='font-notosansjp hover:underline underline-offset-4 decoration-2 transition-all'>About</Link>

                        <Link onClick={() => setNav(false)} to="menu" smooth={true} offset={-100} duration={500} className='font-notosansjp hover:underline underline-offset-4 decoration-2 transition-all'>Menu</Link>
                        
                        <Link onClick={() => setNav(false)} to="faq" smooth={true} offset={-50} duration={500} className='font-notosansjp hover:underline underline-offset-4 decoration-2 transition-all'>FAQ</Link>
                    </div>
                    <Link to="book" smooth={true} offset={-50} duration={500} onClick={() => setNav(false)} href="#" className="btn font-notosansjp btn-secondary my-4">Book Now</Link>
                </div>            
            : ''}
        </div>
    </nav>
  )
}

export default Navbar


