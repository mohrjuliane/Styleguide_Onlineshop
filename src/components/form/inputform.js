import React, {useState} from 'react';

function InputForm({ label, type }) {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(!focused);
    }

    return (
            <label>
                <p className="font-white margin-top-bottom-8">{label}</p>
                <input className={focused ? "no-outline padding-8 raleway font-white none-bg inputfield-border-active border-8 border-box min-width-300" : "no-outline padding-8 raleway font-white none-bg inputfield-border border-8 border-box min-width-300"} type={type} name={label} onFocus={handleFocus} onBlur={handleFocus}/>
            </label>
    )
}

export default InputForm;
