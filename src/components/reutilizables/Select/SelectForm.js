import React from "react";
import "./SelectForm.scss";

export default function SelectForm(props){
    const {children, name, label, value, onChange} = props;
    return(
        <div className="field">
            <label for={name}>{label}</label>
            <select 
                className="ui selection dropdown" 
                id={name}
                name={name} 
                value={value}
                onChange={onChange}
            >   
            {children}
            </select>
    </div>
    )
}