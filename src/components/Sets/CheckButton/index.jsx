import { useRef } from "react";
import "./styles.css"

/**
 * @param {*} props 
 * @returns a radio button masked
 * 
 * @infos
 * This component receive:
 * text = button text
 * action = a function to perform on click
 * isActive = a function loaded on the component load step
 */

export const CheckButton = (props) => {
    const { action, text, activeParam } = props
    const input = useRef()

    const activeChecked = (input) => {
        input.current && (input.current.checked = activeParam)
    }

    return (
        <div className="sets-order-btn-container"
            onClick={(e) => { action(e) }}
            onLoad={activeChecked(input)}>
            <input ref={input} className="sets-order-input" type="checkbox" name="order-radio" />
            <button className={"btn border border-1 border-light rounded-0"}>
                {text}
            </button>
        </div>
    )
}