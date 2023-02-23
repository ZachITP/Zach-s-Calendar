//Lets play a game Central Grader: can you spot the Doctor Who references

var saveBtn = $(".saveBtn");


//displays current date
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

function TardisColor() {
  var hour = moment().hours();

  $(".time-lord").each(function() {
      var currHour = parseInt($(this).attr("id"));

      // console.log each time-block
      if (currHour > hour) {
          $(this).addClass("future");
      } else if (currHour === hour) {
          $(this).addClass("present");
      } else {
          $(this).addClass("past");
      }
  })
};

// Save button for the time block
saveBtn.on("click", function() {

  // console.log Key and Value in local storage
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".plan").val();

  // stores the value
  localStorage.setItem(time, plan);
});

// saves the value and displays it on the page even after you refresh it
function TheDoctor() {

  $(".hour").each(function() {
      var currHour = $(this).text();
      var currPlan = localStorage.getItem(currHour);

     

      if(currPlan !== null) {
          $(this).siblings(".plan").val(currPlan);
      }
  });
}


//tag for line 8 
TardisColor();

//tag for line 38
TheDoctor();


