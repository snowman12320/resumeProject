const POSTITON_SELECTORS = {
  dropdown: '#positionDropdown',
  category: '.category',
  subcategories: '.subcategories',
  menuContainer: '.menu-container',
  dropdownButton: '.dropdown-button',
  closeButton: '.close-button',
  confirmButton: '.confirm-button',
  positionFinalConfirm: '#positionFinalConfirm',
  clearConditions: '.clear-conditions',
  continueButton: '.continue-button',
  checkboxItem: '.checkbox-item',
};

function initializePositionDropdown() {
  try {
    const dropdown = document.querySelector('#positionDropdown');
    if (!dropdown) return;

    const dropdownButton = dropdown.querySelector(POSTITON_SELECTORS.dropdownButton);
    const menuContainer = dropdown.querySelector(POSTITON_SELECTORS.menuContainer);
    const closeButtons = dropdown.querySelectorAll(POSTITON_SELECTORS.closeButton);
    const clearConditions = dropdown.querySelector(POSTITON_SELECTORS.clearConditions);
    const confirmButton = dropdown.querySelector(POSTITON_SELECTORS.confirmButton);
    const positionFinalConfirm = dropdown.querySelector(POSTITON_SELECTORS.positionFinalConfirm);
    const continueButton = dropdown.querySelector(POSTITON_SELECTORS.continueButton);
    const checkboxes = dropdown.querySelectorAll(POSTITON_SELECTORS.checkboxItem);

    dropdownButton.addEventListener('click', () => toggleMenu(menuContainer));

    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        toggleMenu(menuContainer, false);
      });
    });

    if (clearConditions) {
      clearConditions.addEventListener('click', () => clearAllSelections(dropdown));
    }

    if (confirmButton) {
      confirmButton.addEventListener('click', () => {
        handleConfirm(dropdown);
        toggleMenu(menuContainer, false);
      });
    }

    if (positionFinalConfirm) {
      positionFinalConfirm.addEventListener('click', () => {
        handleConfirm(dropdown);
        toggleMenu(menuContainer, false);
      });
    }

    if (continueButton) {
      continueButton.addEventListener('click', () => handleContinue(dropdown));
    }

    dropdown.querySelectorAll(POSTITON_SELECTORS.category).forEach(category => {
      category.addEventListener('click', () => handleCategoryClick(category, dropdown));
    });

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);
        confirmButton.style.display = isAnyChecked ? 'flex' : 'none';
        positionFinalConfirm.style.display = isAnyChecked ? 'flex' : 'none';
        closeButtons.forEach(button => {
          button.style.display = isAnyChecked ? 'none' : 'flex';
        });
      });
    });
  } catch (error) {
    console.error('初始化職務類別下拉選單時發生錯誤:', error);
  }
}

function handleCategoryClick(selectedCategory, dropdown) {
  dropdown.querySelectorAll(POSTITON_SELECTORS.category).forEach(c => {
    c.classList.remove('active');
  });

  selectedCategory.classList.add('active');

  const targetCategory = selectedCategory.dataset.category;
  dropdown.querySelectorAll(POSTITON_SELECTORS.subcategories).forEach(subcategory => {
    subcategory.style.display = subcategory.dataset.parent === targetCategory ? 'block' : 'none';
  });
}

function toggleMenu(menuContainer, show) {
  if (!menuContainer) return;

  const currentDisplay = menuContainer.style.display;
  menuContainer.style.display =
    show === undefined ? (currentDisplay === 'none' ? 'block' : 'none') : show ? 'block' : 'none';

  const nextSection = document.querySelector('.jobCategories');
  if (nextSection) {
    nextSection.style.display = 'none';
  }
}

function clearAllSelections(dropdown) {
  dropdown.querySelectorAll(POSTITON_SELECTORS.checkboxItem).forEach(checkbox => {
    checkbox.checked = false;
  });

  const dropdownText = dropdown.querySelector('.dropdown-text');
  dropdownText.textContent = '選擇地區';
}

function handleConfirm(dropdown) {
  const selectedItems = Array.from(dropdown.querySelectorAll(POSTITON_SELECTORS.checkboxItem))
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.parentElement.textContent.trim());

  const dropdownText = dropdown.querySelector('.dropdown-text');
  if (selectedItems.length > 0) {
    dropdownText.textContent = selectedItems.join(', ');
  } else {
    dropdownText.textContent =
      dropdownText.getAttribute('data-default') || dropdownText.textContent;
  }

  const menuContainer = dropdown.querySelector(POSTITON_SELECTORS.menuContainer);
  toggleMenu(menuContainer, false);
}

function handleContinue(dropdown) {
  const nextSection = dropdown.querySelector('.jobCategories');
  if (nextSection) {
    nextSection.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', initializePositionDropdown);
