function Body({users}) {
    return (
        <div className="card" style={{ background: "pink", fontFamily:"cursive", margin: "2rem", borderRadius: "6px"}}>
            <div className="card-body" style={{ display: "flex", flexWrap: "wrap" }}>
                <h2 className="card-title" style={{textAlign:"center", fontWeight:"bolder", }}>Employees</h2>
            </div>
            <div>
            {users.map(user => <h3 key={user.login.uuid} className="card-text">{user.name.first} {user.name.last}</h3>)}
            </div>
        </div>
    )
};

export default Body;