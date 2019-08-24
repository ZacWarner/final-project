import React from "react";
// import Modal from 'react-bootstrap/Modal';


// import '../styles/modal.scss';





class ErrModal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    else return <div>
    <div className="err-modal">
      <p>passwords must be between 7 and 15 characters, containing at least one numeric digit & one special character</p>
    </div>
    <div>
      <button
        onClose={e => {
          this.onClose(e);
        }}
      >
        Close
      </button>
      
    </div>
  </div>
  }
}

export default ErrModal