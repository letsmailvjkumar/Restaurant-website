# Restaurant-website
Restaurant-menu
<h1>Project Overview</h1>
<h3>Task</h3> 
<ol>
  <li>Mainly 5 tasks are done when you go in a restaurant. You get the menu and then Someone takes your order. Then your order is given to the chef and the chef starts preparing it. Once food is cooked, the food is given to the waiter and the waiter gives the food to you. then you eat it and pay for it.</li>
  <li>Make 5 functions</li>
  <li>First function - getMenu() -> On the load of the screen run this function and In this function you'll make an call using fetch to get the food items from the JSON and show them to a user</li>
  <li>TakeOrder() - Now assume that the user is ordering and make a functiion called TakeOrder() -This function should return a promise and shoud take 2500 milliseconds to resolve the order. in teh resolve choose any 3 burgers randomly and add them in the object.</li>
  <li>orderPrep() - This function also returns a promise and takes 1500 milliseconds to resolve and the resolve should return {order_status:true; paid:false}</li>
  <li>payOrder() - This function also returns a promise and tajes 1000 milliseconds to reolve and the resolve returns the object {order_status:true; paid:true}</li>
  <li>thankyouFnc() - Once {paid:true} is received, give an alert on the screen saying thankyou for eating with us today!</li>
  <li>You need to handle 4 promises back to back and run the last thankyou function one after the other. Use either promise chaining or async await or promise methods to do the following.</li>
  <li>So inshort you need to handle 4 promises back to back and run the last thankyou fnc one after the other. use either promise chaining or async await or promise methods to do the following.</li>
  <li>You are expected to replicate the same UI for the project. Remember there are 2 screens that are to be built.</li>
</ol>
