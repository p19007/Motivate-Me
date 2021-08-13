//this is single line comment in JavaScript

/*this is a 
multi-line
comment in JavaScript*/

var clickCount = 0;

//var title = document.getElementById("titleText");

var motivateButton = document.getElementById("motivateButton");

motivateButton.addEventListener("click", sendMotivation);

function sendMotivation1()
{
  alert("Life is 10% what happens to you and 90% how you react to it.");
}

function sendMotivation2()
{
  alert("Start where you are. Use what you have. Do what you can.");
}

function sendMotivation3()
{
  alert("Don't watch the clock; do what it does. Keep going.");
}

function resetClickCount()
{
  clickCount = 0;
}

function sendMotivation()
{
  clickCount += 1;

  if (clickCount == 1)
  {
    sendMotivation1();
  }

  if (clickCount == 2)
  {
    sendMotivation2();
  }

  if (clickCount == 3)
  {
    sendMotivation3();
    resetClickCount();
  }
}
