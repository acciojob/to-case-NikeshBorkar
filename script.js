function toCase(text) {
  // write your code here
	let x=text.toUpperCase();
	let y=text.toLowerCase()
	return y+"-"+x
}

// DO not change the code below

 const text = prompt("Enter text:");
alert(toCase(text));
