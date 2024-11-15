const SELECTORS = {
  category: '.category', 
  subcategories: '.subcategories',
  subcategoryHeader: '.subcategory-header',
  menuContainer: '.menu-container',
  dropdownButton: '.dropdown-button',
  closeButton: '.close-button',
};
const appendStyle = document.createElement('style');

function initializeDropdown() {
  try {
    document.querySelectorAll(SELECTORS.category).forEach(category => {
      category.addEventListener('click', () => handleCategoryClick(category));
    });

    document.querySelectorAll(SELECTORS.subcategoryHeader).forEach(header => {
      header.addEventListener('click', () => toggleSubcategory(header));
    });

    const menuContainer = document.querySelector(SELECTORS.menuContainer);
    document.querySelector(SELECTORS.closeButton).addEventListener('click', () => toggleMenu(false));
    document.querySelector(SELECTORS.dropdownButton).addEventListener('click', () => toggleMenu());
  } catch (error) {
    console.error('初始化下拉選單時發生錯誤:', error);
  }
}

function handleCategoryClick(selectedCategory) {
  document.querySelectorAll(SELECTORS.category).forEach(c => {
    c.style.backgroundColor = '';
    c.style.color = '';
  });
  selectedCategory.style.backgroundColor = '#7e30e1';
  selectedCategory.style.color = 'white';

  const targetCategory = selectedCategory.dataset.category;
  document.querySelectorAll(SELECTORS.subcategories).forEach(header => {
    const isVisible = header.dataset.parent === targetCategory;
    header.style.display = isVisible ? 'block' : 'none';
    
    if (!isVisible) {
      const subcategoryHeaders = header.querySelectorAll(SELECTORS.subcategoryHeader);
      subcategoryHeaders.forEach(subHeader => {
        subHeader.nextElementSibling.style.display = 'none';
        subHeader.querySelector('span').textContent = '▼';
      });
    }
  });
}

function toggleSubcategory(header) {
  const content = header.nextElementSibling;
  const arrow = header.querySelector('span');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
  arrow.textContent = content.style.display === 'block' ? '▲' : '▼';
}

function toggleMenu(show) {
  const menuContainer = document.querySelector(SELECTORS.menuContainer);
  const currentDisplay = menuContainer.style.display;
  menuContainer.style.display = show === undefined ? 
    (currentDisplay === 'none' ? 'block' : 'none') : 
    (show ? 'block' : 'none');
}

document.addEventListener('DOMContentLoaded', initializeDropdown);
