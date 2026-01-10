# 시간표 생성 시스템 다이어그램 (핵심 3개)

블로그 포스트에 사용할 **핵심 다이어그램 3개**입니다.
[Mermaid Live Editor](https://mermaid.live/)에서 PNG로 내보내 티스토리에 이미지로 업로드하세요.

---

## 다이어그램 1: 시스템 흐름 (System Flow)

**📍 삽입 위치**: `🏗️ 시스템 아키텍처 및 설계` 섹션 첫 번째 이미지 자리

```mermaid
flowchart LR
    subgraph User["👤 사용자"]
        A["자연어 입력<br/>'알고리즘, DB, 컴네<br/>금공강으로 짜줘'"]
    end

    subgraph Backend["🖥️ 백엔드 (RAG)"]
        B["과목명 파싱<br/>(NLP)"]
        C["DB 검색<br/>(시간/분반 조회)"]
        D["조합 생성<br/>(백트래킹)"]
    end

    subgraph Frontend["🎨 프론트엔드"]
        E["useScheduleStore<br/>(Zustand)"]
        F["ScheduleCanvas"]
        G["ScheduleGrid"]
    end

    A --> B
    B --> C
    C --> D
    D -->|"JSON 응답<br/>(N개 조합)"| E
    E --> F
    F --> G

    style A fill:#3b82f6,color:#fff
    style D fill:#10b981,color:#fff
    style F fill:#8b5cf6,color:#fff
```

---

## 다이어그램 2: 상태 관리 흐름 (Sequence Diagram)

**📍 삽입 위치**: `🏗️ 시스템 아키텍처 및 설계` 섹션, 컴포넌트 구조 설명 아래

```mermaid
sequenceDiagram
    participant U as 👤 사용자
    participant P as FilterPanel
    participant S as useScheduleStore
    participant C as ScheduleCanvas

    U->>P: 필터 변경 (금요일 공강)
    P->>S: setFilters({ emptyDays: ['금'] })
    activate S
    S->>S: applyFilters()
    Note over S: allSchedules에서<br/>조건에 맞는 것만 필터링
    S-->>C: generatedSchedules 업데이트
    deactivate S
    C->>U: 즉시 UI 반영 ⚡ (0ms)
```

**핵심 포인트**:

- 사용자 → FilterPanel → Store → Canvas 단방향 흐름
- Store 내부에서 필터링 처리 (API 호출 없음)
- 결과: **0ms 지연**으로 즉각 반영

---

## 다이어그램 3: 동적 그리드 로직 (Flowchart)

**📍 삽입 위치**: `💡 해결책 2: 동적 시간표 그리드` 섹션, 주간/야간 비교 이미지 아래

```mermaid
flowchart TB
    A["📚 시간표 데이터 수신"] --> B["⏰ 모든 수업 slot의 endTime 분석"]
    B --> C["Math.ceil(endTime / 60)"]
    C --> D{"slotEndHour > DEFAULT_END_HOUR(19)?"}

    D -->|"No (예: 15:45 → 16시)"| E["maxEndHour = 19 유지"]
    D -->|"Yes (예: 21:20 → 22시)"| F["maxEndHour = slotEndHour"]

    E --> G["그리드: 09:00 ~ 19:00"]
    F --> H["그리드: 09:00 ~ maxEndHour"]

    G --> I["🎨 CSS Grid 렌더링"]
    H --> I

    style A fill:#3b82f6,color:#fff
    style D fill:#f59e0b,color:#fff
    style I fill:#10b981,color:#fff
```

---

## 📋 체크리스트

| #   | 다이어그램              | 블로그 위치                      | PNG 생성 |
| --- | ----------------------- | -------------------------------- | :------: |
| 1   | 시스템 흐름             | 🏗️ 아키텍처 (첫 번째)            |    ☐     |
| 2   | 상태 관리 흐름 (시퀀스) | 🏗️ 아키텍처 (컴포넌트 설명 아래) |    ☐     |
| 3   | 동적 그리드 로직        | 💡 해결책 2                      |    ☐     |

---

## 사용 방법

1. [Mermaid Live Editor](https://mermaid.live/)에 위 코드 붙여넣기
2. 우측 상단 "Actions" → "PNG" 다운로드
3. 티스토리 에디터에서 해당 `[다이어그램 N: ...]` 위치에 이미지 삽입
