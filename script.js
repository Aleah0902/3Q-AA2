function exponentialPopulationGrowth() {
    let initialPop= parseFloat( prompt('Enter a number: '));
	let Growth = parseFloat (prompt ('Enter a number: '));
	let Hours = parseFloat (prompt ('Enter a number: '));
	
	let finalPop = Math.round(initialPop*Math.pow(Math.E,(Growth*Hours)));
	let monsterloc = prompt ('Enter the location of the Monster');
	let monsterName = prompt('Enter the name of the Monster');
	
	let nameAndLoc = monsterloc.concat(" ",monsterName).toUpperCase();
	document.getElementById("result").innerHTML="After " + Hours + "hour/s, the population of " + nameAndLoc + " has risen to " + finalPop;
	
    }