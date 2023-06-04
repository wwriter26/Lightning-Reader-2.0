//getting the users input and storing it in a global var
//and making them into all caps.
const buttonElement = document.querySelector('.js-start-reading-button');
let userInput =''; 
let userArray = [];

buttonElement.addEventListener('click',() => {
  userInput = document.querySelector('.js-text-box'); 
  userInput = userInput.value.toUpperCase();
  // console.log(userInput);
  
  //store userInput inside of an array:
  let tempString = '';
  let count = 0;
  for(let i = 0; i < userInput.length;i++)
  {
    if(userInput[i] === ' ' && userInput[i-1] === ' '){
      continue;
    }
    if(userInput[i] === ' ')
    {
      userArray[count] = tempString;
      tempString = '';
      count++;
      continue;
    }
    tempString += userInput[i];
    
  }
  userArray[count] = tempString; //getting the last word from the userInput

  // console.log(userArray);
});
//<--


const readingButtonEm = document.querySelector('.js-start-reading-button');

//sets clicked to true if the button was clicked
  let clicked1 = false;
  const read1EM = document.querySelector('.number1-buttons');
  read1EM.addEventListener('click', () => {
    clicked1 = true;
    console.log(clicked1);
  });

  let clicked2 = false;
  const read2EM = document.querySelector('.number2-buttons');
  read2EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = true;
    console.log(clicked2);
  });
  
  let clicked3 = false;
  const read3EM = document.querySelector('.number3-buttons');
  read3EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = true;
    console.log(clicked3);
  });

  let clicked4 = false;
  const read4EM = document.querySelector('.number4-buttons');
  read4EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = true;
    console.log(clicked4);
  });

  let clicked5 = false;
  const read5EM = document.querySelector('.number5-buttons');
  read5EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = true;
    console.log(clicked5);
  });

  let clicked6 = false;
  const read6EM = document.querySelector('.number6-buttons');
  read6EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = true;
    console.log(clicked6);
  });

  let clicked7 = false;
  const read7EM = document.querySelector('.number7-buttons');
  read7EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
    clicked7 = true;
    console.log(clicked7);
  });

  let clicked8 = false;
  const read8EM = document.querySelector('.number8-buttons');
  read8EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
    clicked7 = false;
    clicked8 = true;
    console.log(clicked8);
  });

  let clicked9 = false;
  const read9EM = document.querySelector('.number9-buttons');
  read9EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
    clicked7 = false;
    clicked8 = false;
    clicked9 = true;
    console.log(clicked9);
  });

  let clicked10 = false;
  const read10EM = document.querySelector('.number10-buttons');
  read10EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
    clicked7 = false;
    clicked8 = false;
    clicked9 = false;
    clicked10 = true;
  
    console.log(clicked10);
  });

  let clicked11 = false;
  const read11EM = document.querySelector('.number11-buttons');
  read11EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
    clicked7 = false;
    clicked8 = false;
    clicked9 = false;
    clicked10 = false;
    clicked11 = true;
 
    console.log(clicked11);
  });

  let clicked12 = false;
  const read12EM = document.querySelector('.number12-buttons');
  read12EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
    clicked7 = false;
    clicked8 = false;
    clicked9 = false;
    clicked10 = false;
    clicked11 = false;
    clicked12 = true;
    console.log(clicked12);
  });

  let clicked13 = false;
  const read13EM = document.querySelector('.number13-buttons');
  read13EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
    clicked7 = false;
    clicked8 = false;
    clicked9 = false;
    clicked10 = false;
    clicked11 = false;
    clicked12 = false;
    clicked13 = true;
    console.log(clicked13);
  });

  let clicked14 = false;
  const read14EM = document.querySelector('.number14-buttons');
  read14EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
    clicked7 = false;
    clicked8 = false;
    clicked9 = false;
    clicked10 = false;
    clicked11 = false;
    clicked12 = false;
    clicked13 = false;
    clicked14 = true;
    console.log(clicked14);
  });
  
  let clicked15 = false;
  const read15EM = document.querySelector('.number15-buttons');
  read15EM.addEventListener('click', () => {
    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    clicked5 = false;
    clicked6 = false;
    clicked7 = false;
    clicked8 = false;
    clicked9 = false;
    clicked10 = false;
    clicked11 = false;
    clicked12 = false;
    clicked13 = false;
    clicked14 = false;
    clicked15 = true;
    console.log(clicked15);
  });
  
//<--

//JS for the Shortcuts 



//Checkboxes for the preferences 

//adding a 0.5 second pause before displaying the next word when punctuation is present
const check1 = document.getElementById('check-1');
let check1True = false;
check1.addEventListener('change',function() {
  if(this.checked) //if the box is checked
  {
    console.log('Checkbox is selected');
    check1True = true;
  }
  else //if box is not checked
  {
    console.log('checkbox is not selected');
    check1True = false;
  }
});

var intervalId;
function changeIntervalTime(condition, newTime)
{
  if(userArray[index+1] === undefined)
  {
    document.body.innerHTML = 'Finished :)';
    let x = userTime + 300
    setTimeout(function(){
      reloadPage();
    },x);
    return;
  }

  if(condition)
  {
    clearInterval(intervalId);  

    intervalId = setInterval(function(){
    document.body.innerHTML = '<div class="displayed-array">' + userArray[index] + '</div>';
    index++;
      //-->
      // if(twoInRow)
      // {
      //   twoInRow = false;
      //   changeIntervalTime(condition,newTime);
      // }
      //<--
    normalTime();
    },newTime);

  }
}

