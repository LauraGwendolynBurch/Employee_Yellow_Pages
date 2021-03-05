function Filters({ handleInputChange }) {
    return (
        <div className="card mb-5" style={{ background: "pink", fontWeight: "bolder", textAlign: "center", fontFamily: "cursive" }}>
            <div className="card-body">

                <div className="form-group">
                    <button type="text" className="btn m-3" style={{ background: "yellow" }}onClick={handleInputChange}>Sort all Employees by Last Name</button>
                    <br/>
                    <button type="text" className="btn m-3" style={{ background: "yellow" }}onClick={handleInputChange}>Sort all Employees by First Name</button>
                </div>

            </div>
        </div>
    )
};

export default Filters;