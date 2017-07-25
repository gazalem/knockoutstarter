// main application code here

// namespace
window.myApp = {};

(function (myApp) {
  // constructor function for App
  function App() {
    // core logic to run when all
    // dependencies are loaded
    this.run = function () {
      // create an instance of our ViewModel
      let vm = new myApp.ProductsViewModel();
      // tell knockout to process our ViewModel
      ko.applyBindings(vm);
    }
  }
  // make sure it's Public
  myApp.App = App;
}(window.myApp));