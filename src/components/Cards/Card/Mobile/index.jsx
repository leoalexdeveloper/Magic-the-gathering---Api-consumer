import "./styles.css"
import magicIcons from "../../../../assets/icons/icons.json"
import { returnIcons } from "../../../../utils/utils"
import { useContext } from "react"
import { Context } from "../../../../contexts/Cards"

export const Card = (props) => {
    const { dispatch} = useContext(Context)
    const { card } = props
    

    const enableCardModal = (e) => {
        dispatch({type: "RECORD_MODAL_CARD_IMAGE", payload: card})
    }

    return (
        <>
            <div className="col-12 card-container d-flex flex-row mb-2 text-light position-relative" style={{ overflow: "hidden" }}>

                <div className="col-12 card-image-container d-flex flex-column align-items-center position-relative">
                    <div className="col-11 pt-2 rounded">
                        <div className="col-12 fs-6 d-flex flex-row align-items-center justify-content-start pt-2">
                            <i className={"mx-2 bg-light text-dark rounded-circle p-2 " + card.types.map(type => returnIcons(magicIcons.cardTypes, type, "ms ms-"))}></i>
                            <div className="mx-2 text-wrap">{card.type}</div>
                        </div>

                        <hr />

                        <figure className="d-flex flex-column align-items-center position-relative">
                            <img onClick={(e) => card.imageUrl && enableCardModal(e)} className="rounded rounded-4" style={{ overflow: 'hidden', cursor: "Pointer" }} src={card.imageUrl ? card.imageUrl : "../../assets/img/logo/logo.png"} alt={card.name} />
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
            </div>
        </>
    )
}