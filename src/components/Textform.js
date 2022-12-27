import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UpperCase","success");

    }

    const handleLoClick=()=>{
      // console.log("Uppercase was clicked"+text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Text converted to Lowercase","success");

  }

  const handleClearClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText="";
    setText(newText);
    props.showAlert("Text is cleared","success");

}
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);

    }
    const[text, setText]=useState(''); //hooks
    // setText("New text");
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`} >
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Covert to Upper-Case</button>
<button className="btn btn-primary mx-3" onClick={handleLoClick}>Covert to Lower-Case</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h2 className='my-3'>Preview</h2>
      <p>{text.length===0?'Enter something to preview':text}</p>
    </div>
    </>
  )
}
