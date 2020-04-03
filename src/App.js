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
