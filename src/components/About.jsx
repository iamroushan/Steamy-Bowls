// Image
import Cat from '/assets/About_IMG.png'

const About = () => {
  return (
    <section className='bg-primary w-full py-12' id='about'>
        <div className='w-11/12 mx-auto md:w-5/6'>
        <p className='text-accent text-center font-semibold mb-8 text-2xl'>About Us/私たちに関しては</p>
            <div className="flex flex-col md:flex-row-reverse items-center md:justify-between">
                <img src={Cat} alt="cat-image" className='md:h-64 lg:h-full' />
                <div className='flex flex-col gap-4 text-center md:text-left md:w-3/5'>
                    <h1 className='text-2xl font-bold font-go3 text-secondary md:text-4xl lg:text-5xl'>"Our Story: A Gastronomic Journey Celebrating Tokyo's Rich Culinary Heritage and Innovations"</h1>
                    <p className='text-sm font-light font-notosansjp text-neutral md:text-md lg:text-xl'>At Steamy Bowls, we are proud to be Tokyo's premier dining destination, where tradition meets innovation. Our culinary journey is rooted in a deep appreciation for Tokyo's rich gastronomic heritage, celebrated for its centuries-old culinary traditions and techniques. We draw inspiration from the vibrant tapestry of flavors, ingredients, and cooking styles that have shaped Tokyo's culinary landscape.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About