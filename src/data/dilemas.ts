import { Chapter } from "../types";

export const dilemas: Chapter[] = [
  {
    id: "dilemas",
    title: "Ecoando a Palavra",
    subtitle: "Armas de Luz para as Batalhas Reais",
    sections: [
      {
        id: "d-intro",
        type: "text",
        content: [
          "A Bíblia não é um livro de histórias desconectadas da vida real ou das lutas que você enfrenta no metrô, na faculdade, nas noites de insônia ou na frente do espelho.",
          "Deus fala diretamente aos seus medos, às pressões por sucesso, às suas dúvidas existenciais e àquelas cicatrizes invisíveis que a cultura e as redes sociais só fazem piorar.",
          "Use os versículos a seguir não como frases de efeito, mas como declarações potentes e reais de Deus sobre a sua vida."
        ]
      },
      {
        id: "d-ansiedade",
        title: "Ansiedade e o Medo do Futuro",
        type: "grid",
        gridItems: [
          { title: "Filipenses 4:6-7", description: "O antídoto para a ansiedade: Pare de desgastar sua mente com o medo de falhar. Apresente seus fardos ao Senhor, e uma paz que a lógica não explica blindará seu coração contra o caos diário, te dando descanso real." },
          { title: "Mateus 6:34", description: "Um dia de cada vez. Deus exige apenas que sejamos fiéis com os desafios de hoje. Não adianta sofrer por tempestades do amanhã que talvez nem cheguem a acontecer." }
        ],
        verses: [
          { text: "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.", reference: "Filipenses 4:6" }
        ]
      },
      {
        id: "d-identidade",
        title: "Espelhos e a Pressão pela Perfeição",
        type: "grid",
        gridItems: [
          { title: "Salmos 139:13-14", description: "Contra os filtros e os padrões impossíveis da internet. Você foi criado de forma exclusiva pelo Maior Artista de todos. Seu valor não está nos likes que recebe, mas no fato de ter sido moldado pelas mãos do Criador." },
          { title: "1 Pedro 2:9", description: "Vocês não são marginais do universo ou apenas consumidores para as marcas. Vocês são geração escolhida, com propósito real e valor inestimável." }
        ],
        verses: [
          { text: "Eu te louvo porque me fizeste de modo especial e admirável. Tuas obras são maravilhosas! Digo isso com convicção.", reference: "Salmos 139:14" }
        ]
      },
      {
        id: "d-pureza",
        title: "Telas, Vícios e Fugas",
        type: "grid",
        gridItems: [
          { title: "Salmos 119:9", description: "A internet oferece uma fuga rápida que muitas vezes custa a nossa paz. A maneira de manter a mente e a vida limpas é vivendo de acordo com a Palavra de Deus, que limpa e liberta das vaidades vazias." },
          { title: "1 Coríntios 6:18-19", description: "Fujam, não debatam com o vício e a imoralidade. Nosso corpo é templo do Espírito Santo e tem um valor imenso. Fomos comprados por um alto preço e chamados para algo muito maior do que as ilusões passageiras das telas." }
        ],
        verses: [
          { text: "Como pode o jovem manter pura a sua conduta? Vivendo de acordo com a tua palavra.", reference: "Salmos 119:9" }
        ]
      },
      {
        id: "d-depressao",
        title: "Quartos Escuros e a Solidão",
        type: "grid",
        gridItems: [
          { title: "Salmos 34:18", description: "Deus não foge da dor aguda ou das desilusões mais intensas. Ele se faz presente, abraça quem está com o coração quebrado e socorre quem não tem mais forças para continuar." },
          { title: "Isaías 41:10", description: "O Deus do universo declara o Seu amor por você e o sustenta no meio do caos. Ele protege dos medos cruéis e ergue mesmo nos momentos de abandono mais profundos da vida." }
        ],
        verses: [
          { text: "O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.", reference: "Salmos 34:18" }
        ]
      }
    ]
  }
];
