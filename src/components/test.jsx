import React from "react";
export default class Stepper extends React.Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      genData: [
        {
          firstName: "foo",
          lastName: "boo"
        }
      ]
    };
  }

  _handleSubmit = () => {
    let genData = this.state.genData;

    genData.push({
      firstName: this.state.fName,
      lastName: this.state.lName
    });
    this.setState({
      genData
    });
  };

  handleChange_firstName = e => {
    this.setState({ fName: e.target.value });
  };
  handleChange_lastName = e => {
    this.setState({ lName: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.handleChange_firstName(e)}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={e => this.handleChange_lastName(e)}
          placeholder="Last Name"
        />
        <button onClick={this._handleSubmit}> hi </button>

        <table>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
            </tr>
            {this.state.genData.map((row, i) => (
              <tr key={i}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
