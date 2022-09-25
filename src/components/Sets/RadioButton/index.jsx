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
export const RadioButton = (props) => {
    const { text, action, rounded, name, activeParam } = props
    const input = useRef();
    
    const enableRadioOnClick = () => {
        input.current.checked = true
    }

    const activeRadio = (input) => {
        if (input.current
            &&
            input.current.parentElement.textContent === activeParam) {
            input.current.checked = true
        }
    }

    return (
        <div className="sets-filter-btn-container"
             onClick={(e) => {action(e); enableRadioOnClick()}}
             onLoad={activeRadio(input)}>
            <input ref={input} className="sets-filter-input" type="radio" name={name} />
            <button className={"btn border border-1 border-light rounded-0 " + rounded}>
                {text}
            </button>
        </div>
    )
}