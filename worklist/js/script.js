function selectCard(card) {
  // code goes here to select a card
  const selectedElement = document.querySelector("#selected");
  const selectedCard = document.querySelector(`.${card}`);

  selectedElement.setAttribute("id", "");
  selectedCard.setAttribute("id", "selected");
}

function addWork() {
  // code goes here for add work mode
  const selectedCard = document.querySelector("#selected");

  if (!selectedCard.children[2]) {
    const ulElement = document.createElement("ul");
    selectedCard.appendChild(ulElement);
    let constInputValue = document.querySelector("#work").value;
    const liElement = document.createElement("li");
    liElement.innerText = constInputValue;
    ulElement.appendChild(liElement);
    document.querySelector("#work").value = "";
  } else {
    const newLiEl = document.createElement("li");
    newLiEl.innerText = document.querySelector("#work").value;
    selectedCard.children[2].appendChild(newLiEl);
    document.querySelector("#work").value = "";
  }
}

function deleteWork() {
  // code goes here to delete a work in a card

  const selectedCard = document.querySelector("#selected");
  console.log(selectedCard);
}

function update() {
  // code goes here to update card title

  const selectedCard = document.querySelector("#selected");
  const inputValue = document.querySelector("#work").value;

  selectedCard.children[1].innerText = inputValue;

  document.querySelector("#work").value = "";
}

function clearWorkList() {
  //code goes here to clear workList
}

function changeMode(event) {
  // code goes here switch between add work, update card title and delete work
  const checkedEl = document.querySelector('input[name="mode"]:checked');

  // for updating title
  if (checkedEl.getAttribute("value") === "edit") {
    const btn = document.querySelector("#btnAdd");
    const input = document.querySelector("#work");

    input.placeholder = "Write your card title";
    btn.setAttribute("onClick", "update()");
    btn.style.display = "inline-block";
    input.style.display = "inline-block";

    // for deleting added work;
  } else if (checkedEl.getAttribute("value") === "delete") {
    const btn = document.querySelector("#btnAdd");
    const input = document.querySelector("#work");

    btn.style.display = "none";
    input.style.display = "none";

    const selectedCard = document.querySelector("#selected");

    console.log(selectedCard);
    if (selectedCard.children[2]) {
      console.log(selectedCard.children[2].children);
      if (selectedCard.children[2].children.length > 1) {
        selectedCard.children[2].children.forEach((el) => {
          const btn = document.createElement("button");
          btn.setAttribute("onClick", "deleteWork()");
          el.prepend(btn);
        });
      }
    }
    // for adding work
  } else if (checkedEl.getAttribute("value") === "add") {
    const btn = document.querySelector("#btnAdd");
    const input = document.querySelector("#work");

    input.placeholder = "Write your work to do";
    btn.setAttribute("onClick", "addWork()");

    btn.style.display = "inline-block";
    input.style.display = "inline-block";
  }
}

function deleteMode() {
  // code goes here for delete Mode
}
