import styles from "./Contact.module.scss";
import React from "react";
import PropTypes from "prop-types";

class Contact extends React.Component {
  state = {};
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4 className={styles.header}>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">{email} </li>
          <li className="list-group-item">{phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
