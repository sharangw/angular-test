angular.module("AppModule").service("MyNameService", function() {

    var username = "";

    this.setData = function(name) {

        username = name;
        console.log(username);
    }

    this.getData = function() {
        return username;
    }

});