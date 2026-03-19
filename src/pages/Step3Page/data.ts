import type { FullCodeLine } from "./types";

export interface MenuItem {
  name: string;
  price: number;
  kcal: number;
}

export const INITIAL_CODE = `// 전역 변수 menuList를 직접 참조하지 말고, 매개변수로 받아보세요! 
// 함수의 시그니처를 테스트 코드를 바탕으로 변경해보세요!

// [A]: 전역 변수 참조
function getOrderedItems(targetMenus) {
  const orderedItems = menuList.filter((menu) => targetMenus.includes(menu.name));

  return orderedItems;
}`;

export const MENU_LIST: MenuItem[] = [
  { name: "삼선짬뽕", price: 9000, kcal: 650 },
  { name: "볶음밥", price: 8000, kcal: 720 },
  { name: "탕수육", price: 18000, kcal: 980 },
  { name: "군만두", price: 6000, kcal: 420 },
  { name: "냉우동", price: 8500, kcal: 580 },
];

export const TEST_MENU_LIST: MenuItem[] = [
  { name: "삼선짬뽕", price: 12000, kcal: 800 },
  { name: "볶음밥", price: 6000, kcal: 700 },
  { name: "탕수육", price: 18000, kcal: 980 },
  { name: "군만두", price: 5000, kcal: 420 },
  { name: "냉우동", price: 8500, kcal: 580 },
  { name: "짜장면", price: 7000, kcal: 620 },
];

export const TEST_INPUT: string[] = ["삼선짬뽕", "볶음밥"];

export const TEST_EXPECTED: MenuItem[] = TEST_MENU_LIST.filter((menu) =>
  TEST_INPUT.includes(menu.name),
);

export const TEST_CODE = `const menuList = [
  { name: "삼선짬뽕", price: 12000, kcal: 800 },
  { name: "볶음밥",   price: 6000,  kcal: 700 },
  { name: "탕수육",   price: 18000, kcal: 980 },
  { name: "군만두",   price: 5000,  kcal: 420 },
  { name: "냉우동",   price: 8500,  kcal: 580 },
  { name: "짜장면",   price: 7000,  kcal: 620 },
];
const targetMenus = ["삼선짬뽕", "볶음밥"];

// ✅ 테스트 케이스
// getOrderedItems(menuList, targetMenus)
// 기댓값:
// [
//   { name: "삼선짬뽕", price: 12000, kcal: 800 },
//   { name: "볶음밥",   price: 6000,  kcal: 700 },
// ]`;

export const Q1_HINTS = [
  {
    emoji: "🔥",
    text: "액션(Action)은 실행 시점이나 횟수에 의존하며, 외부 환경에 영향을 주거나 받는 부수 효과(Side Effect)를 포함합니다.",
  },
  {
    emoji: "🧮",
    text: "계산(Calculation)은 입력값에 대해서만 결과가 결정되며, 실행 시점이나 횟수에 관계없이 항상 같은 값을 반환합니다.",
  },
  {
    emoji: "🔍",
    text: "getOrderedItems 함수가 외부 변수인 menuList를 직접 참조하고 있는지 확인해 보세요.",
  },
];

export const Q2_HINTS = [
  {
    emoji: "💡",
    text: "핵심은 암묵적 입력에 있어요! 암묵적 입력이란 함수 내부에서 직접 참조하는 외부 상태를 의미해요.",
  },
  {
    emoji: "🛠️",
    text: "함수의 매개변수를 하나 더 추가해서 menuList를 주입받도록 수정해 보세요.",
  },
];

