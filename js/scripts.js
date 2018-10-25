// biz logic

var toppingOptions;
var toppingOptions2;
var pizzaSizeOption;
var arr = [];
var arr2 = [];
// get array of topping items + convert into numerical value;

function Pizza (){
  this.regularToppings = arr;
  this.gourmetToppings = arr2;
  this.toppingTotal = 0;
  this.size = 0;
  this.currentTotal = 0;
  // this.OverallTotal = 0;
}

var customer = new Pizza();

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

    $("input:checkbox[name=toppingOption]:checked").each(function(){
      toppingOptions = $(this).val();
      arr.push(toppingOptions);
    });

    $("input:checkbox[name=toppingOption2]:checked").each(function(){
      toppingOptions2 = $(this).val();
      arr2.push(toppingOptions2);
    });

    pizzaSizeOption = $("#sizePizza").val();

    customer.countarrLength();
    customer.sizeSelect();
    customer.addCurrentAmount();

    console.log(customer);
    // console.log(pizzaSizeOption);


  });
});
