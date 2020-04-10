import React from "react";
export default class Stepper extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      project: "",
      objective: "",
      genData: [
        {
          user: "Ehsan",
          project: "Test",
          objective: "New"
        }
      ]
    };
  }

  _handleSubmit = () => {
    let genData = this.state.genData;

    genData.push({
      user: this.state.user,
      object: this.state.object,
      project: this.state.project
    });
    this.setState({
      genData
    });
  };

  handleChange_user = e => {
    this.setState({ user: e.target.value });
  };
  handleChange_project = e => {
    this.setState({ project: e.target.value });
  };
  handleChange_object = e => {
    this.setState({ object: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.handleChange_user(e)}
          placeholder="User..."
        />
        <input
          type="text"
          onChange={e => this.handleChange_project(e)}
          placeholder="project..."
        />
        <input
          type="text"
          onChange={e => this.handleChange_object(e)}
          placeholder="objective...."
        />
        <button onClick={this._handleSubmit}> Submitt </button>

        <table>
          <tbody>
            <tr>
              <td>User</td>
              <td>project</td>
              <td>Object</td>
            </tr>
            {this.state.genData.map((row, i) => (
              <tr key={i}>
                <td>{row.user}</td>
                <td>{row.project}</td>
                <td>{row.object}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
