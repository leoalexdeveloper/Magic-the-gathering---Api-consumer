import "./styles.css"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import { toCapitalLetter, returnIcons } from "../../../utils/utils";
import { api } from "../../../Api"

import { Context as GlobalContext} from "../../../contexts/Global"
import { Context } from "../../../contexts/Sets"

import { Loader } from "../../../components/Loader"
import { loadContent, isMobile } from "../../../utils/utils"

import magicIcons from "../../../assets/icons/icons"
import loader from "../../../assets/loaders/default-loader.gif"

export const SetsList = () => {
    const GlobalState = useContext(GlobalContext)
    const { mobileBreakPoint } = GlobalState.state
    const { state, dispatch } = useContext(Context)
    const { sets, searchedSets } = state;
    const infoNotFound = "-"
    
    useEffect(() => {
        loadContent(api, "https://api.magicthegathering.io/v1/sets", '', dispatch, "RECORD_SETS")
    }, [dispatch])

    return (
        <>
            {Object.keys(sets).length === 0 &&
                <Loader loader={loader} text="Loading"/>
                }
{/* 
-----------------------------------------------------------------------------------------------------------------------------------------------
 */}
            {Object.keys(sets).length > 0 && !isMobile(mobileBreakPoint) &&
                <div className="sets-menu-container col-12 m-auto position-relative top-0 table-responsive">
                    <table className="sets-table table table-bordered position-relative top-0">
                        <thead className="bg-dark text-light top-5" style={{ position: 'sticky', top: '0px' }}>
                            <tr className="text-center">
                                <th scope="col">Code</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Booster</th>
                                <th scope="col">Release Date</th>
                                <th scope="col">Block</th>
                                <th scope="col">Online Only</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">

                            {searchedSets && searchedSets.map((set, index) => {

                                return (
                                    <tr key={index}>
                                        <th className="col-1" style={{ verticalAlign: 'middle' }} scope="row">{set.code ? set.code : infoNotFound}</th>
                                        <th className="col-2" style={{ verticalAlign: 'middle' }}>

                                            <Link to={`/cards/${set.code}`} className="d-flex align-items-center justify-content-between text-dark">
                                                <div className={`col-2 fs-3`}>
                                                    <i className={returnIcons(magicIcons.sets, set.name, "ss ss-")}></i>
                                                </div>
                                                <p className="col-10 mt-3">{set.name ? set.name : infoNotFound}</p>
                                            </Link>

                                        </th>
                                        <th className="col-1" style={{ verticalAlign: 'middle' }}>{set.type ? toCapitalLetter(set.type) : infoNotFound}</th>
                                        <th className="col-1" style={{ verticalAlign: 'middle' }}>
                                            <ul className="list-unstyled">

                                                {set.booster ? set.booster.map((booster, index) => {
                                                    if (set.booster[index + 1] === booster) return ''
                                                    return (
                                                        <div key={index} className="d-flex">
                                                            <ul>
                                                                <li className="unlisted-style">{toCapitalLetter(booster)}</li>
                                                            </ul>
                                                        </div>
                                                    )
                                                }) : infoNotFound}

                                            </ul>
                                        </th>
                                        <th className="col-1" style={{ verticalAlign: 'middle' }}>{set.releaseDate ? set.releaseDate : infoNotFound}</th>
                                        <th className="col-1" style={{ verticalAlign: 'middle' }}>{set.block ? set.block : infoNotFound}</th>
                                        <th className="col-1" style={{ verticalAlign: 'middle' }}>{set.onlineOnly.length > 0 ? set.onlineOnly : infoNotFound}</th>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>}
            {/* 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
 */}
            {Object.keys(sets).length > 0 && isMobile(mobileBreakPoint) &&
                <div className="sets-menu-container m-auto position-relative top-0" style={{ overflowY: 'auto' }}>

                    {searchedSets && searchedSets.map((set, index) => {

                        return (
                            <table key={index} className="sets-table table table-bordered position-relative top-0">
                                <thead className="bg-dark text-light top-5" style={{ position: 'sticky', top: '0px' }}>
                                    <tr className="border-0">
                                        <th className="p-2 border-0 bg-dark"></th>
                                        <th className="p-2 border-0 bg-dark"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">

                                    <tr>
                                        <th className="bg-dark text-light col-4" style={{ verticalAlign: 'middle' }} scope="col">Code</th>
                                        <th className="col-8" style={{ verticalAlign: 'middle' }} scope="row">{set.code ? set.code : infoNotFound}</th>
                                    </tr>

                                    <tr>
                                        <th className="bg-dark text-light" style={{ verticalAlign: 'middle' }} scope="col">Name</th>
                                        <th style={{ verticalAlign: 'middle' }}>

                                            <Link to={`/cards/${set.code}`} className="col-12 d-flex flex-column align-items-center justify-content-center text-dark">
                                                <div className={`col-1 fs-3`}>
                                                    <i className={returnIcons(magicIcons.sets, set.name)}></i>
                                                </div>
                                                <p className="mt-3">{set.name ? set.name : infoNotFound}</p>
                                            </Link>

                                        </th>
                                    </tr>

                                    <tr>
                                        <th className="bg-dark text-light" scope="col">Type</th>
                                        <th style={{ verticalAlign: 'middle' }}>{set.type ? toCapitalLetter(set.type) : infoNotFound}</th>
                                    </tr>

                                    <tr>
                                        <th className="bg-dark text-light" style={{ verticalAlign: 'middle' }} scope="col">Booster</th>
                                        <th style={{ verticalAlign: 'middle' }}className="d-flex justify-content-center">
                                            <ul className="list-unstyled">

                                                {set.booster ? set.booster.map((booster, index) => {
                                                    if (set.booster[index + 1] === booster) return ''
                                                    return (
                                                        <div key={index} className="d-flex">
                                                            <ul>
                                                                <li className="unlisted-style">{toCapitalLetter(booster)}</li>
                                                            </ul>
                                                        </div>
                                                    )
                                                }) : infoNotFound}
                                            </ul>
                                        </th>
                                    </tr>

                                    <tr>
                                        <th className="bg-dark text-light" style={{ verticalAlign: 'middle' }} scope="col">Release Date</th>
                                        <th style={{ verticalAlign: 'middle' }}>{set.releaseDate ? set.releaseDate : infoNotFound}</th>
                                    </tr>

                                    <tr>
                                        <th className="bg-dark text-light" style={{ verticalAlign: 'middle' }} scope="col">Block</th>
                                        <th style={{ verticalAlign: 'middle' }}>{set.block ? set.block : infoNotFound}</th>
                                    </tr>

                                    <tr>
                                        <th className="bg-dark text-light" style={{ verticalAlign: 'middle' }} scope="col">Online Only</th>
                                        <th style={{ verticalAlign: 'middle' }}>{set.onlineOnly.length > 0 ? set.onlineOnly : infoNotFound}</th>
                                    </tr>
                                </tbody>
                                <tfoot>
                                        <tr className="border-0">
                                            <th className="p-2 border-0 bg-dark"></th>
                                            <th className="p-2 border-0 bg-dark"></th>
                                        </tr>
                                    </tfoot>
                            </table>
                        )
                    })}
                </div>}
        </>
    )

}