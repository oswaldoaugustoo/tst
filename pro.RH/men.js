function salvarFormulario() {
    // Adicione a lógica para salvar os dados, incluindo o upload de foto e currículo
    // Aqui você deve enviar os dados para o backend ou armazenar localmente, conforme necessário
  
    // Após salvar, redireciona para a página de exibição de dados
    window.location.href = 'resultado.html';
  }
  
  function descartarFormulario() {
    // Limpe todos os campos do formulário, incluindo a pré-visualização da foto
    document.getElementById("cadastroForm").reset();
    document.getElementById("preview").innerHTML = '';
  }
  
  function previewFoto() {
    // Exiba uma pré-visualização da foto selecionada
    var input = document.getElementById('foto');
    var preview = document.getElementById('preview');
  
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
  
    var files = input.files;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();
  
      reader.onload = function (e) {
        var img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '100%';
        preview.appendChild(img);
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  // Função para preencher os dados na página de exibição
  function preencherDados() {
    var queryParams = new URLSearchParams(window.location.search);
    
    document.getElementById("resultNome").innerText = queryParams.get("nome");
    document.getElementById("resultIdade").innerText = queryParams.get("idade");
    document.getElementById("resultTelefone").innerText = queryParams.get("telefone");
    document.getElementById("resultEmail").innerText = queryParams.get("email");
    document.getElementById("resultQualidades").innerText = queryParams.get("qualidades");
  
    var resultFoto = document.getElementById("resultFoto");
    var fotoPreview = document.getElementById("preview").innerHTML;
    resultFoto.innerHTML = fotoPreview;
  
    var resultCurriculo = document.getElementById("resultCurriculo");
    var curriculoFile = queryParams.get("curriculo");
    resultCurriculo.href = curriculoFile;
    resultCurriculo.innerText = curriculoFile.substring(curriculoFile.lastIndexOf("/") + 1);
  }
  
  // Chama a função de preenchimento quando a página de resultado é carregada
  if (window.location.pathname.includes("resultado.html")) {
    preencherDados();
  }
  