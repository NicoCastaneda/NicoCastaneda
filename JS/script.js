function toggleAboutMe() {
  var aboutMeSection = document.querySelector('.main-content');

  if (aboutMeSection.style.display === 'flex') {
      aboutMeSection.style.display = 'none';
  }
  else {
      aboutMeSection.style.display = 'flex';
      aboutMeSection.scrollIntoView({ behavior: 'smooth'});
  }
}
