import * as Yup from 'yup'

export const SignupSchema = Yup.object({
    name: Yup.string().min(5).max(15).required("Please enter name"),
    email: Yup.string().email().required("Please enter email Address"),
    message: Yup.string().message().required("Please enter your Message"),
});


