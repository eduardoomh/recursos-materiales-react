import React from "react";
import { useField } from "formik";
import { Form } from "semantic-ui-react"

export default function SelectFormik(props) {
    const { name, options, label } = props;
    const [field, , helpers] = useField(name);

    return (
        <Form.Select
            label={label}
            options={options}
            onChange={(e, v) => helpers.setValue(v.value)}
            value={field.value.value} 
        />
    );
}