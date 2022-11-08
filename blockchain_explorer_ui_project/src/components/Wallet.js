import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Wallet = () => {
    const walletLocation = useLocation();
    const [amount,setAmount] = useState();
    const navigate = useNavigate();
    const handleChange = Event => {
        setAmount(Event.target.value);
    }
    const submitForm = Event => {
        Event.preventDefault();
        navigate("/reciept",{state:{amount:amount}});
    }
    return ( 
    <div className="div-class">
            <h1>Transfer</h1>
    <div className="inner-div-class">
        <form onSubmit={submitForm}>
            <p><b>From:</b> 0xCB2BDAA2D6A7EFB6F1F6BF4E09020F85E2FB20F0</p>
            <p><b>To:</b> {walletLocation.state.id}</p>
        <label>
            Amount: <input type='text' name="amount" value={amount} onChange={handleChange} />
        </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    
    

    </div>
);
}
 
export default Wallet;