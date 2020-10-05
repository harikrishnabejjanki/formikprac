import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControll from './FormikControll';


function FormikContainer() {

    const options = [
        { key: "Select an option", value: "" },
        { key: "Option1", value: "Option1" },
        { key: "Option2", value: "Option2" },
        { key: "Option3", value: "Option3" },
        { key: "Option4", value: "Option4" },
    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: ''
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required !'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required')

    });
    const onSubmit = values => {
        console.log('Form Data', values);
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => (<Form>
                    <FormikControll control='input' label="Email" name="email" type="email" />
                    <FormikControll control='textarea' label="Description" name="description" />
                    <FormikControll control='select' label="Select a topic" name="selectOption" options={options} />
                    
                    <button type="submit">SUBMIT</button>
                </Form>)
            }
        </Formik>
    )
}

export default FormikContainer;