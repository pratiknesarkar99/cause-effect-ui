/**
 * main.js
 * Entry point. Loads data and initializes the UI.
 * Keeps data fetching and rendering concerns separated.
 */

import { loadPeople } from './data.js';
import { renderList, renderError } from './ui.js';

async function init() {
  try {
    const people = await loadPeople();
    renderList(people);
  } catch (err) {
    console.error(err);
    renderError('Could not load contacts. Make sure you are running this via a local server.');
  }
}

init();
