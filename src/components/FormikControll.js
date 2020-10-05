import React from 'react';
import Input from './Fields/Input';
import TextArea from './Fields/TetxArea';
import SelectDropDown from './Fields/SelectDropDown';
import RadioButton from './Fields/RadioButton';
import CheckBoxGroup from './Fields/CheckBoxGroup';

import DatePicker from './Fields/DatePicker';

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
            return <RadioButton  {...rest} />
        case 'checkbox':
            return <CheckBoxGroup  {...rest} />
        case 'date':
            return <DatePicker  {...rest} />
        default: return null;

    }
}
export default FormikControll;