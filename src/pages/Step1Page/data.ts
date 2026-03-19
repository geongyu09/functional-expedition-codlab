import type { QuizOption, HintItem, ExplanationItem } from "./types";
import type { HighlightGroup } from "./components/CodePanel";

export const QUIZ_QUESTION =
  "processOrder 함수에는 크게 몇 개의 행동으로 나누어볼 수 있을까요?";

export const QUIZ_OPTIONS: QuizOption[] = [
  { id: "A", text: "2개" },
  { id: "B", text: "3개" },
  { id: "C", text: "4개" },
  { id: "D", text: "5개" },
];

export const CORRECT_OPTION_ID = "D";

export const HINTS: HintItem[] = [
  {
    emoji: "💡",
    text: "코드를 자세히 읽어보고, '동작' 단위로 코드를 나누어 보세요.",
  },
  // {
  //   emoji: "🔍",
  //   text: "함수 인자로 받은 값을 읽거나 계산만 하는 코드는 액션이 아닙니다.",
  // },
  // {
  //   emoji: "📌",
  //   text: "외부 세계에 영향을 주거나 외부 세계로부터 영향을 받는 코드를 찾아보세요.",
  // },
];

export const EXPLANATION_INTRO =
  "processOrder 함수에는 총 5개의 동작이 포함되어 있습니다.";

export const EXPLANATION_ITEMS: ExplanationItem[] = [
  {
    emoji: "1️⃣",
    text: "구매 가능한 메뉴를 필터링한다\n→ 가지고 있는 금액(money) 기준으로 살 수 있는 메뉴 목록을 만듭니다.",
  },
  {
    emoji: "2️⃣",
    text: "주문한 메뉴 중 실제 주문 가능한 메뉴를 추출한다\n→ 필터링된 메뉴 기준으로 최종 주문 대상 메뉴들을 결정합니다.",
  },
  {
    emoji: "3️⃣",
    text: "총 결제 금액과 총 칼로리를 계산한다\n→ orderedItems를 순회하면서 price와 kcal을 각각 합산합니다.",
  },
  {
    emoji: "4️⃣",
    text: "거스름돈과 적립 포인트를 계산한다\n→ 거스름돈(money - totalPrice)과 포인트(totalPrice의 10%)를 계산합니다.",
  },
  {
    emoji: "5️⃣",
    text: "주문 결과를 가공하고 출력한다\n→ 메뉴 이름 리스트 생성 후, 주문 내역 / 금액 / 칼로리 / 거스름돈 / 포인트를 콘솔에 출력합니다.",
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

export const CODE_HIGHLIGHTS: HighlightGroup[] = [
  { start: 5, end: 6, color: "rgba(255, 99, 132, 0.2)" }, // Group 1: 구매 가능한 메뉴 필터링
  { start: 8, end: 9, color: "rgba(54, 162, 235, 0.2)" }, // Group 2: 주문 가능한 메뉴 추출
  { start: 11, end: 22, color: "rgba(255, 206, 86, 0.2)" }, // Group 3: 총 결제 금액 & 칼로리 계산
  { start: 24, end: 26, color: "rgba(75, 192, 192, 0.2)" }, // Group 4: 거스름돈 & 적립 포인트 계산
  { start: 28, end: 39, color: "rgba(153, 102, 255, 0.2)" }, // Group 5: 주문 결과 가공 및 출력
];
