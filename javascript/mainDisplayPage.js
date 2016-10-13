//http://code-maven.com/try/examples/js/todo.html
function get_todos() //gets all the obj
{
    var todos = new Array;//array for storing the objs
    var todos_str = localStorage.getItem('todo');//gets each item
    if (todos_str !== null) {//while there is something in the array
        todos = JSON.parse(todos_str); //
    }
    return todos;//return the array
}
function details(lecture)
{
	var lectureType=lecture.getAttribute("data-lecture-type");	
	alert(lecture.innerHTML +" contains: " +lectureType+".");
}

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

    return false;
}

function show() {//displays everything in the array
    var todos = get_todos();

    var html = '<ol>';
    for(var i=0; i<todos.length; i++) {//iterate over all elems
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
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

