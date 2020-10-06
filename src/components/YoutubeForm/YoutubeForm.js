import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: 'h',
    email: 'h@gmail.com',
    channel: 'ch',
    comments: 'he',
    address: 'Ww',
    social: {
        facebook: '',
        twitter: ''
    },          // nested objects
    phoneNumbers: ["", ""],
    phNumbers: ['']
}

const savedData = {
    name: 'harikrishna',
    email: 'hari@gmail.com',
    channel: 'channel 1234',
    comments: 'helloooo',
    address: 'Wwwwwww',
    social: {
        facebook: '',
        twitter: ''
    },          // nested objects
    phoneNumbers: ["", ""],
    phNumbers: ['']
}



const onSubmit = (values, onSubmitProps) => {
    console.log("values", values);
    console.log("onSubmitProps", onSubmitProps); 
    onSubmitProps.resetForm();
}



const validationSchema = Yup.object({
    name: Yup.string().required('Required !'),
    email: Yup.string().email('Invalid email format').required('Required !'),
    channel: Yup.string().required('Required !')
});

const validateCommnets = value => {
    let error = '';
    if (!value) {
        error = 'Required';
    }
    return error;
}

function YoutubeForm() {
    const [formValues, setFormValues] = useState(null);
    return (
        <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
            enableReinitialize
        // validateOnChange={false}
        // validateOnBlur={false}
        >
            {
                (formik) => {
                    console.log('FORMIK PROPS', formik);
                    return (
                        <Form>
                            <div className="form-control">
                                <label htmlFor="name">Name</label>
                                <Field type="text" id="name" placeholder="username" name="name" />
                                <ErrorMessage name="name" component={TextError} />
                            </div>

                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <Field type="text" id="email" placeholder="Email" name="email" />
                                <ErrorMessage name="email" >
                                    {

                                        (errorMsg) => <div className="error">{errorMsg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-control">
                                <label htmlFor="Channel">Channel</label>
                                <Field type="text" id="Channel" placeholder="Channel" name="channel" />
                                <ErrorMessage name="channel" component={TextError} />
                            </div>

                            <div className="form-control">
                                <label htmlFor="commnets">Comments</label>
                                <Field as="textarea" id="comments" name="comments" validate={validateCommnets} />
                                <ErrorMessage name="comments" component={TextError} />
                            </div>

                            <div className="form-control">
                                <label htmlFor="address">Address</label>
                                <Field as="textarea" id="address" name="address" >
                                    {
                                        (props) => {
                                            const { field, meta } = props;
                                            return (<div><input type="text" id="address" name="address" {...field} />
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </div>)
                                        }
                                    }
                                </Field>
                            </div>


                            <div className="form-control">
                                <label htmlFor="facebook">Facebook</label>
                                <Field type="text" id="facebook" name="social.facebook" />
                            </div>


                            <div className="form-control">
                                <label htmlFor="twitter">Twitter</label>
                                <Field type="text" id="twitter" name="social.twitter" />
                            </div>

                            <div className="form-control">
                                <label htmlFor="primary">Primary Phone Number</label>
                                <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
                            </div>


                            <div className="form-control">
                                <label htmlFor="secondary">Secondary Phone Number</label>
                                <Field type="text" id="secondaryph" name="phoneNumbers[1]" />
                            </div>

                            <div className="form-control">
                                <label>List of Phone Numbers</label>
                                <FieldArray name="phNumbers">
                                    {
                                        (FieldArrayProps) => {

                                            const { form } = FieldArrayProps;
                                            const { values } = form;
                                            const { phNumbers } = values;
                                            // console.log('render props', form.errors);
                                            return (
                                                <div>
                                                    {
                                                        phNumbers.map((phNumber, index) => {
                                                            return (<div key={index}>
                                                                <Field name={`phNumber[${index}]`} />
                                                                {index > 0 && <button onClick={() => phNumbers.splice(index, 1)}>-</button>}
                                                                <button onClick={() => phNumbers.push('')}>+</button>
                                                            </div>)
                                                        })
                                                    }
                                                </div>
                                            )
                                        }

                                    }
                                </FieldArray>
                            </div>

                            {/* <button type="button" onClick={() => formik.validateField('comments')}>Validate Comments</button>
                            <button type="button" onClick={() => formik.validateForm()}>Validate All</button>

                            <button type="button" onClick={() => formik.setFieldTouched('comments')}>Visit Comments</button>
                            <button type="button" onClick={() => formik.setTouched({
                                name: true,
                                email: true,
                                channel: true,
                                comments: true
                            })}>Visit fields</button> */}
                            <button type="button" onClick={() => setFormValues(savedData)}>LoadSavedData</button>
                            <button type="reset">ReSet</button>

                            <button type="submit" disabled={(!formik.isValid) || formik.isSubmitting}>Submit</button>

                        </Form >
                    )
                }
            }

        </Formik>
    )
}

export default YoutubeForm;