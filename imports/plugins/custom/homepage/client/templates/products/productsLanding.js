import { $ } from "meteor/jquery";
import { Template } from "meteor/templating";
import { Reaction } from "/client/api";
import { getComponent } from "/imports/plugins/core/components/lib";
import ProductsContainer from "/imports/plugins/included/product-variant/containers/productsContainer";

Template.productsLanding.helpers({
  component() {
    return getComponent("aboutUs");;
  }
});

/**
 * products events
 */

Template.productsLanding.events({
  "click #productListView": function () {
    $(".product-grid").hide();
    return $(".product-list").show();
  },
  "click #productGridView": function () {
    $(".product-list").hide();
    return $(".product-grid").show();
  },
  "click .product-list-item": function () {
    // go to new product
    Reaction.Router.go("product", {
      handle: this._id
    });
  }
});
