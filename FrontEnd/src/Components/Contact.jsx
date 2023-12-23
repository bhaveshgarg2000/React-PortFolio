import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const SignupSchema = Yup.object({
    name: Yup.string().min(4).max(25).required("Please enter name"),
    email: Yup.string().email().required("Please enter email Address"),
    message: Yup.string().required("Please enter your Message"),
});

const Contact = () => {
    const { values, handleBlur, handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: SignupSchema,
        onSubmit: async (values, action) => {
            try {
                const response = await fetch('http://localhost:3000/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    toast.success('Form submitted successfully');
                    action.resetForm();
                } else {
                    toast.error('Form submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('An error occurred');
            }
        },
    });
    console.log(errors)
    return (
        <div className="formo pt-10 sm:flex">
            <h1 className="text-6xl ">Contact US</h1>
            <div className="flex flex-col justify-center items-center formo ">
                <form
                    className="w-80 flex flex-col md:w-100"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="name" className="pt-2 text-2xl md:text-3xl" >Name : </label>
                    <input
                        className=" pt-2 text-2xl md:text-3xl none-underline border-none outline-none"
                        autoComplete="off"
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (<p>{
                        errors.name}</p>) : null}
                    {/* <br /> */}
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
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {errors.email && touched.email ? (<p>{
                        errors.email}</p>) : null}
                    {/* {<p>{errors.email}</p>} */}
                    {/* <br /> */}

                    <label
                        className="pt-2 text-2xl md:text-3xl"
                        htmlFor='message'>Message :  </label>
                    <input
                        className="pt-2 text-2xl md:text-3xl none-underline border-none outline-none"
                        autoComplete="off"
                        type="text"
                        name="message"
                        placeholder="Message"
                        id="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={500}

                    />
                    {errors.confirm && touched.confirm ? (<p>{
                        errors.confirm}</p>) : null}
                    <br />
                    <button
                        className="md:rounded-lg bg-dark text-white p-2 rounded-sm outline outline-offset-4 
                        outline-2 outline-lime-600 hover:text-dark hover:bg-green-200 text-xl md:text-2xl"
                        type='submit'>
                        Register
                    </button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Contact
