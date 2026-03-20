import { HighlightGroup } from "../../components/CodePanel";

export const QUIZ_QUESTION =
  "processOrder 함수를 함수형의 관점에서 한번 분리해볼까요?!";

export const CODE_FILENAME = "order.js";

export const CODE_SOURCE = `let menuList = [
  { name: "삼선짬뽕", price: 12000, kcal: 800 },
  { name: "볶음밥", price: 6000, kcal: 700 },
  { name: "유니짜장", price: 9000, kcal: 650 },
  { name: "냉우동", price: 7000, kcal: 500 },
  { name: "군만두", price: 5000, kcal: 400 },
];

// [C]: 가격을 기준으로 메뉴 필터링
function filterMenuList(menus, money) {
  const list = menus.filter((menu) => menu.price <= money);
  return list;
}

// 주문을 처리하고 레시피를 발행하는 함수
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
  { start: 19, end: 20, color: "rgba(255, 99, 132, 0.2)" }, // Group 1: 구매 가능한 메뉴 필터링
  { start: 22, end: 23, color: "rgba(54, 162, 235, 0.2)" }, // Group 2: 주문 가능한 메뉴 추출
  { start: 25, end: 35, color: "rgba(255, 206, 86, 0.2)" }, // Group 3: 총 결제 금액 & 칼로리 계산
  { start: 37, end: 39, color: "rgba(75, 192, 192, 0.2)" }, // Group 4: 거스름돈 & 적립 포인트 계산
  { start: 41, end: 45, color: "rgba(153, 102, 255, 0.2)" }, // Group 5: 주문 결과 가공
  { start: 47, end: 52, color: "rgba(255, 159, 64, 0.2)" }, // Group 6: 최종 결과 출력
];
