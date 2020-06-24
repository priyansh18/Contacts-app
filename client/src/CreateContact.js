import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeform from "form-serialize";

class CreateContact extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeform(e.target, { hash: true });
    // console.log("Values", values);
    if (this.props.onCreateContact) {
      this.props.onCreateContact(values);
    }
  };
  // state = {  }
  render() {
    return (
      <div>
        <Link className="close-create-contact" to="/">
          Close
        </Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Handle" name="handle" />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContact;
