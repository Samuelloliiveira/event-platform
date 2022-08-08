## EVENT-PLATFORM

É uma plataforma de eventos. Esse projeto foi desenvolvido em React, usando o Vite. Nele aprendemos conceitos de graphql, GraphCMS, e apollo/client para Painel ADMIN. 

Desenvolvido em: React; TypeScript; e TailwindCSS

Também usamos várias dependências, como: 

    "@apollo/client": "^3.6.9",
    "@vime/core": "^5.3.1",
    "@vime/react": "^5.3.1",
    "classnames": "^2.3.1",
    "date-fns": "^2.28.0",
    "graphql": "^16.5.0",
    "phosphor-react": "^1.4.1",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.3.0"

    "@graphql-codegen/cli": "^2.8.1",
    "@graphql-codegen/typescript": "^2.7.1",
    "@graphql-codegen/typescript-operations": "^2.5.1",
    "@graphql-codegen/typescript-react-apollo": "^3.3.1",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@vitejs/plugin-react": "^1.3.0",
    "autoprefixer": "^10.4.7",
    "postcss": "^8.4.14",
    "tailwindcss": "^3.1.4",
    "typescript": "^4.6.3",
    "vite": "^2.9.9"

Comandos: 

  Após clonar o Repo: npm install <br>
  Rodar o projeto em localhost: npm run dev
  
OBS: Caso aconteça algum erro na hora de instalar as dependências, force a instalação

![index_imagem](https://github.com/Samuelloliiveira/event-platform/blob/main/src/assets/img/capture%20002.png?raw=true)
![index_imagem](https://github.com/Samuelloliiveira/event-platform/blob/main/src/assets/img/capture001.png?raw=true)


Algumas observações importantes sobre ferramentas usados no projeto. 

// tailwind css já usa metidas relativas(rem)
// CMS = Content Management System - Headless CMS: Painel ADMIN (dados fornecidos por uma API REST ou GraphQL)
// React vai fazer chamadas API para o CMS buscando as informações
// Slug é uma versão do título adaptada para a URL, gerada de forma automática 

// Dois tipos de operações GraphQL: Query / Mutation
// Query = buscar dados
// Mutation = criar, alterar ou deletar dados

// Para fazer as requisições CMS usamos a ferramenta Apolo/client
