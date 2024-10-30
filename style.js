// 選取元素
const navWrap = document.querySelector('.nav-wrap');
const navButton = document.querySelector('.nav-button');
const navButtonImg = document.querySelector('.nav-button img');
const indexBanner = document.querySelector('.index-banner');
const bannerLinearOverlay = document.querySelector('.banner-linear-overlay');
const blurOverlay = document.querySelector('.blur-overlay');
const blurOverlayTitle = document.querySelector('.blur-overlay-title');
const blurOverlayTitleH2 = document.querySelector('.blur-overlay-title h2');
const blurOverlayTitleP = document.querySelector('.blur-overlay-title p');
const blurOverlayButton = document.querySelector('.blur-overlay-button button');
const chatButton = document.querySelector('.chat-button');

// 設定樣式
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';
document.body.style.fontFamily = "'Inter', sans-serif";
document.body.style.color = '#f3f8ff';

// nav
navWrap.style.position = 'fixed';
navWrap.style.top = '36px';
navWrap.style.right = '20px';
navWrap.style.display = 'flex';
navWrap.style.alignItems = 'center';
navWrap.style.backgroundColor = 'transparent';
navWrap.style.gap = '70px';
navWrap.style.zIndex = '2';

navButton.style.backgroundColor = 'transparent';
navButton.style.border = 'none';
navButton.style.cursor = 'pointer';
navButton.style.width = '45px';
navButton.style.height = '45px';
navButton.style.padding = '0';

navButtonImg.style.width = '100%';
navButtonImg.style.height = 'auto';
navButtonImg.style.aspectRatio = '1 / 1';
navButtonImg.style.objectFit = 'cover';

// banner
indexBanner.style.backgroundImage = 'url(./images/bannerBg.png)';
indexBanner.style.backgroundSize = 'cover';
indexBanner.style.backgroundPosition = 'center';
indexBanner.style.backgroundRepeat = 'no-repeat';
indexBanner.style.height = '100vh';
indexBanner.style.position = 'relative';

bannerLinearOverlay.style.background = 'linear-gradient(rgba(243, 248, 255, 0.5) 0%, rgba(73, 16, 139, 0.5) 100%)';
bannerLinearOverlay.style.position = 'absolute';
bannerLinearOverlay.style.top = '0';
bannerLinearOverlay.style.left = '0';
bannerLinearOverlay.style.right = '0';
bannerLinearOverlay.style.bottom = '0';
bannerLinearOverlay.style.zIndex = '1';

blurOverlay.style.position = 'absolute';
blurOverlay.style.top = '0';
blurOverlay.style.left = '0';
blurOverlay.style.bottom = '0';
blurOverlay.style.width = '550px';
blurOverlay.style.background = 'rgba(255, 255, 255, .2)';
blurOverlay.style.backdropFilter = 'blur(20px)';
blurOverlay.style.padding = '0 55px';
blurOverlay.style.display = 'flex';
blurOverlay.style.flexDirection = 'column';
blurOverlay.style.justifyContent = 'center';
blurOverlay.style.zIndex = '2';

blurOverlayTitle.style.marginBottom = '70px';
blurOverlayTitle.style.lineHeight = '77px';

blurOverlayTitleH2.style.fontSize = '64px';
blurOverlayTitleH2.style.fontWeight = '700';
blurOverlayTitleH2.style.width = '334px';
blurOverlayTitleH2.style.marginBottom = '17px';

blurOverlayTitleP.style.fontSize = '16px';
blurOverlayTitleP.style.fontWeight = '400';
blurOverlayTitleP.style.lineHeight = '19px';

blurOverlayButton.style.display = 'flex';
blurOverlayButton.style.flexDirection = 'column';
blurOverlayButton.style.gap = '20px';

blurOverlayButton.style.fontSize = '32px';
blurOverlayButton.style.fontWeight = '400';
blurOverlayButton.style.lineHeight = '38px';
blurOverlayButton.style.margin = '0';

blurOverlayButton.style.backgroundColor = 'transparent';
blurOverlayButton.style.border = '3px solid #fff';
blurOverlayButton.style.borderRadius = '0';
blurOverlayButton.style.cursor = 'pointer';
blurOverlayButton.style.color = '#fff';
blurOverlayButton.style.fontSize = '20px';
blurOverlayButton.style.width = '157px';
blurOverlayButton.style.height = '50px';
blurOverlayButton.style.boxShadow = '4px 4px 4px 0px #00000040';

// footer
chatButton.style.position = 'fixed';
chatButton.style.bottom = '26px';
chatButton.style.right = '26px';
chatButton.style.cursor = 'pointer';
chatButton.style.borderRadius = '50%';
chatButton.style.zIndex = '2';
chatButton.style.width = '83px';
chatButton.style.height = '83px';
chatButton.style.background = 'transparent';
chatButton.style.border = 'none';