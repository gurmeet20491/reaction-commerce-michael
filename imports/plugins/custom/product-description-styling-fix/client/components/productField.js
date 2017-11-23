import React from "react";
import { getComponent, replaceComponent } from "/imports/plugins/core/components/lib";
import classnames from "classnames";

const ProductField = getComponent("ProductField");

class ProductFieldIceMachinesPlus extends ProductField {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.showEditControls) {
      return this.renderTextField();
    }

    if (this.props.element) {
      return React.createElement(this.props.element, {
        className: "pdp field",
        itemProp: this.props.itemProp,
        children: this.value
      });
    }

    const fieldClassName = classnames({
      "pdp": true,
      "field": true,
      [this.props.fieldName]: true
    });

    return (
      <div className={fieldClassName}>
        {this.value}
      </div>
    ); 
  }
}

replaceComponent("ProductField", ProductFieldIceMachinesPlus);

