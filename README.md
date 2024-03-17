# OpenMind

## 팀원
이지수 : button, listpage, 데이터 구현
변지인 : reation, dropdown, toast, answerpage 구현
손승현 : feedcard, postpage 구현
한태욱 : input, usercard, pagenation, badge, mainpage, modalpage 구현

## 상세설명
### 이지수
#### 담당
- 멋쟁이 팀장😎
- notion 제작 및 관리 (컨벤션 정리, 일정관리, 자료 모음)
- 초기 api 데이터 세팅
- 포켓몬 api 데이터 세팅
- Btn 컴포넌트 구현
    - btn 컴포넌트가 html btn 태그와 동일한 속성을 가지도록 구현 (…rest 속성 이용)
    - 화살표 아이콘의 유무를 arrow prop과 &&연산자를 사용해서 구현
- List page 구현
    - pagenation 구현 (offset 사용)
#### 트러블슈팅
- button 컴포넌트 처음 제작 시 figma 상의 공용 컴포넌트 부분을 보고 구현
- 이후 각자 페이지 제작하면서 button 사이즈가 안맞기 시작함
- 처음에는 단순히 size가 2-3개 정도라고 생각하고 prop으로 넘겨주려 함
- 찾아보니 사이즈 종류가 9 ~ 10개 였음 → prop 절대 불가
- button 컴포넌트를 html 상의 button 태그와 동일한 방식으로 사용하는 방법을 고민
- 특정적인 theme, disabled, arrow, children을 제외한 button의 모든 속성을 사용할 수 있도록 …rest 를 사용해줌 → onClick 등의 속성 사용 용이  
- 다양한 사이즈 부분은 width와 height 값을 제거하고 padding 값으로 버튼 사이즈가 자동으로 움직이도록 조절 (align-items 속성 안 적어주면 기본 값이 stretch)
- padding 값은 종류가 2가지였고, 주의할 점은 한 페이지에서 같은 버튼 두개의 패딩값이 다른 점이었는데,
- css 상에서 반응형으로 해당 너비일 때, 특정 theme의 클래스 명이 동시에 존재하는 경우에 다른 padding 값을 주어 해결함

### 변지인

#### 담당
- 깃허브초기세팅
    - 브랜치
    - 이슈템플릿
    - pr템플릿
- 공유 레포세팅
- 초기api불러오
    - reactionApi(axios쓰기 전 버전)
- reaction컴포넌트 구현
    - api이용하여 type에 따른 like, dislike 불러오고 판별하는 로직 구현
    - 반별 이후 색상변경
    - 반별 이후 아이콘 변경
    - 버튼 클릭 시 한번만 실행되도록 로직 구현
    - api이용하여 클릭 시 색상 바뀌는거 svg의 fill 통해서 구현
    - api이용하여 클릭 시에만 숫자가 보이도록 구현
    - 커서 포인터
- dropdown컴포넌트 구현
    - 클릭 시 색상 바뀌는거 svg의 fill 통해서 구현
    - 클릭 시(+호버) 드롭다운 리스트가 나오게 구현
    - 드롭다운리스트 목록을 클릭 시 드롭다운 박스에 표시되는 값이 달라지도록 구현
    - api이용하여 ‘이름순’ 클릭 시 데이터가 이름순서대로 정렬
    - api이용하여 ‘최신순’ 클릭 시 데이터가 시간순서대로 정렬
    - 받아올 데이터 기초 구현
    - 커서 포인터
- toast컴포넌트 구현
- Answer페이지 구현
    - 사용자 api받아오는 기능 구현
    - AnswerFeedCard전체 삭제하는 ‘삭제하기버튼’구현
        - map()을 통해 모든 FeedCard를 다룰 수 있도록 구현
        - 비동기적으로 실행되어 모두 삭제가 되지않고 결과를 출력하는 문제를promise.all을 통해 해결
        - setState를 인자로 받아와서 페이지 렌더링 구현
    - AnswerFeedCard 구현
        - bage를 통해 답변이 없으면 미답변, 있으면 답변완료 조건부 랜더링
        - useState를 통해 새로고침 로직 구현(답변작성, 수정, 삭제 등 변화가 발생하면 다 자동으로 랜더링)
        - 답변이 있을 때만 Kebab버튼을 사용할 수 있도록 구현
        - 답변 없을 시 input 활성화
        - input에 내용 있으면 버튼 활성화
    - AnswerFeedCard 내부 Kebab버튼
        - useState를 통해 클릭시 Kebab자체가 열리고, 다시 누르면 닫히게 구현
        - 수정하기 Kebab 누를시 답변했던 api를 받아와서 작업하도록 구현
        - 수정완료 버튼 누를시
        - input에 내용 있으면 버튼 활성화
        - 커서 포인터
          
