function Filters({handleInputChange}) {
    return (
        <div className="card mb-5" style={{ background: "pink", fontWeight:"bolder", textAlign:"center", fontFamily:"cursive"}}>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="nameFilter">Filter by Email</label>
                        <input type="text" class="form-control" name="search" id="nameFilter" placeholder="Type Here to see results below" onChange={handleInputChange}/>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Filters;