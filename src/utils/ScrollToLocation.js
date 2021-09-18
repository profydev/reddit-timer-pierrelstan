const scrollToLocation = (location) => {
  if (location.hash === '') {
    window.scrollTo(0, 0);
  } else {
    setTimeout(() => {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }
};
export default scrollToLocation;
