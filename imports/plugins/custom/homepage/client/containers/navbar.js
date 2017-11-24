import _ from "lodash";
import { registerComponent, composeWithTracker } from "/imports/plugins/core/components/lib";
import { Reaction } from "/client/api";
import NavBar from "../components/navbar";
import { Media, Shops } from "/lib/collections";
import { replaceComponent } from "/imports/plugins/core/components/lib";

export function composer(props, onData) {
  const shop = Shops.findOne(Reaction.getShopId());
  const searchPackage = Reaction.Apps({ provides: "ui-search" });
  let searchEnabled;
  let searchTemplate;
  let brandMedia;

  if (searchPackage.length) {
    searchEnabled = true;
    searchTemplate = searchPackage[0].template;
  } else {
    searchEnabled = false;
  }

  if (shop && Array.isArray(shop.brandAssets)) {
    const brandAsset = _.find(shop.brandAssets, (asset) => asset.type === "navbarBrandImage");
    brandMedia = Media.findOne(brandAsset.mediaId);
  }

  const hasProperPermission = Reaction.hasPermission("account/profile");

  onData(null, {
    shop,
    brandMedia,
    searchEnabled,
    searchTemplate,
    hasProperPermission
  });
}

replaceComponent("NavBar", NavBar, composeWithTracker(composer));

export default composeWithTracker(composer)(NavBar);
