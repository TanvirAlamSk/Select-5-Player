let i = 0;
// for alert
function fun() {
  alert("You Select Maximun Five Player");
}
// plater 1
document.getElementById("playerSelect1").addEventListener("click", function () {
  if (i < 5) {
    i++;
    const getNameTag = document.getElementById("player-name1");
    const getName = getNameTag.innerText;
    const storeName = document.getElementById("store-name");
    const li = document.createElement("li");
    li.innerText = i + " . " + getName;
    storeName.appendChild(li);
    document.getElementById("playerSelect1").disabled = "true";
    const colorChange = document.getElementById("playerSelect1");
    colorChange.style.backgroundColor = "gray";
  } else {
    fun();
  }
});
// plater 2
document.getElementById("playerSelect2").addEventListener("click", function () {
  if (i < 5) {
    i++;
    const getNameTag = document.getElementById("player-name2");
    const getName = getNameTag.innerText;
    console.log(getName);
    const storeName = document.getElementById("store-name");
    const li = document.createElement("li");
    li.innerText = i + " . " + getName;
    storeName.appendChild(li);
    document.getElementById("playerSelect2").disabled = "true";
    const colorChange = document.getElementById("playerSelect2");
    colorChange.style.backgroundColor = "gray";
  } else {
    fun();
  }
});
// plater 3
document.getElementById("playerSelect3").addEventListener("click", function () {
  if (i < 5) {
    i++;
    const getNameTag = document.getElementById("player-name3");
    const getName = getNameTag.innerText;
    console.log(getName);
    const storeName = document.getElementById("store-name");
    const li = document.createElement("li");
    li.innerText = i + " . " + getName;
    storeName.appendChild(li);
    const colorChange = document.getElementById("playerSelect3");
    colorChange.style.backgroundColor = "gray";
    document.getElementById("playerSelect3").disabled = "true";
  } else {
    fun();
  }
});
// plater 4
document.getElementById("playerSelect4").addEventListener("click", function () {
  if (i < 5) {
    i++;
    const getNameTag = document.getElementById("player-name4");
    const getName = getNameTag.innerText;
    console.log(getName);
    const storeName = document.getElementById("store-name");
    const li = document.createElement("li");
    li.innerText = i + " . " + getName;
    storeName.appendChild(li);
    const colorChange = document.getElementById("playerSelect4");
    colorChange.style.backgroundColor = "gray";
    document.getElementById("playerSelect4").disabled = "true";
  } else {
    fun();
  }
});
// plater 5
document.getElementById("playerSelect5").addEventListener("click", function () {
  if (i < 5) {
    i++;
    const getNameTag = document.getElementById("player-name5");
    const getName = getNameTag.innerText;
    console.log(getName);
    const storeName = document.getElementById("store-name");
    const li = document.createElement("li");
    li.innerText = i + " . " + getName;
    storeName.appendChild(li);
    const colorChange = document.getElementById("playerSelect5");
    colorChange.style.backgroundColor = "gray";
    document.getElementById("playerSelect5").disabled = "true";
  } else {
    fun();
  }
});
// plater 6
document.getElementById("playerSelect6").addEventListener("click", function () {
  if (i < 5) {
    i++;
    const getNameTag = document.getElementById("player-name6");
    const getName = getNameTag.innerText;
    console.log(getName);
    const storeName = document.getElementById("store-name");
    const li = document.createElement("li");
    li.innerText = i + " . " + getName;
    storeName.appendChild(li);
    const colorChange = document.getElementById("playerSelect6");
    colorChange.style.backgroundColor = "gray";
    document.getElementById("playerSelect6").disabled = "true";
  } else {
    fun();
  }
});
// plater 7
document.getElementById("playerSelect7").addEventListener("click", function () {
  if (i < 5) {
    i++;
    const getNameTag = document.getElementById("player-name7");
    const getName = getNameTag.innerText;
    console.log(getName);
    const storeName = document.getElementById("store-name");
    const li = document.createElement("li");
    li.innerText = i + " . " + getName;
    storeName.appendChild(li);
    const colorChange = document.getElementById("playerSelect7");
    colorChange.style.backgroundColor = "gray";
    document.getElementById("playerSelect7").disabled = "true";
  } else {
    fun();
  }
});

// plater 8
document.getElementById("playerSelect8").addEventListener("click", function () {
  if (i < 5) {
    i++;
    const getNameTag = document.getElementById("player-name8");
    const getName = getNameTag.innerText;
    console.log(getName);
    const storeName = document.getElementById("store-name");
    const li = document.createElement("li");
    li.innerText = i + " . " + getName;
    storeName.appendChild(li);
    const colorChange = document.getElementById("playerSelect8");
    colorChange.style.backgroundColor = "gray";
    document.getElementById("playerSelect8").disabled = "true";
  } else {
    fun();
  }
});
// plater 9
document.getElementById("playerSelect9").addEventListener("click", function () {
  if (i < 5) {
    i++;
    const getNameTag = document.getElementById("player-name9");
    const getName = getNameTag.innerText;
    console.log(getName);
    const storeName = document.getElementById("store-name");
    const li = document.createElement("li");
    li.innerText = i + " " + getName;
    storeName.appendChild(li);
    const colorChange = document.getElementById("playerSelect9");
    colorChange.style.backgroundColor = "gray";
    document.getElementById("playerSelect9").disabled = "true";
  } else {
    fun();
  }
});
// player price part
let totalPrice = 0;
document.getElementById("calculate").addEventListener("click", function () {
  let perPlayerPrice = document.getElementById("perPlayerPrice");
  let PlayerPrice = parseInt(perPlayerPrice.value);
  totalPlayerPrice = PlayerPrice * i;
  playercost.innerText = " $" + totalPlayerPrice;
});

// total cost part
document.getElementById("totalCost").addEventListener("click", function () {
  let manager = document.getElementById("managerCost");
  const managerCost = parseInt(manager.value);
  let coach = document.getElementById("coachCost");
  const coachCost = parseInt(coach.value);
  const totalCost = totalPlayerPrice + managerCost + coachCost;
  const allCalculate = document.getElementById("allCalculate");
  const p = document.createElement("p");
  p.innerText = " Total Cost : " + " $ " + totalCost;
  allCalculate.appendChild(p);
  console.log(totalCost);
});
