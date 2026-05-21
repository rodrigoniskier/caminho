import { Chapter } from "../types";

export const cap1_3: Chapter[] = [
  {
    id: "intro",
    title: "A Regra de Fé e Prática",
    subtitle: "Introdução",
    sections: [
      {
        id: "intro-main",
        type: "text",
        content: [
          "A verdadeira piedade cristã não se baseia em intuições subjetivas ou em inovações de cada época, mas repousa firmemente sobre a verdade imutável de Deus revelada em Sua Palavra. As Escrituras Sagradas são o registro inteiramente inspirado, infalível e inerrante da vontade divina, dado à Igreja como a única regra suficiente, de autoridade suprema, para a salvação, a fé e a vida.",
          "Para estruturar o aprendizado daquilo que Deus revelou, a tradição cristã histórica, expressa nos catecismos da Reforma Protestante, desenvolveu um método pedagógico sistemático. Este material se propõe a guiar o leitor através desse rico patrimônio bíblico-teológico.",
          "Evidentemente, a Bíblia é a fonte suprema da qual devemos beber todos os dias para o nosso crescimento espiritual. Portanto, de maneira nenhuma este breve conteúdo substitui a leitura e meditação na Palavra do Senhor."
        ]
      }
    ]
  },
  {
    id: "cap1",
    number: "I",
    title: "O Drama da Redenção",
    subtitle: "Do Começo do Tempo à Vitória Final",
    sections: [
      {
        id: "cap1-intro",
        type: "text",
        content: "A história humana e a revelação bíblica não são uma colcha de retalhos de eventos desconexos. Elas formam uma grande e unificada narrativa organizada por Deus, dividida em quatro grandes atos estabelecidos em Seus decretos eternos."
      },
      {
        id: "cap1-atos",
        type: "grid",
        gridItems: [
          {
            title: "Criação",
            subtitle: "Estado Original",
            description: "No princípio, Deus determinou revelar Sua glória criando o universo do nada. Criou o ser humano à Sua imagem (conhecimento, retidão, santidade). Deus estabeleceu o Pacto das Obras com Adão, prometendo vida eterna sob condição de obediência perfeita."
          },
          {
            title: "Queda",
            subtitle: "Ruína da Humanidade",
            description: "Adão cedeu à tentação, desobedecendo ao mandamento de Deus. A culpa de Adão foi imputada a todos (Depravação Total). A natureza humana foi corrompida, perdendo a capacidade de realizar qualquer bem espiritual."
          },
          {
            title: "Redenção",
            subtitle: "Pacto da Graça",
            description: "Deus, no Pacto da Redenção, elegeu um povo. O Filho executou a redenção por Sua obediência ativa (vida perfeita) e passiva (morte substitutiva na cruz). Essa redenção é aplicada infalivelmente pelo Espírito Santo aos eleitos."
          },
          {
            title: "Glorificação",
            subtitle: "A Vitória Final",
            description: "A obra redentora culminará nos Novos Céus e Nova Terra. Imediatamente após a morte, a alma é purificada e, no Último Dia, os mortos serão ressuscitados com corpos incorruptíveis, livres das consequências do pecado."
          }
        ],
        verses: [
          {
            text: "E aos que predestinou, a esses também chamou; aos que chamou, a esses também justificou; aos que justificou, a esses também glorificou.",
            reference: "Romanos 8:30"
          }
        ]
      }
    ]
  },
  {
    id: "cap2",
    number: "II",
    title: "Os Pilares da Aliança",
    subtitle: "O Antigo Testamento",
    sections: [
      {
        id: "cap2-patriarcas",
        title: "Os Patriarcas",
        type: "flip-cards",
        flipCards: [
          {
            title: "Abraão",
            frontLabel: "Dilema Teológico",
            frontText: "O teste da fé diante do aparente silêncio de Deus. Chamado a deixar sua terra sem saber para onde ia, recebeu a promessa de posteridade numerosa na velhice. O ápice: a ordem de sacrificar Isaque.",
            backLabel: "Contribuição",
            backText: "Tornou-se o 'pai dos que creem'. Modelo de justificação pela fé somente. O carneiro substituto no Monte Moriah revelou o caráter da futura morte de Cristo."
          },
          {
            title: "Isaque",
            frontLabel: "Dilema Teológico",
            frontText: "Viver sob a sombra de uma grande promessa paterna, enfrentando hostilidades dos vizinhos e a dolorosa rivalidade entre seus filhos (Esaú e Jacó).",
            backLabel: "Contribuição",
            backText: "Preservação da semente pactual. Um tipo vivo de Cristo: filho da promessa nascido milagrosamente, submisso ao sacrifício e figuradamente resgatado da morte."
          },
          {
            title: "Jacó",
            frontLabel: "Dilema Teológico",
            frontText: "Conflito entre usar recursos carnais ou aguardar providência divina. Enganador, buscou bênçãos trapaceando o irmão e o pai. Viveu no exílio amedrontado.",
            backLabel: "Contribuição",
            backText: "Objeto clássico da eleição incondicional divina. Lutou com o Anjo em Peniel, sendo renomeado Israel. Tornou-se pai dos doze patriarcas."
          }
        ],
        verses: [
          { text: "Abrão creu no Senhor, e isso lhe foi creditado como justiça.", reference: "Gênesis 15:6" },
          { text: "Amei Jacó, mas rejeitei Esaú.", reference: "Romanos 9:13" }
        ]
      },
      {
        id: "cap2-tribos",
        title: "As Doze Tribos de Israel",
        type: "grid",
        gridItems: [
          { title: "Rúben", description: "Perdeu a primazia por instabilidade e imoralidade." },
          { title: "Simeão", description: "Dispersa por atitude violenta em Siquém." },
          { title: "Levi", description: "Guardiã da Lei, Tabernáculo e sacrifícios. Aponta ao sacerdócio perfeito." },
          { title: "Judá", description: "A tribo real. O cetro não arredaria até Siló (Cristo)." },
          { title: "Dã", description: "Lutou pelo território; tornou-se centro de idolatria." },
          { title: "Naftali", description: "Associada à Galileia, onde o ministério de Cristo brilharia." },
          { title: "Gade", description: "Coragem militar defendendo fronteiras." },
          { title: "Aser", description: "Abençoada com terras férteis, aponta à provisão de Deus." },
          { title: "Issacar", description: "Homens sábios, discernidores dos tempos de Deus." },
          { title: "Zebulom", description: "Facilitadora do comércio portuário com gentios." },
          { title: "José", description: "Dividida em Efraim e Manassés recebendo porção dupla." },
          { title: "Benjamim", description: "A tribo guerreira, fiel à casa real, origem do apóstolo Paulo." }
        ],
        verses: [
          { text: "Jacó reuniu seus filhos e lhes profetizou o futuro...", reference: "Gênesis 49" }
        ]
      },
      {
        id: "cap2-pactuais",
        title: "Moisés, Reis e Profetas",
        type: "flip-cards",
        flipCards: [
          {
            title: "Moisés",
            frontLabel: "Dilema",
            frontText: "Tentou salvar o povo na carne, falhou. Alegou lentidão de fala; resistiu e liderou um povo murmuroso e rebelde.",
            backLabel: "Contribuição",
            backText: "Mediador do Pacto Sinaítico, tirou Israel do Egito, construiu o Tabernáculo. Maior tipo de Cristo como profeta."
          },
          {
            title: "Rei Davi",
            frontLabel: "Dilema",
            frontText: "Homem segundo o coração de Deus, mas cometeu adultério, assassinato, e sofreu rebelião armada do próprio filho.",
            backLabel: "Contribuição",
            backText: "Modelo do Pacto Davídico (trono eterno). Escreveu Salmos, apontando diretamente ao Messias."
          },
          {
            title: "Rei Salomão",
            frontLabel: "Dilema",
            frontText: "O perigo do sincretismo. Sabedoria ímpar, mas seus casamentos diplomáticos levaram-no à idolatria no fim da vida.",
            backLabel: "Contribuição",
            backText: "Edificou o Templo. Consolidou a literatura sapiencial ensinando o temor do Senhor."
          },
          {
            title: "Elias e Eliseu",
            frontLabel: "Dilema",
            frontText: "Ministérios sob ameaça de morte (Jezabel) e apostasia do Reino do Norte. Luta contra a idolatria.",
            backLabel: "Contribuição",
            backText: "Zelaram pelo monoteísmo; prefiguraram o ministério profético e milagroso de Jesus."
          },
          {
            title: "Isaías",
            frontLabel: "Dilema",
            frontText: "Pregar a um povo duro sob ameaça assíria. Testemunha do declínio moral.",
            backLabel: "Contribuição",
            backText: "Evangelista do AT. O nascimento virginal de Emanuel e a expiação substitutiva do Servo (Is 53)."
          },
          {
            title: "Jeremias e Ezequiel",
            frontLabel: "Dilema",
            frontText: "Grito impopular e luto em silêncio profético durante dor extrema e queda pactual.",
            backLabel: "Contribuição",
            backText: "Profecia do retorno, a visão do Novo Templo e promessa da Nova Aliança inscrita no coração."
          },
          {
            title: "Daniel",
            frontLabel: "Dilema",
            frontText: "Viver fiel em cultura imperial pagã e corrupta sem cessar orações a Deus.",
            backLabel: "Contribuição",
            backText: "Declarou a Soberania de Deus moldando impérios e a profecia cirúrgica das Setenta Semanas sobre o Messias."
          }
        ]
      }
    ]
  },
  {
    id: "cap3",
    number: "III",
    title: "A Lei de Deus",
    subtitle: "O Decálogo e seus Usos",
    sections: [
      {
        id: "cap3-intro",
        type: "text",
        content: [
          "A Lei Moral dada por Deus no Monte Sinai é a declaração eterna de Sua própria justiça. A Lei cumpre três propósitos (triplex usus legis):",
          "1. Uso Pedagógico: Restringir o mal na sociedade.",
          "2. Uso Elêntico: Espelho que revela a pecaminosidade e direciona a Cristo para justificação.",
          "3. Uso Normativo: Regra de vida para o cristão regenerado trilhar em gratidão."
        ]
      },
      {
        id: "cap3-decálogo",
        title: "Os Dez Mandamentos",
        type: "list",
        gridItems: [
          {
            title: "1º Não terás outros deuses",
            description: "Exige dependência e adoração exclusivas. Proíbe qualquer forma de idolatria espiritual e orgulho."
          },
          {
            title: "2º Não farás imagem de escultura",
            description: "Exige preservação do preceito adorativo de forma pura (Princípio Regulador). Proíbe adoração não prescrita."
          },
          {
            title: "3º Não tomarás o nome do Senhor em vão",
            description: "Exige uso santo e reverente do Seu nome e obras. Proíbe profanação, juramentos falsos e blasfêmias."
          },
          {
            title: "4º Lembra-te do dia de sábado",
            description: "Exige consagração de um dia dedicado ao culto (Domingo). Proíbe negligência por prazeres carnais."
          },
          {
            title: "5º Honra teu pai e tua mãe",
            description: "Exige obediência às autoridades divinamente estabelecidas. Proíbe rebeldia e abuso de liderança."
          },
          {
            title: "6º Não matarás",
            description: "Exige preservação da vida e proteção. Proíbe homicídio, suicídio e até desejos odiosos no coração."
          },
          {
            title: "7º Não adulterarás",
            description: "Exige castidade matrimonial e pureza de mente, olhar e sentimentos. Proíbe lascívia e imoralidade."
          },
          {
            title: "8º Não furtarás",
            description: "Exige prosperidade adquirida pelo suor justo, doação ao necessitado. Proíbe roubo, sonegação, usura."
          },
          {
            title: "9º Não dirás falso testemunho",
            description: "Exige falar verdade defendendo os inocentes. Proíbe calúnia, fofoca e mentira social mal-intencionada."
          },
          {
            title: "10º Não cobiçarás",
            description: "Exige contentamento profundo com a providência divina para si. Proíbe inveja e olho cobiçoso perante o que pertence ao outro."
          }
        ]
      }
    ]
  }
];
