# Grammar Potion Lab 게임 제작 워크플로우

## 개요

교과서 Grammar Plus 워크시트로부터 Grammar Potion Lab 문법 학습 게임을 생성하는 워크플로우.
마법 연금술 테마로 문법 규칙 학습(레시피) + 연습문제(물약 조합)를 게임화.

## 기술 스택

| 구성 요소 | 기술 | 비고 |
|-----------|------|------|
| 게임 UI | 바닐라 HTML/CSS/JS (단일 페이지) | 외부 의존: Google Fonts CDN (Cinzel Decorative, Noto Sans KR) |
| 사운드 효과 | ElevenLabs Sound Effects MCP | bubbling, ingredient_drop, potion_success 등 10개 |
| 나레이션 | Gemini TTS (`gemini-2.5-flash-preview-tts`) | 음성: Kore, PCM 16-bit 24kHz → WAV |
| TTS 오디오 내장 | base64 data URI (`audio_data.js`) | file:// 프로토콜에서도 재생 가능 |
| 효과음 내장 | base64 data URI (`sfx_data.js`) | 레슨 간 공유 가능 |
| 콘텐츠 데이터 | `grammar_data.js` (JS 객체) | 문법 규칙, 연습문제 |
| 배경 이미지 | Gemini Image Generation | lab_bg.png |
| 접근성 | ARIA live region, 전체 키보드 조작 | Space/Enter/1~5/Esc |
| 배포 | GitHub Pages (legacy, master 브랜치) | `gh repo create` → `gh api .../pages` |

## 입력 자료

- Grammar Plus 워크시트 (HWP → Upstage DocParse로 추출)
- Grammar Plus 정답지

## 데이터 구조 (grammar_data.js)

```javascript
const GRAMMAR_DATA = {
  lesson: N,
  title: "Grammar Potion Lab",
  subtitle: "문법 주제",
  chapters: [
    {
      id: 1,
      name: "Potion of ...",
      nameKo: "...",
      topic: "문법 주제",
      potionColor: "#hex",
      recipe: [{ step, title, titleEn, content, examples, table?, transform?, pattern?, audioKey }],
      exercises: [
        { id, type: "multiple_choice"|"multi_select"|"word_blocks",
          question, context?, options, answer|answers, explanation, audioKey }
      ]
    }
  ]
};
```

## 게임 흐름

1. START → 2. INTRO (타자기 나레이션) → 3. CHAPTER SELECT
4. RECIPE 학습 (4스텝 스크롤) → 5. QUIZ (8문항, 가마솥 UI)
6. CHAPTER COMPLETE → 다음 챕터 반복 → 7. FINALE (졸업)

## 문제 유형

| 유형 | 키 조작 | 특징 |
|------|---------|------|
| multiple_choice | 1~5 선택 | 5지선다 |
| multi_select | 1~5 토글 + Enter 확인 | 복수 정답 |
| word_blocks | 1~N 블록 선택 | 빈칸에 단어 블록 배치, 소문항 순차 |

## 파일 구조

```
grammar-potion-L<N>/
├── index.html          게임 본체 (단일 HTML)
├── grammar_data.js     문법 규칙 + 연습문제 데이터
├── audio_data.js       base64 TTS 오디오 번들
├── sfx_data.js         base64 효과음 번들
├── lab_bg.png          연금술 실험실 배경 (Gemini 생성)
├── audio/              원본 WAV 백업
├── sfx/                원본 SFX MP3 백업
└── WORKFLOW.md         이 문서
```

## 빠른 제작 명령 (Claude에게)

```
"<HWP파일>을 grammar-potion-L<N> 게임으로 만들어 줘.
L1과 동일한 형태로, SFX + TTS 음성 생성 + base64 내장 + GitHub Pages 배포까지."
```