#### 트러블슈팅
- 한줄평 : 얽혀있는 기능들을 정리하고, 데이터를 분석해서 사용하는게 어려웠지만 어떻게 구현할까 다채롭게 사고해 볼 수 있는 시간이였습니다.
    - 가장 처음 기능은 답변이 있을때만 케밥이 열려야했다
    - 처음엔 if-esle문을 통해 구현하려했으나, return문안에서 쓰기엔 무리였고, 밖에서 함수로 빼서 쓸경우 그 안에 컴포넌트가 들어가야하기에 불가능 했다
    - 그래서 답변이 있을경우를 삼항연산자를 통해 분리했다
    - 이제 답변이 있을경우 케밥버튼은 열리지만 한번만 실행되기에 한번 클릭 시 열리고, 다시 클릭시 닫힐 수 있도록 useState에 !를 활용하여 로직을 만들었다.
    - 또한 케밥의 목록, 즉 리스트자체도 클릭시에만 보이고 다시 닫혀야하므로 비슷한 방식으로 구현했다.
    - 이제 케밥의 리스트를 보면, 수정하기와 삭제하기를 기능할 줄 알아야하는데, 여기서부터 문제가 시작한다.
    - 기능 자체는 케밥 컴포넌트안에서 구현하는데, 랜더링되는 부분은 상위 폴더였기에 1. 컴포넌트로 받아오는 방식 ⇒ 컴포넌트안에 함수를 받아올 수 없어서 편집하지 못함 2.상위폴더안에 다 작성 ⇒ 가독성도 떨어지고, 이미 전체삭제 기능이 있어서 그 기능과 혼동, 3.props로 받아와서 작성 ⇒ 이방식을 채택해서 set자체를 받아와서 사용했다
    - setState는 여러 요소를 구분해서 쓰기위해 객체로 선언했고, 삭제하기는 kebab.jsx안에 수정하기는 answercardrender.jsx안에 넣어서 구현했다.
    - updateFeed는 새로고침 로직인데, 처음엔 window.location.reload()로 구현하려 했으나, 불필요한 랜더링을 하여 아래와 같이 만들어서 사용했습니다.(results는 상위페이지에서 받아온 useState)

### 손승현

#### 담당
- 매일매일 회의록 작성 
→ 팀원들이 매일매일 논의한 내용들을 잊지않고 리마인드할 수 있게 함
- API 흐름 정리
- FeedCard 공용 컴포넌트 구현
    - API 연동 전, 임시 데이터를 만들어서 컴포넌트 안에 들어갈 데이터 자리를 미리 만들어주고 props를 미리 넘겨줌 (후에 연동 작업이 편하게끔)
  - 답변 여부에 따라 답변완료/미답변 뱃지 조건부 렌더링
  - FeedCard 컴포넌트 안에 들어가는 질문인 FeedQuestion 컴포넌트 구현
  - FeedCard 컴포넌트 안에 들어가는 답변을, 응답 데이터 내용에 따라 다르게 렌더링 (조건부 렌더링)
(ex. 거절하면 RejectAnswer 컴포넌트 렌더링, 거절하지 않고 답변 데이터가 없으면 EmptyAnswer 컴포넌트 렌더링, 거절하지 않고 답변 데이터가 있으면 SentAnswer 컴포넌트 렌더링)
  - subjectId를 useParams로 받아와서 ID마다 다른 유저 데이터를 동적인 경로를 통해 피드카드 안에서 렌더링
- children props를 이용하여서, 레이아웃을 사용할때, 레이아웃 안에 다른 내용들이 들어갈 수 있게 유연성과 재사용성을 고려하여 레이아웃 구현
- PostPage 질문 피드 페이지 구현
  - axios로 API 연동해서 질문 데이터 불러오기 
