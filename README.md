# 💻 Gerador de QRCode

Precisa de um QRCode para a sua empresa? Esta aplicação permite ao usuário gerar um QR Code a partir de qualquer URL válida. Ao inserir o link desejado, o QR Code é gerado dinamicamente e pode ser baixado em formato de imagem PNG. A interface é simples e intuitiva, proporcionando uma experiência rápida e eficiente.

## Como funciona?

O usuário insere uma URL no campo de texto. A aplicação valida se o texto é um link válido (com protocolo HTTP ou HTTPS). Se for válido, o QR Code correspondente à URL é gerado. O botão "Generate" fica habilitado somente se um link válido for inserido, e o QR Code pode ser baixado como uma imagem PNG.

## Tecnologias Utilizadas
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**
- **qrcode.react**
- **Vite**

## Aplicação funcionando

A aplicação pode ser testada diretamente no navegador, onde o usuário pode digitar uma URL e visualizar o QR Code gerado. Após isso, é possível baixar a imagem do QR Code clicando no botão "Generate".

Teste você mesmo! <a href="https://snapqr-wheat.vercel.app">SnapQR</a>

## Como Rodar o Projeto

### Pré-requisitos
- **NodeJS** (v16 ou superior)
- **npm, yarn ou pnpm** 

### Como executar
1. Clone este repositório:
  ```bash
   git clone https://github.com/jonasmfernandes/qrcode-generator.git
  ```
2. Acesse a pasta do projeto:
  ```bash
   cd qrcode-generator
  ```
3. Rode a aplicação no seu navegador:
```bash
  npm run dev
```

## Autor 
Desenvolvido por: Jonas Monteiro Fernandes
- E-mail: mfernandes.jonas@gmail.com

## Licença
Este projeto está licenciado sob a MIT License.