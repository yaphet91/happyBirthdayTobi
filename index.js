if (!document.cookie.includes('countdown_visited')) {
  // Redirect to countdown.html
  document.addEventListener('DOMContentLoaded', function() {
    window.location.href = 'countdown/countdown.html';
  }
);

  // Set a cookie indicating countdown visit
  document.cookie = 'countdown_visited=true; max-age=86400'; // Cookie lasts for 24 hours
}
