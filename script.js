"use strict";

let snack = document.querySelector(".snackSelection");
let amount = document.querySelector(".amount");
let total = 0;
snack.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(e.target.dataset.price);
	total += parseInt(e.target.dataset.price);
	amount.innerText = `$ ${total}`;
});

// MAKE MONEY

let form = document.querySelector("#coinForm");
let coinContainer = document.querySelector(".coinContainer");
let coinCounter = 0;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let data = new FormData(form);
	let type = data.get("coinType");
	let numOfCoins = data.get("numCoins");
	console.log(numOfCoins);
	console.log();
	for (let i = 0; i < numOfCoins; i++) {
		coinCounter++;
		let coin = document.createElement("div");
		coin.setAttribute("id", coinCounter);
		coin.setAttribute("class", "coin");

		coin.classList.add(type);

		coin.addEventListener("click", () => {
			coinContainer.removeChild(coin);
			console.log(`Removed `);
			console.log(coin.getAttribute("id"));
		});
		// let coinLabel = document.createElement("span");
		// coinLabel.innerText = type;
		coin.innerText = type;
		coinContainer.append(coin);
	}
});

//Light bulb

let lightbulb = document.querySelector(".lightbulb");

let switchOn = document.querySelector(".switchOn");

switchOn.addEventListener("click", () => {
	lightbulb.classList.add("switchedOn");
});

let switchOff = document.querySelector(".switchOff");

switchOff.addEventListener("click", () => {
	lightbulb.classList.remove("switchedOn");
});

let toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
	lightbulb.classList.toggle("switchedOn");
});

let end = document.querySelector(".end");

end.addEventListener("click", () => {
	lightbulb.remove();
	let btns = document.querySelectorAll(".btn");
	btns.forEach((btn) => (btn.disabled = true));
});
