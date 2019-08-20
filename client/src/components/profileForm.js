import React from 'react';
import ReactDOM from 'react-dom';

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Add Notes:'
        
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert(' ' + this.state.value);
      event.preventDefault();
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea value={this.state.value} onChange={this.handleChange} className='form-control' />
          </label>
          <br />
          <input type="submit" value="Add" className="btn btn-primary" />
        </form>
      );
    }
  }
ReactDOM.render(<EssayForm />, document.getElementById('root'));

export default EssayForm;