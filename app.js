async function loadImpact(){

  try {
    const res = await fetch(`${API_URL}/impact`);
    const data = await res.json();

    document.getElementById("impact").innerHTML = `
      <p><b>Pacienți ajutați:</b> ${data.patients}</p>
      <p><b>Donații:</b> ${data.donations} RON</p>
    `;

  } catch (e) {
    document.getElementById("impact").innerHTML = "Date indisponibile";
  }
}

loadImpact();

async function donate(amount){

  const res = await fetch(`${API_URL}/donations/checkout`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ amount })
  });

  const data = await res.json();

  window.location.href = data.url;
}
