const appendStyle = document.createElement('style');
(function () {
  appendStyle.textContent = `
 html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
      }

      #map {
        width: 100%;
        height: 100%;
        border: 0;
        padding-top: 103px;
      }

      .pointNum05 {
        position: absolute;
        left: 866px;
        top: 631px;
      }

      .pointNum07 {
        position: absolute;
        left: 396px;
        top: 489px;
      }

      .pointNum09 {
        position: absolute;
        left: 589px;
        top: 320px;
      }

      .map-point img {
        height: 60px;
        width: 60px;
        background-color: transparent;
      }

      .map-point span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -75%);
        color: #7e30e1;
        font-size: 24px;
        font-weight: 700;
        line-height: 29.05px;
      }

      .zoom-control {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 47px;
        height: 114px;
        border: 3px solid #7e30e1;
        border-radius: 20px;
        background-color: rgba(243, 248, 255, 0.5);
        position: absolute;
        right: 31px;
        bottom: 137px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      .zoom-in,
      .zoom-out {
        font-size: 24px;
        color: #7e30e1;
        font-weight: bold;
        line-height: 1;
        cursor: pointer;
      }

      .zoom-in {
        margin-top: 10px;
        font-size: 36px;
      }

      .zoom-out {
        margin-bottom: 10px;
        font-size: 30px;
      }

      .zoom-control::before {
        content: '';
        border-bottom: 3px solid #7e30e1;
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .dropdown-wrap {
        display: flex;
        gap: 31px;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        backdrop-filter: blur(15px);
        background: rgba(255, 255, 255, 0.15);
        width: 100%;
        padding: 24px 0;
      }

      .dropdown {
        min-width: 504px;
        max-width: 400px;
        max-height: 76px;
        background: rgba(255, 255, 255, 0.4);
        border: 3px solid #7e30e1;
        border-radius: 15px;
        position: relative;
        cursor: pointer;
        backdrop-filter: blur(4px);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      .dropdown-text {
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 400;
        text-align: left;
        color: #7e30e1;
        line-height: 76px;
        padding-left: 23px;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
      }

      .dropdown-arrow {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
      }

      .dropdown-arrow img {
        width: 16px;
        height: 16px;
      }

      .menu-container {
        display: none;
        border: 1px solid #7e30e1;
        min-width: 694px;
        height: 524px;
        margin: 0 auto;
        position: absolute;
        top: 150%;
        background: #f3f8ff;
        z-index: 10;
        color: #7e30e1;
      }

      .menu-flex {
        display: flex;
        overflow-y: auto;
        min-height: 384px;
      }

      .categories-container {
        border-right: 1px solid #7e30e1;
        flex: 1 1 200px;
        overflow-y: auto;
        min-height: 454px;
        max-width: 343px;
      }
      .categories-container.height {
        min-height: 384px;
      }

      .category {
        padding: 29px 53px;
        cursor: pointer;
        transition: background-color 0.3s;
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 29.05px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
      }

      .category.active {
        background-color: #7e30e1;
        color: white;
      }

      .subcategories {
        flex: 1 1 200px;
        overflow-y: auto;
        max-height: 384px;
        overflow-x: hidden;
      }

      .subcategories.scroll {
        max-height: 100%;
      }

      .subcategories .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 18px;
        justify-content: center;
        align-items: center;
      }

      .content.height {
        height: 384px;
        position: relative;
        top: 0;
      }

      .content.height.locate {
        height: 451px;
        position: relative;
        top: 0;
      }

      .content.constent-left {
        justify-content: start;
        align-items: start;
        text-align: start;
        padding: 24px 30px;
        box-sizing: border-box;
      }

      .subcategories .jobType {
        align-items: start;
        justify-content: start;
        padding: 22px 0px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        width: 100%;
        height: 100%;
        transform: translateX(73px);
      }

      .custom-checkbox {
        position: relative;
        padding-left: 57px;
        cursor: pointer;
        user-select: none;
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 29.05px;
        text-align: left;
      }

      .custom-checkbox.position {
        position: relative;
        padding-left: 24px;
        cursor: pointer;
        user-select: none;
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 29.05px;
        text-align: left;
      }

      .custom-checkbox input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }

      .checkmark {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        border: 1px solid #7e30e1;
      }

      .custom-checkbox input:checked ~ .checkmark {
        background-color: #7e30e1;
        border-color: #7e30e1;
      }

      .menu-header {
        background: #f3f8ff;
        border-bottom: 1px solid #7e30e1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px 9px 22px 36px;
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
        height: 70px;
        box-sizing: border-box;
      }

      .position-header {
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .menu-footer {
        background: #f3f8ff;
        border-top: 1px solid #7e30e1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 53px;
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
        max-height: 70px;
        box-sizing: border-box;
      }

      .clear-conditions.locate {
        display: flex;
        align-items: center;
        cursor: pointer;
        transform: translateX(60px);
      }

      .clear-conditions.position {
        display: flex;
        align-items: center;
        cursor: pointer;
        transform: translateX(20px);
      }

      .clear-conditions img {
        vertical-align: middle;
        padding-bottom: 6px;
        padding-top: 5px;
      }

      .close-button {
        background: none;
        border: none;
        color: #7e30e1;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 29.05px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
      }

      .close-button img {
        margin-left: 8px;
      }

      .confirm-button {
        background: none;
        border: none;
        color: #7e30e1;
        cursor: pointer;
        align-items: center;
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 29.05px;
        text-align: left;
        display: none;
      }

      .confirm-button img {
        margin-left: 8px;
      }

      .continue-button {
        background: none;
        border: none;
        color: #7e30e1;
        cursor: pointer;
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 400;
        line-height: 29.05px;
        text-align: start;
        position: absolute;
        right: 55px;
        bottom: 96px;
      }

      .continue-button img{
        padding-left: 5px;
        transform: transformY(5px)
      }

      .text-start {
        text-align: start;
      }

      .search-box {
        display: flex;
        align-items: center;
        border: 1px solid #7e30e1;
        border-radius: 20px;
        padding: 10px;
        width: 320px;
        background: #ffffff80;
      }

      .search-box:focus-within {
        border-color: #7e30e1;
      }

      .search-input {
        border: none;
        outline: none;
        flex: 1;
        font-size: 16px;
        color: #333;
      }

      .search-input::placeholder {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.94px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
      }

      .search-button {
        background: none;
        border: none;
        cursor: pointer;
        color: #a24cd3;
        font-size: 16px;
      }

      .search-button img {
        width: 20px;
        height: 20px;
      }
      

  `;
  document.head.appendChild(appendStyle);
})();
