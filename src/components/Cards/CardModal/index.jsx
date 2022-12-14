import "./styles.css"
import { Context } from "../../../contexts/Cards"
import { useContext } from "react"

import { returnIcons } from "../../../utils/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import magicIcons from "../../../assets/icons/icons.json"

export const CardModal = () => {
    const { state, dispatch } = useContext(Context)
    const { modalContent } = state
    const card = modalContent

    const closeModal = () => {
        dispatch({ type: "RECORD_MODAL_CARD_IMAGE", payload: {} })
    }

    return (
        <div className="card-modal-container col-12 bg-dark text-light position-absolute top-0 start-0">
            <div className="col-12 card-container d-flex flex-column mb-2 text-light position-relative" style={{ overflow: "hidden" }}>

                <div className="col-12 card-image-container d-flex flex-column align-items-center position-relative">
                    <div className="col-12 p-3 rounded">
                        <div className="col-12 fs-6 d-flex flex-row align-items-center justify-content-between pt-2">
                            
                            <i className={"mx-2 bg-light text-dark rounded-circle p-2 " + card.types.map(type => returnIcons(magicIcons.cardTypes, type, "ms ms-"))}></i>
                            <div className="mx-2 text-wrap">{card.type}</div>

                            <FontAwesomeIcon onClick={() => closeModal()} className="fs-4 mx-2 border rounded-circle px-2 py-1 bg-light text-dark" icon={faXmark} style={{cursor: "pointer"}} />
                        </div>

                        <hr />

                        <figure className="d-flex flex-column align-items-center">
                            <img className="rounded rounded-4" style={{ overflow: 'hidden', cursor: "Pointer", width:"25rem" }} src={card.imageUrl ? card.imageUrl : "../../assets/img/logo/logo.png"} alt={card.name} />
                            <hr />
                            <figcaption className="text-center">
                                {card.name && <em><strong>Card:</strong>{" " + card.name}</em>}
                                <hr />
                                <div className="d-flex align-items-center justify-content-start">
                                    {card.flavor && <cite>"{card.flavor}"</cite>}
                                </div>
                            </figcaption>
                        </figure>
                        {card.flavor && <hr />}
                    </div>
                </div>

                <div className="col-12 d-flex flex-row flex-wrap justify-content-evenly">

                    <div className="col-6 card-attributes-container">
                        <div className="pt-2">
                            <div className="text-light fs-5 pt-2 d-flex flex-column align-items-center justify-content-center">
                                <span>Attributes</span>
                            </div>

                            <div className="p-3">
                                <hr />
                                <div className="d-flex flex-row align-items-start justify-content-start">
                                    <span>Artist:</span>
                                    <span className="d-flex flex-row align-items-center justify-content-center">
                                        <span className={"mx-2 d-flex justify-content-center " + returnIcons(magicIcons.cardSymbols, "artist", "ms ms-")}></span>
                                        {card.artist && <span>{card.artist}</span>}
                                    </span>
                                </div>
                                {card.artist && <hr />}

                                <div className="d-flex align-items-center justify-content-start">
                                    <span>Mana Cost:</span>
                                    <div className="d-flex justify-content-start align-items-center mx-1">
                                        {card.manaCost && card.manaCost.toString().replaceAll("{", " ").split("}").map((mana, index) => <i key={index} className={`ms ms-${mana.toLowerCase().trim()}`}></i>)}
                                    </div>
                                </div>
                                {card.manaCost && <hr />}

                                <div className="d-flex align-items-center justify-content-start">
                                    <span>Colors:</span>

                                    <div className="d-flex justify-content-start align-items-center mx-1 fs-5">
                                        {card.colors && <i className={returnIcons(magicIcons.colors, card.colors.join("").toLowerCase(), "`ms ms-ci ms-")}></i>}
                                    </div>
                                </div>
                                {card.colors && <hr />}

                                <div className="d-flex align-items-center justify-content-start">
                                    <span>Color Identity:</span>

                                    <div className="d-flex justify-content-start align-items-center mx-1 fs-5">
                                        {card.colors && <i className={returnIcons(magicIcons.colors, card.colorIdentity.join("").toLowerCase(), "`ms ms-ci ms-")}></i>}
                                    </div>
                                </div>
                                {card.colors && <hr />}

                                <div className="d-flex align-items-start justify-content-start">
                                    <span>Printings:</span>

                                    <span className="mx-2">{card.printings.map((print, index) => (card.printings.length - 1 > index) ? print + ", " : print)}</span>
                                </div>
                                {card.printings && <hr />}

                                <div className="d-flex align-items-center justify-content-start">

                                    {card.power && <><span>Power:</span><i className={returnIcons(magicIcons.mana, String(card.power), "ms ms-")}></i></>}
                                </div>
                                {card.power && <hr />}
                            </div>
                        </div>
                    </div>

                    <div className="col-6 card-rulings-container card-rulings-container">
                        <div className="pt-2">
                            <div className="text-light fs-5 pt-2 d-flex flex-column align-items-center justify-content-around">
                                <span>Rules</span>
                            </div>
                            <div className="p-3">
                                <hr />
                                {card.rulings
                                    ?
                                    card.rulings.map((rule, index) => {

                                        return (
                                            <p key={index} className="fs-6">{rule.text}</p>
                                        )
                                    })
                                    :
                                    <p className="fs-6 lead">No rules available</p>
                                }
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}