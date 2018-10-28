// biz logic
var toppingOptions;
var toppingOptions2;
var pizzaSizeOption;
var arr = [];
var arr2 = [];

function Pizza (name){
  this.name = name;
  this.toppingTotal = 0;
  this.size = 0;
  this.currentTotal = 0;
  this.regularToppings = arr;
  this.gourmetToppings = arr2;
}

function resetFields(){
    arr.length = 0;
    arr2.length = 0;
}

var customer = new Pizza(prompt("What is your name?"));

Pizza.prototype.countarrLength = function(){
  return this.toppingTotal = arr.length * 1 + arr2.length * 3;
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

    // Reset the topping total
    resetFields();

    // Collect topping selections and push to arrays
    $("input:checkbox[name=toppingOption]:checked").each(function(){
      toppingOptions = $(this).val();
      arr.push(toppingOptions);
    });

    $("input:checkbox[name=toppingOption2]:checked").each(function(){
      toppingOptions2 = $(this).val();
      arr2.push(toppingOptions2);
    });

    // Get value of the pizza size selection
    pizzaSizeOption = $("#sizePizza").val();

    // Calculations
    customer.countarrLength();
    customer.sizeSelect();
    customer.addCurrentAmount();

    // Show results
    $("#customerName").text(" " + customer.name);
    $("#orderAmount").text(" " + "$" + customer.currentTotal);

    $("#result").css("display", "block");

    console.log(customer);
  });
});
