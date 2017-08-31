angular.module("AppModule").controller("HomeController", function() {
    
    var self = this;

});

angular.module("AppModule").controller("CountController", function() {
    
    var self = this;

    self.count = 0;

    self.addOne = function() {
        self.count++;
    }

});

angular.module("AppModule").controller("ListCtrl", function() {

    var self = this;

    self.cars = [
        {make:"Toyota", model:"Camry"},
        {make:"Honda", model:"CR-V"},
        {make:"Subaru", model:"Impreza"}
    ];
});
