/**
 * 스페인어 플래시카드 (스페인 본토 · 30대 여성 일상/직장 페르소나)
 * difficulty: "아주쉬움" | "쉬움" | "어려움" | "아주어려움"
 * topics: 일상 | 직장 | 여행 | 음식 | 감정 | 문화 | 시사 | 관용구 | 격식
 *
 * front = meaningKo (한국어)
 * back  = colloquialSpain / formalSpain / colloquialLatAm
 */
window.TOPICS = [
  { id: "일상", label: "일상" },
  { id: "직장", label: "직장" },
  { id: "여행", label: "여행" },
  { id: "음식", label: "음식" },
  { id: "감정", label: "감정" },
  { id: "문화", label: "문화" },
  { id: "시사", label: "시사·뉴스" },
  { id: "관용구", label: "관용구" },
  { id: "격식", label: "격식 상황" }
];

window.FLASHCARDS = [
  /* ===== 일상 ===== */
  {
    id: 1,
    topics: ["일상"],
    difficulty: "아주쉬움",
    meaningKo: "오늘 저녁에 뭐 할 거야? 같이 뭔가 하자.",
    colloquialSpain: "¿Qué vais a hacer esta noche? Quedamos y hacemos algo.",
    formalSpain: "¿Qué van a hacer esta noche? Podríamos quedar y hacer algo.",
    colloquialLatAm: "¿Qué van a hacer esta noche? Nos vemos y hacemos algo."
  },
  {
    id: 2,
    topics: ["일상"],
    difficulty: "쉬움",
    meaningKo: "슈퍼에 들러서 우유랑 빵 사 올게.",
    colloquialSpain: "Paso por el súper y cojo leche y pan.",
    formalSpain: "Pasaré por el supermercado a comprar leche y pan.",
    colloquialLatAm: "Paso por el súper y compro leche y pan.",
    notes: "스페인: coger (집다/사다) · 일부 중남미에서는 tomar/comprar 선호"
  },
  {
    id: 3,
    topics: ["일상"],
    difficulty: "쉬움",
    meaningKo: "주말에 빨래랑 청소 좀 해야 해. 집이 난장판이야.",
    colloquialSpain: "Este finde tengo que poner la lavadora y limpiar; la casa es un desastre.",
    formalSpain: "Este fin de semana debo lavar la ropa y limpiar; la casa está bastante desordenada.",
    colloquialLatAm: "Este fin de semana tengo que lavar y limpiar; la casa está hecha un desastre."
  },
  {
    id: 4,
    topics: ["일상"],
    difficulty: "어려움",
    meaningKo: "의사 예약하려고 했는데 사전예약(cita previa)이 꽉 찼어.",
    colloquialSpain: "Quería pedir cita con el médico, pero no hay hueco en la cita previa.",
    formalSpain: "Pretendía solicitar cita médica, pero no quedan huecos en la cita previa.",
    colloquialLatAm: "Quería pedir cita con el médico, pero no hay turnos disponibles.",
    notes: "cita previa = 스페인 공공서비스·병원 사전예약"
  },
  {
    id: 5,
    topics: ["일상"],
    difficulty: "어려움",
    meaningKo: "이웃이 또 밤에 음악을 크게 틀어서 잠을 제대로 못 잤어.",
    colloquialSpain: "Los vecinos han vuelto a poner la música a todo volumen y no he pegado ojo.",
    formalSpain: "Los vecinos han vuelto a poner la música a un volumen excesivo y apenas he dormido.",
    colloquialLatAm: "Los vecinos volvieron a poner la música a todo volumen y no pegué ojo."
  },
  {
    id: 6,
    topics: ["일상"],
    difficulty: "어려움",
    meaningKo: "은행 가서 이체 한도 올려 달라고 해야겠어.",
    colloquialSpain: "Tengo que pasar por el banco a que me suban el límite de transferencias.",
    formalSpain: "Debo acudir al banco para solicitar un aumento del límite de transferencias.",
    colloquialLatAm: "Tengo que ir al banco a que me suban el límite de transferencias."
  },
  {
    id: 7,
    topics: ["일상"],
    difficulty: "아주어려움",
    meaningKo: "쓰레기 분리수거하는 거 잊으면 안 돼. 내일 아침이 수거일이야.",
    colloquialSpain: "No te olvides de separar la basura; mañana por la mañana es el día de recogida.",
    formalSpain: "Recuerda separar los residuos; mañana por la mañana es el día de recogida.",
    colloquialLatAm: "No se te olvide separar la basura; mañana en la mañana es el día de recolección."
  },
  {
    id: 8,
    topics: ["일상", "직장"],
    difficulty: "아주어려움",
    meaningKo: "사회보장(Seguridad Social) 서류 때문에 오전 반차 쓸까 해.",
    colloquialSpain: "Creo que voy a pedirme la mañana libre por un tema de la Seguridad Social.",
    formalSpain: "Estoy valorando solicitar la mañana libre por gestiones relacionadas con la Seguridad Social.",
    colloquialLatAm: "Creo que voy a pedirme la mañana libre por un trámite del seguro social.",
    notes: "Seguridad Social = 스페인 사회보장"
  },

  /* ===== 직장 ===== */
  {
    id: 9,
    topics: ["직장"],
    difficulty: "아주쉬움",
    meaningKo: "오후에 회의가 있어서 점심을 빨리 먹어야 해.",
    colloquialSpain: "Tengo una reunión por la tarde, así que tengo que comer rápido.",
    formalSpain: "Tengo una reunión por la tarde, por lo que debo almorzar con rapidez.",
    colloquialLatAm: "Tengo una junta en la tarde, así que tengo que comer rápido."
  },
  {
    id: 10,
    topics: ["직장"],
    difficulty: "쉬움",
    meaningKo: "그 보고서 내일까지 보낼 수 있을까?",
    colloquialSpain: "¿Podéis enviarme el informe para mañana?",
    formalSpain: "¿Podrían enviarme el informe para mañana?",
    colloquialLatAm: "¿Pueden enviarme el informe para mañana?"
  },
  {
    id: 11,
    topics: ["직장"],
    difficulty: "쉬움",
    meaningKo: "오늘 사무실에서 늦게까지 일할 것 같아. 야근이야.",
    colloquialSpain: "Hoy me voy a quedar currando hasta tarde en la oficina.",
    formalSpain: "Hoy me quedaré trabajando hasta tarde en la oficina.",
    colloquialLatAm: "Hoy me voy a quedar trabajando hasta tarde en la oficina.",
    notes: "currar = 스페인 구어 ‘일하다’"
  },
  {
    id: 12,
    topics: ["직장"],
    difficulty: "어려움",
    meaningKo: "마감이 다가와서 오늘 밤까지 초안을 마무리해야 해.",
    colloquialSpain: "Se nos echa encima el plazo y tengo que terminar el borrador esta noche.",
    formalSpain: "El plazo se acerca y debo finalizar el borrador esta noche.",
    colloquialLatAm: "Se nos viene encima la fecha límite y tengo que terminar el borrador esta noche."
  },
  {
    id: 13,
    topics: ["직장"],
    difficulty: "어려움",
    meaningKo: "상사한테 이번 주 재택근무 가능한지 물어봤어.",
    colloquialSpain: "Le he preguntado a la jefa si puedo teletrabajar esta semana.",
    formalSpain: "He consultado a mi superiora si es posible teletrabajar esta semana.",
    colloquialLatAm: "Le pregunté a la jefa si puedo trabajar desde casa esta semana."
  },
  {
    id: 14,
    topics: ["직장"],
    difficulty: "어려움",
    meaningKo: "동료들이랑 커피 한잔하면서 프로젝트 이야기 좀 하자.",
    colloquialSpain: "¿Nos tomamos un café y hablamos del proyecto, chicas?",
    formalSpain: "¿Podríamos tomar un café y comentar el proyecto?",
    colloquialLatAm: "¿Nos tomamos un café y hablamos del proyecto?"
  },
  {
    id: 15,
    topics: ["직장"],
    difficulty: "아주어려움",
    meaningKo: "예산 배분을 다시 검토하지 않으면 분기 목표를 맞추기 어려울 거야.",
    colloquialSpain: "Si no revisamos el reparto del presupuesto, va a ser difícil cumplir los objetivos del trimestre.",
    formalSpain: "Si no se revisa la asignación presupuestaria, será difícil alcanzar los objetivos trimestrales.",
    colloquialLatAm: "Si no revisamos la distribución del presupuesto, va a ser difícil cumplir las metas del trimestre."
  },
  {
    id: 16,
    topics: ["직장", "격식"],
    difficulty: "아주어려움",
    meaningKo: "해당 건에 대해 추가 자료를 보내 주시면 검토 후 회신드리겠습니다.",
    colloquialSpain: "Si me pasáis más info sobre el tema, lo miro y os contesto.",
    formalSpain: "Si me remiten documentación adicional al respecto, la revisaré y les responderé a la mayor brevedad.",
    colloquialLatAm: "Si me mandan más información sobre el tema, lo reviso y les contesto."
  },
  {
    id: 17,
    topics: ["직장"],
    difficulty: "쉬움",
    meaningKo: "오케이, 그렇게 하자. 메일로 요약 보내 줄게.",
    colloquialSpain: "Vale, entonces lo dejamos así. Te mando un resumen por correo.",
    formalSpain: "De acuerdo; procedamos de ese modo. Le enviaré un resumen por correo.",
    colloquialLatAm: "Ok, entonces lo dejamos así. Te mando un resumen por correo.",
    notes: "vale = 스페인에서 매우 흔한 긍정/동의"
  },
  {
    id: 18,
    topics: ["직장"],
    difficulty: "아주어려움",
    meaningKo: "연차 이틀 쓰고 싶은데, 팀 일정에 괜찮은지 먼저 확인할게.",
    colloquialSpain: "Quiero pedirme dos días de vacaciones; antes miro si encaja con la agenda del equipo.",
    formalSpain: "Deseo solicitar dos días de vacaciones; previamente comprobaré si es compatible con la agenda del equipo.",
    colloquialLatAm: "Quiero pedir dos días de vacaciones; antes veo si encaja con la agenda del equipo."
  },

  /* ===== 여행 ===== */
  {
    id: 19,
    topics: ["여행"],
    difficulty: "아주쉬움",
    meaningKo: "기차가 몇 시에 출발하는지 알아?",
    colloquialSpain: "¿Sabes a qué hora sale el tren?",
    formalSpain: "¿Sabe a qué hora sale el tren?",
    colloquialLatAm: "¿Sabes a qué hora sale el tren?"
  },
  {
    id: 20,
    topics: ["여행"],
    difficulty: "쉬움",
    meaningKo: "주말에 발렌시아 내려갈까 해. AVE 표 알아볼게.",
    colloquialSpain: "Estoy pensando en bajar a Valencia el finde; miro billetes de AVE.",
    formalSpain: "Estoy valorando ir a Valencia este fin de semana; consultaré billetes de AVE.",
    colloquialLatAm: "Estoy pensando en ir a Valencia el fin de semana; miro boletos del tren rápido.",
    notes: "AVE = 스페인 고속철"
  },
  {
    id: 21,
    topics: ["여행"],
    difficulty: "쉬움",
    meaningKo: "체크인할 때 여권 보여 달라고 할 거야.",
    colloquialSpain: "En el check-in te van a pedir el pasaporte.",
    formalSpain: "En el mostrador de facturación le solicitarán el pasaporte.",
    colloquialLatAm: "En el check-in te van a pedir el pasaporte."
  },
  {
    id: 22,
    topics: ["여행"],
    difficulty: "어려움",
    meaningKo: "연결편을 놓칠까 봐 걱정돼. 환승 시간이 너무 짧아.",
    colloquialSpain: "Me preocupa perder la conexión; el trasbordo es demasiado corto.",
    formalSpain: "Me preocupa perder el vuelo de conexión; el tiempo de trasbordo es insuficiente.",
    colloquialLatAm: "Me preocupa perder la conexión; el tiempo de escala es demasiado corto."
  },
  {
    id: 23,
    topics: ["여행"],
    difficulty: "어려움",
    meaningKo: "시내에 가는 버스가 어디서 타는지 알려 주시겠어요?",
    colloquialSpain: "¿Me podéis decir dónde se coge el autobús al centro?",
    formalSpain: "¿Podrían indicarme dónde se toma el autobús hacia el centro?",
    colloquialLatAm: "¿Me pueden decir dónde se toma el bus al centro?",
    notes: "스페인: coger el autobús"
  },
  {
    id: 24,
    topics: ["여행"],
    difficulty: "아주어려움",
    meaningKo: "숙소에 늦게 도착할 예정이라 열쇠를 어떻게 받으면 되는지 확인해 줘.",
    colloquialSpain: "Como vamos a llegar tarde al piso, confirma cómo recogemos las llaves.",
    formalSpain: "Dado que llegaremos tarde al alojamiento, confirme cómo proceder para recoger las llaves.",
    colloquialLatAm: "Como vamos a llegar tarde al alojamiento, confirma cómo recogemos las llaves."
  },
  {
    id: 25,
    topics: ["여행"],
    difficulty: "아주어려움",
    meaningKo: "수하물이 안 와서 분실 신고를 해야 할 것 같아.",
    colloquialSpain: "No ha llegado el equipaje; creo que tenemos que hacer una reclamación.",
    formalSpain: "El equipaje no ha llegado; parece que debemos presentar una reclamación.",
    colloquialLatAm: "No ha llegado el equipaje; creo que tenemos que hacer un reclamo."
  },

  /* ===== 음식 ===== */
  {
    id: 26,
    topics: ["음식"],
    difficulty: "아주쉬움",
    meaningKo: "이거 매워? 나는 매운 거 잘 못 먹거든.",
    colloquialSpain: "¿Esto pica? Es que yo no aguanto bien lo picante.",
    formalSpain: "¿Esto es picante? No tolero bien las comidas muy especiadas.",
    colloquialLatAm: "¿Esto pica? Es que yo no aguanto bien lo picante."
  },
  {
    id: 27,
    topics: ["음식"],
    difficulty: "쉬움",
    meaningKo: "계산서 좀 주시겠어요? 같이 나눠 낼게요.",
    colloquialSpain: "¿Nos trae la cuenta, por favor? Vamos a pagar a medias.",
    formalSpain: "¿Podría traernos la cuenta, por favor? Preferimos dividir el pago.",
    colloquialLatAm: "¿Nos trae la cuenta, por favor? Vamos a pagar a medias."
  },
  {
    id: 28,
    topics: ["음식"],
    difficulty: "쉬움",
    meaningKo: "테이크아웃으로 포장해 주실 수 있나요?",
    colloquialSpain: "¿Me lo puede poner para llevar?",
    formalSpain: "¿Podría preparármelo para llevar, por favor?",
    colloquialLatAm: "¿Me lo puede poner para llevar?"
  },
  {
    id: 29,
    topics: ["음식"],
    difficulty: "쉬움",
    meaningKo: "점심은 메뉴델디아로 할까? 가격이 괜찮더라.",
    colloquialSpain: "¿Comemos menú del día? Suele salir bien de precio.",
    formalSpain: "¿Pedimos el menú del día? Suele resultar económico.",
    colloquialLatAm: "¿Pedimos el menú del día? Suele salir bien de precio.",
    notes: "menú del día = 스페인 점심 고정 메뉴"
  },
  {
    id: 30,
    topics: ["음식"],
    difficulty: "어려움",
    meaningKo: "알레르기가 있어서 견과류가 들어간 요리는 피해야 해.",
    colloquialSpain: "Tengo alergia, así que tengo que evitar los platos con frutos secos.",
    formalSpain: "Padezco una alergia; por tanto, debo evitar los platos que contengan frutos secos.",
    colloquialLatAm: "Tengo alergia, así que tengo que evitar los platillos con frutos secos."
  },
  {
    id: 31,
    topics: ["음식"],
    difficulty: "어려움",
    meaningKo: "이 와인이 안주랑 잘 어울릴 것 같아. 한 병 시킬까?",
    colloquialSpain: "Creo que este vino pega bien con la comida. ¿Pedimos una botella?",
    formalSpain: "Creo que este vino marida bien con la comida. ¿Pedimos una botella?",
    colloquialLatAm: "Creo que este vino combina bien con la comida. ¿Pedimos una botella?"
  },
  {
    id: 32,
    topics: ["음식", "일상"],
    difficulty: "어려움",
    meaningKo: "저녁에 타파스 몇 개 시키면서 맥주 한잔 할까?",
    colloquialSpain: "¿Pedimos unas tapas y una caña esta noche?",
    formalSpain: "¿Pedimos unas tapas y una cerveza esta noche?",
    colloquialLatAm: "¿Pedimos unas tapas y una cerveza esta noche?",
    notes: "caña = 스페인에서 작은 생맥주"
  },
  {
    id: 33,
    topics: ["음식"],
    difficulty: "아주어려움",
    meaningKo: "예약은 했는데 창가 자리로 바꿔 주실 수 있는지 여쭤보고 싶어.",
    colloquialSpain: "Tenemos reserva, pero quería preguntar si nos podéis cambiar a una mesa junto a la ventana.",
    formalSpain: "Tenemos reserva y deseaba consultar si sería posible cambiarnos a una mesa junto a la ventana.",
    colloquialLatAm: "Tenemos reservación, pero quería preguntar si nos pueden cambiar a una mesa junto a la ventana."
  },

  /* ===== 감정 ===== */
  {
    id: 34,
    topics: ["감정"],
    difficulty: "아주쉬움",
    meaningKo: "요즘 일이 많아서 좀 지쳐 있어.",
    colloquialSpain: "Llevo unos días agobiada con el trabajo.",
    formalSpain: "Últimamente me siento agotada debido a la carga de trabajo.",
    colloquialLatAm: "Ando un poco agotada con el trabajo estos días."
  },
  {
    id: 35,
    topics: ["감정"],
    difficulty: "쉬움",
    meaningKo: "네가 그렇게 말해 주니까 마음이 한결 놓여.",
    colloquialSpain: "Me quedo más tranquila oyendo eso.",
    formalSpain: "Me siento más aliviada al oírlo.",
    colloquialLatAm: "Me quedo más tranquila oyendo eso."
  },
  {
    id: 36,
    topics: ["감정"],
    difficulty: "쉬움",
    meaningKo: "오늘 컨디션이 별로야. 좀 쉬어야겠어.",
    colloquialSpain: "Hoy no estoy muy fina; necesito descansar un poco.",
    formalSpain: "Hoy no me encuentro del todo bien; necesito descansar.",
    colloquialLatAm: "Hoy no estoy muy bien; necesito descansar un poco."
  },
  {
    id: 37,
    topics: ["감정"],
    difficulty: "어려움",
    meaningKo: "기대가 커서 결과가 실망스러웠어.",
    colloquialSpain: "Tenía muchas expectativas y el resultado me ha defraudado.",
    formalSpain: "Albergaba grandes expectativas y el resultado me ha decepcionado.",
    colloquialLatAm: "Tenía muchas expectativas y el resultado me decepcionó."
  },
  {
    id: 38,
    topics: ["감정"],
    difficulty: "어려움",
    meaningKo: "그 얘기만 나오면 괜히 예민해져.",
    colloquialSpain: "En cuanto sale ese tema, me pongo a la defensiva sin querer.",
    formalSpain: "Cuando surge ese tema, tiendo a ponerme a la defensiva involuntariamente.",
    colloquialLatAm: "En cuanto sale ese tema, me pongo a la defensiva sin querer."
  },
  {
    id: 39,
    topics: ["감정", "일상"],
    difficulty: "어려움",
    meaningKo: "남자친구랑 주말에 뭐 할지 아직 안 정했어.",
    colloquialSpain: "Con mi novio aún no hemos quedado en qué hacer el finde.",
    formalSpain: "Con mi pareja aún no hemos decidido qué hacer este fin de semana.",
    colloquialLatAm: "Con mi novio aún no hemos quedado en qué hacer el fin de semana."
  },
  {
    id: 40,
    topics: ["감정"],
    difficulty: "아주어려움",
    meaningKo: "고마운 마음은 있는데 말로 잘 표현이 안 돼.",
    colloquialSpain: "Estoy agradecida, pero se me da mal expresarlo con palabras.",
    formalSpain: "Siento agradecimiento, aunque me resulta difícil expresarlo con palabras.",
    colloquialLatAm: "Estoy agradecida, pero se me dificulta expresarlo con palabras."
  },
  {
    id: 41,
    topics: ["감정"],
    difficulty: "아주어려움",
    meaningKo: "혼자 있고 싶을 때도 있는데, 그때는 밀어내지 말아 줬으면 해.",
    colloquialSpain: "A veces necesito estar sola, pero no me gustaría que me dierais la espalda.",
    formalSpain: "En ocasiones necesito estar sola, pero no desearía que se me diera la espalda.",
    colloquialLatAm: "A veces necesito estar sola, pero no me gustaría que me dieran la espalda."
  },

  /* ===== 문화 ===== */
  {
    id: 42,
    topics: ["문화"],
    difficulty: "아주쉬움",
    meaningKo: "스페인에서는 보통 저녁을 꽤 늦게 먹어.",
    colloquialSpain: "En España solemos cenar bastante tarde.",
    formalSpain: "En España es habitual cenar a una hora relativamente tardía.",
    colloquialLatAm: "En España suelen cenar bastante tarde."
  },
  {
    id: 43,
    topics: ["문화"],
    difficulty: "쉬움",
    meaningKo: "시에스타 문화가 예전만큼은 아니지만 여전히 남아 있어.",
    colloquialSpain: "La siesta ya no es tan común como antes, pero aún se nota.",
    formalSpain: "La siesta ya no es tan habitual como antaño, aunque aún persiste en cierta medida.",
    colloquialLatAm: "La siesta ya no es tan común como antes, pero todavía se nota."
  },
  {
    id: 44,
    topics: ["문화", "일상"],
    difficulty: "쉬움",
    meaningKo: "금요일 밤에 테라스에서 한잔하는 게 여기선 흔한 일이야.",
    colloquialSpain: "Los viernes por la noche tomarse algo en una terraza es muy típico aquí.",
    formalSpain: "Los viernes por la noche es habitual tomar algo en una terraza.",
    colloquialLatAm: "Los viernes por la noche tomarse algo en una terraza es muy típico aquí."
  },
  {
    id: 45,
    topics: ["문화"],
    difficulty: "어려움",
    meaningKo: "플라멩코는 단순한 춤이 아니라 감정과 리듬이 깊게 얽혀 있어.",
    colloquialSpain: "El flamenco no es solo un baile; mezcla emoción y ritmo de una forma muy profunda.",
    formalSpain: "El flamenco no es meramente una danza; combina emoción y ritmo de manera profunda.",
    colloquialLatAm: "El flamenco no es solo un baile; mezcla emoción y ritmo de una forma muy profunda."
  },
  {
    id: 46,
    topics: ["문화"],
    difficulty: "어려움",
    meaningKo: "지역마다 방언과 표현이 달라서 스페인도 하나로만 보기 어려워.",
    colloquialSpain: "Cada región tiene sus expresiones; España no se puede reducir a una sola forma de hablar.",
    formalSpain: "Cada región posee sus propias expresiones; España no admite una visión lingüística uniforme.",
    colloquialLatAm: "Cada región tiene sus expresiones; España no se puede reducir a una sola forma de hablar."
  },
  {
    id: 47,
    topics: ["문화"],
    difficulty: "아주어려움",
    meaningKo: "축구는 단순한 스포츠를 넘어 정체성과 지역 라이벌리를 드러내기도 해.",
    colloquialSpain: "El fútbol aquí va más allá del deporte: también refleja identidad y rivalidades locales.",
    formalSpain: "El fútbol trasciende lo deportivo: también refleja identidad y rivalidades territoriales.",
    colloquialLatAm: "El fútbol aquí va más allá del deporte: también refleja identidad y rivalidades locales."
  },
  {
    id: 48,
    topics: ["문화"],
    difficulty: "아주어려움",
    meaningKo: "성주간 행사처럼 종교적 전통이 지역 축제와 섞여 있는 경우가 많아.",
    colloquialSpain: "Tradiciones como la Semana Santa mezclan lo religioso con fiestas locales.",
    formalSpain: "Tradiciones como la Semana Santa entrelazan lo religioso con celebraciones locales.",
    colloquialLatAm: "Tradiciones como la Semana Santa mezclan lo religioso con fiestas locales."
  },

  /* ===== 시사 ===== */
  {
    id: 49,
    topics: ["시사"],
    difficulty: "쉬움",
    meaningKo: "오늘 뉴스에서 물가 이야기를 많이 하더라.",
    colloquialSpain: "En las noticias de hoy no paran de hablar de la inflación.",
    formalSpain: "En las noticias de hoy se ha insistido mucho en la inflación.",
    colloquialLatAm: "En las noticias de hoy no paran de hablar de la inflación."
  },
  {
    id: 50,
    topics: ["시사"],
    difficulty: "쉬움",
    meaningKo: "집값·월세가 너무 올라서 다들 걱정이 많아.",
    colloquialSpain: "El precio de la vivienda y los alquileres están por las nubes; la gente está muy preocupada.",
    formalSpain: "El precio de la vivienda y los alquileres se han disparado; hay mucha preocupación.",
    colloquialLatAm: "El precio de la vivienda y las rentas están por las nubes; la gente está muy preocupada."
  },
  {
    id: 51,
    topics: ["시사"],
    difficulty: "어려움",
    meaningKo: "기후 변화 때문에 여름마다 폭염이 더 잦아지는 것 같아.",
    colloquialSpain: "Con el cambio climático, las olas de calor parecen cada vez más frecuentes en verano.",
    formalSpain: "Debido al cambio climático, las olas de calor parecen cada vez más frecuentes en verano.",
    colloquialLatAm: "Con el cambio climático, las olas de calor parecen cada vez más frecuentes en verano."
  },
  {
    id: 52,
    topics: ["시사"],
    difficulty: "어려움",
    meaningKo: "원격 근무가 늘어나면서 도시 외곽으로 이사하는 사람도 많아졌어.",
    colloquialSpain: "Con el auge del teletrabajo, mucha gente se ha mudado a las afueras.",
    formalSpain: "Con el auge del teletrabajo, numerosas personas se han trasladado a las periferias urbanas.",
    colloquialLatAm: "Con el auge del home office, mucha gente se ha mudado a las afueras."
  },
  {
    id: 53,
    topics: ["시사"],
    difficulty: "아주어려움",
    meaningKo: "여론이 갈라져서 합의점을 찾기가 쉽지 않아 보여.",
    colloquialSpain: "La opinión pública está muy dividida y no parece fácil encontrar un punto de encuentro.",
    formalSpain: "La opinión pública se halla muy polarizada y no resulta sencillo hallar un punto de consenso.",
    colloquialLatAm: "La opinión pública está muy dividida y no parece fácil encontrar un punto de acuerdo."
  },
  {
    id: 54,
    topics: ["시사"],
    difficulty: "아주어려움",
    meaningKo: "청년 실업이 여전히 높은 편이라 정책 논의가 계속되고 있어.",
    colloquialSpain: "El paro juvenil sigue siendo alto, así que el debate político no para.",
    formalSpain: "El desempleo juvenil continúa en niveles elevados, por lo que el debate político persiste.",
    colloquialLatAm: "El desempleo juvenil sigue siendo alto, así que el debate político no para.",
    notes: "paro = 스페인에서 실업을 흔히 이르는 말"
  },
  {
    id: 55,
    topics: ["시사", "직장"],
    difficulty: "아주어려움",
    meaningKo: "디지털 전환이 가속화되면서 개인정보 보호 이슈도 커지고 있어.",
    colloquialSpain: "Con la aceleración de la digitalización, también crecen las preocupaciones por la privacidad.",
    formalSpain: "Ante la aceleración de la transformación digital, aumentan asimismo las inquietudes sobre la protección de datos.",
    colloquialLatAm: "Con la aceleración de la digitalización, también crecen las preocupaciones por la privacidad."
  },

  /* ===== 관용구 ===== */
  {
    id: 56,
    topics: ["관용구"],
    difficulty: "아주쉬움",
    meaningKo: "괜찮아, 걱정 마. / 문제없다.",
    colloquialSpain: "No pasa nada. / Tranquila, no hay problema.",
    formalSpain: "No se preocupe; no hay ningún problema.",
    colloquialLatAm: "No pasa nada. / Tranquila, no hay bronca."
  },
  {
    id: 57,
    topics: ["관용구"],
    difficulty: "쉬움",
    meaningKo: "그럴 만도 하지. / 이해가 가.",
    colloquialSpain: "Tiene sentido. / Me cuadra.",
    formalSpain: "Es comprensible. / Tiene sentido.",
    colloquialLatAm: "Tiene sentido. / Me late / me cuadra."
  },
  {
    id: 58,
    topics: ["관용구"],
    difficulty: "쉬움",
    meaningKo: "됐어, 그걸로 충분해. / 오케이.",
    colloquialSpain: "Vale, con eso basta. / Perfecto.",
    formalSpain: "De acuerdo, con eso es suficiente.",
    colloquialLatAm: "Ok, con eso basta. / Perfecto."
  },
  {
    id: 59,
    topics: ["관용구"],
    difficulty: "어려움",
    meaningKo: "말도 안 돼. / 터무니없어.",
    colloquialSpain: "¡Qué barbaridad! / No tiene ni pies ni cabeza.",
    formalSpain: "Resulta inaceptable. / Carece de sentido.",
    colloquialLatAm: "¡Qué barbaridad! / No tiene ni pies ni cabeza."
  },
  {
    id: 60,
    topics: ["관용구"],
    difficulty: "어려움",
    meaningKo: "눈치채다 / 감을 잡다.",
    colloquialSpain: "Caer en la cuenta. / Pillar el truco.",
    formalSpain: "Darse cuenta. / Comprender el mecanismo.",
    colloquialLatAm: "Caer en la cuenta. / Agarrar / pillar el truco."
  },
  {
    id: 61,
    topics: ["관용구", "직장"],
    difficulty: "어려움",
    meaningKo: "일이 산더미야. / 일이 밀렸어.",
    colloquialSpain: "Estoy hasta arriba de curro. / Voy de culo con el trabajo.",
    formalSpain: "Tengo una carga de trabajo excesiva. / Voy muy atrasada.",
    colloquialLatAm: "Estoy hasta arriba de trabajo. / Ando muy atrasada.",
    notes: "curro = 일(구어) · ir de culo = 스페인 구어 ‘정신없이 바쁘다’"
  },
  {
    id: 62,
    topics: ["관용구"],
    difficulty: "아주어려움",
    meaningKo: "일을 미루다 / 질질 끌다.",
    colloquialSpain: "Dar largas. / Ir dejando las cosas para luego.",
    formalSpain: "Aplazar reiteradamente. / Procrastinar.",
    colloquialLatAm: "Dar largas. / Ir dejando las cosas para después."
  },
  {
    id: 63,
    topics: ["관용구"],
    difficulty: "아주어려움",
    meaningKo: "분위기 파악하다 / 눈치 보다.",
    colloquialSpain: "Ver por dónde van los tiros. / Pillar el ambiente.",
    formalSpain: "Percibir el ambiente. / Captar la situación.",
    colloquialLatAm: "Ver por dónde van los tiros. / Agarrar el vibe / el ambiente."
  },

  /* ===== 격식 ===== */
  {
    id: 64,
    topics: ["격식"],
    difficulty: "쉬움",
    meaningKo: "잠시 시간 괜찮으실까요?",
    colloquialSpain: "¿Tienes un momento?",
    formalSpain: "¿Dispone de un momento, por favor?",
    colloquialLatAm: "¿Tiene un momento?"
  },
  {
    id: 65,
    topics: ["격식"],
    difficulty: "쉬움",
    meaningKo: "오늘 중에 회신 부탁드려요.",
    colloquialSpain: "Si podéis contestarme hoy, genial.",
    formalSpain: "Le agradecería una respuesta en el día de hoy.",
    colloquialLatAm: "Si pueden contestarme hoy, genial."
  },
  {
    id: 66,
    topics: ["격식"],
    difficulty: "어려움",
    meaningKo: "불편을 드려 죄송합니다. 곧 처리해 드리겠습니다.",
    colloquialSpain: "Siento las molestias; ahora mismo lo solucionamos.",
    formalSpain: "Lamentamos las molestias ocasionadas; procederemos a resolverlo a la mayor brevedad.",
    colloquialLatAm: "Disculpe las molestias; ahora mismo lo solucionamos."
  },
  {
    id: 67,
    topics: ["격식"],
    difficulty: "어려움",
    meaningKo: "검토해 보시고 의견 주시면 감사하겠습니다.",
    colloquialSpain: "Si lo miráis y me dais feedback, os lo agradezco.",
    formalSpain: "Le agradecería que lo revise y me haga llegar sus comentarios.",
    colloquialLatAm: "Si lo revisan y me dan feedback, se lo agradezco."
  },
  {
    id: 68,
    topics: ["격식", "일상"],
    difficulty: "어려움",
    meaningKo: "시청(시청 행정)에서 서류 제출하려면 사전예약이 필요해요.",
    colloquialSpain: "Para entregar papeles en el ayuntamiento hace falta cita previa.",
    formalSpain: "Para presentar documentación en el ayuntamiento es necesario solicitar cita previa.",
    colloquialLatAm: "Para entregar papeles en el municipio hace falta cita previa."
  },
  {
    id: 69,
    topics: ["격식"],
    difficulty: "아주어려움",
    meaningKo: "본 건은 내부 절차에 따라 승인이 필요합니다.",
    colloquialSpain: "Este tema necesita el visto bueno interno antes de seguir.",
    formalSpain: "El presente asunto requiere la debida aprobación conforme al procedimiento interno.",
    colloquialLatAm: "Este asunto necesita la aprobación interna antes de seguir."
  },
  {
    id: 70,
    topics: ["격식", "직장"],
    difficulty: "아주어려움",
    meaningKo: "일정 조율이 필요하시면 편하신 시간대를 알려 주세요.",
    colloquialSpain: "Si hay que cuadrar agenda, decidme qué hueco os viene bien.",
    formalSpain: "Si precisa coordinar la agenda, indíqueme la franja horaria que le resulte conveniente.",
    colloquialLatAm: "Si hay que coordinar la agenda, díganme qué horario les viene bien."
  },
  {
    id: 71,
    topics: ["격식"],
    difficulty: "아주어려움",
    meaningKo: "회신은 영업일 기준 이틀 내로 드리겠습니다.",
    colloquialSpain: "Os contesto en un par de días laborables.",
    formalSpain: "Le responderemos en un plazo de dos días hábiles.",
    colloquialLatAm: "Les contesto en un par de días hábiles."
  },
  {
    id: 72,
    topics: ["일상", "감정"],
    difficulty: "쉬움",
    meaningKo: "친구들이랑 이번 주말에 브런치 약속 잡자.",
    colloquialSpain: "¿Quedamos este finde para un brunch con las amigas?",
    formalSpain: "¿Quedamos este fin de semana para un brunch con las amigas?",
    colloquialLatAm: "¿Nos vemos este fin de semana para un brunch con las amigas?"
  }
];
