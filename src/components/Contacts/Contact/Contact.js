import styles from "./Contact.module.scss";
import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context/Context";

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4 className={styles.header}>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className={
                    showContactInfo ? "fas fa-angle-up" : "fas fa-angle-down"
                  }
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-trash-alt text-danger"
                  style={{ cursor: "pointer", float: "right" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email} </li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
