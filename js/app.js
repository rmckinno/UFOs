// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// table function
function buildTable(data) {
    // clear table data
    tbody.html("");
    
    // loopd through each object in data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        // object.value references one object from the array
        // dataRow incates the values to go into dataRow
        // forEach((val)) specifies one object per row
        Object.values(dataRow).forEach((val)=> {
            let cell = row.append("td");
            cell.text(val);
        }
    );
        
    });
}
