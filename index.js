function addingEventListener() {
  const button = document.querySelector('#button');

  function clickAlert() {
    alert('Button clicked!');
  }

  button.addEventListener('click', clickAlert);
}

document.addEventListener('DOMContentLoaded', function() {
  addingEventListener();
});

   