// Eva Wang

/* 
 * The following function is to implement the filter function, 
 * according to the user click on the page filter content options, 
 * to display all course content of the user selected the level.
 */

function filterLevel(displayLevel) {
  const coursesAarray = document.getElementsByClassName('wrapCourse'); 
  console.log("filterLevel:"  + displayLevel);
  console.log("coursesCLass Length:"  + coursesAarray.length);

  for (i = 0; i < coursesAarray.length; i++) {
    //console.log("Course: " + coursesAarray[i].id);
    //console.log("Course Level: " + coursesAarray[i].getAttribute("tLevel"));
    
    if(0 == displayLevel){
      coursesAarray[i].style.display=""; //display
    }else if  (coursesAarray[i].classList.contains('level1') && (displayLevel ==1)) {
      coursesAarray[i].style.display=""; //display

    }else if (coursesAarray[i].classList.contains('level2') && (displayLevel ==2) ){
      coursesAarray[i].style.display=""; //display
    }else {
      coursesAarray[i].style.display="none"; //hidden
    }
  }
}

/* 
 * The following function is to implement the sort function, 
 * according to the user click on the page sort content options, 
 * like from lower level to high level, or high level to low level,
 * to display all course content of the user selected the sort.
 */
function sortLevel(sortLevel){
 const coursesList = document.getElementsByClassName('wrapCourse'); //Get all courses.
 const coursesArray = [];
 console.log('sortLevel:' + sortLevel);
 console.log('coursesAarray Length:' + coursesList.length);

 for(var i=0; i<coursesList.length; i++){ //put all courses into an array.
    coursesArray.push(coursesList[i]);
    console.log('calssname:' + coursesArray[i].className);
  }

   //Sorting courses in ascending or descending order based on user sorting requirements.
  coursesArray.sort(
    function(a,b){
      if(sortLevel == 'L2H'){
        return ( a.className >= b.className ? 1 : -1); 
      }else if(sortLevel == 'H2L'){
        return ( a.className >= b.className ? -1 : 1); 
      }
    })
 
    // Emptying the container.
    const parentDiv = document.getElementById('flexcontent');
    parentDiv.innerHTML = "";

    // Put the course blocks sorted by customer requirements back into the container for display.
    for(var i=0; i<coursesArray.length; i++){
      console.log(coursesArray[i].getAttribute('id') );
      parentDiv.appendChild(coursesArray[i]);
    }
 
}

/* 
 * The following function is to implement the sort function, 
 * according to the user click on the page sort content options, 
 * like from lower level to high level, or high level to low level,
 * to display all course content of the user selected the sort.
 */
function searchCourse(){
  const searchData = document.getElementById('searchbar').getElementsByTagName('input')[0].value; // Read the value entered by the client.
  
  console.log('search:' +searchData);
  const coursesList = document.getElementsByClassName('wrapCourse'); //put all courses into an array.

  // Iterate through the list of courses, showing all course names containing the key search words typed by the user.
  for(var i=0; i<coursesList.length; i++){
    if (  coursesList[i].id.toLowerCase().includes(searchData.toLowerCase()) ) {
      coursesList[i].style.display=""; //display
    }
    else {
      coursesList[i].style.display="none"; //hidden
    }
  }
}

