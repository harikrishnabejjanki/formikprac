import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControll from './FormikControll';


function FormikContainer() {

    const checkBoxOptions = [

        { key: "Option1", value: "cbOption1" },
        { key: "Option2", value: "cbOption2" },
        { key: "Option3", value: "cbOption3" },
        { key: "Option4", value: "cbOption4" }]

    const options = [
        { key: "Select an option", value: "" },
        { key: "Option1", value: "Option1" },
        { key: "Option2", value: "Option2" },
        { key: "Option3", value: "Option3" },
        { key: "Option4", value: "Option4" },
    ]
    const radioOptions = [

        { key: "Option1", value: "Option1" },
        { key: "Option2", value: "Option2" },
        { key: "Option3", value: "Option3" },
        { key: "Option4", value: "Option4" }]

    const initialValues = {
        email: 'hari@gmail.com',
        description: 'harikrishna',
        selectOption: '',
        radioOption: '',
        checkboxOptions: [],
        date:null
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required !'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOptions: Yup.array().required('Required'),
        date:Yup.date().required('Required').nullable()

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
                    <FormikControll control='radio' label="Select a Topic" name="radioOption" options={radioOptions} />
                    <FormikControll control='checkbox' label="Checkbox Topics" name="checkboxOptions" options={checkBoxOptions} />
                    <FormikControll control='date' label="Pick a date" name="date"   />

                    <button type="submit">SUBMIT</button>
                </Form>)
            }
        </Formik>
    )
}

export default FormikContainer;