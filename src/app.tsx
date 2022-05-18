import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import InputsAmount from "./pages/amountInputs/input.component"
import Images from "../src/pages/ImagesComponent/images"
import moment from "moment"
const data = require("../build/public/products.json")

const App = (props: any) => {
    // const [view, setview] = useState(true)
    const [vue, setvue] = useState("")
    const [count, setcount] = useState(12)
    const [Monthpayment, setMonthpayment] = useState(0)
    const [datee, setdatee] = useState(moment().format("LL"))
    const [Ammout, setAmmout] = useState(0)
    const [totalAmmount, setTotalAmmount] = useState(0)

    // get the amount loan  Rited
    const Loan = (y: number) => {
        setAmmout(y)
        let Total = y * 0.045
        setTotalAmmount(y + Total)
    }
    //get the id of the specified item
    const result = (imageClicked: string) => {
        setvue(imageClicked)
    }

    //get the Number of the Months selected
    const getCount = (c: number) => {
        let MonthNumber = Number(c)
        let MonthAmmount = totalAmmount / MonthNumber
        isNaN(Monthpayment) === true ? setMonthpayment(0) : setMonthpayment(MonthAmmount)
        setcount(MonthNumber)
        setdatee(moment().add(c, "M").format("LL"))
    }

    return (
        <div id="app">
            <div id="container">
                <p
                    style={{
                        fontFamily: "WorkSans-Regular",
                        textAlign: "center",
                        marginBottom: 15,
                        fontSize: 25,
                        color: "#1B31A8",
                    }}>
                    Let's plan your
                    <span style={{ fontWeight: 700 }}> loan </span>
                </p>
                <div className="card">
                    <Images element={data} result={result} />
                    <InputsAmount element={data} getCount={getCount} Loan={Loan} vue={vue} />

                    <div
                        style={{
                            border: "1px solid #E9EEF2",
                            display: "flex",
                            flexDirection: "column",
                            margin: "0px 40px",
                        }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                            }}>
                            <span style={{ fontFamily: "WorkSans-Regular", fontWeight: 700 }}>
                                Months amount
                            </span>

                            <span
                                style={{
                                    fontFamily: "Rubik-Bold",
                                    fontWeight: 700,
                                    marginBottom: 15,
                                    color: "#1B31A8",
                                }}>
                                {`$` + Monthpayment.toFixed(2)}
                            </span>
                        </div>

                        <div className="planning">
                            <div>
                                <p
                                    style={{
                                        fontFamily: "WorkSans-Regular",
                                        fontWeight: 400,
                                        marginBottom: 15,
                                    }}>
                                    You're planning{" "}
                                    <span style={{ fontWeight: 700 }}>
                                        {" "}
                                        {count} monthly deposits{" "}
                                    </span>
                                    to reach your <span style={{ fontWeight: 700 }}></span> goal by{" "}
                                    <span style={{ fontWeight: 700 }}>{datee}</span> The total
                                    amount loaned will be{" "}
                                    <span style={{ fontWeight: 700 }}>
                                        {" "}
                                        {"$" + "" + totalAmmount}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 90 }}>
                        <button className="ApplyBtn" style={{ fontWeight: 700 }}>
                            Apply now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
