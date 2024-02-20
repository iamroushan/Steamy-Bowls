// IMport Image
import Hero1 from '/assets/hero-img.png'
import Hero2 from '/assets/dumplings.png'
import Hero3 from '/assets/chicken.png'
// Importing Link
import { Link } from 'react-scroll'

const Hero = () => {
  return (  
    <section className="bg-primary w-full" id='hero'>
      <div className="w-11/12 mx-auto md:w-5/6">
        <div className="flex flex-col min-h-screen md:flex-row pt-20 md:pt-0 md:items-center">
          {/* Text */}
          <div className="flex flex-col text-center gap-4 md:text-start md:w-3/5">
            <h1 className="text-5xl font-bold font-go3 text-secondary md:4xl lg:text-6xl">Where Tradition Meets Innovation: Tokyo's Premier Dining Destination.</h1>
            <p className="text-md font-light font-notosansjp text-neutral md:text-md lg:text-xl">Experience an Exquisite Blend of Timeless Traditions and Progressive Culinary Artistry in the Heart of Tokyo's Premier Dining Scene</p>
            <div>
              <Link to="book" smooth={true} offset={200} duration={500} className="btn btn-secondary btn-outline md:px-12">Book Now</Link>
            </div>
          </div>
          {/* Images */}
          <div className="h-96 md:carousel carousel-vertical my-12 md:hidden">
            <div className="carousel-item h-96">
              <img src={Hero1} />
            </div> 
            <div className="carousel-item h-96">
              <img src={Hero2} />
            </div> 
            <div className="carousel-item h-96">
              <img src={Hero3} className='mx-auto'/>
            </div> 
          </div>
          <div className='hidden md:w-2/5 md:block'>
            <img src={Hero3} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero