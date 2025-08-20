/*
 * Simple interactivity for Mesrenyame Dogbe’s portfolio website.  The
 * primary purpose of this script is to toggle the visibility of the
 * sidebar navigation when the hamburger icon is clicked.  It also
 * automatically closes the sidebar when a navigation link is selected.
 */

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const sideMenu = document.getElementById('side-menu');
  const menuLinks = sideMenu.querySelectorAll('a');

  function toggleMenu() {
    sideMenu.classList.toggle('open');
  }

  // Open or close the menu when the hamburger is clicked.
  hamburger.addEventListener('click', toggleMenu);

  // Close the menu when any link is clicked. This improves user
  // experience on mobile where the menu takes up the entire screen.
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('open');
    });
  });
});