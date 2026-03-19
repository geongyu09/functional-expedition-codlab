import type { Link, Node } from "./types";

export const CALL_TREE_NODES: Node[] = [
  // Layer 0: 비즈니스 로직
  { id: "processOrder", name: "processOrder()", layer: 0, x: 0 },

  // Layer 1: 주요 기능 함수
  { id: "filterMenuList", name: "filterMenuList()", layer: 1, x: -525 },
  { id: "getOrderedItems", name: "getOrderedItems()", layer: 1, x: -375 },
  {
    id: "calculateTotalPrice",
    name: "calculateTotalPrice()",
    layer: 1,
    x: -225,
  },
  { id: "calculateTotalKcal", name: "calculateTotalKcal()", layer: 1, x: -75 },
  { id: "calculatePoint", name: "calculatePoint()", layer: 1, x: 75 },
  { id: "calculateChange", name: "calculateChange()", layer: 1, x: 225 },
  { id: "getMenuNames", name: "getMenuNames()", layer: 1, x: 375 },
  { id: "printReceipt", name: "printReceipt()", layer: 1, x: 525 },

  // Layer 2: 유틸 함수
  { id: "sum", name: "sum()", layer: 2, x: -150 }, // TotalPrice와 TotalKcal의 중앙
  { id: "multiply", name: "multiply()", layer: 2, x: 75 },
  { id: "subtract", name: "subtract()", layer: 2, x: 225 },
  { id: "filterElementByKey", name: "filterElementByKey()", layer: 2, x: 375 },

  // Layer 3: 기본 JS 기능 (중복 없이 단일 노드로 정의)
  { id: "filter", name: "filter", layer: 3, x: -525 },
  { id: "for", name: "for loop", layer: 3, x: -375 },
  { id: "length", name: "length", layer: 3, x: -225 },
  { id: "op_mul", name: "*", layer: 3, x: -75 },
  { id: "op_sub", name: "-", layer: 3, x: 75 },
  { id: "push", name: "push", layer: 3, x: 225 },
  { id: "join", name: "join", layer: 3, x: 375 },
  { id: "console", name: "console", layer: 3, x: 525 },
];

export const CALL_TREE_LINKS: Link[] = [
  // Layer 0 -> Layer 1
  { source: "processOrder", target: "filterMenuList" },
  { source: "processOrder", target: "getOrderedItems" },
  { source: "processOrder", target: "calculateTotalPrice" },
  { source: "processOrder", target: "calculateTotalKcal" },
  { source: "processOrder", target: "calculatePoint" },
  { source: "processOrder", target: "calculateChange" },
  { source: "processOrder", target: "getMenuNames" },
  { source: "processOrder", target: "printReceipt" },

  // Layer 1 -> Layer 2 or Layer 3
  { source: "getOrderedItems", target: "filter" },
  { source: "calculateTotalPrice", target: "sum" },
  { source: "calculateTotalKcal", target: "sum" },
  { source: "calculatePoint", target: "multiply" },
  { source: "calculateChange", target: "subtract" },
  { source: "getMenuNames", target: "filterElementByKey" },
  { source: "printReceipt", target: "join" },
  { source: "printReceipt", target: "console" },

  // Layer 2 -> Layer 3 (다중 연결)
  { source: "sum", target: "for" },
  { source: "sum", target: "length" },
  { source: "multiply", target: "op_mul" },
  { source: "subtract", target: "op_sub" },
  { source: "filterElementByKey", target: "for" },
  { source: "filterElementByKey", target: "length" },
  { source: "filterElementByKey", target: "push" },
];

export const LAYERS = [
  "비즈니스 로직",
  "주요 기능 함수",
  "유틸 함수",
  "기본 JS 기능",
];

export const BEFORE_CODE_ORDERED = `const menuList = [
  { name: "삼선짬뽕", price: 12000, kcal: 800 },
  { name: "볶음밥",   price: 6000,  kcal: 700 },
  { name: "탕수육",   price: 18000, kcal: 980 },
  { name: "군만두",   price: 5000,  kcal: 420 },
  { name: "냉우동",   price: 8500,  kcal: 580 },
  { name: "짜장면",   price: 7000,  kcal: 620 },
];

function getOrderedItems(targetMenus) {
  const orderedItems = menuList.filter((menu) =>
    targetMenus.includes(menu.name));

  return orderedItems;
}

// 실행 예시
const result = getOrderedItems(["볶음밥", "군만두", "냉우동"]);
console.log(result); // 어딘가에서 menuList를 변경하면 결과가 달라질 수 있음!`;

