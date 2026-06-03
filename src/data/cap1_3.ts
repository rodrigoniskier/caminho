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
          "A verdadeira caminhada cristã não se baseia no que apenas sentimentos ditam ou nas tendências do momento, mas repousa firmemente sobre a verdade imutável de Deus, que está na Bíblia. As Escrituras Sagradas são o registro totalmente inspirado e sem erros da vontade divina, entregue como o manual definitivo para a nossa vida.",
          "Para organizar o aprendizado, a tradição cristã histórica sistematizou a teologia em trilhas para ensinar as verdades de forma acessível. Este material visa guiar você por esse rico conteúdo bíblico e histórico.",
          "Naturalmente, a Bíblia é a fonte primária e irrenunciável. Nenhum resumo substitui a leitura e meditação constante na Palavra."
        ]
      }
    ]
  },
  {
    id: "cap1",
    number: "I",
    title: "O Drama da Redenção",
    subtitle: "Do Começo à Vitória Final",
    sections: [
      {
        id: "cap1-intro",
        type: "text",
        content: "A história da humanidade não é composta por eventos aleatórios. Tudo faz parte de uma grande redenção orquestrada por Deus, passível de divisão em quatro atos grandiosos, desde o absoluto zero."
      },
      {
        id: "cap1-atos",
        type: "grid",
        gridItems: [
          {
            title: "Criação",
            subtitle: "O Início de Tudo",
            description: "No princípio, Deus revelou Sua glória criando o universo do nada. Formou o homem à Sua imagem. Ele estabeleceu um pacto com Adão, prometendo uma vida em plenitude em troca de fidelidade."
          },
          {
            title: "Queda",
            subtitle: "A Fratura da Humanidade",
            description: "Adão falhou, cedeu ao pecado e quebrou o pacto. A consequência drástica caiu sobre nós, e todo o sistema corrompeu-se. O homem perdeu a inclinação natural ao bem desvinculado da graça de Deus."
          },
          {
            title: "Redenção",
            subtitle: "O Resgate Imediato",
            description: "No decreto eterno, Deus não nos abandonou à miséria. Escolheu salvar o Seu povo. Jesus encarnou, assumiu nossa culpa fatal e cravou na cruz a nossa penalidade. O Espírito Santo agora aplica essa graça perdoadora a todos que creem."
          },
          {
            title: "Glorificação",
            subtitle: "O Fim Restaurado e Imbatível",
            description: "A obra de Cristo será finalizada em uma realidade inteiramente livre do pecado: Novos Céus e Nova Terra. Os escolhidos ressuscitarão ilesos, com corpos transformados, livres para usufruírem de Deus na eternidade palpável sem choro ou perdas."
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
    title: "Heróis Quebrados, Graça Farta",
    subtitle: "O Antigo Testamento",
    sections: [
      {
        id: "cap2-patriarcas",
        title: "Os Primeiros Pais",
        type: "flip-cards",
        flipCards: [
          {
            title: "Abraão",
            frontLabel: "O Desafio",
            frontText: "Foi chamado para abandonar o lar sem mapa claro nas mãos, e suportou longos hiatos nos conselhos divinos. Obteve a promessa de ser pai de multidões num período onde a idade apontava o caso para a impossibilidade; e no auge viu Deus pedir este mesmo único filho no altar.",
            backLabel: "O Legado",
            backText: "Conhecido plenamente como 'Pai da Fé'. Demonstrou fidedignamente que Deus exige confiança onde a visão limita. O carneiro resgatando o filho prefigurava vividamente a Cristo no altar."
          },
          {
            title: "Isaque",
            frontLabel: "O Desafio",
            frontText: "Lidou com lutas nas escavações de poços, com hostilidade diplomática da época com reinos da redondeza e, em casa, possuía o luto amargo das divisões violentas entre Esaú e Jacó na luta pelo destino.",
            backLabel: "O Legado",
            backText: "Mantenedor das promessas divinas. A sua própria não-morte no altar o põe como forte prefiguração ressonante ao destino substitutivo que aguardaria Jesus, resgatador no sacrifício verdadeiro futuro."
          },
          {
            title: "Jacó",
            frontLabel: "O Desafio",
            frontText: "Inicialmente astuto e estelionatário em seus interesses; lutou por aprovação, mentiu em leitos de velhice para possuir aquilo que foi prometido em pura graça, e sofreu traições amargas colhendo aquilo que ele outrora plantou na fuga de anos a fio exilado.",
            backLabel: "O Legado",
            backText: "A maior evidência de ser objeto de imensa redenção divina não meritória! Ao se agarrar ao anjo ferido na perna e reconhecer miséria, torna-se Israel e, de seus desdobramentos, nascem as tribos líderes e reais originais da aliança messiânica."
          }
        ],
        verses: [
          { text: "Abrão creu no Senhor, e isso lhe foi creditado como justiça.", reference: "Gênesis 15:6" }
        ]
      },
      {
        id: "cap2-pactuais",
        title: "Reis e Profetas da Esperança",
        type: "flip-cards",
        flipCards: [
          {
            title: "Moisés",
            frontLabel: "O Desafio",
            frontText: "Carregou pânico para retornar, desculpando-se perante gaguez. Foi encarregado pela mais exaustiva obra pastoral do mundo, conduzindo multidões reclamonas que desprezavam a liberdade para pensar no prato da escravidão anterior, durante muitos anos.",
            backLabel: "O Legado",
            backText: "Líder magnânimo do Êxodo e profeta mediador inestimável das Leis de Deus em tábuas. Moldou alicerces éticos morais fundantes servindo perfeitamente para abrir clareiras do redentivo amor de Jesus e sua libertação muito superior após Ele."
          },
          {
            title: "Rei Davi",
            frontLabel: "O Desafio",
            frontText: "Denominado um 'homem segundo o coração de Deus', contudo, cedeu às piores fraquezas nos episódios mais hediondos que custaram homicídio de amigos fiéis, abalo real da nação sob escândalos perante o adultério de um rei manchado na época de forma avassaladora.",
            backLabel: "O Legado",
            backText: "Contritou-se visceralmente à mercê de Sua imensa Misericórdia nos Salmos e arrependeu-se na dor. Dele desceria o Messias Prometido. Através do trono que Deus lhe forjou de forma condicional, nós lemos quem Deus mandaria pra herdar esse cetro de modo pleno eternamente e infinito na redenção suprema."
          },
          {
            title: "Isaías",
            frontLabel: "O Desafio",
            frontText: "Fez profecias num tempo onde ninguém da própria nação em falência ética quis verdadeiramente ouvir os acertos de contas, apontando mazelas cruas para reis que rejeitaram ver os corações orgulhosos trancados num período caótico de colapso cívico local no Judá aflito sem paz de verdade.",
            backLabel: "O Legado",
            backText: "Nomeado nos ciclos exegéticos de estudos clássicos com forte título do “Quinto Evangelho”. Antecipou de forma assustadoramente fidedigna as minúcias das dores substitutivas, torturas impiedosas cruéis vicárias punitivas onde a cruz recairia nos moldes exatos e sublimes nos sofrimentos passivos ali pelo próprio cordeiro rasgado redentor."
          },
          {
            title: "Daniel",
            frontLabel: "O Desafio",
            frontText: "Sendo exilado radical da pátria, inserido à moda de cultura idolátrica de Babilonia e reinos impositivos absolutistas. Manteve pressões enormes onde o sincretismo pagão oferecia vantagens imensuravelmente prósperas se ele tão somente se calasse para servir ao rei.",
            backLabel: "O Legado",
            backText: "Sem ceder, e exposto às jaulas, expôs ao mundo que O Verdadeiro Deus Soberano joga, arruina os planos das vaidades temporais de reis falsamente inabaláveis demonstrando controle férreo na geopolítica pra dar cumprimento nos fins à esperança firme póstuma eterna que Ele tem orquestrada sob Suas rédeas e sabedoria inconteste na linha cívica até a vinda no fim."
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
    title: "A Bússola Divina",
    subtitle: "Os Dez Mandamentos",
    sections: [
      {
        id: "cap3-intro",
        type: "text",
        content: [
          "O código moral do Monte Sinai descreve perfeitamente o caráter reto e limpo de nosso Deus.",
          "A Lei nos serve de três modos incrivelmente práticos hoje:",
          "1. Uso Cívico (Freio): Serve à ordem social estabelecendo limites morais na convivência e segurando a depravação num nível menos destrutivo visível.",
          "2. Uso Elêntico (Espelho): Mostra-nos implacavelmente onde nossa retidão afunda nula e podre p perante Ele, conduzindo-nos quebrantados imediatamente ao Salvador único possível q nós tanto evitamos por arrogância e precisaremos dEle.",
          "3. Uso Normativo (Regra/Mapa): Aos salvos e justificados que não devem os erros ao juiz, a lei não pesa mais para infernos com medos e sentenças duras; transforma-se numa incrível lâmpada afetiva que diz p a nova e farta mente de quem nos amou como nós melhor responderemos nisto com bondade hoje livre com Ele e o próximo fielmente com laços limpos e sinceros!"
        ]
      },
      {
        id: "cap3-decálogo",
        title: "Os Mandamentos em Foco",
        type: "list",
        gridItems: [
          {
            title: "I. Não terás outros deuses",
            description: "Condena categoricamente a entrega das suas melhores energias de afeto primário ao sucesso profissional, fama ilusória na timeline de vida dos app, ou bens fugazes. Nada tem aval para ocupar a glória ininterrupta exclusiva ao próprio Altíssimo e Supridor Supremo!"
          },
          {
            title: "II. Não farás imagens de escultura",
            description: "Adicional à quebra de esculturas físicas arcaicas antigas; ensina q Deus abomina de forma solene e enfática criar moldes teológicos rasos inventivos para conformar nosso rito com a ideia que a gente faz que seria mais flexível e tolerante aos males dEle. A adoração no culto exige Sua exata ordem sem invenção e misticismos no Seu ser em nossos cultos com a pureza."
          },
          {
            title: "III. Não tomar o Nome em vão",
            description: "Proíbe irrestritamente o deboche grosseiro cômico, blasfêmias fúteis proferidas num escape e os discursos vazios que abusam das virtudes pesadas divinais. Reivindicar O Todo Poderoso como 'fiador' de promessas falsas a parentes num escândalo em praça é avilte cruel de Seu domínio sagrado de vida!"
          },
          {
            title: "IV. Santidade ao Dia do Descanso",
            description: "Rompe abertamente contra o estresse implacável da rotina diária escravizante moderna de não pararmos p nada! Restitui nos cultos e convivências aos domingos aquele realineamento afetivo fundamental à comunidade de redimidos sem esgotamentos na graça plena em pregações e ações caridosas a necessitados com O Deus da Vida presente nos enchendo!"
          },
          {
            title: "V. Honra teus pais",
            description: "Alinha e ensina o fundamento para combater e dizimar precocemente as corrupções cruas ao ego cívico na convivência! Transborda não somente num laço fidedigno biológico puro afetivo amável pros genitores; acarreta proteção profunda nas lideranças do mundo respeitando com ascese sã professores, patrões num trabalho zeloso onde você esteja sob eles perante Deus."
          },
          {
            title: "VI. Não Matarás",
            description: "Cristo aprofunda este tribunal ao dizer ser homicida e quebra ao amor as injúrias com palavrões, os xingamentos rancorosos virtuais em bullying implacável destrutivos nos anonimatos sombrios sem perdão! Desejar o fim social arruinante impiedosamente na raiva a um par quebrou por ali de vez nas sentenças divinas."
          },
          {
            title: "VII. Não Adulterarás",
            description: "Preserva a santidade invencível e preciosa puramente amorífica fiel do casamento. Para solteiros, destrói a lascívia nos olhares de vícios contumazes num padrão de consumo tóxico da pornografia visual vazia da internet que dessensibiliza e afunda todo convívio respeitador d'um casal verdadeiro e santo à frente divinal nas casas."
          },
          {
            title: "VIII. Não Furtarás",
            description: "Cobre sim sonegações ocultas, explorações de fragilidades do prato de pobres com as barganhas espertas estelionatárias sujas! Adiciona que o apego excessivo a um dinheiro ganho sendo curo p o pão onde a necessidade bate forte num sofrimento sem roupas aos seus irmãos ou na fome já descumpre grave de desobediência a generosidade mandamental exigida dEle na caridade pra os doentes do mundo cego!"
          },
          {
            title: "IX. Não Dirás Falso Testemunho",
            description: "Combate ao uso descuidado das línguas afiadas irresponsociáveis em nossos laços. Aniquila de pronto todo e qualquer boato não comprovado em que pisamos duro ferindo vidas ao nosso lado sem chance duma retração sem dor e de forma destrutível mentirosa nas fake news contadas que destroçam impérios ali pra fugas."
          },
          {
            title: "X. Não Cobiçarás",
            description: "O antídoto contra a murmuração crônica onde invejamos o gramado verde da rotina mentirosa dos vizinhos achando secretamente ser o Criador injustamente iníquo doador. Bate no coração insatisfeito provendo profunda abundância no foco imenso no contentamento calmo pela providência das pequenas pazs q recebemos onde seremos reinos dEle logo em glórias firmes com o bastante!"
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
