import React from 'react';
import Input from './Fields/Input';
import TextArea from './Fields/TetxArea';
import SelectDropDown from './Fields/SelectDropDown';

function FormikControll(props) {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <TextArea {...rest} />
        case 'select':
            return <SelectDropDown  {...rest} />
        case 'radio':
        case 'checkbox':
        case 'date':
        default: return null;

    }
}
export default FormikControll;