import React, {useState} from "react"




function TextForm(props) {
    const [text, setText]=useState('');
    
    const handleUpClick =()=>{
        console.log("Upercase was cliked" + text)
        let newText= text.toUpperCase();
       setText(newText)
    }

    const handleDownClick =()=>{
        console.log("Lowercase text" + text)
        let newLowerText = text.toLowerCase();
        setText(newLowerText)
    }

    const handleClearClick = ()=>{
       // setText("")
       let newLowerText = ("");
        setText(newLowerText)
        
    }

    const handleCopyClick = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value)
    }
   
    const handleOnChange =(event)=>{
        console.log("On Change")
        setText(event.target.value);
        
    }
   

  return (
    <>
    <div className="container my-5" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
<h1>{props.heading}</h1>   
<div className="mb-5">
<textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'light' ? 'white' : '#253138', color:props.mode ==='dark' ? 'white' :'black', border:props.mode === 'dark' ? '1px solid skyblue' : ' 1px solid gray'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button type="button" className="btn btn-success mx-1 my-1" onClick={handleUpClick} >Convert to Upercase</button>

<button type="button" className="btn btn-success mx-2 my-1" onClick={handleDownClick} >Convert to Lowercase</button>

<button type="button" className="btn btn-success mx-2 my-1" onClick={handleClearClick} >Clear Text</button>
<button type="button" className="btn btn-success mx-2 my-1" onClick={handleCopyClick} >Copy Text</button>
</div>
<div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
    <h2 >Your Text Counter</h2>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} <strong>Words</strong> {text.length} <strong>Characters</strong></p>
    
    <p>{0.008 * text.split(" ").length} <strong>Minutes to Read</strong> </p>
    <h3 >Preview</h3>
    <pre className='para'>{text.length> 0 ? text : "Enter Something in Above TextArea to Preview it here......."} </pre> 
    <hr />

</div>
</>
)
}

export default TextForm
