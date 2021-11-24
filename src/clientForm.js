import { Component } from "react";

class ClientForm extends Component {
  state = {
    nouveauClient: ""
  };

  handleChange = (event) => {
    this.setState({ nouveauClient: event.currentTarget.value });
    console.log(event.currentTarget.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;
    this.props.onClientAdd({ id, nom });
    this.setState({ nouveauClient: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.nouveauClient}
            type="text"
            placeholder="ajouter un formulaire"
            onChange={this.handleChange}
          />
          <button>confirmez</button>
        </form>
      </div>
    );
  }
}

export default ClientForm;
