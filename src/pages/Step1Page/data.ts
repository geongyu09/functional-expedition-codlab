import type { QuizOption, HintItem, ExplanationItem } from "./types";

export const QUIZ_QUESTION =
  "processOrder 함수에는 크게 몇 개의 행동으로 나누어볼 수 있을까요?";

export const QUIZ_OPTIONS: QuizOption[] = [
  { id: "A", text: "1개" },
  { id: "B", text: "2개" },
  { id: "C", text: "3개" },
  { id: "D", text: "4개" },
];

export const CORRECT_OPTION_ID = "D";

export const HINTS: HintItem[] = [
  {
    emoji: "💡",
    text: "액션은 호출 시점이나 횟수에 따라 결과가 달라지는 코드입니다.",
  },
  {
    emoji: "🔍",
    text: "함수 인자로 받은 값을 읽거나 계산만 하는 코드는 액션이 아닙니다.",
  },
  {
    emoji: "📌",
    text: "외부 세계에 영향을 주거나 외부 세계로부터 영향을 받는 코드를 찾아보세요.",
  },
];

export const EXPLANATION_INTRO =
  "processOrder 함수에는 총 4개의 액션이 포함되어 있습니다.";

export const EXPLANATION_ITEMS: ExplanationItem[] = [
  {
    emoji: "1️⃣",
    text: "filterMenuList(menuList, money) — 외부 함수 호출로 부수효과가 있을 수 있습니다.",
  },
  {
    emoji: "2️⃣",
    text: 'console.log("주문 내역:", ...) — 외부 세계(콘솔)에 출력하는 액션입니다.',
  },
  {
    emoji: "3️⃣",
    text: 'console.log("결제 금액:", ...) — 동일하게 외부 출력 액션입니다.',
  },
  {
    emoji: "4️⃣",
    text: "console.log x 3 — 각 콘솔 출력은 독립된 액션으로 셉니다.",
  },
];

export const EXPLANATION_SUMMARY =
  "console.log는 외부 환경에 영향을 주는 대표적인 액션입니다. 계산(calculation)은 순수하게 값을 반환하는 코드이며, 액션과 명확히 분리해야 합니다.";

export const CODE_FILENAME = "order.js";

export const CODE_SOURCE = `// 주문을 처리하고 레시피를 발행하는 함수
// 입력: 주문하고 싶은 메뉴들, 내가 가지고 있는 금액(0원 이상)
// 출력: 주문한 메뉴들, 총 결제금액, 거스름 돈, 칼로리, 적립 포인트
function processOrder(menuList, orderedMenus, money) {
  // 구매 가능한 메뉴 필터링
  const availableMenus = filterMenuList(menuList, money);

  // '구매 가능한 메뉴' 중에서 주문한 메뉴 정보 가져오기
  const orderedItems = menuList.filter((menu) => availableMenus.includes(menu.name));

  // 총 주문 금액 계산
  let totalPrice = 0;
  for (let i = 0; i < orderedItems.length; i++) {
    totalPrice += orderedItems[i].price;
  }

  // 총 칼로리 계산 (유틸 함수 재사용을 유도하기 위해)
  // ❓ 칼로리 계산이 '주문'하는 책임에 포함될까?
  let totalKcal = 0;
  for (let i = 0; i < orderedItems.length; i++) {
    totalKcal += orderedItems[i].kcal;
  }

  // 적립 포인트 및 거스름돈 계산
  const point = totalPrice * 0.1;
  const change = money - totalPrice;

  // 메뉴 이름만 추출
  let orderedMenuNames = [];
  for (let i = 0; i < orderedItems.length; i++) {
    orderedMenuNames.push(orderedItems[i].name);
  }

  // 최종 결과 출력
  console.log("주문 내역:", orderedMenuNames.join(", "));
  console.log("결제 금액:", totalPrice, "원");
  console.log("총 칼로리:", totalKcal, "kcal");
  console.log("거스름돈:", change, "원");
  console.log("적립 포인트:", point, "점");
}

// 실행 예시
processOrder(menuList, ["볶음밥", "군만두", "냉우동"], 30000);`;
