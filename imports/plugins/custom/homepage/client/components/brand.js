import React, { Component } from "react";
import PropTypes from "prop-types";
import { replaceComponent } from "/imports/plugins/core/components/lib";
import { Reaction } from "/client/api";

class Brand extends Component {
  static propTypes = {
    logo: PropTypes.string,
    title: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    Reaction.Router.go("/");
  }

  render() {
    return (
      <a className="brand" onClick={this.handleClick}>
          <div className="logo">
            <img src="resources/logo.png" />
          </div>
      </a>
    );
  }
}

replaceComponent("Brand", Brand);

export default Brand;
