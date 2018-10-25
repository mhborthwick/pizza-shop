// biz logic

var toppingOptions;
var pizzaSizeOption;
var arr = [];
// get array of topping items + convert into numerical value;

function Pizza (){
  this.toppings = arr;
  this.toppingTotal = 0;
  this.size = 0;
  this.currentTotal = 0;
  this.OverallTotal = 0;
}

var customer = new Pizza();

Pizza.prototype.countarrLength = function(){
  return this.toppingTotal = arr.length * 3;
}

Pizza.prototype.sizeSelect = function(){
  return this.size = parseInt(pizzaSizeOption);
}

Pizza.prototype.addCurrentAmount = function() {
  return this.currentTotal = this.toppingTotal + this.size;
}


// user logic
$(document).ready(function(){
  $("#selectOrder").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=toppingOption]:checked").each(function(){
      toppingOptions = $(this).val();
      arr.push(toppingOptions);
    });

    pizzaSizeOption = $("#sizePizza").val();

    customer.countarrLength();
    customer.sizeSelect();
    customer.addCurrentAmount();


    console.log(customer);
    // console.log(pizzaSizeOption);


  });
});
