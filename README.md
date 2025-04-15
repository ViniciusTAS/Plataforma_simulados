# Simulados de Certificações AWS

Aplicação web para simulação de provas de certificação AWS, com foco na certificação Cloud Practitioner.

## Funcionalidades

- Simulados em modo estudo e exame
- Timer para controle de tempo
- Feedback imediato no modo estudo
- Explicações detalhadas das questões
- Interface moderna e responsiva

## Tecnologias Utilizadas

- React
- Material-UI
- React Router
- Vercel (deploy)

## Como Fazer o Deploy

### Pré-requisitos

- Node.js (versão 14 ou superior)
- Conta no Vercel
- Git

### Passos para Deploy

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd [NOME_DO_PROJETO]
```

2. Instale as dependências:
```bash
cd client
npm install
```

3. Faça o build da aplicação:
```bash
npm run build
```

4. Faça o deploy no Vercel:
   - Acesse [vercel.com](https://vercel.com)
   - Importe o projeto
   - Configure as variáveis de ambiente (se necessário)
   - Clique em "Deploy"

### Configurações do Vercel

- Framework Preset: Create React App
- Build Command: `cd client && npm run build`
- Output Directory: `client/build`
- Install Command: `cd client && npm install`

## Ambiente de Desenvolvimento

Para rodar localmente:

```bash
cd client
npm install
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
/
├── client/                 # Frontend React
│   ├── public/            # Arquivos estáticos
│   ├── src/               # Código fonte
│   │   ├── components/    # Componentes React
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── data/         # Dados estáticos
│   │   └── App.js        # Componente principal
│   └── package.json      # Dependências e scripts
├── vercel.json           # Configuração do Vercel
└── README.md            # Este arquivo
``` 