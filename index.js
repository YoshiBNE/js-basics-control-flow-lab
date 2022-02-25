function scuberGreetingForFeet(val){
  // Write your code here!
  let greeting;
  if (val <= 400) {
    greeting = "This one is on me!";
  } else if (val > 2000 && val <= 2500) {
    greeting = "I will gladly take your thirty bucks.";
  } else if (val > 2500) {
    greeting = "No can do.";
  }
  return greeting;
}

function ternaryCheckCity(name){
  // Write your code here!
  let reply;
  if (name === "NYC") {
    reply = "Ok, sounds good.";
  } else {
    reply = "No go.";
  }
  return reply;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let charm;
  if (tip === "generous") {
    charm = "Thank you so much.";
  } else if (tip === "not as generous") {
    charm = "Thank you.";
  } else {
    charm = "Bye.";
  }
  return charm
}