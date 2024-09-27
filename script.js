document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const terms = document.getElementById("terms").checked;

  const tableBody = document.getElementById("tableData");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${dob}</td>
        <td>${terms ? "true" : "false"}</td>
    `;

  tableBody.appendChild(newRow);

  document.getElementById("myForm").reset();
});
