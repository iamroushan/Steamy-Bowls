import { useForm } from "react-hook-form"
import Tick from '/assets/tick.gif';

const Form = () => {
    const form = useForm();
    const { register, handleSubmit, formState, reset } = form;
    const { errors } = formState;
    // Getting current date
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    // Getting forward date
    let forwardDay = String(date.getDate()+2).padStart(2, "0");
    let forwardDate = `${currentYear}-${currentMonth}-${forwardDay}`;

    // Onsubmit
    const onSubmit = () => {
        window.showBooking.showModal()
        reset();
    }


  return (
    <section className='bg-primary py-12' id="book">
        <div className='w-11/12 mx-auto md:w-5/6'>
            <h1 className="text-2xl font-bold font-go3 text-secondary pb-2 text-center md:2xl lg:text-5xl">Reserve Your Table</h1>
            <p className="text-md font-normal font-notosansjp text-neutral text-center md:text-md lg:text-lg pb-12">Indulge in Culinary Delights: Reserve Your Perfect Dining Experience Today</p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-secondary font-notosansjp">First Name</span>
                        </label>
                        <input type="text" id="firstName" placeholder="First Name" name="First Name" className="input font-notosansjp input-bordered input-accent w-full text-secondary max-w-md" {...register("firstName", {
                            required: "First Name is required"
                        })} />
                        <label className="label" >
                            <span className="label-text-alt text-red-700 text-md font-semibold">{errors.firstName?.message}</span>
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-secondary font-notosansjp">Last Name</span>
                        </label>
                        <input type="text" id="lastName" placeholder="Last Name" className="input font-notosansjp input-bordered input-accent w-full text-secondary max-w-md" {...register("lastName")} />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-secondary font-notosansjp">Email</span>
                        </label>
                        <input type="hidden" name="_next" value="/"></input>
                        <input type="email" id="email" placeholder="Email" className="input font-notosansjp input-bordered input-accent text-secondary w-full max-w-md" {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid emial format",
                            },
                        })} />
                        <label className="label" >
                            <span className="label-text-alt text-red-700 text-md font-semibold">{errors.email?.message}</span>
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-secondary font-notosansjp">Date</span>
                        </label>
                        <input type="date" id="date" min={currentDate} max={forwardDate} className="input font-notosansjp input-bordered input-accent text-secondary w-full max-w-md" {...register("date", {
                            required: "Date is required",
                            min: {
                                value: `${currentYear}-${currentMonth}-${currentDay}`,
                                message: `Please book after - ${currentDate}`
                            },
                            max: {
                                value: `${currentYear}-${currentMonth}-${forwardDay}`,
                                message: `Please book before - ${forwardDate}`
                            }
                        })} />
                        <label className="label" >
                            <span className="label-text-alt text-red-700 text-md font-semibold">{errors.date?.message}</span>
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-secondary font-notosansjp">Time - <span className="text-neutral font-bold">11:00-23:00</span></span>
                        </label>
                        <input type="time" id="time" className="input font-notosansjp input-bordered input-accent text-secondary w-full max-w-md" {...register("time", {
                            required: "Time is required",
                            min: {
                                value: "11:00:00",
                                message: "Please book during our opening hours(11:00 am)."
                            },
                            max: {
                                value: "23:00:00",
                                message: "No booking after 11:00 pm"
                            },
                        })} />
                        <label className="label" >
                            <span className="label-text-alt text-red-700 text-md font-semibold">{errors.time?.message}</span>
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-secondary font-notosansjp">Number Of People</span>
                        </label>
                        <input type="number" id="people" placeholder="max: 5" max="5" min="1" className="input font-notosansjp input-bordered input-accent text-secondary w-full max-w-md" {...register("people", {
                            valueAsNumber: true,
                            required: "Number of people is required",
                            min: {
                                value: 1,
                                message: "Minimum 1 person is required"
                            },
                            max: {
                                value: 5,
                                message: "Maximum 5 persons allowed at once"
                            }
                        })} />
                        <label className="label" >
                            <span className="label-text-alt text-red-700 text-md font-semibold">{errors.people?.message}</span>
                        </label>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button className="btn btn-secondary btn-outline w-full md:w-auto lg:px-24 md:px-12 font-notosansjp">Submit</button>
                </div>
            </form>
            {/* Modal */}
            <dialog id="showBooking" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box bg-primary">
                    <img src={Tick} alt="tick" className="mx-auto" />
                    <p className="py-4 text-center font-bold text-xl text-secondary font-notosansjp">Thank you for your booking.</p>
                    <div className="modal-action">
                    <button className="btn btn-secondary font-notosansjp">Close</button>
                    </div>
                </form>
            </dialog>
        </div> 
    </section>
  )
}

export default Form