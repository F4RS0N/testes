// test.js
const backendURL = "https://script.google.com/macros/s/AKfycbxIJ3j-30nUi6OWSqz20pkQaUUW3bq-KZ7TMxTbRtH5n9wLBrs754v0poNZeLt0RM1OsA/exec";

function adicionarSugestao() {
  var nome = document.getElementById("nome").value;
  var sugestao = document.getElementById("sugestao").value;

  if (!nome || !sugestao) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  var formData = new FormData();
  formData.append("nome", nome);
  formData.append("comentario", sugestao);

  fetch(backendURL, {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);
    recuperarSugestoes();
  })
  .catch(error => console.error("Erro ao enviar a sugestão:", error));

  document.getElementById("nome").value = "";
  document.getElementById("sugestao").value = "";
}

function recuperarSugestoes() {
  fetch(backendURL)
  .then(response => response.json())
  .then(data => {
    var comentarios = data.comentarios;
    var comentariosHtml = '';
    for (var i = 0; i < comentarios.length; i++) {
      comentariosHtml += '<div class="sugestao">';
      comentariosHtml += '<span class="nome">' + comentarios[i].nome + ':</span>';
      comentariosHtml += '<div class="texto">' + comentarios[i].comentario + '</div>';
      comentariosHtml += '</div>';
    }
    document.getElementById("sugestoes").innerHTML = comentariosHtml;
  })
  .catch(error => console.error("Erro ao recuperar as sugestões:", error));
}

// Recuperar as sugestões ao carregar a página
window.onload = recuperarSugestoes;
