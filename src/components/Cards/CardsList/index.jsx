import "./styles.css"
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Context as GlobalContext} from "../../../contexts/Global"
import { Context } from "../../../contexts/Cards"
import { Card as CardDesktop } from "../Card/Desktop"
import { Card as CardMobile } from "../Card/Mobile"
import { api } from "../../../Api"
import { Loader } from "../../../components/Loader"
import { sortObject, isMobile, loadContent } from "../../../utils/utils" 
import { CardModal } from "../CardModal"

import loader from "../../../assets/loaders/default-loader.gif"

export const CardsList = () => {
    const GlobalState = useContext(GlobalContext)
    const { mobileBreakPoint } = GlobalState.state
    const { state, dispatch } = useContext(Context)
    const { cards, modalContent } = state
    const { code } = useParams();
    
    sortObject(cards, "name", true)

    useEffect(() => {
        loadContent(api, "https://api.magicthegathering.io/v1/cards?set=", code, dispatch, 'RECORD_CARDS')
    }, [code, dispatch])
    
    return (
        <div>
            {Object.keys(cards).length === 0 &&
                <Loader loader={loader} text="Loading" />
            }

            {Object.keys(cards).length > 0 && !isMobile(mobileBreakPoint) &&
                <div className="cards-list-container col-12 mb-5 pb-4">
                    {cards.map((card, index) => {
                        return cards[index+1] && (card.name !== cards[index+1].name) && (
                            <CardDesktop key={card.id} card={card} />
                        )
                    })}
                </div>}

                {Object.keys(cards).length > 0 && isMobile(mobileBreakPoint) &&
                <div className="cards-list-container col-12 mb-5 pb-4">
                    {cards.map((card, index) => {
                        return cards[index+1] && (card.name !== cards[index+1].name) && (
                            <CardMobile key={card.id} card={card} />
                        )
                    })}
                </div>}
            {Object.keys(modalContent).length > 0 && <CardModal />}
        </div>
    )
}