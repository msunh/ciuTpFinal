import "./Style.css";

const Spinner = () => {
    return (

        <div className="d-flex justify-content-center mt-3">
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;