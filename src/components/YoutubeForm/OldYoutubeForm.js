import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log("values", values);
}

const validate = values => {
    let errors = {};
    //values.name values.email values.channel    these are should be same as form feilds name property;
    //errors.name errors.email errors.channel     these should be same as values.name ..etc values name feilds;
    // errors.name = "This field is required";

    if (!values.name) {
        errors.name = "Required";
    } if (!values.email) {
        errors.email = "Required";
    } else if (!/(.+)@(.+){2,}\.(.+){2,}/.test(values.email)) {
        errors.email = "Invalid email format";
    }
    if (!values.channel) {
        errors.channel = "Required";
    }

    return errors;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required !'),
    email: Yup.string().email('Invalid email format').required('Required !'),
    channel: Yup.string().required('Required !')
});

console.log("errors", validationSchema);

function OldYoutubeForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
      //  validate,


    });


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="username" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : ""}
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : ""}
                </div>
                <div className="form-control">
                    <label htmlFor="Channel">Channel</label>
                    <input type="text" id="Channel" placeholder="Channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur} />
                    {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : ""}
                </div>

                <button type="submit">Submit</button>
            </form >
        </div>
    )
}

export default OldYoutubeForm;