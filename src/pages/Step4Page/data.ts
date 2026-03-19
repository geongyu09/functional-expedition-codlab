export const CALCULATE_TOTAL_PRICE_CODE = `function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  for (let i = 0; i < orderedItems.length; i++) {
    totalPrice += orderedItems[i].price;
  }
  return totalPrice;
}`;

export const CALCULATE_TOTAL_KCAL_CODE = `function calculateTotalKcal(orderedItems) {
  let totalKcal = 0;
  for (let i = 0; i < orderedItems.length; i++) {
    totalKcal += orderedItems[i].kcal;
  }
  return totalKcal;
}`;

export const INITIAL_CODE = `function sum(items, property) {
//  let total = 0;
//  for (let i = 0; i < items.length; i++) {
//    total += items[i][property];
//  }
//
//  return total;
}`;

export const PROCESS_ORDER_CODE = `function processOrder(menuList, orderedMenus, money) {
  // 구매 가능한 메뉴 필터링
  const availableMenus = filterMenuList(menuList, money);
  // '구매 가능한 메뉴' 중에서 주문한 메뉴 정보 가져오기
  const orderedItems = getOrderedItems(orderedMenus, availableMenus);
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
}`;

import type { OrderItem } from './types'

export const TEST_ITEMS: OrderItem[] = [
  { name: '삼선짬뽕', price: 12000, kcal: 800 },
  { name: '볶음밥', price: 6000, kcal: 700 },
]

export const TEST_PRICE_EXPECTED = 18000
export const TEST_KCAL_EXPECTED = 1500
