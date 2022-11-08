import React from "react";
import { useLocation } from "react-router-dom";

const Reciept = () => {
    const location = useLocation();
    return ( 
        <div className="div-class">
            <div className="inner-div-class">
                <h1>Reciept</h1>
                <p><b>Transaction Hash: </b>0xfafbb58d8b2fec524a5beb5287b4c74d2446a7552f8f430ae2c82ece429e2718</p>
                <p><b>Block Hash: </b>0x4b19a5c7e7d56a0c069f7f450ecae8b5dcdcbf8e9ceb536b979c2a8068653fbd</p>
                <p><b>Block Number: </b>1</p>
                <p><b>From: </b>0xCB2BDAA2D6A7EFB6F1F6BF4E09020F85E2FB20F0</p>
                <p><b>To: </b>0xB319FEF15F329177048B1F6CCE3553EB82477D72</p>
                <p><b>Gas Used:</b> 21000</p>


        <h1>My Wallet</h1>
            <div>
                <p><b>Address:</b> 0xD10D88A5F14CF1586ED3A3F9C93AC924D260E6DC</p>
                <p><b>Balance:</b>{location.state.amount}</p>
            </div>
        </div>

            </div>
        );
    }
 
export default Reciept;