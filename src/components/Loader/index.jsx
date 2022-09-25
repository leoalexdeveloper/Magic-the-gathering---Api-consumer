import "./styles.css"

export const Loader = (props) => {
    const { loader, text } = props
    return (
        <div className="loader col-12 d-flex flex-column justify-content-start align-items-center">
            <div className="p-5">
                <p className="fs-5 lead mt-5 text-center text-light">{text}</p>
                <img src={loader} alt="loader" />
            </div>
        </div>
    )
}