import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../Actions";

class UserHeader extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchUser(this.props.userID);
  }
  render() {
    if (!this.props.user) {
      return <div />;
    }
    return <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, props) => {
  return { user: state.user.find(user => props.userID === user.id) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
