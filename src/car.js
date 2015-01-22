function Car(make, model, year, state, color, previous_owners, current_owner, passengers){
	this.make = make;
	this.model = model;
	this.year = year;
	this.state = "off";
	this.color = color;
	this.previous_owners = [];
	this.current_owner = "Manufacturer";
	this.passengers = [];
}

Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function(){
	this.state = "on";
};

Car.prototype.off = function(){
	this.state = "off";
};

Car.prototype.driveTo = function(destination){
	if(this.state === "on"){
		console.log("driving to " + destination);
	}
};

Car.prototype.park = function(){
	if(this.state === "off"){
		console.log("parked!!");
	}
};

Car.prototype.pick_up = function(friend){
	if(this.state === "on"){
		console.log("driving to 'pick up " + friend + "'");
		this.passengers.push(friend);
	}
};

Car.prototype.dropOff = function(friend){
	if(this.state === "on" && this.passengers.indexOf(friend) >= 0){
		this.passengers.splice(this.passengers.indexOf(friend), 1);
	}
};

module.exports=Car;