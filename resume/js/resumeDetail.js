function addPlaceholderStyle() {
  appendStyle.textContent = `
    body{
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      background: linear-gradient(122.22deg, rgba(0, 0, 0, 0.8) 34.26%, rgba(73, 16, 139, 0.8) 69.33%);
      background-size: 250% 250%;
    }
    
    .resume-input::placeholder {
      color: #9777bccc;
    }
  `;
  document.head.appendChild(appendStyle);
}
addPlaceholderStyle();
