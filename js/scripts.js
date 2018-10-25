// biz logic
// var customerName;
var toppingOptions;
var toppingOptions2;
var pizzaSizeOption;
var arr = [];
var arr2 = [];
// get array of topping items + convert into numerical value;

function Pizza (name){
  this.name = name;
  this.toppingTotal = 0;
  this.size = 0;
  this.currentTotal = 0;
  this.regularToppings = arr;
  this.gourmetToppings = arr2;
  // this.OverallTotal = 0;
}

var customer = new Pizza("Mike");

Pizza.prototype.countarrLength = function(){
  return this.toppingTotal = arr.length * 1 + arr2.length * 3;
}

Pizza.prototype.sizeSelect = function(){
  return this.size = parseInt(pizzaSizeOption);
}

Pizza.prototype.addCurrentAmount = function() {
  return this.currentTotal = this.toppingTotal + this.size;
}

// Pizza.prototype.addName = function (){
//   return this.name = customerName;
// }

function resetFields(){
    arr.length = 0;
    arr2.length = 0;
}

// user logic
$(document).ready(function(){

  $("#selectOrder").submit(function(event) {
    event.preventDefault();

    resetFields();

    $("input:checkbox[name=toppingOption]:checked").each(function(){
      toppingOptions = $(this).val();
      arr.push(toppingOptions);
    });

    $("input:checkbox[name=toppingOption2]:checked").each(function(){
      toppingOptions2 = $(this).val();
      arr2.push(toppingOptions2);
    });


    pizzaSizeOption = $("#sizePizza").val();
    // customerName = $("#custName").val()

    customer.countarrLength();
    customer.sizeSelect();
    customer.addCurrentAmount();
    // customer.addName();

    console.log(customer);
    // console.log(customerName);
    // console.log(pizzaSizeOption);

    $("#customerName").text(" " + customer.name);
    $("#orderAmount").text(" " + "$" + customer.currentTotal);

    $("#result").css("display", "block");



  });
});
