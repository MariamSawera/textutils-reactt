import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
   // console.log("Uppercase was clicked"+ text);
    setText("You have clicked on handleUpClick")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!" , "success");
  }

  const handleLoClick = () => {
    // console.log("Lowercase was clicked"+ text);
     setText("You have clicked on handleLpClick")
     let newText = text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to lowercase!" , "success");
   }

   const handleClearClick = () => {
    // console.log("clear was clicked"+ text);
     setText("You have clicked on handleClearClick")
     let newText = " ";
     setText(newText)
     props.showAlert("Text has been cleared!" , "success");
   }

   const handleExtraSpace =() => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra space!" , "success");
   }

   const handleCopy =() => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied!" , "success");
      
   }

  const handleOnChange = (event) => {
   // console.log("onChange");
    setText(event.target.value);
  }
  const [text, setText] = useState('');

  return (
    <>
  <div className="container" style={{ color: props.mode==='dark'?'white':'#042743'}}>
   <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} 
  style={{ backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743' }} 
  id="myBox" rows="8"></textarea>
  </div>
   <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
   <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
   <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
   <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
   <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>

  </div>
  <div className="container my-3" style={{ color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Text Summary</h2>
    <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:" Nothing to preview! "}</p>

  </div>
  </>
  ) 
}
