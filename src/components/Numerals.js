import React, {useState} from "react";
import inWords from './Convert'
import Convert from "./Convert";

function Numerals(props) {
    const [input, setInput] = useState( '');
    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
         props.onSubmit({
        id: Math.floor(Math.random() * 10000),
            text: input
         });
    }

    return (
        <form className='numerals-form' onSubmit={handleSubmit}>
            <div>
            <input type='text'
                   placeholder='Type a number'
                   value={input} name='text'
                   className='numeral-input'
                   onChange={handleChange}
            />
            <button className='numerals-button' onClick={inWords(input)}>Submit</button>
            </div>
            <div >
                <textarea type='' value={inWords(input)} className='convert'/>
            </div>
        </form>

    )

}

export default Numerals;