// const { useForm } from 'formik'
const Contact = () => {
    return (
        <div className="formo pt-10 sm:flex">
            <h1 className="text-6xl ">Contact US</h1>
            <div className="flex flex-col justify-center items-center formo ">
                <form
                    className="w-80 flex flex-col md:w-100"
                // onSubmit={handleSubmit}
                >
                    <label htmlFor="name" className="pt-2 text-2xl md:text-3xl" >Name : </label>
                    <input
                        className=" pt-2 text-2xl md:text-3xl none-underline border-none outline-none"
                        autoComplete="off"
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                    // value={values.name}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    />
                    {/* {errors.name && touched.name ? (<p>{
                        errors.name}</p>) : null} */}
                    <br />
                    <label htmlFor='email'
                        className="pt-2 text-2xl md:text-3xl"
                    >Email : </label>
                    <input
                        className="pt-2 text-2xl md:text-3xl none-underline border-none outline-none"
                        autoComplete="off"
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                    // value={values.email}
                    // onChange={handleChange}
                    // onBlur={handleBlur}

                    />
                    {/* {errors.email && touched.email ? (<p>{
                        errors.email}</p>) : null} */}
                    {/* {<p>{errors.email}</p>} */}
                    <br />

                    <label
                        className="pt-2 text-2xl md:text-3xl w-full"
                        htmlFor='confirm'>Message :  </label>
                    <input
                        className=" pt-2 text-2xl md:text-3xl none-underline border-none outline-none"
                        type="text"
                        name="message"
                        placeholder="Drop Your Message"
                        id="confirm"
                        autoComplete="off"
                        maxLength={100}
                        style={{ width: '350px' }}
                    // value={values.confirm}
                    // onChange={handleChange}
                    // onBlur={handleBlur} 
                    />
                    {/* {errors.confirm && touched.confirm ? (<p>{
                        errors.confirm}</p>) : null} */}
                    <br />
                    <button
                        className="md:rounded-lg bg-dark text-white p-2 rounded-sm outline outline-offset-4 
                        outline-2 outline-lime-600 hover:text-dark hover:bg-green-200"
                        type='submit'>
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
