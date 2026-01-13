document.getElementById("complaintForm")
.addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  const response = await fetch("http://localhost:5000/api/complaints", {
    method: "POST",
    body: formData
  });

  const result = await response.json();
  alert(result.message);
});
