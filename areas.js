/*
 * ==========================================================
 *  ÁREAS ACIONADAS - RAOF
 *  Este é o ÚNICO arquivo que precisa ser editado para mudar
 *  quem é acionado em cada situação. Ao salvar (commit) no
 *  GitHub, a mudança aparece para todos.
 *
 *  COMO EDITAR
 *   - Para tirar uma área: apague a linha dela (ex.: "Inspetor de Operações",).
 *   - Para incluir uma área: adicione uma linha  "Nome da área",
 *   - Cada linha termina com vírgula e o texto fica entre aspas.
 *   - Para criar uma nova Classe/Zona/Cenário: copie um bloco inteiro e troque o nome.
 *   - A ordem das linhas é a ordem que aparece na tela.
 *   - Se uma mesma área aparecer em Classe + Zona + Cenário, ela só aparece uma vez.
 * ==========================================================
 */
const AREAS_ACIONADAS = {

  // ---------- CLASSE / NATUREZA ----------
  classes: {
    "E/ Descarrilamento simples de vagões (SOS leve)": [
      "Inspetor de Operações",
      "Inspetor de Mat Material Rodante/SOS",
      "Inspetor VP",
      "Supervisor de Operações",
      "Supervisor de Mat Material Rodante/SOS",
      "Supervisor  Via Permanente",
      "CCI",
      "Analista CPIA",
    ],
    "B/ Tombamento": [
      "Gerente de Manutenção de Material Rodante/SOS",
      "Gerente Operações",
      "Gerente de Via Permanente",
      "Supervisor de Manutenção Material Rodante/SOS",
      "CCI",
      "Supervisor do CCO",
      "Supervisor  Via Permanente",
      "Supervisor de Operações",
      "Supervisor Manutenção Locomotiva",
      "Supervisor Eletroeletrônica",
      "Supervisor Atendimento a Emergência e CN (CRIS)",
      "Gerente CCO",
      "Supervisor de Segurança do Trabalho — Campo",
      "Supervisor Máquinas de Via",
      "Analista da CPIA Regional",
      "Representantes de Soluções internas ao Negócio Local- SIN",
      "Analista de Seguros",
      "Supervisor Meio Ambiente",
      "Supervisor CPIA",
      "Analista RC",
      "Analista Fundiário",
       "Gerente de Área do CCO",
      "Gerente Geral do Corredor SE HOUVER TOMBAMENTO DE LOCO LIDER",
    ],
    "D/ Atropelamento ou Abalroamento": [
      "Inspetor de Operações",
      "Supervisor Operações",
      "CCI",
      "Comunicação Imprensa",
      "Analista da CPIA Regional",
      "Analista RC",
    ],
    "C/ Descarrilamento complexo(SOS pesado/Recurso) e de locomotiva, adernamento, colisões ou encontros.": [
      "Supervisor Operações",
      "Supervisor Manutenção Material Rodante/SOS",
      "Supervisor Via Permanente",
      "CCI",
      "Supervisor Máquinas de Via",
      "Supervisor do CCO",
      "Supervisor de Segurança do Trabalho — Campo",
      "Supervisor Eletroeletrônica",
      "Analista da CPIA Regional",
      "Representantes de Soluções internas ao Negócio Local (SIN)",
      "Supervisor Meio Ambiente",
      "Supervisor de Locomotiva",
    ],
    "F/ Descarrilamento de Auto de Linha, EVP e EGP.": [
      "Inspetor de Via Permanente",
      "Supervisor de Máquinas de Via",
      "Supervisor de Via Permanente",
      "Supervisor de Mecânica",
      "Supervisor de Operações",
      "Analista CPIA",
    ],
    "I/ Incêndio em ativo ferroviário VLI": [
      "Supervisor de Operações",
      "Supervisor de Via Permanente",
      "Supervisor CCO",
      "Analista CPIA",
      "Analista RC",
      "CCI",
      "Supervisor CCE",
      "Analista de Seguros",
      "Supervisor Meio Ambiente",
      "Comunicação Imprensa",
      "Supervisor de Segurança do Trabalho - Campo",
      "Gerente de Área CCO",
      "Analista Fundiário",
     ],
    "M/ Tombamento VLI impactando linha do metrô": [
      "CCO Metrô",
      "Gerente de Manutenção de Material Rodante/SOS",
      "Gerente de Operação (D)",
      "Gerente de Via Permanente",
      "Gerente Proteção ao Negócio",
      "Supervisor de Operações",
      "Analista da CPIA Regional",
      "Gerente de Área CCO",
      "Gerente de Segurança do Trabalho",
      "Supervisor do Centro de Controle de Emergências",
      "Supervisor ou Especialista do CCO",
      "Gerente Geral do Corredor",
      "Diretor do Corredor",
      "Supervisor de Manutenção Material Rodante/SOS",
      "Supervisor de Via Permanente",
      "Especialista de Comunicação/Imprensa",
      "Representante de Soluções Internas ao Negócio Local - SIN",
      "Analista de Seguros",
      "Supervisor de Segurança do Trabalho – Campo",
      "Gerente de Relações com Comunidades (RC)",
      "Analista de Relações Institucionais (RI)",
      "Analista de Relações com Comunidades (RC)",
    ],
  },

  // ---------- ZONA QUENTE ----------
  zona: {
    "Descarrilamento Simples de Vagões (SOS leve)": [
      "Supervisor CCE",
      "Supervisor CPIA",
      "Gerente de Área do CCO"
      "Gerente de Área Operação",
      "Gerente de Área Via Permanente",
      "Gerente de Área Mecânica",
    ],
    "Descarrilamento complexo de vagões (SOS pesados/Recursos)": [
      "Supervisor CCE",
      "Supervisor CPIA",
      "Gerente de Área do CCO",
      "GA Operação",
      "GA Via Permanente",
      "GA Mecânica",
      "Gerente Geral do Corredor",
    ],
    "Descarrilamento de locomotiva": [
      "Supervisor CCE",
      "Supervisor CPIA",
      "Gerente de Área do CCO",
      "Gerente de Área Operação",
      "Gerente de Área Via Permanente",
      "Gerente de Área Mecânica",
      "Gerente Geral do Corredor",
    ],
    "Incêndio/Explosão em ativo Ferroviário VLI": [
      "Supervisor CCE",
      "Supervisor CPIA",
      "Gerente de Área do CCO"
      "Gerente de Área Operação",
      "Gerente de Área Via Permanente",
      "Gerente de Área Mecânica",
      "Gerente Geral do Corredor",
    ],
    "Tombamento / Adernamento": [
      "Supervisor CCE",
      "Supervisor CPIA",
      "Gerente de Área do CCO"
      "Gerente de Área Operação",
      "Gerente de Área Via Permanente",
      "Gerente de Área Mecânica",
      "Gerente Geral do Corredor",
    ],
  },

  // ---------- CENÁRIO ASSOCIADO ----------
  cenarios: {
    "Vitima Terceira": [
      "Analista Jurídico",
      "Gerente Saúde",
      "Coordenação CPIA",
    ],
    "Vítima Própria (PAE)": [
      "Gerente Saúde",
      "Líder imediato do empregado (Supervisor)",
      "Segurança do trabalho (Analista)",
    ],
    "Vazamento de produto químico ou perigoso": [
      "Meio Ambiente (Supervisor)",
      "Coordenação (CPIA)",
    ],
    "Envolvimento de mídia": [
      "Relações Institucionais (Supervisor)",
      "Comunicação (Analista)",
      "Coordenação (CPIA)",
    ],
    "Ocorrência em área urbana, local / ocorrência que necessite acionar os órgãos públicos (Federal, estadual ou municipal)  que esteja comprometendo  trânsito": [
      "Relações Institucionais (Supervisor)",
      "Comunicação (Analista)",
      "Coordenação (CPIA)",
    ],
    "Ocorrência de qualquer natureza com vazamento de carga, no inicio da ocorrência ou por estratégia de atendimento.": [
      "Meio Ambiente (Supervisor)",
      "Analista de Seguros",
    ],
  },
};