(useCallback으로 메모이제이션 최적화)
  - 레이아웃과 피드카드의 props로 질문 데이터 뿌려주기
  - map 함수로 피드카드들 렌더링
  - axios로 API 연동해서 유저 데이터 불러오기
  - 시간 데이터 가공해서 화면에 보이게 하기
  - ‘아직 질문이 없습니다’ 컴포넌트 만들기
  -  ‘질문 작성하기’ 플로팅 버튼 위치시키기
  - 질문 작성 버튼이 화면 너비에 따라 반응형으로 글자가 바뀜(화면 너비가 768px 이상이면 '질문 작성하기', 그 이하는 '질문 작성')
    - resize이벤트와 useState와 useEffect 사용
  - 데이터 불러올 때 로딩 중 상태 로직 추가
  - 질문 데이터 최신순으로 무한 스크롤 기능
    - 스크롤 이벤트 → Intersection Observer API로 구현
    (페이지 하단의 lastElementRef가 viewport에 진입하는 순간을 감지하여 추가 데이터 로드)
    - 구현 방법 변경 이유 : 브라우저마다 스크롤 위치가 상이할 수 있고, 이벤트가 계속 발생해서 성능 이슈가 발생할 수 있음. 하지만 Intersection Observer API는 브라우저에 내장된 API이고, 성능이 더 좋음
  - 모달을 연결함. “질문 작성하기” 버튼을 클릭하면 “질문을 작성하세요” 모달이 뜸
  - 모달에서 질문 post 후 자동 새로고침 -> 페이지에서 최신 질문 데이터를 바로 렌더링될 수 있게 함 
  - “링크 아이콘”을 클릭하면 URL을 클립보드에 복사하고, “URL이 복사되었습니다” 토스트 메세지가 5초 동안 보이다가 사라짐
    - 클립보드 복사와 토스트 메세지 구현 시 모두 라이브러리 안 씀!!!!
    - 동기적인 순서로 구현
    - 토스트 메세지가 보이다가 사라지는 애니메이션도 추가
  - “카카오 아이콘”을 클릭하면 실제 카카오톡으로 공유 가능 
(카카오톡 공유 API 문서 학습 후 사용)
  - “페이스북 아이콘”을 클릭하면 페이스북으로 공유 가능
  - Listpage의 UserCard에서 PostPage로 넘어갈 때, UserCard 컴포넌트의 props로 /post/subjectId로 넘어갈 수 있는 함수를 내려줌으로써
postpage에서는 그 subjectId를 useParams로 받아와서 ID마다 다른 질문 데이터를 동적인 경로를 통해 렌더링
- index.html 수정
  - favicon 추가
  - 글씨체 추가
  - 페이스북 공유 시 미리보기 내용들 추가
- PPT 제작

#### 트러블슈팅
- 무한 스크롤^^^^^^
    - 처음엔 무한 스크롤을 스크롤 이벤트로 구현하려고 함. 
    (이유: 구현하기가 제일 직관적이어서!)
    근데 ㄹㅇ 스크롤이 가장 하단으로 갔음을 나타낼 수 있는 별 조건문이란 조건문을 싹 다 찾아서 싹 다 써봣는데 동작이 전혀 안ㅋ됨ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅎㅏ……….로직 상으로는 동작하는 게 맞는데 동작이 안됨………….
    → 왜 동작이 안되는가?를 생각해봤을때, 내 노트북 화면이 커서 조건문이 안 먹을 수도 있겠다고 생각함. 그렇다면 스크롤 이벤트로 무한스크롤을 구현한다면 이건 범용성도 떨어지거니와(사람마다 자기가 가지고 있는 기기들의 화면 크기들이 다 다르므로) 어차피 구현도 안되니까 그래서 다른 방법을 찾아보기로 함.
    - 그래서 다른 방법을 찾아봄. 다른 방법으로는 polyfill?? throttle?? debounce?? 하여튼 그런 npm 라이브러리를 이용하는 방법과
    요즘 최신 브라우저들에 내장되어있는 Intersection Observer API를 활용하는 방법이 있었음
    - 둘 중에 고민하다가, 아무래도 브라우저에 내장된 API는 따로 설치할 필요도 없고, 스크롤 이벤트에 비해 성능, 활용성과 범용성도 높다고 생각하여  Intersection Observer API를 이용하여 구현하는 걸로 선택!
    - 하지만 Intersection Observer API로 무한 스크롤을 구현하는 과정 역시 쉽지 않앗엇는데………… 구현 과정을 설명해보자면,
    
    1. 컴포넌트 상태를 초기화: **`askData`**는 로드된 데이터를 저장, **`offset`**은 다음 데이터 요청 시 시작점을 지정, **`loading`**은 데이터 로딩 상태를 추적, **`hasMore`**는 더 로드할 데이터가 있는지 여부를 나타냄. **`observer`**는 **`IntersectionObserver`** 인스턴스를 저장하기 위한 ref, **`lastElementRef`**는 페이지 하단에 위치하고 Intersection Observer에 의해 관찰될 요소를 참조하기 위한 ref
    
    
    1. fetchAskData() : 질문 데이터를 비동기적으로 로드하는 함수. **`loading`** 또는 **`hasMore`** 조건에 따라 실행을 중단하거나 계속함. 데이터 로드 후, 상태 업데이트를 통해 UI를 최신 상태로 유지.
    **`useCallback`**을 사용하면 두 번째 인자로 전달된 배열(의존성 배열) 내의 값이 변경될 때만 함수를 재생성하므로, 함수의 인스턴스를 재사용할 수 있어, 불필요한 재생성을 방지하고 성능을 최적화할 수 있어서 사용.
    
    1. **`Intersection Observer API`**를 사용
    이 API는 웹 페이지에서 비동기적으로 특정 요소가 뷰포트(사용자가 현재 보고 있는 화면 부분) 내로 들어오거나 나갈 때 이를 감지하고 콜백 함수를 실행할 수 있게 해줌. 이를 통해 사용자가 페이지의 마지막 부분에 도달했는지 확인하고, 추가 데이터를 로드할 시점을 결정
    
