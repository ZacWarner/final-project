import React from 'react';
import ReactDOM from 'react-dom';
import API from '../../utils/API'

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userName: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const userName = this.props.userName;
    this.setState({ userName: userName })

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(' ' + this.state.value);
    event.preventDefault();
    const note = this.state.value;
    const userName = this.state.userName;
    API.saveProfileNote(userName, note).then((res) => {
      this.setState({ value: "" });
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="Add Notes:" className='form-control' />
        </label>
        <br />
        <input type="submit" value="Add" className="btn btn-primary" />
      </form>
    );
  }
}
ReactDOM.render(<EssayForm />, document.getElementById('root'));

export default EssayForm;