import React, {useState} from "react";

function numerals() {
    const [input, setInput] = useState('');

    return(
        <form className='numerals-form'>
            <input type='text'
                   placeholder='Type a number'
                   value='input' name='text'
                   className='numeral-input'/>
            <button className='numerals-button'>Submit</button>
        </form>

    )

}