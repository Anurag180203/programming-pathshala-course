// Create parent container
var parentContainer = document.createElement('div');
parentContainer.classList.add('parent');

// Create child containers
var childContainers = [];
for (var i = 0; i < 4; i++) {
  var childContainer = document.createElement('div');
  childContainer.classList.add('parent2');
  childContainers.push(childContainer);
}

// Create child elements and append them to respective containers
for (var i = 40; i >= 1; i--) {
  var childElement = document.createElement('div');
  childElement.textContent = i;
  childElement.classList.add(i % 2 === 0 ? 'child1' : 'child2');

  var containerIndex = Math.floor((40 - i) / 10);
  childContainers[containerIndex].appendChild(childElement);
}

// Append child containers to parent container
childContainers.forEach(function(childContainer) {
  parentContainer.appendChild(childContainer);
});

// Append parent container to the body
document.body.appendChild(parentContainer);
