import React, { Component } from "react";
import { Layout } from "./components/Layout";
import { Table } from "./components/Table";
import { AddUser } from "./components/AddUser";
import { ApplicationNavbar } from "./components/ApplicationNavbar";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tableData: [], showModal: false };
    this.showFormModal = this.showFormModal.bind(this);
    this.onHide = this.onHide.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  }

  addNewUser(newUser) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    };

    fetch("/registration/addNewUser", requestOptions);

    this.setState({
      tableData: [...this.state.tableData, newUser]
    });
  }

  showFormModal() {
    this.setState({ showModal: true });
  }

  onHide = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    fetch("/registration/allUsers")
      .then(response => response.json())
      .then(result => {
        this.setState({ tableData: result });
      });
  }

  render() {
    return (
      <Layout>
        <ApplicationNavbar showFormModal={this.showFormModal} />
        <Table records={this.state.tableData} />
        <AddUser
          show={this.state.showModal}
          onHide={this.onHide}
          addNewUser={this.addNewUser}
        />
      </Layout>
    );
  }
}

export default App;
