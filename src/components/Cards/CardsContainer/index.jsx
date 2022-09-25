import "./styles.css"
import { CardsContextElement } from "../../../contexts/Cards"
import { CardsList } from "../CardsList"

export const CardsContainer = () => {
    return (
        <CardsContextElement>
            <div className="cards-container">
                <CardsList />
            </div>
        </CardsContextElement>
    )
}