function createTable() {
	
	//Write your code here
	let table = document.getElementById('myTable');

	let rows = parseInt(prompt("Input number of rows"));
	let cols = parseInt(prompt("Input number of columns"));

	for(let i = 0; i < rows; i++){
		let rows_i = table.insertRow();
		for(let j = 0; j < cols; j++){
			let col_j = rows_i.insertCell();
			col_j.innerText = `Row-${i} Column-${j}`;
		}
	}	
	
	
}