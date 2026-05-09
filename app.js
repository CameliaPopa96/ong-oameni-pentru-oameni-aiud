async function loadImpact(){

  // aici pui URL-ul backend-ului tău (Render)
  const res = await fetch("https://ONG-BACKEND.onrender.com/api/impact");

  const data = await res.json();

  document.getElementById("impact").innerHTML = `
    <p>Pacienți ajutați: ${data.patients}</p>
    <p>Donații: ${data.donations} RON</p>
  `;
}

loadImpact();

async function donate(amount){

  const res = await fetch("https://ONG-BACKEND.onrender.com/api/donations/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount })
  });

  const data = await res.json();

  window.location.href = data.url;
}