export const AFTER_CODE_ORDERED = `const menuList = [
  { name: "삼선짬뽕", price: 12000, kcal: 800 },
  { name: "볶음밥",   price: 6000,  kcal: 700 },
  { name: "탕수육",   price: 18000, kcal: 980 },
  { name: "군만두",   price: 5000,  kcal: 420 },
  { name: "냉우동",   price: 8500,  kcal: 580 },
  { name: "짜장면",   price: 7000,  kcal: 620 },
];

function getOrderedItems(menuList, targetMenus) {
  const orderedItems = menuList.filter((menu) =>
    targetMenus.includes(menu.name));

  return orderedItems;
}

// 실행 예시
const result = getOrderedItems(menuList, ["볶음밥", "군만두", "냉우동"]);
console.log(result); // menuList를 명시적으로 전달하기 때문에, 동일한 호출에 대해 항상 동일한 결과를 보장함!`;

export const BEFORE_CODE = `function processOrder(menuList, orderedMenus, money) {
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

export const AFTER_CODE = `function processOrder(menuList, orderedMenus, money) {
  // 구매 가능한 메뉴 필터링
  const availableMenus = filterMenuList(menuList, money);

  // '구매 가능한 메뉴' 중에서 주문한 메뉴 정보 가져오기
  const orderedItems = getOrderedItems(availableMenus, orderedMenus);

  // 총 주문 금액 계산
  const totalPrice = calculateTotalPrice(orderedItems);

  // 총 칼로리 계산
  const totalKcal = calculateTotalKcal(orderedItems);

  // 적립 포인트 및 거스름돈 계산
  const point = calculatePoint(totalPrice);
  const change = calculateChange(money, totalPrice);

  // 메뉴 이름만 추출
  const orderedMenuNames = getMenuNames(orderedItems);

  // 최종 결과 출력
  printReceipt(orderedMenuNames, totalPrice, totalKcal, change, point);
}

// 실행 예시
processOrder(menuList, ["볶음밥", "군만두", "냉우동"], 30000);`;

export const BEFORE_CODE_2 = `// 주문 항목의 총 가격을 계산한다
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  for (let i = 0; i < orderedItems.length; i++) {
    totalPrice += orderedItems[i].price;
  }
  return totalPrice;
}

// 주문 항목의 총 칼로리를 계산한다
function calculateTotalKcal(orderedItems) {
  let totalKcal = 0;
  for (let i = 0; i < orderedItems.length; i++) {
    totalKcal += orderedItems[i].kcal;
  }
  return totalKcal;
}

// 총 가격을 기반으로 적립 포인트를 계산한다
function calculatePoint(totalPrice) {
  return totalPrice * 0.1;
}

// 지불 금액에서 총 가격을 뺀 거스름돈을 계산한다
function calculateChange(money, totalPrice) {
  return money - totalPrice;
}

// 주문 항목 목록에서 메뉴 이름만 추출한다
function getMenuNames(items) {
  let names = [];
  for (let i = 0; i < items.length; i++) {
    names.push(items[i].name);
  }
  return names;
}`;

export const AFTER_CODE_2 = `// 주문 항목의 총 가격을 계산한다
function calculateTotalPrice(orderedItems) {
  return sum(orderedItems, 'price');
}

// 주문 항목의 총 칼로리를 계산한다
function calculateTotalKcal(orderedItems) {
  return sum(orderedItems, 'kcal');
}

// 총 가격을 기반으로 적립 포인트를 계산한다
function calculatePoint(totalPrice) {
  return multiply(totalPrice, 0.1);
}

// 지불 금액에서 총 가격을 뺀 거스름돈을 계산한다
function calculateChange(money, totalPrice) {
  return subtract(money, totalPrice);
}

// 주문 항목 목록에서 메뉴 이름만 추출한다
function getMenuNames(items) {
  return filterElementByKey(items, "name");
}`;
