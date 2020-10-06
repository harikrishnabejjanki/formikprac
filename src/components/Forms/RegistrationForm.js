import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControll from '../FormikControll';

function RegistrationForm() {

    const options = [
        {
            key: "Email", value: "emailmoc"
        },
        {
            key: "Telephonic", value: "telephonicmoc"
        }
    ]
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''


    };
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required !'),
        password: Yup.string().required('Required !'),
        confirmPassword: Yup.string().when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
            )
        }),
        modeOfContact: Yup.string().required('Required !'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonicmoc',
            then: Yup.string().required('Required !')
        })


    });
    const onSubmit = values => {
        console.log('Form Data', values);
    }



    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form>
                            <FormikControll
                                control='input'
                                // control='chakraInput'
                                type='email'
                                label='Email'
                                name='email'
                            />
                            <FormikControll
                                control='input'
                                type='password'
                                label='Password'
                                name='password'
                            />
                            <FormikControll
                                control='input'
                                type='password'
                                label='Confirm Password'
                                name='confirmPassword'
                            />
                            <FormikControll
                                control='radio'
                                label='Mode of Contact'
                                name='modeOfContact'
                                options={options}
                            />
                            <FormikControll
                                control='input'
                                type='text'
                                label='Phone Number'
                                name='phone'
                            />
                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}
export default RegistrationForm;