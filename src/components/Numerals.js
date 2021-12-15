import React, {useState} from "react";
import inWords from './Convert'

function Numerals() {
    const [input, setInput] = useState('');
    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form className='numerals-form' onSubmit={handleSubmit}>
            <div>
                <input type='text'
                       placeholder='Type a number'
                       value={input} name='text'
                       className='numeral-input'
                       onChange={handleChange}
                       autoComplete="off" // change value to on for suggestions
                />
            </div>
            <div>
                <textarea disabled  value={inWords(input)} className='convert'/>
            </div>
        </form>

    )

}

export default Numerals;