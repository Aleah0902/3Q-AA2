function exponentialPopulationGrowth() {
    let initial= parseFloat( prompt('Enter a number for Initial Population: '));
	let Growth = parseFloat (prompt ('Enter a number for Growth: '));
	let Hours = parseFloat (prompt ('Enter a number for Time of Hours: '));
	
	let finalPop = Math.round(initial*MAth.pow(Math.E, 9Growth*Hours)));
	let location = prompt ('Enter the location of the Monster');
	let monsterName = prompt('Enter the name of the Monster');
	
	let nameAndLoc = location.concat(" ",monsterName).toUpperCase();
	document.getElementById("result").innerHTML="After " + Hours + "hour/s, the population of " + nameAndLoc + "has risen to " + finalPop;
	
    }