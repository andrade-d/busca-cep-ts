

# Teste de Busca de CEP com Playwright

Este repositório contém um teste automatizado usando Playwright para verificar a funcionalidade de busca de CEP no site dos Correios.

## Pré-requisitos

- Node.js instalado
- Playwright instalado

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Executando o Teste

Para executar o teste, use o seguinte comando:
```bash
npx playwright test
```

## Descrição do Teste

O teste automatizado realiza os seguintes passos:

1. Acessa a página de busca de CEP dos Correios.
2. Clica no campo de busca e preenche com o CEP `80700000`.
3. Clica no botão "Buscar".
4. Verifica se a mensagem de erro "Preencha o campo Captcha!" é exibida.

