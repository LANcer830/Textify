import React,{useState} from 'react'

export default function TextFrom(props) {
  const handleUpClick=()=>{
    // console.log("uppercase was clicked" +text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleCopyClick=()=>{
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
    props.showAlert("Text copied","success");
  }
  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking text","success");
  }
  const handleRemoveSpace = () => {
    let updated_text = text.replace(/\s/g, '')
    setText(updated_text)
    props.showAlert("white spaces are removed","success");
}
const handleRemoveExtraSpace = () => {
  let updated_text = text.split(/[ ]+/);
  setText(updated_text.join(" "))
  props.showAlert("Extra spaces are removed","success");
}
  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);

  }
  const handleClear=(event)=>{
    // console.log("On change");
    setText("");
    props.showAlert("Text cleared","success");
    

  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button  disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to upper case</button>
    <button  disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lower case</button>
    <button  disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy text</button>
    <button  disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleSpeak} >text to Speech</button>
    <button  disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpace} >Remove spaces</button>
    <button  disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpace} >Remove Extra spaces</button>
    <button  disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleClear} >Clear text</button>



  <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary here:</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>
        {text.length>0?text:"Nothing to preview"}
      </p>

    </div>
    
      </div>
      </>
      
  )
}
