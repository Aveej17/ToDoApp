import React,{useState} from "react"

function InputArea(props){

    const [item, setItem] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setItem(newValue);
      }

    return(
    <div className="form">
        <input type="text" value={item}  onChange={handleChange}/>
        <button onClick={() => {
            props.handleClick(item)
            setItem("");
            }}>
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea;