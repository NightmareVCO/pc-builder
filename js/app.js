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
let shoppingCartItems;
let element;
let mouseLocation;
let totalPrice;
const database = getComponents();

/**
 * Creates a new component element based on the given component object.
 *
 * @param {Object} component - The component object containing the necessary information.
 * @return {HTMLElement} - The newly created component element.
 */
function createComponent(component) {
   // Create the new element div and set its properties
   const div = document.createElement("div");
   div.className = "component";
   div.draggable = true;

   // Create the new element div and set its properties
   const info = document.createElement("div");
   info.className = "component-info";

   // Create the new element img and set its properties
   const img = document.createElement("img");
   img.src = `./images/${component.category}_${component.id}.png`;
   img.alt = `${component.category}`;
   img.draggable = false;

   // Create the new element h3 and set its properties
   const h3 = document.createElement("h3");
   h3.textContent = `${component.brand} ${component.name}`;

   // Create the new element p and set its properties
   const p = document.createElement("p");
   p.textContent = ` $${component.price} `;

   // Create the new element id and set its properties
   const id = document.createElement("id");
   id.textContent = component.id;
   id.style.display = "none";


   // Add the elements to the div
   info.appendChild(img);
   info.appendChild(h3);
   info.appendChild(p);
   info.appendChild(id);

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
function addElement(newElement, parent) {
   parent.appendChild(newElement);
}

/**
 * Clones the given element.
 *
 * @param {Element} element - The element to be cloned.
 * @return {Element} A deep copy of the given element.
 */
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

/**
 * Retrieves the current mouse location.
 *
 * @return {string} The className of the element the mouse is currently over.
 */
function getMouseLocation() {
   mouseLocation = this.className;
}

/**
 * Refreshes the shopping cart by selecting all the items in the shopping cart container.
 *
 * @param {None} None - This function does not accept any parameters.
 * @return {None} None - This function does not return any value.
 */
function refreshShoppingCart() {
   shoppingCartItems = document.querySelectorAll(".shopping-cart-container .component");
}

/**
 * Adds an item to the shopping cart.
 *
 * @param {type} paramName - description of the parameter
 * @return {type} description of the return value
 */
function addToShoppingCart() {
   const component = getComponentByID(getComponentID(element.textContent));
   const shoppingCartItemsInner = JSON.parse(localStorage.getItem("components")) || [];

   if (mouseLocation === "shopping-cart-container") {
      deleteComponentLocal(component);
      element.remove();
   }
   else if (checkLocalStorageComponent(component, shoppingCartItemsInner)) {
      addElement(copyElement(element), shoppingCartContainer);
   }

}

/**
 * Updates the shopping cart based on the mouse location.
 *
 * @param {string} mouseLocation - The location of the mouse.
 * @param {HTMLElement} element - The element to be manipulated.
 * @param {HTMLElement} shoppingCartContainer - The container for the shopping cart.
 */
function shoppingCart() {
   addToShoppingCart();
   refreshShoppingCart();
   calculateTotal();
   setData();
}

/**
 * Sets the data for the shopping cart items.
 *
 * @param {type} shoppingCartItems - the array of shopping cart items
 * @return {undefined} This function does not return anything
 */
function setData() {
   for (const component of shoppingCartItems) {
      setComponent(getComponentByID(getComponentID(component.lastElementChild.textContent)));
      getComponent();
      componentsList();
   }
}

/**
 * Calculates the total price of the shopping cart items.
 *
 * @return {number} The total price of the shopping cart items.
 */
function calculateTotal() {
   let total = 0;

   // Calculate the total price using html (not recommended)
   // for (const component of shoppingCartItems)
   //    total += parseInt(component.lastElementChild.textContent.split("$")[1]);

   for (const component of shoppingCartItems)
      total += getComponentByID(getComponentID(component.lastElementChild.textContent)).price;

   totalPrice.innerHTML = total > 0 ? `$${total}` : "$0";
}

/**
 * Returns the component ID from a given component full name.
 *
 * @param {string} componentFullName - The full name of the component.
 * @return {string} The ID of the component.
 */
function getComponentID(componentFullName) {
   let id = "";
   const fullName = componentFullName.split(" ");
   id = fullName[fullName.length - 1];
   return id;
}

/**
 * Initializes the DOM.
 *
 * @return {undefined} No return value.
 */
function DOMInit() {
   shoppingCartContainer = document.querySelector(".shopping-cart-container");
   container = document.querySelector(".components-container");
   totalPrice = document.getElementById("total-price");

   componentContainer = document.getElementsByClassName("component");
   shoppingCartItems = document.querySelectorAll(".shopping-cart-container .component");
}

function loadShoppingCart() {
   let shoppingCartItems = JSON.parse(localStorage.getItem("components")) || [];
   for (const component of shoppingCartItems)
      addElement(createComponent(component), shoppingCartContainer);
   refreshShoppingCart();
   calculateTotal();
}

/**
 * Executes the main functionality of the program.
 *
 * @return {undefined} This function does not return a value.
 */
function main() {
   DOMInit();
   loadShoppingCart();

   for (const component of database)
      addElement(createComponent(component), container);

   //drag and drop
   for (const component of componentContainer)
      component.addEventListener("dragstart", draggedElement);
   //to do the drop
   container.addEventListener("mouseover", getMouseLocation);
   shoppingCartContainer.addEventListener("mouseover", getMouseLocation);
   shoppingCartContainer.addEventListener("dragstart", draggedElement);
   shoppingCartContainer.addEventListener("dragover", event => event.preventDefault());
   shoppingCartContainer.addEventListener("drop", shoppingCart);
}

document.addEventListener('DOMContentLoaded', main);