// Product ViewModel
(function (myApp) {
  // constructor function
  function ProductViewModel() {
    let self = this;
    // the Product that we want to add/edit
    self.selectedProduct = ko.observable();
    // the Product collection or product list
    self.productCollection = ko.observableArray([]);
    // create a new product and setup for editing
    self.addNewProduct = function () {
      // create an instance of a product
      let p = myApp.Product();
      // set the selected product to our new instance
      self.selectedProduct(p);
    };
    // logic that is called whenever a user is done editing
    // a product or done adding a product
    self.doneEditingProduct = function () {
      // get a refeference to our currently selected product
      let p = self.selectedProduct();
      // ignore if is null
      if (!p) {
        return;
      }
      // check to see that the product
      // doesn't already exist in our list
      if (self.productCollection.indexOf(p) > -1) {
        return;
      }
      // add the product to the collection
      self.productCollection.push(p);
      // clear out the selected product
      self.selectedProduct(null);
    };
    // logic that remove the selected product
    // from the collection
    self.removeProduct = function () {
      // get a refeference to our currently selected product
      let p = self.selectedProduct();
      // ignore if is null
      if (!p) {
        return;
      }
      // empty selected product
      self.selectedProduct(null);
      // simply remove the item from the collection
      return self.productCollection.remove(p);
    };
  }
  // add our ViewModel to the public namespace
  myApp.ProductViewModel = ProductViewModel;
} (window.myApp));