export const FULL_CODE_LINES: FullCodeLine[] = [
  { lineNumber: 1, content: "const menuList = [", type: "normal" },
  {
    lineNumber: 2,
    content: "  { name: '삼선짬뽕', price: 9000, kcal: 650 },",
    type: "normal",
  },
  {
    lineNumber: 3,
    content: "  { name: '볶음밥', price: 8000, kcal: 720 },",
    type: "normal",
  },
  {
    lineNumber: 4,
    content: "  { name: '유니짜장', price: 9000, kcal: 650 },",
    type: "normal",
  },
  {
    lineNumber: 5,
    content: '  { name: "냉우동", price: 7000, kcal: 500 },',
    type: "normal",
  },
  { lineNumber: 6, content: "];", type: "normal" },
  { lineNumber: 7, content: "", type: "normal" },
  {
    lineNumber: 8,
    content: "function processOrder(menuList, orderedMenus, money) {",
    type: "normal",
  },
  { lineNumber: 9, content: "  // 구매 가능한 메뉴 필터링", type: "normal" },
  {
    lineNumber: 10,
    content: "  const availableMenus = filterMenuList(menuList, money);",
    type: "normal",
  },
  {
    lineNumber: 11,
    content: "  // '구매 가능한 메뉴' 중에서 주문한 메뉴 정보 가져오기",
    type: "normal",
  },
  {
    lineNumber: 12,
    content:
      "  const orderedItems = getOrderedItems(orderedMenus, availableMenus);",
    type: "highlight",
  },
  { lineNumber: 13, content: "  // 총 주문 금액 계산", type: "normal" },
  {
    lineNumber: 14,
    content: "  const totalPrice = calculateTotalPrice(orderedItems);",
    type: "normal",
  },
  { lineNumber: 15, content: "  // 총 칼로리 계산", type: "normal" },
  {
    lineNumber: 16,
    content: "  const totalKcal = calculateTotalKcal(orderedItems);",
    type: "normal",
  },
  {
    lineNumber: 17,
    content: "  // 적립 포인트 및 거스름돈 계산",
    type: "normal",
  },
  {
    lineNumber: 18,
    content: "  const point = calculatePoint(totalPrice);",
    type: "normal",
  },
  {
    lineNumber: 19,
    content: "  const change = calculateChange(money, totalPrice);",
    type: "normal",
  },
  { lineNumber: 20, content: "  // 메뉴 이름만 추출", type: "normal" },
  {
    lineNumber: 21,
    content: "  const orderedMenuNames = getMenuNames(orderedItems);",
    type: "normal",
  },
  { lineNumber: 22, content: "  // 최종 결과 출력", type: "normal" },
  {
    lineNumber: 23,
    content:
      "  printReceipt(orderedMenuNames, totalPrice, totalKcal, change, point);",
    type: "normal",
  },
  { lineNumber: 24, content: "}", type: "normal" },
  { lineNumber: 25, content: "", type: "normal" },
  { lineNumber: 26, content: "// 실행 예시", type: "normal" },
  {
    lineNumber: 27,
    content: 'processOrder(menuList, ["볶음밥", "군만두", "냉우동"], 30000);',
    type: "normal",
  },
  { lineNumber: 28, content: "", type: "normal" },
  {
    lineNumber: 29,
    content: "function filterMenuList(menuList, money) {",
    type: "normal",
  },
  { lineNumber: 30, content: "  return menuList", type: "normal" },
  {
    lineNumber: 31,
    content: "    .filter((menu) => menu.price <= money)",
    type: "normal",
  },
  { lineNumber: 32, content: "    .map((menu) => menu.name);", type: "normal" },
  { lineNumber: 33, content: "}", type: "normal" },
  { lineNumber: 34, content: "", type: "normal" },
  {
    lineNumber: 35,
    content: "function getOrderedItems(orderedMenus, availableMenus) {",
    type: "highlight",
  },
  {
    lineNumber: 36,
    content: "  return menuList.filter(",
    type: "highlight",
  },
  {
    lineNumber: 37,
    content: "    (menu) =>",
    type: "highlight",
  },
  {
    lineNumber: 38,
    content: "      orderedMenus.includes(menu.name) &&",
    type: "highlight",
  },
  {
    lineNumber: 39,
    content: "      availableMenus.includes(menu.name)",
    type: "highlight",
  },
  {
    lineNumber: 40,
    content: "  );",
    type: "highlight",
  },
  { lineNumber: 41, content: "}", type: "highlight" },
  { lineNumber: 42, content: "", type: "normal" },
  {
    lineNumber: 43,
    content: "function calculateTotalPrice(orderedItems) {",
    type: "normal",
  },
  { lineNumber: 44, content: "  let totalPrice = 0;", type: "normal" },
  {
    lineNumber: 45,
    content: "  for (let i = 0; i < orderedItems.length; i++) {",
    type: "normal",
  },
  {
    lineNumber: 46,
    content: "    totalPrice += orderedItems[i].price;",
    type: "normal",
  },
  { lineNumber: 47, content: "  }", type: "normal" },
  { lineNumber: 48, content: "  return totalPrice;", type: "normal" },
  { lineNumber: 49, content: "}", type: "normal" },
  { lineNumber: 50, content: "", type: "normal" },
  {
    lineNumber: 51,
    content: "function calculateTotalKcal(orderedItems) {",
    type: "normal",
  },
  { lineNumber: 52, content: "  let totalKcal = 0;", type: "normal" },
  {
    lineNumber: 53,
    content: "  for (let i = 0; i < orderedItems.length; i++) {",
    type: "normal",
  },
  {
    lineNumber: 54,
    content: "    totalKcal += orderedItems[i].kcal;",
    type: "normal",
  },
  { lineNumber: 55, content: "  }", type: "normal" },
  { lineNumber: 56, content: "  return totalKcal;", type: "normal" },
  { lineNumber: 57, content: "}", type: "normal" },
  { lineNumber: 58, content: "", type: "normal" },
  {
    lineNumber: 59,
    content: "function calculatePoint(totalPrice) {",
    type: "normal",
  },
  {
    lineNumber: 60,
    content: "  return Math.floor(totalPrice * 0.1);",
    type: "normal",
  },
  { lineNumber: 61, content: "}", type: "normal" },
  { lineNumber: 62, content: "", type: "normal" },
  {
    lineNumber: 63,
    content: "function calculateChange(money, totalPrice) {",
    type: "normal",
  },
  { lineNumber: 64, content: "  return money - totalPrice;", type: "normal" },
  { lineNumber: 65, content: "}", type: "normal" },
  { lineNumber: 66, content: "", type: "normal" },
  {
    lineNumber: 67,
    content: "function getMenuNames(orderedItems) {",
    type: "normal",
  },
  { lineNumber: 68, content: "  let orderedMenuNames = [];", type: "normal" },
  {
    lineNumber: 69,
    content: "  for (let i = 0; i < orderedItems.length; i++) {",
    type: "normal",
  },
  {
    lineNumber: 70,
    content: "    orderedMenuNames.push(orderedItems[i].name);",
    type: "normal",
  },
  { lineNumber: 71, content: "  }", type: "normal" },
  { lineNumber: 72, content: "  return orderedMenuNames;", type: "normal" },
  { lineNumber: 73, content: "}", type: "normal" },
  { lineNumber: 74, content: "", type: "normal" },
  {
    lineNumber: 75,
    content:
      "function printReceipt(orderedMenuNames, totalPrice, totalKcal, change, point) {",
    type: "normal",
  },
  {
    lineNumber: 76,
    content: '  console.log("주문 내역:", orderedMenuNames.join(", "));',
    type: "normal",
  },
  {
    lineNumber: 77,
    content: '  console.log("결제 금액:", totalPrice, "원");',
    type: "normal",
  },
  {
    lineNumber: 78,
    content: '  console.log("총 칼로리:", totalKcal, "kcal");',
    type: "normal",
  },
  {
    lineNumber: 79,
    content: '  console.log("거스름돈:", change, "원");',
    type: "normal",
  },
  {
    lineNumber: 80,
    content: '  console.log("적립 포인트:", point, "점");',
    type: "normal",
  },
  { lineNumber: 81, content: "}", type: "normal" },
];
