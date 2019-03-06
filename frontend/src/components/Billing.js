import React, { Component } from "react";
import NavBar from "./NavBar";
import  '../css/Billing.css';

class Billing extends Component {
    render() {
        return (
            <div className="billing-page">
                <NavBar />
                <div className="billing-main">
                    <div>BILLING</div>
                    <div className="billing-form-container">
                        Payment Info
                        <form className="billing-form">
                            <input className="billing-form-item" type="text" name="cardNum" placeholder="CC#"></input>
                            <input className="billing-form-item" type="text" name="expDate" placeholder="EXP"></input>
                            <input className="billing-form-item" type="text" name="cvv" placeholder="CVV"></input>
                            <input className="billing-form-item" type="submit" value="Buy Now" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Billing;