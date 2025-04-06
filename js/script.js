document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Validação simples
  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Validação de e-mail básica
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Digite um e-mail válido.");
    return;
  }

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formsubmit.co/ajax/SEUEMAIL@email.com", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: formData
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  } catch (error) {
    alert("Erro na conexão. Verifique sua internet.");
  }
});
