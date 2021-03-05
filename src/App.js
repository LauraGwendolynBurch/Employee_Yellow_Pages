import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
// import testUsers from "./testData.json";
import Filters from "./components/Filters";
import API from "./utils/Api";

class App extends React.Component {

  state = {
    users: [],
    search: "",
  };

  componentDidMount() {
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data.results })
        console.log(res)
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.users)
    const currentStateUser=this.state.users.filter(user => user.name.last === this.state.search)
    this.setState({users: currentStateUser})
  }; 


  render() {
    return (
      <div className="container">
        <Header
        search={this.state.search}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange} />
        <Filters handleInputChange={this.handleInputChange} />
        {this.state.search}
        <Body users={this.state.users} />

      </div>
    )
  }
};
export default App;

