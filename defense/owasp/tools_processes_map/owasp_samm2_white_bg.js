// Extracted from owasp_samm2_white_bg.html
// Exposes sendPrompt used by onclick attributes
function sendPrompt(message) {
  try {
    // Log for debugging
    console.log('sendPrompt:', message);
    // Show a simple dialog (keeps existing behaviour visible). Replace as needed.
    alert(message);
  } catch (e) {
    console.error(e);
  }
}

// Optional: support keyboard / future enhancements
document.addEventListener('DOMContentLoaded', function(){
  // No-op for now. Keep function available globally.
});
