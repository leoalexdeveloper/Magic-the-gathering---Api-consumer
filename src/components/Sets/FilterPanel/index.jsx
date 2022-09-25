import "./styles.css";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Context as SetContext} from "../../../contexts/Sets";
import { RadioButton } from "../RadioButton";
import { CheckButton } from "../CheckButton";
import { toCamelCase, sortObject } from "../../../utils/utils"

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


//component
export const FilterPanel = () => {
    const { state, dispatch } = useContext(SetContext)
    const { sets, filterOption, searchedSets, orderOption } = state
    const [searchInfoModalVisible, setSearchInfoModalVisible] = useState(false)
    const searchField = useRef()

    const selectFilter = (e) => {
        const filterOption = e.target.textContent
        dispatch({ type: "RECORD_FILTER_OPTION", payload: filterOption })
        sortObject(searchedSets, toCamelCase(filterOption), orderOption)
    }

    const orderFilter = (e) => {
        const orderOption = !state.orderOption
        dispatch({ type: "RECORD_ORDER_OPTION", payload: orderOption })
        sortObject(searchedSets, toCamelCase(filterOption), orderOption)
    }

    const handleSearchField = useCallback(() => {
        const searchText = searchField.current.value.trim().toLowerCase()
        const searchKey = toCamelCase(filterOption)

        const itemsFounded = (searchText.length > 0)
            ?
            sets && sets.filter((set) => {
                if (set[searchKey] === undefined) return 0
                return set[searchKey].toLowerCase().includes(searchText)
            })
            :
            sets

        dispatch({ type: "RECORD_SEARCHED_SETS", payload: itemsFounded })
    }, [dispatch, filterOption, sets])

    useEffect(() => {
        handleSearchField()
    }, [handleSearchField])

    return (

        <div className="card-filter-panel-container container-fluid col-12 m-auto bg-dark text-light p-2 rounded">
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-evenly">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 btn-toolbar bg-dark rounded-2 d-flex justify-content-center" style={{ overflow: 'hidden' }}>
                    <div className="bg-dark text-light px-2 d-flex align-items-center rounded">
                        {searchedSets && "Sets: " + searchedSets.length}
                    </div>
                    <div className="bg-dark text-light border border-light px-2 d-flex flex-wrap align-items-center rounded-start">
                        Order by:
                    </div>
                    <CheckButton text={<FontAwesomeIcon icon={faArrowDownUpAcrossLine} />} action={orderFilter} activeParam={orderOption} />
                    <RadioButton text="Code" action={selectFilter} activeParam={filterOption} rounded="rounded" name="filter" />
                    <RadioButton text="Name" action={selectFilter} activeParam={filterOption} rounded="rounded" name="filter" />
                    <RadioButton text="Type" action={selectFilter} activeParam={filterOption} rounded="rounded" name="filter" />
                    <RadioButton text="Block" action={selectFilter} activeParam={filterOption} rounded="rounded" name="filter" />
                    <RadioButton text="Release Date" action={selectFilter} activeParam={filterOption} rounded="rounded" name="filter" />
                    <div className="p-0 d-flex align-items-center mx-2" title="How to use the filters">
                        <FontAwesomeIcon onClick={() => setSearchInfoModalVisible(!searchInfoModalVisible)} style={{ fontSize: '1.5rem', cursor: "pointer" }} icon={faCircleInfo} />

                        {
                            searchInfoModalVisible &&
                            <div className="col-12 px-5 alert alert-dark position-absolute top-0 start-0" role="alert">
                                <FontAwesomeIcon onClick={() => setSearchInfoModalVisible(!searchInfoModalVisible)} style={{ fontSize: '1.5rem', cursor: "pointer", float: 'right' }} icon={faXmark} />
                                <h4 className="alert-heading">How to use the search panel!</h4>
                                <ul>
                                    <li>Select the category</li>
                                    <li>Type your desired keyword</li>
                                    <li>Select the Ascendancy or Descendancy presentation order</li>
                                </ul>
                            </div>
                        }

                    </div>
                    <div className="d-flex" role="search">
                        <input ref={searchField} onChange={handleSearchField} className="form-control rounded-0 rounded-end" type="search" placeholder="Type something" aria-label="Search" />
                    </div>
                </div>

            </div>
        </div>
    )
}