document.addEventListener("DOMContentLoaded", () => {
 let form= document.querySelector('form')
 form.addEventListener('submit', (e) => {
  e.preventDefault();
  handelTask(document.querySelector('#new-task-description').value)
  form.reset();
  
 })
  
  // your code here
});

function handelTask(task){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent= 'x'
  btn.addEventListener('click',handelDelete)
  p.textContent= `${task} `
  p.appendChild(btn)
  let li = document.createElement('li')
  li.textContent='';
  document.querySelector('#tasks').appendChild(li).appendChild(p);
  console.log(p)
}

function handelDelete(e){
  e.target.parentNode.parentNode.remove()
}
