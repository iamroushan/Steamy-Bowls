import { Link } from 'react-scroll'
// Import Data
import Menus from '../data/menu.json'
const Menu = () => {
  return (
    <section className='bg-primary w-full' id='menu'>
        <div className='w-11/12 mx-auto md:w-5/6'>
            <p className='text-accent text-center font-semibold text-2xl'>Our Menu/当店のメニュー</p>
            <h1 className="text-2xl font-bold font-go3 text-secondary mt-4 mb-2 lg:w-2/3 mx-auto text-center md:2xl lg:text-4xl">Explore Our Exquisite Japanese Culinary Creations</h1>
            <p className="text-md font-light font-notosansjp md:w-3/4 mx-auto mb-8 text-neutral text-center md:text-md lg:text-md">Welcome to Our Menu, where we invite you to embark on an extraordinary culinary journey that encapsulates the essence of Japanese cuisine. Immerse yourself in a world of tantalizing flavors, artful presentations, and time-honored traditions.</p>
            {/* Mobile Menu Carousel */}
            <div className="w-full carousel rounded-box md:hidden">
                {
                    Menus.map(menu => {
                        return (
                            <div key={menu.id} className="carousel-item w-full">
                                <div className="card bg-accent w-96 glass hover:bg-none mx-auto">
                                    <figure><img src={menu.img} alt="Food" className='h-52 mt-4'/></figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-secondary font-go3">{menu.title}</h2>
                                        <h1 className='font-bold font-notosansjp text-secondary text-4xl'>{menu.price}</h1>
                                        <p className='font-natosansjp font-normal text-neutral'>{menu.description}</p>
                                        <div className="card-actions">
                                            <Link to="book" smooth={true} offset={-50} duration={500} className="btn btn-secondary font-notosansjp btn-outline">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }   
            </div>
            {/* Menu */}
            <div className="hidden grid-cols-2 gap-y-8 lg:grid-cols-3 md:grid">
                {
                    Menus.map(menu => {
                        return(
                            <div key={menu.id} className="card bg-accent w-96 md:w-80 lg:w-96 glass hover:bg-none mx-auto">
                                <figure><img src={menu.img} alt="Food" className='h-52 mt-4'/></figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-secondary font-go3">{menu.title}</h2>
                                    <h1 className='font-bold font-notosansjp text-secondary text-4xl'>{menu.price}</h1>
                                    <p className='font-natosansjp font-normal text-neutral'>{menu.description}</p>
                                    <div className="card-actions">
                                        <Link to="book" smooth={true} offset={-50} duration={500} className="btn btn-secondary btn-outline">Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Menu