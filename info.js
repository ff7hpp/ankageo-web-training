const X = document.querySelector(".form-section h1");

X.textContent = "Add New Personnel";


const tableTitle = document.querySelector(".table-section h2");

const personnelRows = document.querySelectorAll("tbody tr");

tableTitle.textContent = `Personnel List (${personnelRows.length})`;


const nameInput = document.getElementById("name");

nameInput.placeholder = "Type personnel name";


const departmentInput = document.getElementById("department");

departmentInput.title = "Choose personnel department";


personnelRows.forEach((row) => {
    const department = row.children[4].textContent;

    if (department === "IT") {
        row.classList.add("highlight-row");
    }
});