- 카카오톡 API 활용 → 시행착오가 있긴 잇엇는데 이벤트 넘겨주는 거에서 오류났던 거라서 무한 스크롤에 비하면 귀여운 수준….

### 한태욱

#### 담당

- 초기 eslint, prettier json파일 세팅
- 깃 커맨드
- 컴포넌트 리팩토링
- Axios 를 사용한 초기 API 파일 세팅
- 컴포넌트

  - input 컴포넌트 제작
    - textarea를 사용한 제작
  - usercard 컴포넌트 제작
    - 기존 페이지에서 데이터를 받아오는 형태의 제작
  - pagenation 컴포넌트 제작
    - 기존 상위 페이지에서 데이터를 가져옴
    - 해당 페이지에서 데이터의 갯수에 따라 가공해 페이지를 만듬
    - 페이지를 이동하는 것을 데이터에 담고 set을 통해 적용시킴
    - 상위 페이지와 연동되어 페이지네이션으로서 기능함
  - badge 컴포넌트 제작
    - 2가지의 badge를 CSS를 넣어 제작함

- 페이지
  - MainPage 제작
    - 이름을 입력하고 “질문 받기” 버튼을 클릭하면 피드를 생성합니다.
    - 피드 생성 응답을 받으면 응답으로 받은 피드 id를 활용해 “/post/{id}/answer” 페이지로 이동합니다.
  - ModalPage 제작
    - 모달의 X 버튼, 모달 내용을 벗어난 부분을 클릭하면 모달을 닫습니다.
    - 모달에 질문 내용이 없는 경우 “질문 보내기” 버튼은  비활성화 상태입니다. 질문 내용이 있는 경우 활성화 됩니다.

#### 트러블 슈팅

    1. pagenation
        - 페이지네이션을 제작하는 과정에서 가져와야 할 데이터가 정확하게 뭔지 파악하지 못하였고다. 처음에는, 2가지의 배열로 전체 데이터를 받는 배열과, 페이지의 배열 2가지를 선언해 주었으나, 데이터가 구체화 됨에 따라 페이지의 배열만을 추가하여 데이터 값을 바꿔 줌으로서 해결하였음.
    2. ModalPage
        - 모달 페이지의 창을 fixed 값으로 기준을 잡아 제작한 것은 좋았으나, 모달 페이지의 외곽 부분을 클릭했을 때, onClose 버튼을 이용해서 꺼지는 것을 넣으면 전체 아무곳을 눌러도 꺼지는 문제가 발생하였다. 즉, 모달 창 내부의 나타내어지는 페이지 혹은, inputTextArea 마저도 버튼, input 태그로서 기능을 하지 않고, 가장 바깥 div의 영역으로 판단되어 onClose 이벤트가 발생하였다.
        - onClose가 되는 영역을 판단 후, 먼저 이벤트 버블링이 아닌가 싶어서 이를 `eventPrevent`를 사용하여 막아보았고, 이것이 먹히지 않자. 여러가지 방법을 강구해 보았다. 그 중 해당 로직만 onClose를 사용할 수 있게 하였고, 이를 contains 메소드를 통해서 해결하였다. 이후, 해당 동작이 기능으로서 제대로 작동하였다.
