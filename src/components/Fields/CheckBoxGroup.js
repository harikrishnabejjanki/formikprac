import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function CheckBoxGroup(props) {
    const { label, name, options, ...rest } = props
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name} >
                {({ field }) => {
                    console.log('field', field);
                    return options.map(option => {
                        console.log('option >>>>>>', option);
                        return (
                            <div key={option.key} >
                                <input
                                style={{display:'row', }}
                                    type='checkbox'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </div>
                        )
                    })
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default CheckBoxGroup