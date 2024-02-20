import cat from '/assets/location_img.png'

const Location = () => {
  return (
    <section className='bg-primary pb-12'>
        <div className='w-11/12 mx-auto md:w-5/6'>
            <h1 className="text-2xl font-bold font-go3 text-secondary pb-2 text-center md:2xl lg:text-5xl">Visit Us</h1>
            <p className="text-md font-normal font-notosansjp text-neutral text-center md:text-md lg:text-lg pb-12">Conveniently Located in the Heart of the City</p>
            <div className='flex flex-col broder broder-secondary bg-primary glass rounded-xl p-4 md:flex-row md:items-center md:justify-around'>
                <img src={cat} alt="cat-image" className='w-52 mx-auto md:mx-0' />
                <div className='flex flex-col text-center gap-4 my-2'>
                    <h2 className='font-bold text-secondary text-xl font-notosansjp lg:text-2xl'>Address: 1234 Sakura Street, Shibuya-ku, Tokyo, Japan</h2>
                    <p className='text-normal text-secondary text-md font-notosansjp lg:text-lg'>Phone: +81 12-3456-7890</p>
                    <p className='text-normal text-secondary text-md font-notosansjp lg:text-lg'>Email: info@steamybowls.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Location