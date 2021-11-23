import React from "react";

import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "ghana" },
      { id: 2, nom: "mali" },
      { id: 3, nom: "guinee" }
    ]
  };

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(function (client) {
      return client.id === id;
    });
    clients.splice(index, 1);
    this.setState({ clients: clients });
    console.log(id);
  };

  render() {
    const titre = "la liste des pays";

    return (
      <div>
        <h1> {titre} </h1>
        <ul>
          {this.state.clients.map((client) => (
            <li>
              {client.nom}
              {""}
              <button onClick={() => this.handleDelete(client.id)}> x </button>
            </li>
          ))}
        </ul>
        <input type="text" placeholder="entrez" />
        <button>confirmez</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
