const aboutMeIcon = document.getElementById('aboutMeIcon');
const aboutMeMenu = document.getElementById('aboutMeMenu');
const appendStyle = document.createElement('style');

aboutMeIcon.addEventListener('click', function() {
    if (this.src.includes('aboutMeIconbBlue.png')) {
        this.src = './images/aboutMeIcon.png';
    } else {
        if(!window.location.href.includes('resume')){
            this.src = './images/aboutMeIconbBlue.png';
        }
    }
    
    if (aboutMeMenu.style.display === 'none' || !aboutMeMenu.style.display) {
        aboutMeMenu.style.display = 'block';
    } else {
        aboutMeMenu.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    if (!aboutMeIcon.contains(event.target) && !aboutMeMenu.contains(event.target)) {
        aboutMeMenu.style.display = 'none';
        aboutMeIcon.src = './images/aboutMeIcon.png';
    }
});

// function addPlaceholderStyle() {
//     appendStyle.textContent = `
//     `;
//     document.head.appendChild(appendStyle);
//   }
//   addPlaceholderStyle();