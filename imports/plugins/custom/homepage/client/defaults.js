import { Session } from "meteor/session";

Session.set("INDEX_OPTIONS", {
  template: "productsLanding",
  layoutHeader: "NavBar",
  layoutFooter: "Footer",
  notFound: "notFound",
  dashboardControls: "dashboardControls",
  adminControlsFooter: "adminControlsFooter"
});