import _ from 'lodash';
import './style.css';

let tasksList = [
  {
    description: "wash the dishes",
    completed: false,
    index: 1,
  },

  {
    description: "complete To Do list project",
    completed: false,
    index: 2,
  }
]

function iterateTasks(arr) {
  for(let i = 0; i < arr.length; i += 1){
  let task = arr[i].description;
  return task;
  }
  
}

const link = document.createElement("link");
link.href = "./src/style.css";
link.rel = "stylesheet";
document.head.appendChild(link);


const target = document.getElementById('listContainer');
target.innerHTML = `
<div class="commonClass">
<p>Today's To Do</p>
<button class="btnAll">
<i class="fas fa-sync-alt"></i>
</button>
</div>

<div class="commonClass">
<input
type="text"
class="textInput"
placeholder="Add to your list..."
/>
<button class="btnAll threeDots"
><i class="fa fa-ellipsis-h"></i
></button>
</div>

<div class="commonClass">
<label class="checkBoxLabel">
<input class="checkBox" for="checkBox2" type="checkbox" />
<p id="checkBox2">${tasksList[0].description}</p>
</label>
<button class="btnAll threeDots"
><i class="fa fa-ellipsis-h"></i
></button>
</div>

<div class="commonClass">
<label class="checkBoxLabel">
<input class="checkBox" for="checkBox3" type="checkbox" />
<p id="checkBox3">${tasksList[1].description}</p>
</label>
<button class="btnAll threeDots">
<i class="fa fa-ellipsis-h"></i>
</button>
</div>

<div class="commonClass clearBtnDiv" >
<button class="btnCompleteAll"><p>Clear all completed</p></button>
</div>
`