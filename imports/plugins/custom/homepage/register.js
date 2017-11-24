import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Custom Homepage",
  name: "homepage",
  icon: "fa fa-vine",
  meta: {
    version: "1.0.0"
  },
  autoEnable: true,
  layout: [{
    layout: "customHomePageTemplate",
    workflow: "coreProductGridWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    priority: 1,
    structure: {
      template: "productsLanding",
      layoutHeader: "NavBar",
      layoutFooter: "Footer",
      notFound: "productNotFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});

