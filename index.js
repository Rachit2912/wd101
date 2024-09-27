document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const tableBody = document.getElementById("tableData");

  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  function loadStoredData() {
    const storedData = JSON.parse(localStorage.getItem("users") || "[]");
    storedData.forEach((user) => {
      addTableRow(user);
    });
  }

  function addTableRow(user) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td>${user.dob}</td>
      <td>${user.terms ? "true" : "false"}</td>
    `;
    tableBody.appendChild(newRow);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const terms = document.getElementById("terms").checked;

    const age = calculateAge(dob);
    if (age < 18 || age > 55) {
      alert("User must be between 18 and 55 years old.");
      return;
    }

    const user = { name, email, password, dob, terms };

    const storedData = JSON.parse(localStorage.getItem("users") || "[]");
    storedData.push(user);
    localStorage.setItem("users", JSON.stringify(storedData));

    addTableRow(user);

    form.reset();
  });

  loadStoredData();
});
