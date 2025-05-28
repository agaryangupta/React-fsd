import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handleExtraSpaces=()=>{
          let newText = text.trim();
          setText(newText);
    }
    const handleClearClick = ()=>{
      let newText = "";
      setText(newText);
    }
    const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
    }
    const [text,setText] = useState("Enter text here")
  return (
    <div>
      <div className='container'>
        <center><h1>{props.heading}</h1></center>
        <textarea className='form-control my3' onChange={handleOnChange} value={text} placeholder='Leave a comment here' rows ={8}>
        </textarea>
        <div className='btn'>
              <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
              <button className='btn btn-primary' onClick={handleLoClick}>Convert to Lowercase</button>
              <button className='btn btn-primary' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
              <button className='btn btn-primary' onClick={handleClearClick}>Clear Text</button>
              <button className='btn btn-primary' onClick={handleCopy}>Copy to clipboard</button>
            </div>
      </div>
    </div>
  )
}