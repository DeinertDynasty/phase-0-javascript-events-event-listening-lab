document.addEventListener('DOMContentLoaded', function() {
    // Code to bind event listener
  });
  
  function addingEventListener() {
    document.addEventListener('DOMContentLoaded', function() {
      const button = document.querySelector('#input');
  
      function clickAlert() {
        alert('Button clicked!');
      }
  
      button.addEventListener('click', clickAlert);
    });
  }
  
  addingEventListener();
   