# Montagne Seeds
## Página de Cadastro e Login

Página de cadastro e login para a empresa Montagne Seeds.

_Moisés Willian Albuquerque Campos_, o autor.

### Descrição Técnica

O projeto se divide em duas partes: a de cadastro e a de login. Elas se interligam por meio de links que levam de uma a outra conforme a necessidade do usuário.

A página de cadastro escreve os dados de cadastro em formato JSON no [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage), utilizando o e-mail digitado como chave, isto é feito a fim de facilitar a busca pelas informações do usuário no processo de login. Após a confirmação de cadastro, o DOM é manipulado para gerar um mensagem de sucesso e novos links para redirecionar o usuário.

A página de login realiza uma consulta ao sessionStorage utilizando o e-mail digitado como parâmetro de busca. Caso ele seja encontrado, é realizada a validação da senha contida no respectivo JSON salvo como valor. Em caso de validação bem-sucedida, o DOM é manipulado para gerar uma mensagem de "bem-vindo" com o nome que foi cadastrado para aquele usuário. Caso contrário, uma mensagem de "e-mail ou senha incorreto" aparece.

### Recursos utilizados
- HTML
- CSS
- JavaScript
- Fonte "Poppins" do [Google Fonts](https://fonts.google.com/)


### Como reproduzir este projeto

Clone o projeto utilizando:
```
git clone https://github.com/dekampus/cadastro-e-login-web-2024.1.git
```

Abra o arquivo `index.html` diretamente no seu navegador ou abra o diretório do projeto em seu editor de código e abra-o usando alguma extensão de servidor local.

Nenhum passo adicional é necessário.

### Aviso

A empresa referenciada neste projeto, Montagne Seeds, é fictícia e foi pensada exclusivamente para fins de demonstração de estilo. Qualquer semelhança com a realidade é mera coincidência.