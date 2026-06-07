/**
 * data.js
 * Responsible for loading and returning contact data.
 * Uses fetch() to load from the local JSON file.
 */

export async function loadPeople() {
  const response = await fetch('./data/people.json');

  if (!response.ok) {
    throw new Error(`Failed to load contact data: ${response.status}`);
  }

  const people = await response.json();
  return people;
}
