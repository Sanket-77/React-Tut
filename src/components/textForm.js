import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = " ";
        setText(newText);
    }

    function handleOnChange(event) {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className='container'>
                <h1>{props.heading}  </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convart To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convart To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p> {text.split(" ").length} words and {text.length} charachters</p>
            </div>
        </>
    )
}
