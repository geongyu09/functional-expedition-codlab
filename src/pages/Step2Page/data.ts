import type { CodeBlock, CodeSegment, FunctionSignature } from './types'

export const CODE_BLOCKS: CodeBlock[] = [
  {
    id: 1,
    code: `menuList.filter((menu) => availableMenus.includes(menu.name))`,
    matchesSignatureId: 1,
    isExpression: true,
  },
  {
    id: 2,
    code: `let totalPrice = 0;\nfor (let i = 0; i < orderedItems.length; i++) {\n  totalPrice += orderedItems[i].price;\n}\nreturn totalPrice;`,
    matchesSignatureId: 2,
    isExpression: false,
  },
  {
    id: 3,
    code: `let totalKcal = 0;\nfor (let i = 0; i < orderedItems.length; i++) {\n  totalKcal += orderedItems[i].kcal;\n}\nreturn totalKcal;`,
    matchesSignatureId: 3,
    isExpression: false,
  },
  {
    id: 4,
    code: `totalPrice * 0.1`,
    matchesSignatureId: 4,
    isExpression: true,
  },
  {
    id: 5,
    code: `money - totalPrice`,
    matchesSignatureId: 5,
    isExpression: true,
  },
  {
    id: 6,
    code: `let orderedMenuNames = [];\nfor (let i = 0; i < orderedItems.length; i++) {\n  orderedMenuNames.push(orderedItems[i].name);\n}\nreturn orderedMenuNames;`,
    matchesSignatureId: 6,
    isExpression: false,
  },
  {
    id: 7,
    code: `console.log("주문 내역:", orderedMenuNames.join(", "));\nconsole.log("결제 금액:", totalPrice, "원");\nconsole.log("총 칼로리:", totalKcal, "kcal");\nconsole.log("거스름돈:", change, "원");\nconsole.log("적립 포인트:", point, "점");`,
    matchesSignatureId: 7,
    isExpression: false,
  },
]

export const FULL_FUNCTION_SEGMENTS: CodeSegment[] = [
  { id: 's0', type: 'static', code: 'function processOrder(menuList, orderedMenus, money) {\n  // 구매 가능한 메뉴 필터링\n  const availableMenus = filterMenuList(menuList, money);\n\n  // \'구매 가능한 메뉴\' 중에서 주문한 메뉴 정보 가져오기\n  const orderedItems = ' },
  { id: 'b1', type: 'block', blockId: 1 },
  { id: 's1', type: 'static', code: ';\n\n  // 총 주문 금액 계산\n  ' },
  { id: 'b2', type: 'block', blockId: 2 },
  { id: 's2', type: 'static', code: '\n\n  // 총 칼로리 계산 (유틸 함수 재사용을 유도하기 위해)\n  // [?] 칼로리 계산이 \'주문\'하는 책임에 포함될까?\n  ' },
  { id: 'b3', type: 'block', blockId: 3 },
  { id: 's3', type: 'static', code: '\n\n  // 적립 포인트 및 거스름돈 계산\n  const point = ' },
  { id: 'b4', type: 'block', blockId: 4 },
  { id: 's4', type: 'static', code: ';\n  const change = ' },
  { id: 'b5', type: 'block', blockId: 5 },
  { id: 's5', type: 'static', code: ';\n\n  // 메뉴 이름만 추출\n  ' },
  { id: 'b6', type: 'block', blockId: 6 },
  { id: 's6', type: 'static', code: '\n\n  // 최종 결과 출력\n  ' },
  { id: 'b7', type: 'block', blockId: 7 },
  { id: 's7', type: 'static', code: '\n}\n\n// 실행 예시\nprocessOrder(menuList, ["볶음밥", "군만두", "냉우동"], 30000);' },
]

export const ABSTRACTED_CODE = `function processOrder(menuList, orderedMenus, money) {
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
processOrder(menuList, ["볶음밥", "군만두", "냉우동"], 30000);`

export const FUNCTION_SIGNATURES: FunctionSignature[] = [
  {
    id: 1,
    signature: 'getOrderedItems(menuList, orderedMenus)',
    functionName: 'getOrderedItems',
  },
  {
    id: 2,
    signature: 'calculateTotalPrice(orderedItems)',
    functionName: 'calculateTotalPrice',
  },
  {
    id: 3,
    signature: 'calculateTotalKcal(orderedItems)',
    functionName: 'calculateTotalKcal',
  },
  {
    id: 4,
    signature: 'calculatePoint(totalPrice)',
    functionName: 'calculatePoint',
  },
  {
    id: 5,
    signature: 'calculateChange(money, totalPrice)',
    functionName: 'calculateChange',
  },
  {
    id: 6,
    signature: 'getMenuNames(orderedItems)',
    functionName: 'getMenuNames',
  },
  {
    id: 7,
    signature: 'printReceipt(orderedMenuNames, totalPrice, totalKcal, change, point)',
    functionName: 'printReceipt',
  },
]
