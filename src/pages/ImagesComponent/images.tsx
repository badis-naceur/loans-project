import React from "react"
import "../../index.css"

const Images = (props: any) => {
    return (
        // i could do  map but the order showed in  figma  make me hardcoded this
        <div className="img">
            <img
                onClick={() => props.result(props.element[1].id)}
                src="https://media.discordapp.net/attachments/898306285102071839/967219424350318603/Untitled.png"
                alt=""
                style={{ cursor: "pointer" }}
            />
            <img
                onClick={() => props.result(props.element[2].id)}
                src="https://media.discordapp.net/attachments/898306285102071839/967163037679222814/house-2374925_960_720_1.png"
                alt=""
                style={{ cursor: "pointer" }}
            />
            <img
                onClick={() => props.result(props.element[0].id)}
                src="https://media.discordapp.net/attachments/898306285102071839/967168515440263208/dollar-3717534_960_720_1.png"
                alt=""
                style={{ cursor: "pointer" }}
            />
        </div>
    )
}
export default Images
