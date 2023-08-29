/*
* This is the main file of the application.
* JS to manage the form
*
* @author Vladimir Curiel <vladimircuriel@outllook.com>
* @link https://github.com/NightmareVCO/pc-builder
*/

let html;
let componentContainer;
let shoppingCartContainer;
let element;
let mouseLocation;

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
   img.draggable = false;

   // Create the new element h3 and set its properties
   let h3 = document.createElement("h3");
   h3.textContent = `${component.brand} ${component.name}`;

   // Create the new element p and set its properties
   let p = document.createElement("p");
   p.textContent = `$${component.price}`;


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

function copyElement(element) {
   return element.cloneNode(true);
}

/**
 * A function that handles the event when an element is dragged.
 *
 * @param {Event} event - The event object representing the drag event.
 */
function draggedElement(event) {
   element = event.target;
}

function getMouseLocation(event) {
   mouseLocation = this.className;
}

/**
 * Updates the shopping cart based on the mouse location.
 *
 * @param {string} mouseLocation - The location of the mouse.
 * @param {HTMLElement} element - The element to be manipulated.
 * @param {HTMLElement} shoppingCartContainer - The container for the shopping cart.
 */
function shoppingCart() {
   if (mouseLocation === "shopping-cart-container")
      element.remove();
   else
      addElement(copyElement(element),shoppingCartContainer);
}

/**
 * Initializes the DOM.
 *
 * @return {undefined} No return value.
 */
function DOMInit() {
   shoppingCartContainer = document.querySelector(".shopping-cart-container");
   container = document.querySelector(".components-container");
}

//Event Initialization
function main() {
   const database = getComponents();
   DOMInit();
   componentContainer = document.getElementsByClassName("component");

   for (const component of database)
      addElement(createComponent(component),document.querySelector(".components-container"));

   //drag and drop
   for (let component of componentContainer)
      component.addEventListener("dragstart",draggedElement);
   //to do the drop
   container.addEventListener("mouseover",getMouseLocation);

   shoppingCartContainer.addEventListener("mouseover",getMouseLocation);
   shoppingCartContainer.addEventListener("dragstart",draggedElement);
   shoppingCartContainer.addEventListener("dragover",event => event.preventDefault());
   shoppingCartContainer.addEventListener("drop",shoppingCart);
}

document.addEventListener('DOMContentLoaded',main);