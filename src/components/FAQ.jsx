import Cat from '/assets/cat-thinking.png';
import faqs from '../data/FAQ.json';

const FAQ = () => {
  return (
    <section className="bg-primary py-16" id='faq'>
        <div className='w-11/12 mx-auto md:w-5/6'>
        <h1 className="text-2xl font-bold font-go3 text-secondary pb-2 text-center md:2xl lg:text-5xl">Frequently Asked Questions</h1>
        <p className="text-md font-normal font-notosansjp text-neutral text-center md:text-md lg:text-lg">Still Got Questions? Your Queries Answered: Find Out Everything You Need to Know</p>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {/* Image */}
                <img src={Cat} alt="cat-thinking-image" className='md:w-2/5 h-full' />
                {/* FAQ Accordion */}
                <div className='flex flex-col gap-4 md:w-3/5 md:my-12'>
                    {
                        faqs.map(faq => {
                            return (
                                <div key={faq.id} className="collapse bg-secondary">
                                    <input type="radio" name="my-accordion-1" /> 
                                    <div className="collapse-title text-xl font-medium font-notosansjp text-primary">
                                        {faq.question}
                                    </div>
                                    <div className="collapse-content"> 
                                        <p className='text-primary font-notosansjp'>{faq.answer}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ

// {
//     faqs.map(faq => {
//         return (
//             <div key={faq.id} className='flex gap-4 md:w-3/5 md:my-12'>
//                 <div className="collapse bg-secondary">
//                     <input type="radio" name="my-accordion-1" /> 
//                     <div className="collapse-title text-xl font-medium">
//                         {faq.question}
//                     </div>
//                     <div className="collapse-content"> 
//                         <p>{faq.answer}</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     })
// }