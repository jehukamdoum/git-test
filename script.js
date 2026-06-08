const button = document.getElementById("addEmployeeBtn");
const form = document.getElementById("employeeForm");
const cancelBtn = document.getElementById("cancelBtn");

button.addEventListener("click", function () {
    form.style.display = "block";
});

cancelBtn.addEventListener("click", function () {
    form.style.display = "none";
});
const saveBtn = document.getElementById("saveBtn");
const tableBody = document.getElementById("employeeTableBody");

tableBody.addEventListener("click", function (event) {
    if (event.target.matches(".deleteBtn")) {
        const row = event.target.closest("tr");
        if (row) {
            row.remove();
        }
    }
});

saveBtn.addEventListener("click", function () {

    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const department = document.getElementById("departmentInput").value;

    const newRow = document.createElement("tr");
    const nextId = tableBody.children.length + 1;

    newRow.innerHTML = `
        <td>${nextId}</td>
        <td>${name}</td>
        <td>${department}</td>
        <td>${email}</td>
        <td>Active</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;
    tableBody.appendChild(newRow);

    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("departmentInput").value = "";

    form.style.display = "none";
});
