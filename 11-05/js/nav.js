document.getElementById('aboutMeIcon').addEventListener('click', function() {
    if (this.src.includes('aboutMeIconbBlue.png')) {
        this.src = './images/aboutMeIcon.png';
    } else {
        this.src = './images/aboutMeIconbBlue.png';
    }
    
    const aboutMeMenu = document.getElementById('aboutMeMenu');
    if (aboutMeMenu.style.display === 'none' || !aboutMeMenu.style.display) {
        aboutMeMenu.style.display = 'block';
    } else {
        aboutMeMenu.style.display = 'none';
    }
});
