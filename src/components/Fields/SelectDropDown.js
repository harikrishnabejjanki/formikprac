import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Input(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
                {
                    options.map((item, index) => {
                        return (
                            <option key={item.key} value={item.value}>{item.key}</option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input;