function Body({users}) {
    return (
        <div className="card" style={{ background: "pink", fontFamily:"cursive"}}>
            <div className="card-body">
                <h5 className="card-title" style={{textAlign:"center", fontWeight:"bolder", }}>Employees</h5>
                {users.map(user => <p className="card-text">{user.name.first} {user.name.last}</p>)}
            </div>
        </div>
    )
};

export default Body;