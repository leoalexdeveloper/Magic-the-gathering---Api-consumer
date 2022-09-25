import "./styles.css";
import { SetsContextElement } from "../../../contexts/Sets";
import { SetsList } from "../SetsList";
import { FilterPanel } from "../FilterPanel";

export const SetsContainer = () => {
    return (
        <SetsContextElement>
            <div className="sets-container">
                <FilterPanel />
                <SetsList />
            </div>
        </SetsContextElement>
    )
}