let newTime;
let commaIndex;
let tempCheck1;

//let twoInRow = false;
let finalButton;
function normalTime()
{

  tempCheck1 = false;
  clearInterval(intervalId);
  intervalId = setInterval(function()
  {
    if(userArray[index] === undefined)
    {
    document.body.innerHTML = '<div class="return">Finished :)</div>';
      setTimeout(function(){
        reloadPage();
      },300);
      return;
    }
  //-->  
    //Space BAR shortcut
    let spaceCount = 0;
    document.addEventListener("keydown", function(event)
    {
      //restarting the text
      if(event.key === "R" || event.key === "r")
      {
        clearInterval(intervalId);
        index = 0;
        document.body.innerHTML = '<div class="countdown">3</div>'; //clears the screen
        setTimeout(function()
        {
          document.body.innerHTML = '<div class="countdown">2</div>';
        },1000);
        setTimeout(function()
        {
          document.body.innerHTML = '<div class="countdown">1</div>';
        },2000);
        setTimeout(function()
        {
          normalTime();
        },3000);
      }
      //pausing the words.
      if(event.code === "space" || event.key === " ")
      {
        spaceCount++;
      }
      if((event.code === "space" || event.key === " ") && !(spaceCount % 2 === 0)){
        console.log("space key pressed.. should pause");
        pauseInterval();
      }
      else if((event.code === "space" || event.key === " " )&& spaceCount % 2 === 0)
      {
        console.log("space key pressed.. should unpause");
        resumeInterval();
      }
    });
  //<--

    newTime = userTime;
    if(tempCheck1)
    {
      tempCheck1 = false;
    }
    //-->
  
  //Trying to account for two  , . ? in a row.  
    // if(check1True && !((userArray[index+1] === undefined) || (userArray[index] === undefined)) && (userArray[index].includes('!') || userArray[index].includes('?') || userArray[index].includes('.') || userArray[index].includes(',')) && (userArray[index+1].includes(',') || userArray[index+1].includes('?') || userArray[index+1].includes('!'))) 
    // {
    //   //(userArray[index+1].includes('!') || userArray[index+1].includes('?') || userArray[index+1].includes('.') || userArray[index+1].includes(',')) 
    //   twoInRow = true;
    // }
    //<--
    // if(twoInRow)
    // {
    //   newTime = userTime + 300; //adds half a second to the time when punctuation exists
    //   tempCheck1 = true;
    //   console.log('hi');
    //   changeIntervalTime(tempCheck1, newTime);
    //   console.log('hello')
    //   changeIntervalTime(tempCheck1, newTime);
    //   twoInRow = false;
    // }
    if(check1True && (userArray[index].includes("!") || userArray[index].includes("?") || userArray[index].includes(".") || userArray[index].includes(",")))
    {
      newTime = userTime + 300; //adds half a second to the time when punctuation exists
      tempCheck1 = true;
      changeIntervalTime(tempCheck1, newTime);
    }
    document.body.innerHTML = '<div class="displayed-array">' + userArray[index] + '</div>';
    index++;
  },userTime);
}



let userTime = 0;
let index = 0;
//-->
// Countdown & Reading in the user array 
let startReading = false;
readingButtonEm.addEventListener('click', () => {
  document.body.innerHTML = '<div class="countdown">3</div>'; //clears the screen
  

    setTimeout(function()
    {
      document.body.innerHTML = '<div class="countdown">2</div>';
    },1000);
    setTimeout(function()
    {
      document.body.innerHTML = '<div class="countdown">1</div>';
    },2000);
    
    setTimeout(function()
    {
      document.body.innerHTML = '';
      startReading = true;


      if(startReading === true) //this is where users words will start to display
      {
        // console.log(userInput);
        //getting the appropiate time for the WPM
        if(clicked1 === true)
        {
          userTime = 600;
        }
        else if(clicked2 === true)
        {
          userTime = 300;
        }
        else if(clicked3 === true)
        {
          userTime = 200;
        }
        else if(clicked4 === true)
        {
          userTime = 150;
        }
        else if(clicked5 === true)
        {
          userTime = 120;
        }
        else if(clicked6 === true)
        {
          userTime = 100;
        }
        else if(clicked7 === true)
        {
          userTime = 85.7;
        }
        else if(clicked8 === true)
        {
          userTime = 75;
        }
        else if(clicked9 === true)
        {
          userTime = 67;
        }
        else if(clicked10 === true)
        {
          userTime = 60;
        }
        else if(clicked11 === true)
        {
          userTime = 55;
        }
        else if(clicked12 === true)
        {
          userTime = 50;
        }
        else if(clicked13 === true)
        {
          userTime = 46;
        }
        else if(clicked14 === true)
        {
          userTime = 43;
        }
        else if(clicked15 === true)
        {
          userTime = 40;
        }
        else{
          console.log('using default value of 300 WPM');
          userTime = 200;
        }
        normalTime(); //accounts for the first checkmark
      }
    },3000);
  
});
//<--

//ShortCuts


function pauseInterval() {
  
  clearInterval(intervalId); // Clear the interval to pause execution
  
}

function resumeInterval() {
  intervalId; // Start the interval again to resume execution
  
  normalTime();
  
}
//reload page function:
function reloadPage()
{
  location.reload();
}
