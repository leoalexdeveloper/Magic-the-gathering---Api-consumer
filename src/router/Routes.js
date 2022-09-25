import {Routes, Route} from 'react-router-dom';
import { SetsContainer }  from "../components/Sets/SetsContainer"
import { CardsContainer } from "../components/Cards/CardsContainer"
import { NotFound } from "../components/NotFound"
 
export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<SetsContainer />} />
            <Route path="/cards/:code" element={<CardsContainer />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}