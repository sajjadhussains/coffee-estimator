

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click',function(){
    const cheapestCoffee = document.getElementById('cheap-coffee').value;
    const chepaestCoffeePrice = parseFloat(cheapestCoffee);
    const expensiveCoffee = document.getElementById('expensive-coffee').value;
    const expensiveCoffeePrice = parseFloat(expensiveCoffee)
    const mondayCoffee = document.getElementById('monday-coffee').value;
    const mondayCoffeeNumber = parseFloat(mondayCoffee)
    const fridayCoffee = document.getElementById('friday-coffee').value;
    const fridayCoffeeNumber = parseFloat(fridayCoffee)
    const tuesdayCoffee = document.getElementById('tuesday-coffee').value;
    const tuesdayCoffeeNumber = parseFloat(tuesdayCoffee)
    const satardayCoffee = document.getElementById('satarday-coffee').value;
    const satardayCoffeeNumber = parseFloat(satardayCoffee)
    const wednesdayCoffee = document.getElementById('wednesday-coffee').value;
    const wednesdayCoffeeNumber = parseFloat(wednesdayCoffee)
    const sundayCoffee = document.getElementById('sunday-coffee').value;
    const sundayCoffeeNumber = parseFloat(sundayCoffee)
    const thursdayCoffee = document.getElementById('thursday-coffee').value;
    const thursdayCoffeeNumber = parseFloat(thursdayCoffee)

    const weeklyCoffee = mondayCoffeeNumber + fridayCoffeeNumber  + tuesdayCoffeeNumber + satardayCoffeeNumber + wednesdayCoffeeNumber + sundayCoffeeNumber +  thursdayCoffeeNumber;
    console.log('weekly coffee',weeklyCoffee);

    const allCost =  chepaestCoffeePrice + expensiveCoffeePrice;
    console.log('Total Cost: ',allCost);

    const averageCost = allCost/2;
    console.log('average Cost: ',averageCost);
// monthly cost
    const numberCoffeesMonthly = weeklyCoffee * 4;
    const monthlyExpensive = numberCoffeesMonthly * expensiveCoffeePrice;
    const monthlyCheapest = numberCoffeesMonthly * chepaestCoffeePrice;
    const monthlyAverage = numberCoffeesMonthly * averageCost;
    console.log('Number Coffees Monthly: ',numberCoffeesMonthly);
    console.log('Monthley Cheapest : ',monthlyCheapest);
    console.log('Monthly Expensive: ', monthlyExpensive);
    console.log('Monthly Average : ', monthlyAverage);
//yearly cost
    const numberCoffeeYearly = weeklyCoffee * 52;
    const yearlyCheapest = numberCoffeeYearly * chepaestCoffeePrice;
    const yearlyExpensive = numberCoffeeYearly * expensiveCoffeePrice;
    const yearlyAverage = numberCoffeeYearly * averageCost;
    console.log('Number Coffees yearly: ', numberCoffeeYearly);
    console.log('Yearly Cheapest : ', yearlyCheapest);
    console.log('Yearly Expensive : ', yearlyExpensive);
    console.log('Yearly Average : ', yearlyAverage);

})