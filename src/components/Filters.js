function Filters({handleInputChange}) {
    return (
        <div className="card mb-5" style={{ background: "pink", fontWeight:"bolder", textAlign:"center", fontFamily:"cursive"}}>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <h2 htmlFor="nameFilter">Filter by Email</h2>
                        <input type="text" className="form-control" name="search" id="nameFilter" placeholder="Type Here to see results below" onChange={handleInputChange}/>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Filters;