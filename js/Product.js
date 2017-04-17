// Model for Product
(function (myApp) {
  // Product constructor Function
  function Product() {
    let self = this;
    // "SKU" property
    self.sku = ko.observable("");
    // "Description" property
    self.description = ko.observable("");
    // "Price" property
    self.price = ko.observable(0.00);
    // "Cost" property
    self.cost = ko.observable(0.00);
    // "Quantity" property
    self.quantity = ko.observable(0);

    // Computed observables
    
    // simply combines SKU and Description properties
    self.skuAndDescription = ko.computed(function () {
      let sku = self.sku() || "";
      let description = self.description() || "";
      return sku + ": " + description;
    });
  }
  // add to our namespace
  myApp.Product = Product;
} (window.myApp));