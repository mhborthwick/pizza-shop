// biz logic
var toppingTotalAmount;
// get array of topping items + convert into numerical value;

function Pizza (){
  this.toppingTotal = toppingTotalAmount;
  this.size = 0;
  this.currentTotal = 0;
  this.OverallTotal = 0;
}

var customer = new Pizza();

Pizza.prototype.addCurrentAmount = function() {
  return this.currentTotal = toppingTotalAmount + this.size;
}

// user logic
$(document).ready(function(){
  $("#selectOrder").submit(function(event) {
    event.preventDefault();

    console.log("hey");


  });
});
