import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControll from '../FormikControll';

function LoginForm() {

    const initialValues = {
        email: '',
        password: ''

    };
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required !'),
        password: Yup.string().required('Required'),

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
                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}
export default LoginForm;