var canClick = true; // Set initial click state to true
var cooldownTime = 300; // Set cooldown time in milliseconds
var isMouseDown = false; // Set initial mouse state to false
var mouseUpEvent = new Event('mouseup'); // Create mouseup event
var clickHoldTime = 300; // Set click hold time in milliseconds

document.querySelectorAll('.clickable').forEach(function(el) {
  el.addEventListener('mousedown', function () {
    isMouseDown = true; // Set mouse state to true when clicked down
    setTimeout(function() {
      if (isMouseDown) {
        canClick = false; // If click is held down, set click state to false
      }
    }, clickHoldTime);
  });

  el.addEventListener('mouseup', function (event) {
    if (isMouseDown && canClick) {
      var intersection = event.detail.intersection;
      var distance = intersection.distance;
      // Minimize accidental clicks by checking if the click was within a reasonable distance from the camera
      if (distance < 10) {
        var newPosition = intersection.point;
        newPosition.y = 1.6; // Adjust the camera height to your liking
        document.querySelector('a-camera').setAttribute('animation', 'property: position; to: ' + newPosition.x + ' ' + newPosition.y + ' ' + newPosition.z + '; dur: 500');

        canClick = false; // Set click state to false
        setTimeout(function () {
          canClick = true; // Reset click state to true after cooldown
        }, cooldownTime);
      }
    }
    isMouseDown = false; // Reset mouse state to false on click up
    canClick = true; // Reset click state to true on click up
  });

  el.addEventListener('mouseleave', function () {
    if (isMouseDown) {
      el.dispatchEvent(mouseUpEvent); // Trigger mouseup event if mouse leaves clickable area while still clicked down
    }
    isMouseDown = false; // Reset mouse state to false on mouse leave
    canClick = true; // Reset click state to true on mouse leave
  });
});

document.querySelectorAll('a-text').forEach(function(el) {
  el.addEventListener('click', function () {
    var href = this.getAttribute('href');
    if (href && href !== 'null') {
      window.location.href = href;
      canClick = false; // Set click state to false
      setTimeout(function () {
        canClick = true; // Reset click state to true after cooldown
      }, cooldownTime);
    }
  });
});
