//http://code-maven.com/try/examples/js/todo.html

// var React = require('react');
// var ReactDOM = require('react-dom');

//window.alert("Hello");
var Headline=React.createClass({
    render:function(){
        return(

        <div>

            <h1> Student iClick </h1>
            <h2> One Platform To Unite Us All </h2>

        </div>
        );
    }
});
 var TodoList=React.createClass({
     render: function(){
         return(

             <div className="column">
           <div className="ToDoList">
             <br/>

             <label for="taskList">Make a To Do List</label>
         <hr/>

       <input id="task" placeholder="Task to Complete"/> <button id="add">Add</button>
             <div id="todos"></div>

             </div>
             </div>
     );
     }

 });
var Lectures= React.createClass({
    render: function(){
        return(
            <div id="column">
                <div className="Lectures">
                    <label for="lectures">Lecture Information</label>
                    <hr/>
                    <ul>
                        <li onclick="details(this)" id="lect1" data-lecture-type="Introduction to Html">Lecture 1</li>
                        <li onclick="details(this)" id="lect2" data-lecture-type="CSS and Networking">Lecture 2</li>
                        <li onclick="details(this)" id="lect3" data-lecture-type="Javascript and jQuery">Lecture 3</li>
                        <li onclick="details(this)" id="lect4" data-lecture-type="Classes and Cohesion">Lecture 4</li>
                        <li onclick="details(this)" id="lect5" data-lecture-type="TBA">Lecture 5</li>
                        <li onclick="details(this)" id="lect6" data-lecture-type="TBA">Lecture 6</li>
                        <li onclick="details(this)" id="lect7" data-lecture-type="TBA">Lecture 7</li>

                    </ul>


                </div>
            </div>

        );
        //get_todos();
        //details(Lectures);
    }
});
var Content= React.createClass({
    render: function(){
        return(
                <div className="column">
                    <div className="takeQuiz">
                        <label for="quiz">Take a Quiz</label>
                        <hr/>
                        <button id="quiz1" onClick="location.href='quizNotAvailable.html';">Quiz1</button>
                        <br/>
                        <br/>
                        <button id="quiz2" onClick="location.href='quizNotAvailable.html';">Quiz2</button>
                        <br/>
                        <br/>
                        <button id="quiz3" onClick="location.href='quizNotAvailable.html';">Quiz3</button>
                        <br/>
                        <br/>
                        <button id="quiz4" onClick="location.href='quizNotAvailable.html';">Quiz4</button>
                        <br/>
                        <br/>
                        <button id="quiz5" onClick="location.href='quizNotAvailable.html';">Quiz5</button>
                    </div>
                </div>

        );
        //get_todos();
        //details(Lectures);
    }
});
// var DiffT= React.createClass({
//     render: function(){
//         return(
//             <div id="column">
//                 <div className="Lectures">
//                     <label for="lectures">Lecture Information</label>
//                     <hr/>
//                     <ul>
//                         <li onclick="details(this)" id="lect1" data-lecture-type="Introduction to Html">Lecture 1</li>
//                         <li onclick="details(this)" id="lect2" data-lecture-type="CSS and Networking">Lecture 2</li>
//                         <li onclick="details(this)" id="lect3" data-lecture-type="Javascript and jQuery">Lecture 3</li>
//                         <li onclick="details(this)" id="lect4" data-lecture-type="Classes and Cohesion">Lecture 4</li>
//                         <li onclick="details(this)" id="lect5" data-lecture-type="TBA">Lecture 5</li>
//                         <li onclick="details(this)" id="lect6" data-lecture-type="TBA">Lecture 6</li>
//                         <li onclick="details(this)" id="lect7" data-lecture-type="TBA">Lecture 7</li>
//
//                     </ul>
//
//
//                 </div>
//             </div>
//
//         );
//         //get_todos();
//         //details(Lectures);
//     }
// });
// var ContentNext=React.createClass({
//     render: function(){
//         return(
//             <div id="column">
//                 <div className="Lectures">
//                     <label for="lectures">Lecture Information</label>
//                     <hr/>
//                     <ul>
//                         <li onclick="details(this)" id="lect1" data-lecture-type="Introduction to Html">Lecture 1</li>
//                         <li onclick="details(this)" id="lect2" data-lecture-type="CSS and Networking">Lecture 2</li>
//                         <li onclick="details(this)" id="lect3" data-lecture-type="Javascript and jQuery">Lecture 3</li>
//                         <li onclick="details(this)" id="lect4" data-lecture-type="Classes and Cohesion">Lecture 4</li>
//                         <li onclick="details(this)" id="lect5" data-lecture-type="TBA">Lecture 5</li>
//                         <li onclick="details(this)" id="lect6" data-lecture-type="TBA">Lecture 6</li>
//                         <li onclick="details(this)" id="lect7" data-lecture-type="TBA">Lecture 7</li>
//
//                     </ul>
//
//
//                 </div>
//                 </div>
//         );
//     }
// });
ReactDOM.render(<Headline/>,document.getElementById("Element1"));
ReactDOM.render(<TodoList/>,document.getElementById("Element2"));
ReactDOM.render(<Content/>,document.getElementById("Element3"));
ReactDOM.render(<Lectures/>,document.getElementById("Element4"));

function get_todos() //gets all the obj
 {
   var todos = new Array;//array for storing the objs*!/
     var todos_str = localStorage.getItem('todo');//gets each item*!/
     if (todos_str !== null) {//while there is something in the array*!/
        todos = JSON.parse(todos_str); //*!/
     }
    return todos;//return the array*!/
 }
 function details(lecture)
{
 	var lectureType=lecture.getAttribute("data-lecture-type");
 	alert(lecture.innerHTML +" contains: " +lectureType+".");
}
 var jqCal= $.ajax("https://developers.google.com/google-apps/calendar/")
.done(function() {
 console.log("Result");
 console.log( jqCal.responseJSON ); // JSON of response data*!/
});
jqCal.events.insert(primary, event);
console.log(jqCal.events.insert(primary, event));
 jqCal.events.update();
 console.log("testing");
function add() {
    var task = document.getElementById('task').value;
document.getElementById("task").value="";//clears the box after adding
     var todos = get_todos();
     todos.push(task);//put the task on the array
     localStorage.setItem('todo', JSON.stringify(todos));

     show();//show eachh element

     return false;
 }

 function remove() {//removes elements
     var id = this.getAttribute('id');
     var todos = get_todos();
     todos.splice(id, 1);
     localStorage.setItem('todo', JSON.stringify(todos));

     show();

     return false;}


 function show() {//displays everything in the array
     var todos = get_todos();

     var html = '<ol>';
     for(var i=0; i<todos.length; i++) {//iterate over all elems
         html += '<li>' + todos[i] + '<button className="remove" id="' + i  + '">x</button></li>';
     };
     html += '</ol>';

     document.getElementById('todos').innerHTML = html;

     var buttons = document.getElementsByClassName('remove');
     for (var i=0; i < buttons.length; i++) {
         buttons[i].addEventListener('click', remove);
     };
 }

 document.getElementById('add').addEventListener('click', add);
 show();

