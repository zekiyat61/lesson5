import React,{useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("zekiyat");
    const[quantity,setQuantity]=useState(1)
    
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantitychange(event){
        setName(event.target.value);
    }


    return(<div className="form">
        <input value={name} onChange={handleNameChange}/>
        <p>Name:{name}</p>
        <input value={quantity} onChange={handleQuantitychange} type="number"/>
        <p>quantity:{quantity}</p>
    </div>);
}
export default MyComponent