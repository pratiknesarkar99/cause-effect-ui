/**
 * ui.js
 * Handles all DOM rendering and user interactions.
 * Owns the list rendering, selection state, and detail pane updates.
 */

// Tracks the currently selected list item element
let selectedItem = null;

/**
 * Renders the list of names into the summary pane.
 * Stores the array index on each element via data-index
 * so we can look up the full object on click.
 *
 * @param {Array} people - Array of contact objects
 */
export function renderList(people) {
  const list = document.getElementById('contact-list');

  people.forEach((person, index) => {
    const li = document.createElement('li');
    li.textContent = person.name;
    li.dataset.index = index;
    li.setAttribute('role', 'button');
    li.setAttribute('tabindex', '0');

    // Support keyboard navigation (Enter/Space to select)
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSelect(li, people);
      }
    });

    li.addEventListener('click', () => handleSelect(li, people));
    list.appendChild(li);
  });
}

/**
 * Handles selection of a contact.
 * Swaps the .selected class and updates the detail pane.
 *
 * @param {HTMLElement} item - The clicked <li> element
 * @param {Array} people - The full people array (to look up by index)
 */
function handleSelect(item, people) {
  // Remove selection from previously selected item
  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }

  // Apply selection to clicked item
  item.classList.add('selected');
  selectedItem = item;

  const index = parseInt(item.dataset.index, 10);
  updateDetail(people[index]);
}

/**
 * Injects a person's full contact info into the detail pane.
 *
 * @param {Object} person - A single contact object from the array
 */
function updateDetail(person) {
  const pane = document.getElementById('detail-pane');

  // Clear the placeholder state
  pane.classList.add('has-content');

  pane.innerHTML = `
    <div class="detail-card">
      <div class="detail-avatar" aria-hidden="true">
        ${getInitials(person.name)}
      </div>
      <h2 class="detail-name">${person.name}</h2>
      <ul class="detail-fields">
        <li class="detail-field">
          <span class="field-label">Address</span>
          <span class="field-value">${person.street}, ${person.city}, ${person.state}, ${person.country}</span>
        </li>
        <li class="detail-field">
          <span class="field-label">Phone</span>
          <span class="field-value">${person.telephone}</span>
        </li>
        <li class="detail-field">
          <span class="field-label">Birthday</span>
          <span class="field-value">${person.birthday}</span>
        </li>
      </ul>
    </div>
  `;
}

/**
 * Derives initials from a full name for the avatar.
 * "Amara Osei" -> "AO"
 *
 * @param {string} name
 * @returns {string}
 */
function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
}

/**
 * Displays an error message in the detail pane.
 *
 * @param {string} message
 */
export function renderError(message) {
  const pane = document.getElementById('detail-pane');
  pane.innerHTML = `<p class="error-message">${message}</p>`;
}
