import React,{useState} from 'react'


export default function TextForm(props) {
    const myalert=()=>{
        props.showalert("success",text);
       
    }
    const myfunc=(event)=>{
        setCount(event.target.value)

    }
    const [text, setCount] = useState("Enter");
    const [copy, setcopy] = useState("Copy");
    const copytext=()=>{
        setcopy("Copied");
        var text =document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
       
    
    }
    const removespace=()=>{
       var my_text =text.split(/[]+/);
       setCount(my_text.join(' '))
    }

    return (
        <form>
            <h1 text-center>{props.Heading}</h1>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <textarea type="text" id="mybox" className="form-control" value={text} onChange={myfunc}></textarea>
                <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="button" className="btn btn-primary" onClick={myalert}>Submit</button>
            <button type="button" className="btn btn-primary m-2" onClick={copytext} >{copy}</button>
            <button type="button" className="btn btn-warning m-2" onClick={removespace} >Remove White Space</button>

            <h1>Text Review</h1>
            <p>Word:{text.split(" ").length} Charactor No :{text.length}</p>
            <p>{text}</p>
        </form>

    )
}
