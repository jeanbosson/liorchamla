import React from "react";

import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./clientForm";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "ghana" },
      { id: 2, nom: "mali" },
      { id: 3, nom: "guinee" }
    ]
  };

  handleDelete = (id) => {
    const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
    console.log(id);
  };

  handleAdd = (client) => {
    const clients = [...this.state.clients];
    clients.push({ client });
    this.setState({ clients });
  };

  render() {
    const titre = "la liste des pays";

    return (
      <div>
        <h1> {titre} </h1>
        <ul>
          {this.state.clients.map((client) => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
