import React, { useEffect } from "react"
import { useState } from "react"
import "../../index.css"

const InputsAmount = (props: any) => {
    let [count, setcount] = useState(props.element[0].min_tenure)
    let [Ammount, setAmmount] = useState("")
    let [view, setview] = useState(false)
    let [data, setData] = useState(props.element[0])
    useEffect(() => {
        setData(props.element.find((a: any) => a.id === props.vue))
    }, [props.vue])
    useEffect(() => {
        setcount(data.min_tenure)
    }, [data])

    useEffect(() => {
        setData(props.element[0])
        setcount(props.element[0].min_tenure)
    }, [])

    // inc and dec the input of MonthsNumber
    const inc = () => {
        if (count < data.max_tenure) {
            setcount(++count)
        }
    }
    const dec = () => {
        if (count > data.min_tenure) {
            setcount(--count)
        }
    }
    const formatNumber = (e: number) => {
        new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(e)
    }

    return (
        <div>
            {data && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "row",
                    }}>
                    <div style={{ width: 200 }}>
                        <h1 style={{ fontFamily: "WorkSans-Regular" }}>loan amount</h1>
                        <div
                            id="input"
                            className="flex flex-wrap items-stretch w-full mb-4 relative">
                            <div className="flex -mr-px">
                                <span
                                    style={{
                                        fontWeight: 700,
                                        alignItems: "center",
                                    }}
                                    className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                                    $
                                </span>
                            </div>
                            <input
                                min={data.min_amount}
                                max={data.max_amount}
                                onChange={(event) => {
                                    {
                                        Number(event.target.value) < Number(data.max_amount)
                                            ? setview(false)
                                            : setview(true)
                                    }

                                    setAmmount(event.target.value),
                                        props.Loan(parseInt(event.target.value))
                                }}
                                placeholder={data.min_amount}
                                type="number"
                                value={Ammount}
                                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light px-3 relative"
                            />
                        </div>
                        {view ? (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    flexDirection: "row",
                                    color: "red",
                                    fontSize: "10px",
                                }}>
                                <img
                                    style={{ height: 15, width: 15 }}
                                    src="https://media.discordapp.net/attachments/898306285102071839/968417521558511636/red-x.png?width=429&height=429"
                                />
                                <h6>your max_amount is {data.max_amount}</h6>
                            </div>
                        ) : null}
                    </div>
                    <div style={{ width: 200 }}>
                        <span style={{ marginLeft: "20%" }}>Number of Months</span>
                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                                onClick={dec}
                                data-action="decrement"
                                className=" bg-white-300 text-white-600 hover:text-white-700 hover:bg-white-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                <span
                                    className="m-auto text-2xl font-thin"
                                    onClick={props.getCount(count)}>
                                    {count == data.min_tenure ? "" : "-"}
                                </span>
                            </button>
                            <input
                                className="outline-none focus:outline-none text-center w-full bg-white-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-white-700  outline-none"
                                name="custom-input-number"
                                placeholder={count}
                                value={count}
                                onChange={(event) => {
                                    setcount(event.target.value)
                                }}
                            />
                            <button
                                onClick={inc}
                                data-action="increment"
                                className="bg-white-300 text-white-600 hover:text-white-700 hover:bg-white-400 h-full w-20 rounded-r cursor-pointer">
                                <span
                                    className="m-auto text-2xl font-thin"
                                    onClick={props.getCount(count)}>
                                    {count == data.max_tenure ? "" : "+"}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default InputsAmount
