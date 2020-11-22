import React from "react";
// import { Card } from 'reactstrap';

function Budget() {
    return (
        <div className="wrapper">
            <div className="total">
                <div className="total">Your total is: $<span id="total">0</span></div>
            </div>

            <div className="form">
                <input type="text" id="t-name" placeholder="Name of transaction" />
                <input type="number" min="0" id="t-amount" placeholder="Transaction amount" />
                <button id="add-btn"><i className="fa fa-plus buttons"></i> Add Funds</button>
                <button id="sub-btn"><i className="fa fa-minus"></i> Subtract Funds</button>
                <p className="error"></p>
            </div>

            <div className="transactions">
                <div>
                    <ul>
                        <li>Transaction</li>
                        <li>Amount</li>
                    </ul>
                </div>
                <div id="tbody">
                </div>
            </div>

            <canvas id="myChart"></canvas>
        </div >
    );
}

export default Budget;