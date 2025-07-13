document.addEventListener("DOMContentLoaded", function () {
  const customerForm = document.getElementById("customerForm");

  customerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const customerData = {
      name: name,
      phone: phone,
      address: address
    };

fetch("http://127.0.0.1:3000/add-customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customerData)
    })
    .then(response => response.json())
    .then(data => {
      alert("✅ " + data.message);
      customerForm.reset();
    })
    .catch(error => {
      alert("❌ Failed to add customer: " + error);
    });
  });
});
