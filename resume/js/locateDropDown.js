const LOCATE_SELECTORS = {
  dropdown: '#locationDropdown',
  category: '.category',
  subcategories: '.subcategories', 
  menuContainer: '.menu-container',
  dropdownButton: '.dropdown-button',
  closeButton: '.close-button',
  confirmButton: '.confirm-button',
  clearConditions: '.clear-conditions',
  continueButton: '.continue-button',
  checkboxItem: '.checkbox-item'
};

function initializeLocationDropdown() {
  try {
    const dropdown = document.querySelector(LOCATE_SELECTORS.dropdown);
    if (!dropdown) return;

    const dropdownButton = dropdown.querySelector(LOCATE_SELECTORS.dropdownButton);
    const menuContainer = dropdown.querySelector(LOCATE_SELECTORS.menuContainer);
    const closeButtons = dropdown.querySelectorAll(LOCATE_SELECTORS.closeButton);
    const clearConditions = dropdown.querySelector(LOCATE_SELECTORS.clearConditions);
    const confirmButton = dropdown.querySelector(LOCATE_SELECTORS.confirmButton);
    const continueButton = dropdown.querySelector(LOCATE_SELECTORS.continueButton);
    const checkboxes = dropdown.querySelectorAll(LOCATE_SELECTORS.checkboxItem);
    
    dropdownButton.addEventListener('click', () => toggleMenu(menuContainer));
    
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        toggleMenu(menuContainer, false);
      });
    });

    if (clearConditions) {
      clearConditions.addEventListener('click', () => clearLocateAllSelections(dropdown));
    }

    if (confirmButton) {
      confirmButton.addEventListener('click', () => {
        handleConfirm(dropdown);
        toggleMenu(menuContainer, false);
      });
    }

    if (continueButton) {
      continueButton.addEventListener('click', () => handleContinue(dropdown));
    }

    dropdown.querySelectorAll(LOCATE_SELECTORS.category).forEach(category => {
      category.addEventListener('click', () => handleCategoryClick(category, dropdown));
    });

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);
        confirmButton.style.display = isAnyChecked ? 'flex' : 'none';
        closeButtons.forEach(button => {
          button.style.display = isAnyChecked ? 'none' : 'flex';
        });
      });
    });

  } catch (error) {
    console.error('初始化地區下拉選單時發生錯誤:', error);
  }
}

function handleCategoryClick(selectedCategory, dropdown) {
  dropdown.querySelectorAll(LOCATE_SELECTORS.category).forEach(c => {
    c.classList.remove('active');
  });
  
  selectedCategory.classList.add('active');

  const targetCategory = selectedCategory.dataset.category;
  dropdown.querySelectorAll(LOCATE_SELECTORS.subcategories).forEach(subcategory => {
    subcategory.style.display = subcategory.dataset.parent === targetCategory ? 'block' : 'none';
  });
}

function toggleMenu(menuContainer, show) {
  if (!menuContainer) return;
  
  const currentDisplay = menuContainer.style.display;
  menuContainer.style.display = show === undefined ? 
    (currentDisplay === 'none' ? 'block' : 'none') : 
    (show ? 'block' : 'none');

    const nextSection = document.querySelector('.jobCategories');
    if (nextSection) {
      nextSection.style.display = 'none';
    }
}

function clearLocateAllSelections(dropdown) {
  dropdown.querySelectorAll(LOCATE_SELECTORS.checkboxItem).forEach(checkbox => {
    checkbox.checked = false;
  });

  const dropdownText = dropdown.querySelector('.dropdown-text');
  dropdownText.textContent = '選擇地區';
}

function handleConfirm(dropdown) {
  const selectedItems = Array.from(dropdown.querySelectorAll(LOCATE_SELECTORS.checkboxItem))
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.parentElement.textContent.trim());

  const dropdownText = dropdown.querySelector('.dropdown-text');
  if (selectedItems.length > 0) {
    dropdownText.textContent = selectedItems.join(', ');
  } else {
    dropdownText.textContent = dropdownText.getAttribute('data-default') || dropdownText.textContent;
  }

  const menuContainer = dropdown.querySelector(LOCATE_SELECTORS.menuContainer);
  toggleMenu(menuContainer, false);
}

function handleContinue(dropdown) {
  const nextSection = dropdown.querySelector('.jobCategories');
  if (nextSection) {
    nextSection.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', initializeLocationDropdown);

