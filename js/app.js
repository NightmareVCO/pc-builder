/**
 * Returns the element with the specified ID.
 *
 * @param {string} key - The ID of the element to retrieve.
 * @return {HTMLElement} The element with the specified ID.
 */
function getElement(key) {
   return document.querySelector(key);
}

/**
 * Creates a new component element based on the given component object.
 *
 * @param {Object} component - The component object containing the necessary information.
 * @return {HTMLElement} - The newly created component element.
 */
function createComponent(component) {
   // Create the new element div and set its properties
   let div = document.createElement("div");
   div.className = "component";
   div.draggable = true;

   // Create the new element div and set its properties
   let info = document.createElement("div");
   info.className = "component-info";

   // Create the new element img and set its properties
   let img = document.createElement("img");
   img.src = `./images/${component.category}_${component.id}.png`;
   img.alt = `${component.category}`;

   // Create the new element h3 and set its properties
   let h3 = document.createElement("h3");
   h3.textContent = `${component.brand} ${component.name}`;

   // Create the new element p and set its properties
   let p = document.createElement("p");
   p.textContent = `${component.price}`;


   // Add the elements to the div
   info.appendChild(img);
   info.appendChild(h3);
   info.appendChild(p);

   div.appendChild(info);
   return div;
}

/**
 * Adds a new element to the specified parent element.
 *
 * @param {Element} newElement - The element to be added.
 * @param {Element} parent - The element of the parent.
 * @return {void}
 */
function addElement(newElement,parent) {
   parent.appendChild(newElement);
}

//Event Initialization
function main() {
   const database = getComponents();

   for (const component of database)
      addElement(createComponent(component),getElement(".components-container"));
}

document.addEventListener('DOMContentLoaded',main);