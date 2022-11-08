import React from "react";
import Timer from './Timer';
// import { useLocation } from "react-router-dom";
const Transactions = () => {
    // const transactionLocation = useLocation();
    return ( 
        <div className="div-class">
            <h1>Transaction History</h1>
        <div className="inner-div-class">
            <p><b>Transaction Hash: </b>0x06b5d935af61561fc0676ec969ba10e327b1da5134fbc1a1bcd8de29314aace7</p>
            <p><b>Status: </b>Success</p>
            <p><b>Timestamp: </b><Timer /></p>
            <p><b>From: </b>0xCB2BDAA2D6A7EFB6F1F6BF4E09020F85E2FB20F0</p>
            <p><b>To: </b>0x235A0E2606DE08CF900EC70D1B1504CB3F0DB676</p>
            <p><b>Value: </b>250<b> ETH</b></p>
            <p><b>Gas Used:</b> 21000</p>
        </div>
        </div>
     );
}
 
export default Transactions;