let array = [];

function generateArray() {
  array = [];
  const container = document.getElementById("array");
  container.innerHTML = "";

  for (let i = 0; i < 50; i++) {
    let value = Math.floor(Math.random() * 250) + 10;
    array.push(value);

    let bar = document.createElement("div");
    bar.style.height = value + "px";
    bar.classList.add("bar");

    container.appendChild(bar);
  }
}

// delay function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 🔵 Bubble Sort
async function bubbleSort() {
  let bars = document.getElementsByClassName("bar");

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {

      bars[j].style.background = "red";
      bars[j+1].style.background = "red";

      await sleep(30);

      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];

        bars[j].style.height = array[j] + "px";
        bars[j+1].style.height = array[j+1] + "px";
      }

      bars[j].style.background = "#38bdf8";
      bars[j+1].style.background = "#38bdf8";
    }
  }
}

// 🟡 Selection Sort
async function selectionSort() {
  let bars = document.getElementsByClassName("bar");

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    bars[minIndex].style.background = "yellow";

    for (let j = i + 1; j < array.length; j++) {
      bars[j].style.background = "red";
      await sleep(30);

      if (array[j] < array[minIndex]) {
        bars[minIndex].style.background = "#38bdf8";
        minIndex = j;
        bars[minIndex].style.background = "yellow";
      } else {
        bars[j].style.background = "#38bdf8";
      }
    }

    [array[i], array[minIndex]] = [array[minIndex], array[i]];

    bars[i].style.height = array[i] + "px";
    bars[minIndex].style.height = array[minIndex] + "px";

    bars[minIndex].style.background = "#38bdf8";
    bars[i].style.background = "green";
  }
}

// generate on load
generateArray();