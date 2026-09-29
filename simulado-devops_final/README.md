# Simulado de DevOps: aulas 1 a 32

Simulado com 20 questões de situação-problema sobre o ecossistema DevOps, feito para o curso técnico do CETI Augustinho Brandão (SEDUC/PI), Prof. Gilvan Alves.

## Como rodar no computador

Não precisa instalar nada. Baixe ou clone a pasta e abra o arquivo `index.html` no navegador (Chrome, Edge ou Firefox). Funciona até sem internet: sem conexão, só as fontes personalizadas não carregam e o navegador usa uma fonte padrão.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub e envie o conteúdo desta pasta:
   ```bash
   git init
   git add .
   git commit -m "Simulado de DevOps"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/simulado-devops.git
   git push -u origin main
   ```
2. No repositório, vá em **Settings > Pages**, escolha a branch `main` e a pasta `/ (root)` e salve.
3. Em alguns minutos o simulado fica disponível em `https://SEU-USUARIO.github.io/simulado-devops/`.

## Como funciona

- A cada tentativa, questões e alternativas são embaralhadas.
- Cada letra (A a D) é a correta em exatamente 5 questões, sem 3 respostas iguais seguidas.
- A posição da resposta correta de cada questão nunca repete a da tentativa anterior no mesmo navegador.
- A correção só aparece depois que o aluno responde tudo e informa nome e sobrenome válidos.
- O resultado mostra nota, porcentagem, data, hora, código de verificação e a correção comentada.

## Estrutura

```
simulado-devops/
├── index.html        página do simulado
├── css/style.css     aparência (tema claro e escuro automáticos)
├── js/questoes.js    banco de questões, editável
└── js/app.js         lógica de sorteio, validação e resultado
```

## Editar as questões

Abra `js/questoes.js` em qualquer editor de texto e altere os campos de cada questão. Mantenha 20 questões, cada uma com 1 alternativa correta (`ok`) e 3 erradas (`no`).

## Atenção

O gabarito fica no arquivo `js/questoes.js`. Se o repositório for público, qualquer pessoa pode lê-lo. Para uma avaliação com nota, deixe o repositório privado e distribua só o link do GitHub Pages (ainda assim, um aluno com conhecimento técnico consegue ver o código pelo navegador), ou use uma versão com gabarito guardado em servidor.
