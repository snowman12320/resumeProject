// JavaScript 中設定 placeholder 樣式
inputPlaceholder.style.setProperty('::placeholder', '#9777bccc');
// 或者
inputPlaceholder.style.setProperty('placeholder-color', '#9777bccc');
-
// 1. 先在 CSS 中定義樣式
const style = document.createElement('style');
style.textContent = `
  .custom-placeholder::placeholder {
    color: #9777bccc;
  }
`;
document.head.appendChild(style);
// 2. 為 input 元素添加類別
inputPlaceholder.classList.add('custom-placeholder');
-
// 動態插入樣式規則
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  #${inputPlaceholder.id}::placeholder {
    color: #9777bccc;
  }
`, styleSheet.cssRules.length);