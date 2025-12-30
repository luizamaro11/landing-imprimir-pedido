# 🖨️ Imprimir Pedido - Automação para Delivery

> **Automatize a impressão de pedidos do WhatsApp/BotConversa diretamente na sua impressora térmica.**

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![PHP](https://img.shields.io/badge/PHP-8.0+-777BB4.svg?logo=php&logoColor=white)](https://www.php.net/)
[![Google Drive API](https://img.shields.io/badge/Google%20Drive%20API-v3-blue)](https://developers.google.com/drive)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)

## 📋 Sobre o Projeto

O **Imprimir Pedido** é um middleware open-source desenvolvido para resolver um gargalo comum em pizzarias e restaurantes que utilizam o WhatsApp (via BotConversa) para vendas: a falta de impressão automática.

O sistema monitora uma planilha do Google Sheets (onde os pedidos caem), gera um cupom fiscal em PDF formatado para impressoras térmicas (80mm) e envia o comando de impressão para a cozinha/balcão automaticamente, sem intervenção humana.

### 🚀 Funcionalidades

- **Monitoramento em Tempo Real:** Escaneia novos arquivos/pedidos a cada 30 segundos.
- **Integração Google Sheets:** Conecta-se diretamente à base de dados do seu bot.
- **Impressão Térmica Nativa:** Suporte a impressão via rede Windows (compartilhamento SMB) e drivers genéricos.
- **Zero Erros:** Elimina erros de transcrição manual de pedidos.
- **Geração de PDF:** Layouts customizáveis via Google App Script.

---

## 🛠️ Arquitetura

O fluxo de dados segue a seguinte ordem:

1.  **Cliente:** Faz o pedido no WhatsApp.
2.  **BotConversa:** Salva os dados no Google Sheets.
3.  **Google App Script:** Detecta a nova linha e gera um PDF na pasta do Google Drive.
4.  **PHP Worker (Local):** 
    - Detecta o novo PDF via API do Google Drive.
    - Baixa o arquivo.
    - Envia para a impressora térmica configurada.
    - Move o arquivo para uma pasta "Impressos" (para evitar duplicidade).

---

## 📦 Instalação & Configuração

### Pré-requisitos

- PHP 8.0 ou superior instalado no Windows.
- Composer.
- Uma conta Google Cloud (para API do Drive).
- Impressora térmica instalada e compartilhada na rede.

### Passo a Passo

1.  **Clone o Repositório**
    ```bash
    git clone https://github.com/luizamaro11/imprimir-pedido.git
    cd imprimir-pedido
    ```

2.  **Instale as Dependências**
    ```bash
    composer install
    ```

3.  **Configuração Google Cloud**
    - Acesse o [Google Cloud Console](https://console.cloud.google.com).
    - Crie um projeto e ative a **Google Drive API**.
    - Crie credenciais **OAuth 2.0** e baixe o arquivo JSON.
    - Renomeie para `credentials.json` e coloque na raiz do projeto.

4.  **Configuração da Impressora**
    - Compartilhe sua impressora na rede Windows.
    - Edite o arquivo `script.php` (ou `config.php`):
    ```php
    $printer = "\\\\NOME-DO-PC\\NomeDaImpressora";
    ```

5.  **Google App Script**
    - Abra sua planilha de pedidos.
    - Vá em **Extensões > Apps Script**.
    - Copie o código de automação (disponível na pasta `docs/app-script.js`).
    - Configure o gatilho `onChange` ou `onFormSubmit`.

6.  **Executar**
    ```bash
    php script.php
    ```

---

## 💻 Landing Page

Este repositório também contém a Landing Page de apresentação do produto (localizada na raiz, estruturada em React/Vite), que serve para divulgar a solução para outros estabelecimentos.

Para rodar a Landing Page:

```bash
npm install
npm run dev
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir Issues ou enviar Pull Requests.

1.  Faça um Fork do projeto
2.  Crie sua Feature Branch (`git checkout -b feature/MinhaFeature`)
3.  Commit suas mudanças (`git commit -m 'Adiciona funcionalidade X'`)
4.  Push para a Branch (`git push origin feature/MinhaFeature`)
5.  Abra um Pull Request

---

<div align="center">
  <p>Desenvolvido com 💜 por <a href="https://www.linkedin.com/in/luizhamaro/">Luiz Henrique Amaro</a></p>
  <p><em>Este projeto não possui afiliação oficial com WhatsApp, BotConversa ou Google.</em></p>
</div>
