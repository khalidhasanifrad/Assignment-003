// Function
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
kilometerToMeter(7);


//budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}
budgetCalculator(5, 2, 1);


// hotelCost
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
hotelCost(27);


// megaFriend
function megaFriend(names) {
    var max = "";
    for (var i = 0; i < names.length; i++) {
    var char = names[i];
    if (char > max) {
        max = char;
    }
  }
    return max;
}
megaFriend = "ifrad, joy, jahirul, nayem"




