const GRAMMAR_DATA = {
  lesson: 1,
  title: "Grammar Potion Lab",
  subtitle: "be동사 & 일반동사",
  chapters: [
    // ===== CHAPTER 1: be동사 =====
    {
      id: 1,
      name: "Potion of Being",
      nameKo: "존재의 물약",
      topic: "be동사",
      potionColor: "#7b68ee", // medium slate blue → evolves as questions are answered
      recipe: [
        {
          step: 1,
          title: "기본 개념",
          titleEn: "What is a Be Verb?",
          content: "be동사는 가장 기본적인 동사로 주어의 <em>상태</em>나 <em>존재</em>를 나타내며, <strong>'~이다'</strong>, <strong>'(~에) 있다'</strong>의 뜻을 가집니다.",
          examples: [
            { en: "I <u>am</u> smart.", ko: "나는 똑똑합니다.", highlight: "am" },
            { en: "You <u>are</u> very kind.", ko: "당신은 매우 친절합니다.", highlight: "are" },
            { en: "Jane <u>is</u> my friend.", ko: "Jane은 나의 친구입니다.", highlight: "is" },
            { en: "They're <u>in</u> the classroom.", ko: "그들은 교실에 있습니다.", highlight: "in" }
          ],
          audioKey: "recipe_be_1"
        },
        {
          step: 2,
          title: "be동사의 종류",
          titleEn: "Three Forms of Be",
          content: "be동사는 <strong>am, are, is</strong>의 세 종류가 있으며, 주어의 인칭과 수에 따라 결정됩니다.",
          table: {
            headers: ["주어", "be동사", "축약형"],
            rows: [
              ["I (1인칭 단수)", "am", "I'm"],
              ["You (2인칭)", "are", "You're"],
              ["He / She / It (3인칭 단수)", "is", "He's / She's / It's"],
              ["We / They (복수)", "are", "We're / They're"]
            ]
          },
          examples: [
            { en: "I<u>'m</u> fourteen years old.", ko: "나는 열네 살입니다.", highlight: "'m" },
            { en: "You<u>'re</u> beautiful.", ko: "당신은 아름답습니다.", highlight: "'re" },
            { en: "She<u>'s</u> in the library.", ko: "그녀는 도서관에 있습니다.", highlight: "'s" }
          ],
          audioKey: "recipe_be_2"
        },
        {
          step: 3,
          title: "be동사의 부정문",
          titleEn: "Negative Sentences",
          content: "be동사 뒤에 <strong>not</strong>을 붙여 <strong>'~이 아니다'</strong>, <strong>'(~에) 없다'</strong>의 뜻으로 씁니다. not은 be동사와 축약할 수 있습니다.",
          transform: [
            { before: "is not", after: "isn't" },
            { before: "are not", after: "aren't" },
            { before: "am not", after: "축약 불가 (I'm not)" }
          ],
          examples: [
            { en: "I <u>am not</u> tired.", ko: "나는 피곤하지 않습니다.", highlight: "am not" },
            { en: "Kevin <u>is not</u> a doctor.", ko: "Kevin은 의사가 아닙니다.", highlight: "is not" },
            { en: "They <u>aren't</u> in the same class.", ko: "그들은 같은 반이 아닙니다.", highlight: "aren't" },
            { en: "I<u>'m not</u> so busy.", ko: "나는 그리 바쁘지 않습니다.", highlight: "'m not" }
          ],
          audioKey: "recipe_be_3"
        },
        {
          step: 4,
          title: "be동사의 의문문",
          titleEn: "Questions with Be",
          content: "주어와 be동사의 순서를 바꿔 <strong>「Be동사 + 주어 ~?」</strong>로 쓰고, '~이니?', '~에 있니?'의 뜻입니다.",
          pattern: {
            question: "Be동사 + 주어 ~?",
            yesAnswer: "Yes, 주어 + be동사.",
            noAnswer: "No, 주어 + be동사 + not."
          },
          examples: [
            { en: "<u>Is</u> Tom a scientist?", ko: "Tom은 과학자입니까?", highlight: "Is" },
            { en: "Yes, he <u>is</u>. / No, he <u>isn't</u>.", ko: "네, 그래요. / 아니요, 그렇지 않아요.", highlight: "is" },
            { en: "<u>Are</u> you good at basketball?", ko: "당신은 농구를 잘합니까?", highlight: "Are" },
            { en: "Yes, I <u>am</u>. / No, I<u>'m not</u>.", ko: "네, 잘해요. / 아니요, 그렇지 않아요.", highlight: "am" }
          ],
          audioKey: "recipe_be_4"
        }
      ],
      exercises: [
        // A-1: 보기와 같은 의미 고르기
        {
          id: 1,
          type: "multiple_choice",
          question: "밑줄 친 부분의 의미가 <보기>와 같은 것은?",
          context: "<보기> My brother <u>is</u> in the living room.",
          contextHint: "(is = ~에 있다)",
          options: [
            "① He <u>is</u> a very smart boy.",
            "② The girl <u>is</u> 13 years old.",
            "③ Your backpack <u>is</u> on the table.",
            "④ The video <u>is</u> about sea animals.",
            "⑤ My older sister <u>is</u> good at sports."
          ],
          answer: 2,
          explanation: "보기의 is는 '~에 있다'의 뜻입니다. ③번의 is도 '~에 있다'(위치)의 뜻이므로 같습니다. 나머지는 모두 '~이다'의 뜻입니다.",
          audioKey: "quiz_a_1"
        },
        // A-2: 빈칸에 들어갈 말이 다른 하나
        {
          id: 2,
          type: "multiple_choice",
          question: "빈칸에 들어갈 말이 나머지와 다른 하나는?",
          options: [
            "① _____ everything okay?",
            "② The child _____ not quiet.",
            "③ Your bike _____ very dirty.",
            "④ The book _____ interesting.",
            "⑤ _____ those two boys brothers?"
          ],
          answer: 4,
          explanation: "①~④의 주어는 모두 3인칭 단수이므로 is가 들어갑니다. ⑤의 주어 those two boys는 복수이므로 Are가 들어갑니다.",
          audioKey: "quiz_a_2"
        },
        // A-3: 대화 완성
        {
          id: 3,
          type: "multiple_choice",
          question: "대화의 빈칸에 들어갈 말로 알맞은 것은?",
          context: "A: Are you from Canada?\nB: _____ I'm from the US.",
          options: [
            "① Yes, I am.",
            "② Yes, you are.",
            "③ No, I'm not.",
            "④ Yes, I'm not.",
            "⑤ No, you aren't."
          ],
          answer: 2,
          explanation: "\"I'm from the US.\"라고 했으므로 캐나다 출신이 아닙니다. Are you~?에 대한 부정 대답은 \"No, I'm not.\"입니다.",
          audioKey: "quiz_a_3"
        },
        // A-4: 어법상 어색한 것
        {
          id: 4,
          type: "multiple_choice",
          question: "밑줄 친 부분이 어법상 어색한 것은?",
          options: [
            "① <u>You're</u> so kind.",
            "② I <u>amn't</u> very tall.",
            "③ <u>They're not</u> hungry.",
            "④ <u>He's</u> a great dancer.",
            "⑤ We <u>aren't</u> busy right now."
          ],
          answer: 1,
          explanation: "am not은 축약할 수 없습니다. amn't는 올바르지 않은 표현이며, I'm not으로 써야 합니다.",
          audioKey: "quiz_a_4"
        },
        // A-5: 질문 추론
        {
          id: 5,
          type: "multiple_choice",
          question: "다음 대답이 나올 수 있는 질문으로 알맞은 것은?",
          context: "Yes, he is. I'm really worried.",
          options: [
            "① Are you tired?",
            "② Is your brother sick?",
            "③ Is your mom a nurse?",
            "④ Is she in the bathroom?",
            "⑤ Are you at home with your sister?"
          ],
          answer: 1,
          explanation: "\"Yes, he is.\"로 대답했으므로 주어가 he인 의문문이어야 합니다. \"I'm really worried.\"라는 걱정 표현과 어울리는 것은 ②번입니다.",
          audioKey: "quiz_a_5"
        },
        // A-6: 빈칸에 알맞지 않은 것
        {
          id: 6,
          type: "multiple_choice",
          question: "빈칸 ⓐ~ⓔ에 들어갈 말로 알맞지 않은 것은?",
          context: "Hi, my name ⓐ_____ Minsu. I ⓑ_____ fourteen years old. My favorite subjects ⓒ_____ music and science. My favorite color ⓓ_____ yellow. My best friends ⓔ_____ Jiwoo and Taemin.",
          options: [
            "① ⓐ - is",
            "② ⓑ - am",
            "③ ⓒ - are",
            "④ ⓓ - is",
            "⑤ ⓔ - is"
          ],
          answer: 4,
          explanation: "ⓔ의 주어 My best friends는 복수이므로 are가 들어가야 합니다. is는 알맞지 않습니다.",
          audioKey: "quiz_a_6"
        },
        // A-7: 올바른 문장 모두 고르기 (복수 선택)
        {
          id: 7,
          type: "multi_select",
          question: "다음 중 어법상 올바른 문장을 모두 고르시오.",
          options: [
            "① The woman are not old.",
            "② The brown cat is very fat.",
            "③ Is Steve in the fifth grade?",
            "④ We are members of the school band.",
            "⑤ Is Mr. White and his students are in the classroom?"
          ],
          answers: [1, 2, 3],
          explanations: [
            "① The woman → 단수 → is not (✗)",
            "② 올바른 문장 (✓)",
            "③ 올바른 의문문 (✓)",
            "④ 올바른 문장 (✓)",
            "⑤ Is와 are가 중복, 주어가 복수 → Are Mr. White and his students in the classroom? (✗)"
          ],
          audioKey: "quiz_a_7"
        },
        // A-8: 영작 (단어 블록 3소문항)
        {
          id: 8,
          type: "word_blocks",
          question: "다음 우리말을 영어로 바꿔 쓸 때 빈칸에 알맞은 말을 쓰시오.",
          subQuestions: [
            {
              prompt: "(1) 우리는 초등학생들이 아니다.",
              sentence: "_____ _____ elementary students.",
              blocks: ["We", "aren't", "We're", "not", "isn't", "They"],
              answer: ["We", "aren't"],
              altAnswer: ["We're", "not"],
              explanation: "We aren't 또는 We're not 모두 정답입니다."
            },
            {
              prompt: "(2) 그들은 행복하니?",
              sentence: "_____ _____ happy?",
              blocks: ["Are", "they", "Is", "Do", "them", "happy"],
              answer: ["Are", "they"],
              explanation: "they(복수) → Are they happy?"
            },
            {
              prompt: "(3) 그녀는 지금 체육관에 있다.",
              sentence: "_____ _____ at the gym now.",
              blocks: ["She", "is", "He", "are", "It", "has"],
              answer: ["She", "is"],
              explanation: "She(3인칭 단수) → She is"
            }
          ],
          audioKey: "quiz_a_8"
        }
      ]
    },

    // ===== CHAPTER 2: 일반동사 =====
    {
      id: 2,
      name: "Potion of Action",
      nameKo: "행동의 물약",
      topic: "일반동사",
      potionColor: "#ff6347", // tomato → evolves
      recipe: [
        {
          step: 1,
          title: "기본 개념",
          titleEn: "What is a General Verb?",
          content: "일반동사는 be동사를 제외한 대부분의 동사로 주어의 <em>동작</em>, <em>상태</em> 등을 나타냅니다.",
          examples: [
            { en: "I <u>play</u> soccer.", ko: "나는 축구를 합니다.", highlight: "play" },
            { en: "Amy <u>reads</u> novels.", ko: "Amy는 소설을 읽습니다.", highlight: "reads" },
            { en: "We <u>love</u> cats.", ko: "우리는 고양이를 사랑합니다.", highlight: "love" }
          ],
          audioKey: "recipe_verb_1"
        },
        {
          step: 2,
          title: "일반동사의 현재형",
          titleEn: "Present Tense & Third Person -s",
          content: "일반적인 사실, 현재의 상태, 반복되는 습관이나 동작을 나타냅니다. 주어가 <strong>3인칭 단수</strong>일 때는 동사 뒤에 <strong>-s</strong>를 붙입니다.",
          table: {
            headers: ["주어", "동사 형태", "예시"],
            rows: [
              ["I / You / We / They", "동사원형", "I like flowers."],
              ["He / She / It", "동사 + -s", "She likes flowers."]
            ]
          },
          examples: [
            { en: "We all <u>breathe</u> and <u>eat</u>.", ko: "우리는 모두 숨을 쉬고 먹습니다.", highlight: "breathe" },
            { en: "Lily <u>runs</u> very fast.", ko: "Lily는 매우 빠르게 달립니다.", highlight: "runs" },
            { en: "She <u>walks</u> to school.", ko: "그녀는 학교에 걸어갑니다.", highlight: "walks" }
          ],
          audioKey: "recipe_verb_2"
        },
        {
          step: 3,
          title: "일반동사의 부정문",
          titleEn: "Negative Sentences",
          content: "일반동사 앞에 <strong>do not</strong>을 붙여 '~하지 않다'의 뜻으로 씁니다. 주어가 3인칭 단수이면 <strong>does not</strong>을 쓰고, 동사는 <strong>원형</strong>으로 돌아갑니다.",
          transform: [
            { before: "do not", after: "don't" },
            { before: "does not", after: "doesn't" }
          ],
          examples: [
            { en: "I <u>do not like</u> this cake.", ko: "나는 이 케이크를 좋아하지 않습니다.", highlight: "do not like" },
            { en: "My mom <u>does not use</u> sugar.", ko: "우리 엄마는 설탕을 쓰지 않습니다.", highlight: "does not use" },
            { en: "You <u>don't know</u> his name.", ko: "당신은 그의 이름을 알지 못합니다.", highlight: "don't know" },
            { en: "Jack <u>doesn't talk</u> too much.", ko: "Jack은 말을 많이 하지 않습니다.", highlight: "doesn't talk" }
          ],
          audioKey: "recipe_verb_3"
        },
        {
          step: 4,
          title: "일반동사의 의문문",
          titleEn: "Questions with Do/Does",
          content: "<strong>「Do/Does + 주어 + 동사원형 ~?」</strong>의 형태로 쓰고 '~하니?'의 뜻입니다.",
          pattern: {
            question: "Do/Does + 주어 + 동사원형 ~?",
            yesAnswer: "Yes, 주어 + do/does.",
            noAnswer: "No, 주어 + don't/doesn't."
          },
          examples: [
            { en: "<u>Do</u> you like pizza?", ko: "당신은 피자를 좋아합니까?", highlight: "Do" },
            { en: "Yes, I <u>do</u>. / No, I <u>don't</u>.", ko: "네, 그래요. / 아니요, 그렇지 않아요.", highlight: "do" },
            { en: "<u>Does</u> Robin get up early?", ko: "Robin은 일찍 일어납니까?", highlight: "Does" },
            { en: "Yes, she <u>does</u>. / No, she <u>doesn't</u>.", ko: "네, 그래요. / 아니요, 그렇지 않아요.", highlight: "does" }
          ],
          audioKey: "recipe_verb_4"
        }
      ],
      exercises: [
        // B-1: 공통 빈칸
        {
          id: 1,
          type: "multiple_choice",
          question: "빈칸에 공통으로 들어갈 말로 알맞은 것은?",
          context: "· Mike and Alex _____ big dreams.\n· We _____ a lot of books.",
          options: [
            "① do",
            "② does",
            "③ have",
            "④ has",
            "⑤ are"
          ],
          answer: 2,
          explanation: "Mike and Alex(복수), We(복수) 모두 복수 주어이므로 have가 들어갑니다. has는 3인칭 단수에 쓰입니다.",
          audioKey: "quiz_b_1"
        },
        // B-2: 올바른 문장 고르기
        {
          id: 2,
          type: "multiple_choice",
          question: "다음 중 어법상 올바른 문장은?",
          options: [
            "① They looks very happy.",
            "② They not eat vegetables.",
            "③ Dad doesn't likes coffee.",
            "④ Does Mina gets up early?",
            "⑤ We enjoy summer every year."
          ],
          answer: 4,
          explanation: "① looks → look (복수 주어) ② not → do not/don't ③ doesn't likes → doesn't like (원형) ④ Does gets → Does get (원형) ⑤ 올바른 문장입니다.",
          audioKey: "quiz_b_2"
        },
        // B-3: 문장 전환 (단어 블록)
        {
          id: 3,
          type: "word_blocks",
          question: "두 문장의 의미가 같도록 빈칸에 알맞은 말을 쓰시오.",
          subQuestions: [
            {
              prompt: "Changmin is a fast swimmer.\n= Changmin _____ very fast.",
              sentence: "Changmin _____ very fast.",
              blocks: ["swims", "swim", "swimming", "is swimming"],
              answer: ["swims"],
              explanation: "Changmin(3인칭 단수) + 일반동사 현재형 → swims"
            }
          ],
          audioKey: "quiz_b_3"
        },
        // B-4: 빈칸 순서 짝짓기
        {
          id: 4,
          type: "multiple_choice",
          question: "빈칸에 들어갈 말이 순서대로 바르게 짝지어진 것은?",
          context: "· Sumin _____ every morning.\n· Yujin _____ her homework in the afternoon.\n· Sumin and Yujin _____ for a walk after dinner.",
          options: [
            "① exercise - do - go",
            "② exercise - do - goes",
            "③ exercises - does - go",
            "④ exercises - do - goes",
            "⑤ exercises - does - goes"
          ],
          answer: 2,
          explanation: "Sumin(3인칭 단수) → exercises, Yujin(3인칭 단수) → does, Sumin and Yujin(복수) → go",
          audioKey: "quiz_b_4"
        },
        // B-5: 다른 하나 (Do vs Does)
        {
          id: 5,
          type: "multiple_choice",
          question: "빈칸에 들어갈 말이 나머지와 다른 하나는?",
          options: [
            "① _____ the horse run fast?",
            "② _____ the band play loud music?",
            "③ _____ Jihun get up early every day?",
            "④ _____ those people like Korean food?",
            "⑤ _____ your little sister have a smartphone?"
          ],
          answer: 3,
          explanation: "①the horse(단수)→Does, ②the band(단수)→Does, ③Jihun(단수)→Does, ⑤your little sister(단수)→Does. ④those people(복수)→Do. ④만 다릅니다.",
          audioKey: "quiz_b_5"
        },
        // B-6: 대화 완성
        {
          id: 6,
          type: "multiple_choice",
          question: "대화의 빈칸에 들어갈 말로 알맞은 것은?",
          context: "A: Do you like cats?\nB: _____ but I like dogs.",
          options: [
            "① Yes, I am",
            "② Yes, I do",
            "③ No, I'm not",
            "④ No, I don't",
            "⑤ Yes, I don't"
          ],
          answer: 3,
          explanation: "\"but I like dogs\"라고 했으므로 고양이는 좋아하지 않는다는 뜻입니다. Do you~?에 대한 부정 대답은 \"No, I don't.\"입니다.",
          audioKey: "quiz_b_6"
        },
        // B-7: 오류 교정 (단어 블록 3소문항)
        {
          id: 7,
          type: "word_blocks",
          question: "다음 문장에서 어법상 어색한 부분을 찾아 바르게 고쳐 쓰시오.",
          subQuestions: [
            {
              prompt: "(1) We often <u>goes</u> swimming together.",
              sentence: "goes →  _____",
              blocks: ["go", "goes", "going", "to go"],
              answer: ["go"],
              explanation: "We(복수 주어) → 동사원형 go"
            },
            {
              prompt: "(2) She <u>isn't</u> like tomatoes.",
              sentence: "isn't →  _____",
              blocks: ["doesn't", "isn't", "don't", "not"],
              answer: ["doesn't"],
              explanation: "like는 일반동사이므로 be동사가 아닌 does not(doesn't)을 써야 합니다."
            },
            {
              prompt: "(3) Does he <u>speaks</u> English well?",
              sentence: "speaks →  _____",
              blocks: ["speak", "speaks", "speaking", "to speak"],
              answer: ["speak"],
              explanation: "Does 의문문에서는 동사원형을 씁니다. speaks → speak"
            }
          ],
          audioKey: "quiz_b_7"
        },
        // B-8: 어법상 어색한 것
        {
          id: 8,
          type: "multiple_choice",
          question: "밑줄 친 ①~⑤ 중 어법상 어색한 것은?",
          context: "After school, my friends and I <u>①go</u> to the convenience store. We <u>②have</u> some snacks and <u>③talk</u> about our day. We <u>④are</u> not stay long and <u>⑤walk</u> home together.",
          options: [
            "①",
            "②",
            "③",
            "④",
            "⑤"
          ],
          answer: 3,
          explanation: "are not stay → do not stay. stay는 일반동사이므로 be동사가 아닌 do not으로 부정해야 합니다.",
          audioKey: "quiz_b_8"
        }
      ]
    }
  ]
};
