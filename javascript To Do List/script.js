let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")



btnDOM.addEventListener('click', elemanlar)



function check() {
  this.classList.toggle("checked");
}

function deleteButton() {
  this.parentElement.remove();
}


function elemanlar() {
  if (taskDOM.value.trim() == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value = "";


 


    liDOM.onclick = check;
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = deleteButton;
    liDOM.append(closeButton);

  }
}

