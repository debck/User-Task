import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import List from "./components/List";
import ItemModal from "./components/ItemModal";
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "reactstrap";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <hr
              style={{
                color: "teal",
                backgroundColor: "white",
                height: 5
              }}
            />
            <List />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
