import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import testUsers from "./testData.json";
import Filters from "./components/Filters";

class App extends React.Component {

    state = {

        users: testUsers,
        search: "",
      

    }

  handleInputChange = event => {
    
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  };

    render() {
        return (
            <div className="container">
                <Header />
                <Filters handleInputChange={this.handleInputChange}/>
                {this.state.search}
                <Body users={this.state.users} />
        
            </div>
        )
    }
};
export default App;