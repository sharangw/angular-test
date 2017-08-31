angular.module("AppModule").controller("HomeController", function() {
    
    var self = this;

});

angular.module("AppModule").controller("AboutController", function() {
    
    var self = this;

    self.count = 0;

    self.addOne = function() {
        self.count++;
    }

});