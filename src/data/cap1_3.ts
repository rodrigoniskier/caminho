import { Chapter } from "../types";
import { qCap1, qCap2, qCap3 } from "./quizzesCap1_3";

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
      },
      {
        id: "quiz-1",
        title: "Batalha 1: Criação e Queda",
        type: "quiz",
        quizItems: qCap1
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
          { text: "Abrão creu no Senhor, e isso lhe foi creditado como justiça.", reference: "Gênesis 15:6" }
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
      },
      {
        id: "quiz-2",
        title: "Batalha 2: Antigo Testamento",
        type: "quiz",
        quizItems: qCap2
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
          "A Lei Moral dada por Deus no Monte Sinai (Êxodo 20) é a declaração eterna de Sua própria justiça e santidade indiscutível. A Lei cumpre três propósitos (triplex usus legis):",
          "1. Uso Pedagógico: Restringir o mal na sociedade civil pelas rédeas morais e civis.",
          "2. Uso Elêntico: O espelho avassalador que revela a pecaminosidade total humana, condenando as obras e conduzindo ao desespero e que clama por Cristo para justificação única.",
          "3. Uso Normativo: Regra libertadora de vida para os filhos regenerados andarem em gratidão jubilosa focada em amor por seu Redentor."
        ]
      },
      {
        id: "cap3-decálogo",
        title: "Os Dez Mandamentos",
        type: "list",
        gridItems: [
          {
            title: "I. Não terás outros deuses diante de mim",
            description: "Exige dependência exclusiva da graça. Proíbe toda idolatria de coração: o status, os amores fáceis, as aprovações, redes e a avareza que sugam sua devoção diária fora da Majestade do Único Senhor Vivo a quem pertencem tuas entranhas."
          },
          {
            title: "II. Não farás para ti nenhum ídolo",
            description: "(Êxodo 20:4) Não farás para ti imagem de escultura, nem semelhança alguma do que há em cima nos céus, nem embaixo na terra, nem nas águas debaixo da terra. Não as adorarás, nem lhes darás culto... Exige o Princípio Regulador divino: Deus só é cultuado como ele mandou, e nunca pelas vias emocionais plásticas cegas de shows ou ícones mudos dos mortais."
          },
          {
            title: "III. Não tomarás em vão o nome do Senhor",
            description: "(Êxodo 20:7) Não tomarás o nome do Senhor, teu Deus, em vão, porque o Senhor não terá por inocente o que tomar o seu nome em vão. Proíbe usos levianos, gritos falsos, juramentos fúteis, brincadeiras irreverentes nas mídias pias onde Seu majestoso Ser Sagrado vira palanque humorístico vão aos tolos sem piedade nas línguas de aspas soltas."
          },
          {
            title: "IV. Lembra-te do dia de sábado",
            description: "(Êxodo 20:8) Lembra-te do dia de sábado, para o santificar. Trabalharás seis dias e neles farás todos os teus trabalhos, mas o sétimo dia é o sábado dedicado ao Senhor, o teu Deus. Repouso espiritual real para nutrir alma na comunhão cultual dos santos despoluindo as vistas fúteis diárias, dando prioridade inegociável à morada dEle adorando com irmãos em louvor vivo limpo livre."
          },
          {
            title: "V. Honra teu pai e tua mãe",
            description: "(Êxodo 20:12) Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor, o teu Deus, te dá. Exige prezar a autoridade nas ruas e nos lares, rejeitando o rebelde egoísta natural jovem onde tudo flui no próprio ego arrogante insolente desabando famílias inteiras."
          },
          {
            title: "VI. Não matarás",
            description: "O Cristo eleva isto para a ira oculta. Não se assassina so com armas bélicas punhais e pólvora mas em difamação mental ódio vivo fogueira virtual assédio raivoso bullying cortante perante irmãos aos berros calados onde se destrói outro impiedosamente sádico nas vingancinhas mesquinhas vãs do coração vil."
          },
          {
            title: "VII. Não adulterarás",
            description: "Proíbe não só a traição e ruína dos laços leais sacros de corpos unidos diante de Deus na aliança, mas foca certeiramente na cultura da libertinagem pélvica da internet, conversas turvas da futilidade nua visual sem pejo destruidora lasciva em corrupção dos instintos no vaso sacro puro exigido do cristão celibatário em lutas leais sinceras de pureza honrosa."
          },
          {
            title: "VIII. Não furtarás",
            description: "Não abarque ao seu as posses ilegais, calotes escondidos avarentos sonegadores. Mas, acima disso: foca generosidade em labor cívico honesto dando a viúva aos doentes caridade ao pobre solitário que grita com frio na rua e que muitos passam cegos insensíveis nas suas riquezas arrogantes estéreis acumulativas sem socorro misericordioso ao lado ali caído."
          },
          {
            title: "IX. Não darás falso testemunho",
            description: "(Êxodo 20:16) Não darás falso testemunho contra o teu próximo. O cuidado sacrossanto inegociável com a fala no meio de redes tóxicas do escárnio difamatório da cultura de cancelamentos perigosos cegos fáceis dos vereditos falsos pisotear reputações com cinismo letal virtual em máscaras caladas das falsidades sujas soltas sem honra às vidas rasgadas mentindo perante o Todo Poderoso Veraz."
          },
          {
            title: "X. Não cobiçarás",
            description: "(Êxodo 20:17) Não cobiçarás a casa do teu próximo. Não cobiçarás a mulher do teu próximo, nem seus servos ou servas, nem seu boi ou jumento, nem coisa alguma que lhe pertença. Amargura tóxica cega invejosa venenosa dos dons e prosperidades vizinhas, não tendo profunda gratidão amorosa contente na suficiência diária infalível pacífica divinal dada em seu prato pão colo graça viva infusa agora já em regozijo na farta bênção simples pacata feliz em glória presente e fidedigna."
          }
        ]
      },
      {
        id: "quiz-3",
        title: "Batalha 3: Mandamentos",
        type: "quiz",
        quizItems: qCap3
      }
    ]
  }
];
