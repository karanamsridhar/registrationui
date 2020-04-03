import { Table as BootstrapTable } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

export class Table extends Component {
  render() {
    return (
      <BootstrapTable striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.records.map(tableRecord => (
            <tr key={tableRecord.emailAddress}>
              <td>{tableRecord.firstName}</td>
              <td>{tableRecord.lastName}</td>
              <td>{tableRecord.emailAddress}</td>
              <td>
                <FontAwesomeIcon icon={faEdit} style={{ cursor: "pointer" }} />
                &nbsp;&nbsp;
                <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </BootstrapTable>
    );
  }
}

export default Table;
