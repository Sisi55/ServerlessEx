var Animal = /** @class */ (function () {
    function Animal(name, legs) {
        if (legs === void 0) { legs = 4; }
        this.name = name;
        this.legs = legs;
    }
    Animal.prototype.info = function () {
        return this.name + " has " + this.legs + " legs";
    };
    return Animal;
}());
var dog = new Animal("Happy");
console.log(dog.info()); // Happy has 4 legs
