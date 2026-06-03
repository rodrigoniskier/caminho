import { Chapter } from "../types";
import { qCap4, qCap5, qCap6 } from "./quizzesCap4_6";

export const cap4_6: Chapter[] = [
  {
    id: "cap4",
    number: "IV",
    title: "A Plenitude dos Tempos",
    subtitle: "O Novo Testamento",
    sections: [
      {
        id: "cap4-joao",
        title: "João Batista",
        type: "flip-cards",
        flipCards: [
          {
            title: "A Missão e a Crise",
            frontLabel: "O Problema",
            frontText: "João pregou o arrependimento frontal para todo o sistema da época. Na prisão, enfrentou a crise, duvidando ao esperar do Salvador a instauração urgente de domínio físico imediato de justiça militar; e não que viesse humildemente com doçura de curas sem abater ali rapidamente as ditaduras vigentes.",
            backLabel: "O Legado",
            backText: "Atuou bravamente como a majestosa transição para as novidades do Novo Testamento, demonstrando: 'Eis o Cordeiro de Deus que expia o pecado do mundo!'. O Salvador viera trazer resgate ao invisível pondo as promessas absolutas pra focar nossa cruz."
          }
        ],
        verses: [
          { text: "Vejam! É o Cordeiro de Deus, que tira o pecado do mundo!", reference: "João 1:29" }
        ]
      },
      {
        id: "cap4-apostolos",
        title: "A Coragem Imperfeita",
        type: "flip-cards",
        flipCards: [
          {
            title: "Pedro",
            frontLabel: "O Problema",
            frontText: "Demonstrava forte liderança ímpeto corajosa mas em suas convicções cedeu as fraquezas amargas na lareira durante a crucificação perante o terror do mundo negou as confissões por pânico do que ele enfrentaria sem Cristo vivo em ação imediata de libertação.",
            backLabel: "O Legado",
            backText: "Ele foi grandemente curado do fracasso doloroso através da amabilidade d'Ele! Protagonizou a difusão forte pentecostal após o envio do Espírito no batismo destemido p conduzir no começo as reuniões nas igrejas padecidas em aflições."
          },
          {
            title: "João, O Amado",
            frontLabel: "O Problema",
            frontText: "Teve a triste amargura ao velhice vivenciar um luto pesado longo das piores execuções de dor e pânico brutal a todos os teus irmãos ao londo das provações nas pregações exiladas e fujas nas perseguições pífias dos romanos implacáveis das catacumbas.",
            backLabel: "O Legado",
            backText: "Consagrou de forma aterrorizantemente robusta o testamento das afirmações cruciais de q Seu líder jamais foi mero mortal nos papéis d'evangelhos sublimes e cartas ricas d'assunção na divindade absoluta!"
          },
          {
            title: "Tomé",
            frontLabel: "O Problema",
            frontText: "Mergulhado abaladamente no desânimo atroz pós morte crivada trágica no sangue. Resistiu crer sem embasamento de fatos visíveis palpáveis do túmulo vencido nas chagas após a semana escura onde o amor esvaiu c/ o desespero de perda sem fé do futuro de glórias reais onde o pavor dita a lei do choro amargo e fim sem perdão.",
            backLabel: "O Legado",
            backText: "Suas falhas serviram nos registros pra providenciar ao escrutínio umas das profissões fortes eternas indissolúveis de adoração plena à eternidade e submissão triunfante na célebre revelação c/ toques à trindade inigualáveis numa exclamação de: 'Senhor e meu grandioso Deus!' ali curado de fato."
          },
          {
            title: "Mateus (Levi)",
            frontLabel: "O Problema",
            frontText: "Repudiado amargamente na classe exilada das taxas dos reinos de fora na coletoria q abatia vidas nos subornos no peso na alavanca duma traição da própria raiz em submissão pra impérios onde ele faturou com o pranto sem coração lá perante famílias vazias famintas rudes das noites ali de dívidas impagáveis.",
            backLabel: "O Legado",
            backText: "Largou o lucrativo império desonesto duma só vez no banco! Registrou no Livro o encadeamento assustador fidedigno perfeito q enlaçam e fecham pontas soltas provando cabalmente c/ precisão minunciosa q os velhos profetas se confirmavam ali no cumprimento q se andava."
          },
          {
            title: "Paulo",
            frontLabel: "O Problema",
            frontText: "Foi responsável duramente na sua trajetória hostil assassina contra os primeiros crentes da via e perseguições sangrentas na cegueira! Somando-se e provando uma das lutas mais fortes nas enfermidades num agudo espinho.",
            backLabel: "O Legado",
            backText: "De implacável carrasco à o melhor embaixador do perdão nas nações estrangeiras na Europa com dores. Articulou magistralmente grande fatia teológica explicando de forma cabal a suficiência da Graça ali, sem ataduras pra merecimentos do homem!"
          }
        ],
        verses: [
          { text: "Respondeu Tomé: Senhor meu e Deus meu!", reference: "João 20:28" }
        ]
      },
      {
        id: "cap4-mulheres",
        title: "Lideranças Fortes e Fiéis",
        type: "flip-cards",
        flipCards: [
          {
            title: "Maria Madalena",
            frontLabel: "O Problema",
            frontText: "Sua história tinha aprisionamentos sombrios malignos terríveis na margem de desolação espiritual profunda de condenação em amarras impiedosas escuras sem voz curadora atada onde Ele chegou providenciando amparo imenso póstumo na cura.",
            backLabel: "O Legado",
            backText: "Foi sustentáculo financeiro. Provou fidelidade heroica destemida até a dor do fim trágico lá da morte mantendo o amor presente em vigílias pra ser presenteada pra anunciar e gritar a gloriosas vitória sem as dores no primeiro encontro do túmulo vivo glorioso ali refeito sã!"
          },
          {
            title: "Lídia e Priscila",
            frontLabel: "O Problema",
            frontText: "Enfrentaram e viviam a extrema exaustão diplomática nos impérios no mercado na sobrevivência no exílio de perseguições das capitais da metrópole antiga pagãs em lutas na tecelagem das tendas e nos púrpuras comerciais páfios lá.",
            backLabel: "O Legado",
            backText: "Transformaram seus domínios e a vida doméstica no núcleo protetor primário da primeira expansão viva sem templos suntuosos onde Priscila também doutrinava ativamente, demonstrando um refinado arsenal no zelo e firmeza pra o alívio sadio à instrução divinal onde ensinavam!"
          }
        ]
      },
      {
        id: "quiz-4",
        title: "Batalha 4: Apóstolos",
        type: "quiz",
        quizItems: qCap4
      }
    ]
  },
  {
    id: "cap5",
    number: "V",
    title: "Meios de Graça",
    subtitle: "A Saúde da Igreja",
    sections: [
      {
        id: "cap5-palavra-sacramentos",
        title: "Túneis de Conexão: Palavra e Sacramentos",
        type: "text",
        content: [
          "Deus abriu canais onde dispensa fartamente na Sua igreja em amor o vigor para alimentar e blindar Sua comunidade contra perigos do mundo hostil em fraquezas e quedas das horas fáceis de ansiedade.",
          "A Bíblia (Palavra): Nunca um repositório histórico defunto numa biblioteca cega d'utopias. Em companhia poderosa com O Espírito Ela é dardo firme penetrante desmascarando pífias condutas na mente nos ensinando amparos pra a salvação em vitórias no Cristo nas fraquezas onde afundamos nulas sozinhas em amparo falso nisto e foca coragem diária ativando arrependimento de lutas e medos cruéis em gozo e descanso da paz num resgate presente amável pra valer nisto purificado de novo no reduto dO Criador de tudo do Seu lar.",
          "Os Dois Únicos Sacramentos: Instituídos puramente pelo Divinal Líder! Não com curandeiros sem luz em ocultismo mas perante assembleias d'afeto. O Batismo: chancela a adoção ao fardo pactual no lavamento solene onde perante glórias divinas saímos limpos pras congregações a cuidar do nosso crescimento ali. A Santa Ceia constitui memorial profundo q alimenta comunhões fidedignamente das feridas de perdões perante o Cristo nas almas unindo O Senhor ali sentando farto com a gente pra assegurar comunhão nos combates dolorosos pífios pra dar paz a nosso coração até o paraíso infalível e livre da terra da guerra nas vidas n'Ele das dores pra os nossos laços do Senhor c/ nossa paz do cálice curador num dia q virá com amém fidedigno na justiça santa e amorosa curadora e santificadora do aprisco q foi lavrado livre d'essas acusações! "
        ]
      },
      {
        id: "cap5-oracao-novo",
        title: "Respiração na Oração",
        type: "grid",
        gridItems: [
          {
            title: "Mateus 6:9-13",
            description: "'Pai nosso, que estás nos céus! Santificado seja o teu nome. Venha o teu Reino; seja feita a tua vontade, assim na terra como no céu. Dá-nos hoje o nosso pão de cada dia. Perdoa as nossas dívidas, assim como perdoamos aos nossos devedores. E não nos deixes cair em tentação, mas livra-nos do mal, porque teu é o Reino, o poder e a glória para sempre. Amém.'"
          }
        ]
      },
      {
        id: "cap5-oracao-expl",
        title: "O Guia Prático",
        type: "grid",
        gridItems: [
          {
            title: "Uma Invocação Ao Pai Rei",
            description: "Afirma q não O servimos em submissão fria tirânica cega a sofrer pancadas nisto sem paz na adoração alienante do pó. Temos total acesso bondoso íntimo num clamor infantil amorável à uma força q comanda estrelas inabaláveis da cosmologia infinita."
          },
          {
            title: "Venha Teu Reino de Verdade",
            description: "Uma guerra pacífica rogando abertamente que as fortalezas destrutíveis cegas caiam logo pros reinos dEle reinarem plenos. Orar pr'O Salvador de novo esgotar de vez choro humano das perversidades no fim maravilhoso, varrendo o medo das pandemias, ódios assassinos onde Jesus focará só luz nas idades livres nas glórias a brilhar ali na plenitude da vida sã em amparo perene! "
          },
          {
            title: "Perdão Extenso em Abundância de Paz",
            description: "Pede e exorta a purificação e cura no seu ciclo falho no mundo onde a gente chora doendo os nossos vizinhos nos corações. Sabendo perfeitamente o alto encargo brutal de cruz no calvário ensanguentado onde Deus puniu n'Ele toda a miséria pífia d'acusações e das maldades p podermos hoje espelhar d'aquele rio p/ o faltoso n'amor do afeto fidedigno pro Senhor em nós!"
          }
        ]
      },
      {
        id: "cap5-governo",
        title: "Ordem e Firmeza de Afetos",
        type: "text",
        content: [
          "Para sustentar isso nos combates sem tiranizar ninguém individual, Cristo estabeleceu concílios fraternos orgânicos sob a luz amável dEle sem dar os focos num endeusamento pífio p/ pastor narcisista.",
          "O Presbitério da Aliança: Composto por líderes docentes (Pastores do ensino nas doutrinas puras curantes sãs no palco com caridades curativas na boca limpa ali sem gritaria) e os líderes (presbíteros onde governam de fato velando o abrigo afetivo disciplinar do prato fraterno aconselhando onde rui a fé em gabinetes amorosos contra as raivas cruéis no pátio e nas lutas cívicas longe n'ação)."
        ]
      },
      {
        id: "quiz-5",
        title: "Batalha 5: Sacramentos e Governo",
        type: "quiz",
        quizItems: qCap5
      }
    ]
  },
  {
    id: "cap6",
    number: "VI",
    title: "A Regra Base da Fé",
    subtitle: "O Credo Apostólico",
    sections: [
      {
        id: "cap6-credo-full",
        type: "text",
        content: [
          "Creio em Deus Pai, Todo-poderoso, Criador do Céu e da terra.",
          "Creio em Jesus Cristo, seu único Filho, nosso Senhor, o qual foi concebido por obra do Espírito Santo; nasceu da virgem Maria; padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado; desceu ao inferno; ao terceiro dia ressurgiu dos mortos; subiu ao Céu, e está sentado à direita de Deus Pai Todo-poderoso, donde há de vir a julgar os vivos e os mortos.",
          "Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém."
        ]
      },
      {
        id: "cap6-credo",
        title: "Por Trás do Documento Central",
        type: "list",
        gridItems: [
          {
            title: "Poder Infinito dO Deus Criador",
            description: "Uma demolição irrestrita da visão que corremos na vida d'um universo niilista sem propósitos cruéis ao nada e pó de tristezas vãs sem amor nulo; ascese à crença que reina de verdade quem formou da primeira folha do campo verde ao astro brilhante nas escuridões distantes ali amparando em laços puríssimos onde vive os fiéis de perto pra salvá-los c/ afeto e perdoando perante os ventos de pavor."
          },
          {
            title: "Encarnação Redentora",
            description: "Mistério imensurável de onde o Deus pleno abraça uma restrição das fraldas sujas no limite impiedoso cruel afeto aos medos das vilas carnais antigas a fim de cumprir, no lugar de miseráveis falhos, todas as leis cívicas justas sagradas q faltava pra sermos imaculadamente absolvições puras justas de redenções celestes pro acerto inabalável dEle na ressurreição de graça ali! Sem perder o controle nos fins pífios das lidas carnais cegas nisto com o amor dEle fiel pra nós nos dar nas glórias pra Deus e luz do universo sem ter fim e de ser nós perdoados curados sem dor perante dEle!"
          },
          {
            title: "O Pavor na Descida aos Infernos (Castigo D'Ira)",
            description: "Evidencia nas chancelas onde pagou os fardos a pior miséria cravada numa trave nua: Ali o pranto foi desamparado atônito d'ira punitiva de Deus justa num banho amargurado nas cruzes solitárias do sol ao luto calado pra sofrer todo juízo dEle por culpa da gente nesse pavor cego e amargurado solitário com justiça em fogo e lágrimas ali nas dores d'um abismo existencial pra arrancar pra nós nos perdoes fáceis aliviados nos rios livres nos confins da festa eterna na justiça livre de Sua mesa pacífica!"
          },
          {
            title: "Volta Vitoriosa Incontestável p/ Ressurgir Carne e Glória!",
            description: "O túmulo aberto garante destrutivo fim às fobias pavorosas mortais frias q assolam com noites tristes! Virá p restaurar, enxugar todas as gotas doídas d'angústias, desmascarar malfeitores cruéis n'um acerto real visual universal das condenações de quem os fez choros no caminho, p/ reconstruir O Cosmo integral, belo num convívio corpóreo sem o medo d'adeus, livre e rico pro gozo inefável ali q tem durabilidade eterna nas glórias sem o ódio em glória dEle e as vitórias das lágrimas sem medo c/ glória curativa!"
          }
        ]
      },
      {
        id: "quiz-6",
        title: "Batalha Final: O Credo",
        type: "quiz",
        quizItems: qCap6
      }
    ]
  },
  {
    id: "conclusion",
    title: "Conclusão",
    subtitle: "A Glória Só Pra Um",
    sections: [
      {
        id: "conclusion-text",
        type: "text",
        content: [
          "Estas bússolas antigas nas sãs doutrinas formam o abrigo seguro onde O Espírito Santo alicerça corações assustados p/ não tombarmos c/ pânicos duma geração desesperada sem limites no luto vago das aparências q as redes dizem ali q vão nos socorrer num dia fatal mas fogem na morte carnal cega nas cinzas sãs do mundo fútil na escuridão onde nós não teríamos força. Nela a gente entende nisto de amparos pífios as bases sãs imutáveis que não nos enganam em modismos ou gurus vazios.",
          "Foi num amor extravagante na dor cega que ele foi moído por cada quebra nossa dadas nas traições da lei santa q exigia fúrias! Portanto q sua vida toda abrace na adoração real livre onde foca em glorificar o Nome O Todo Farto Salvador, fugindo num alívio vivo diário com compaixão pra exalar Jesus à amizades reais! A glória na totalidade de toda a beleza do Cosmos nisto pertence inteira pro Seu amor salvífio invencível de Cristo em festa celestial pro sempre das idades de luz ali q nós vivemos d'eternidades onde ali nunca vai findar, amém!"
        ],
        verses: [
          { text: "Pois dele, por ele e para ele são todas as coisas. A ele seja a glória para sempre! Amém.", reference: "Romanos 11:36" }
        ]
      }
    ]
  }
];
