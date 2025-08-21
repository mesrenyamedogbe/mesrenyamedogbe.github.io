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
  const themeToggle = document.getElementById('theme-toggle');

  function toggleMenu() {
    sideMenu.classList.toggle('open');
  }

  // Apply a given theme by toggling a class on the body and switching the icon.
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      // Show sun icon to indicate light mode is available
      if (themeToggle) themeToggle.textContent = '☀️';
    } else {
      document.body.classList.remove('dark-mode');
      // Show moon icon to indicate dark mode is available
      if (themeToggle) themeToggle.textContent = '🌙';
    }
  }

  // Initialise theme based on local storage or system preference.
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  // Toggle dark/light mode when the button is clicked.
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
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