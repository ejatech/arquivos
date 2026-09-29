/*
  Banco de questões do Simulado de DevOps.
  Cada questão tem:
    id    identificador único (não repita)
    tema  aulas de origem
    ctx   situação-problema
    q     pergunta
    ok    alternativa correta
    no    três alternativas erradas
    exp   explicação exibida na correção
  O app sorteia as posições; a ordem aqui não importa.
  O equilíbrio do gabarito (5 por letra) exige exatamente 20 questões.
*/
window.QUESTOES = [
  {
    "id": "q01",
    "tema": "Aulas 1 a 8",
    "ctx": "A equipe do projeto “Biblioteca Digital” do CETI junta o código de todos os integrantes só no fim de cada mês. Toda vez, o sistema quebra e o grupo passa dias resolvendo conflitos entre as partes.",
    "q": "Qual prática ataca a origem desse problema?",
    "ok": "Integrar o código ao repositório central várias vezes ao dia, com testes automáticos a cada envio",
    "no": [
      "Designar um único aluno para revisar todo o código manualmente no último dia de cada mês",
      "Aumentar o intervalo entre as integrações para que cada aluno tenha mais tempo de programar",
      "Contratar um servidor mais potente para que o sistema suporte as versões em conflito"
    ],
    "exp": "É a Integração Contínua (CI): integrar com frequência e testar automaticamente detecta erros cedo, evita o acúmulo de falhas e reduz os conflitos de merge."
  },
  {
    "id": "q02",
    "tema": "Aulas 1 a 8 e 17 a 24",
    "ctx": "Uma loja virtual mantém toda versão aprovada nos testes pronta para ir ao ar, mas a gerente decide o dia exato de publicar, normalmente na véspera das promoções.",
    "q": "Qual prática descreve esse modelo de trabalho?",
    "ok": "Entrega Contínua: o código fica sempre pronto e o lançamento é uma decisão da equipe",
    "no": [
      "Deploy contínuo: cada alteração aprovada nos testes vai sozinha direto para produção",
      "Deploy manual: cada etapa da publicação depende de intervenção humana, sem automação",
      "Integração Contínua: o objetivo é apenas juntar o código da equipe no repositório"
    ],
    "exp": "Na Entrega Contínua (CD) o software validado está sempre pronto para produção, mas a publicação é decidida. No deploy contínuo, cada mudança aprovada é enviada automaticamente."
  },
  {
    "id": "q03",
    "tema": "Aulas 1 a 8",
    "ctx": "Numa equipe Scrum que desenvolve o app de frequência escolar, chegaram 15 pedidos de novas funcionalidades e não dá para fazer tudo na próxima sprint.",
    "q": "Quem é responsável por priorizar o que é mais importante para o cliente?",
    "ok": "Product Owner",
    "no": [
      "Scrum Master",
      "Time de Desenvolvimento",
      "Gerente de Configuração"
    ],
    "exp": "O Product Owner prioriza o que gera mais valor para o cliente. O Scrum Master facilita e remove obstáculos; o Time de Desenvolvimento entrega os incrementos."
  },
  {
    "id": "q04",
    "tema": "Aulas 1 a 8",
    "ctx": "O suporte técnico da escola recebe chamados a qualquer hora e não quer trabalhar em ciclos fechados de duas semanas. A equipe quer enxergar em que etapa as tarefas estão travando.",
    "q": "Qual abordagem se encaixa melhor nessa rotina?",
    "ok": "Kanban, com quadro visual em colunas e fluxo contínuo de trabalho",
    "no": [
      "Scrum, com sprints fixas e papéis de Product Owner e Scrum Master",
      "Modelo sequencial, concluindo cada fase antes de iniciar a seguinte",
      "Kaizen feito uma única vez por ano, numa grande reunião de revisão"
    ],
    "exp": "O Kanban usa colunas (A fazer, Em progresso, Concluído) sem sprints: o trabalho flui continuamente e os gargalos ficam visíveis."
  },
  {
    "id": "q05",
    "tema": "Aulas 9 a 16",
    "ctx": "Lucas criou uma API que roda perfeitamente no notebook dele, mas falha no servidor da escola porque as versões das bibliotecas são diferentes.",
    "q": "Qual solução resolve diretamente esse “na minha máquina funciona”?",
    "ok": "Empacotar a API e as dependências numa imagem Docker e rodar a mesma imagem nos dois lugares",
    "no": [
      "Criar uma máquina virtual com sistema operacional completo para cada função da API",
      "Registrar o erro nos logs e reiniciar o servidor da escola toda vez que a API falhar",
      "Abrir um branch no Git só para a versão da API que precisa rodar no servidor"
    ],
    "exp": "O contêiner leva a aplicação com bibliotecas e configurações, compartilhando o kernel do host. A mesma imagem roda igual no notebook e na produção."
  },
  {
    "id": "q06",
    "tema": "Aulas 9 a 16",
    "ctx": "De madrugada, um dos contêineres da plataforma de matrículas travou. Ninguém estava de plantão, mas pela manhã o sistema rodava com o número normal de réplicas.",
    "q": "Qual recurso do Kubernetes restabeleceu o número desejado de réplicas?",
    "ok": "Deployment",
    "no": [
      "Service",
      "Pod",
      "Playbook"
    ],
    "exp": "O Deployment mantém sempre o número desejado de réplicas de um Pod. O Pod é a menor unidade; o Service expõe e balanceia a carga; playbook é coisa do Ansible."
  },
  {
    "id": "q07",
    "tema": "Aulas 9 a 16 e 17 a 24",
    "ctx": "Uma empresa precisa de ambientes de desenvolvimento, teste e produção idênticos. Hoje cada técnico configura os servidores do seu jeito, e os ambientes nunca ficam iguais.",
    "q": "Qual abordagem resolve isso de forma versionável e replicável?",
    "ok": "Descrever a infraestrutura em código declarativo com Terraform e versioná-lo no Git",
    "no": [
      "Escrever um manual impresso bem detalhado para os técnicos seguirem passo a passo",
      "Montar um painel no Grafana que mostre as diferenças entre os servidores em tempo real",
      "Contratar mais técnicos para revisar manualmente cada servidor depois de configurado"
    ],
    "exp": "Infraestrutura como Código (IaC): o Terraform descreve o resultado desejado e garante ambientes consistentes; versionado no Git, tudo pode ser rastreado e revertido."
  },
  {
    "id": "q08",
    "tema": "Aulas 17 a 24",
    "ctx": "O professor precisa instalar e configurar os mesmos programas nos 30 computadores do laboratório, sem instalar nenhum software extra (agente) em cada máquina.",
    "q": "Qual ferramenta atende melhor a essa necessidade?",
    "ok": "Ansible, com playbooks em YAML e sem necessidade de agentes",
    "no": [
      "Jenkins, disparando builds sempre que houver um novo commit",
      "Prometheus, coletando métricas de CPU e memória em tempo real",
      "Kubernetes, organizando os computadores em Pods e Services"
    ],
    "exp": "O Ansible automatiza a configuração de várias máquinas de forma idêntica, sem agentes, usando playbooks em YAML."
  },
  {
    "id": "q09",
    "tema": "Aulas 9 a 16",
    "ctx": "Três alunos vão desenvolver ao mesmo tempo o login, o cadastro e o relatório de um mesmo sistema, sem atrapalhar a versão principal, que já funciona.",
    "q": "Qual recurso do Git é o mais adequado?",
    "ok": "Criar um branch para cada funcionalidade e depois fazer o merge",
    "no": [
      "Fazer git pull a cada minuto dentro de uma mesma pasta compartilhada",
      "Trabalhar direto no código principal e usar git log para desfazer erros",
      "Enviar os arquivos por mensagem e juntar tudo à mão no fim do projeto"
    ],
    "exp": "Branches isolam o desenvolvimento paralelo sem afetar o código principal; quando a funcionalidade fica pronta, o merge a reincorpora."
  },
  {
    "id": "q10",
    "tema": "Aulas 9 a 16",
    "ctx": "O painel da equipe mostra que o tempo de resposta do sistema dobrou, mas ninguém sabe em qual dos 12 microsserviços a lentidão começou.",
    "q": "O que a equipe precisa para descobrir onde e por que a falha aconteceu?",
    "ok": "Observabilidade: cruzar logs, métricas e traces das requisições entre os serviços",
    "no": [
      "Um alerta extra de uso de CPU, sem cruzar essa informação com outros dados",
      "Um teste A/B comparando duas versões da interface com grupos de usuários",
      "Uma sprint dedicada a reescrever do zero todos os microsserviços do sistema"
    ],
    "exp": "Monitorar mostra que algo vai mal; a observabilidade combina logs, métricas e traces para explicar por que a falha ocorreu e onde ela está."
  },
  {
    "id": "q11",
    "tema": "Aulas 9 a 16 e 25 a 32",
    "ctx": "Uma falha de segurança só foi descoberta depois que o aplicativo já estava em produção, e a correção custou semanas de trabalho.",
    "q": "Qual mudança de abordagem evitaria esse cenário?",
    "ok": "Integrar testes de segurança automatizados ao pipeline desde o primeiro commit",
    "no": [
      "Deixar a verificação de segurança como etapa final, logo antes do lançamento",
      "Passar toda a responsabilidade pela segurança para a equipe de operações",
      "Reduzir a frequência de deploys para diminuir a exposição a novos ataques"
    ],
    "exp": "DevSecOps: segurança integrada desde o início e testada automaticamente no CI/CD. Corrigir cedo é muito mais barato do que corrigir em produção."
  },
  {
    "id": "q12",
    "tema": "Aulas 17 a 24",
    "ctx": "Uma startup formada por alunos quer publicar o app rapidamente. Eles querem programar e fazer deploy sem configurar sistema operacional, rede ou servidores.",
    "q": "Qual modelo de computação em nuvem é o mais indicado?",
    "ok": "PaaS (Plataforma como Serviço)",
    "no": [
      "IaaS (Infraestrutura como Serviço)",
      "SaaS (Software como Serviço)",
      "Servidor físico próprio no laboratório"
    ],
    "exp": "PaaS oferece um ambiente pronto para desenvolver sem cuidar da infraestrutura. IaaS dá controle total do hardware virtual; SaaS entrega um aplicativo já pronto para uso."
  },
  {
    "id": "q13",
    "tema": "Aulas 17 a 24",
    "ctx": "No aplicativo de uma academia, o módulo de pagamentos saiu do ar, mas os alunos continuaram agendando treinos e consultando suas fichas normalmente.",
    "q": "Qual estratégia de resiliência permitiu esse comportamento?",
    "ok": "Segmentação: o sistema foi dividido em módulos independentes que isolam a falha",
    "no": [
      "Redundância: uma cópia idêntica dos pagamentos assumiu na hora e nada parou",
      "Infraestrutura imutável: o servidor de pagamentos foi trocado por uma nova instância",
      "Deploy contínuo: a correção foi enviada automaticamente para o ambiente de produção"
    ],
    "exp": "A segmentação limita o alcance da falha: um módulo cai e o resto continua. Se houvesse redundância, os próprios pagamentos teriam continuado funcionando."
  },
  {
    "id": "q14",
    "tema": "Aulas 25 a 32",
    "ctx": "A equipe de SRE definiu internamente: “99,5% das páginas devem carregar em menos de 2 segundos”. O tempo de carregamento, medido a cada minuto, aparece num painel.",
    "q": "Nesse contexto, a meta de 99,5% é um:",
    "ok": "SLO (Objetivo de Nível de Serviço)",
    "no": [
      "SLI (Indicador de Nível de Serviço)",
      "SLA (Acordo de Nível de Serviço)",
      "MTTR (Tempo Médio de Recuperação)"
    ],
    "exp": "O SLI é a métrica medida (tempo de carregamento), o SLO é a meta para essa métrica e o SLA é o acordo formal firmado com o cliente."
  },
  {
    "id": "q15",
    "tema": "Aulas 25 a 32",
    "ctx": "Em março, o sistema de notas caiu 4 vezes e a equipe levou em média 3 horas para restabelecê-lo. Em abril, caiu as mesmas 4 vezes, mas cada recuperação levou cerca de 20 minutos.",
    "q": "Qual métrica melhorou de março para abril?",
    "ok": "MTTR (tempo médio para recuperação)",
    "no": [
      "Lead Time (da ideia até a produção)",
      "Deployment Frequency (frequência de implantação)",
      "SLA (acordo de nível de serviço)"
    ],
    "exp": "O número de falhas não mudou; o que caiu foi o tempo para restaurar o serviço, que é exatamente o que o MTTR mede."
  },
  {
    "id": "q16",
    "tema": "Aulas 25 a 32",
    "ctx": "A coordenação pediu um novo campo no boletim em 2 de maio. O recurso só chegou aos usuários em 20 de junho, embora a programação tenha levado apenas dois dias.",
    "q": "Qual métrica evidencia o problema e onde a equipe deve investigar?",
    "ok": "Lead Time alto: procurar gargalos entre a ideia e a produção, como testes e integração",
    "no": [
      "MTTR alto: descobrir por que o sistema demora a se recuperar depois de uma falha",
      "Deployment Frequency alta: diminuir a quantidade de versões lançadas por mês",
      "SLO baixo: renegociar o acordo formal que foi assinado com a coordenação"
    ],
    "exp": "Lead Time mede o tempo da concepção até a produção. Um valor longo com pouco tempo de programação indica gargalo em etapas como testes, integração ou aprovação."
  },
  {
    "id": "q17",
    "tema": "Aulas 25 a 32",
    "ctx": "Depois de 5 horas fora do ar, o sistema de matrículas voltou a funcionar. O diretor quer garantir que o mesmo problema não aconteça de novo.",
    "q": "Qual deve ser o próximo passo da equipe?",
    "ok": "Fazer uma revisão pós-incidente, achar a causa raiz e documentar as lições aprendidas",
    "no": [
      "Identificar quem cometeu o erro e afastar essa pessoa das próximas entregas",
      "Encerrar o caso, já que o sistema voltou e os usuários conseguem acessar",
      "Congelar qualquer atualização do sistema até o fim do ano letivo"
    ],
    "exp": "A revisão pós-incidente analisa o que ocorreu, identifica a causa raiz e documenta lições; o foco é aprender e melhorar, não culpar."
  },
  {
    "id": "q18",
    "tema": "Aulas 25 a 32",
    "ctx": "O time de um app de delivery não sabe se o botão “Finalizar pedido” converte mais vendas em verde ou em laranja.",
    "q": "Qual prática permite decidir com base em dados reais dos usuários?",
    "ok": "Teste A/B: mostrar cada versão a um grupo diferente de usuários e comparar os resultados",
    "no": [
      "Votação interna: a equipe de desenvolvimento escolhe a cor que achar mais bonita",
      "Deploy manual: publicar uma cor de cada vez e esperar as reclamações chegarem",
      "Rollback: voltar para a versão anterior sempre que algum usuário reclamar da cor"
    ],
    "exp": "No teste A/B, versões diferentes são exibidas a segmentos distintos do público ao mesmo tempo, e só a que tem melhor resultado é adotada."
  },
  {
    "id": "q19",
    "tema": "Aulas 17 a 24",
    "ctx": "Uma empresa quer avaliar a desenvolvedora Ana de forma mais completa, ouvindo não só a chefe, mas também colegas, as pessoas que ela lidera e até clientes.",
    "q": "Que modelo de feedback é esse?",
    "ok": "Feedback 360 graus",
    "no": [
      "Avaliação periódica anual",
      "Daily meeting",
      "Revisão pós-incidente"
    ],
    "exp": "O feedback 360 graus reúne avaliações de várias fontes (colegas, supervisores, subordinados e clientes), dando uma visão mais completa do desempenho."
  },
  {
    "id": "q20",
    "tema": "Aulas 25 a 32",
    "ctx": "Numa empresa, uma profissional garante que desenvolvimento, teste e produção tenham exatamente as mesmas configurações, usando ferramentas como Chef, Puppet e Ansible.",
    "q": "Qual perfil profissional corresponde a essa função?",
    "ok": "Gerente de Configuração",
    "no": [
      "Arquiteto de Software",
      "Analista de Segurança DevOps",
      "Scrum Master"
    ],
    "exp": "O Gerente de Configuração cuida da consistência entre ambientes com ferramentas como Chef, Puppet e Ansible."
  }
];
