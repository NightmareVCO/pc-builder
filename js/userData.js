/*
*
* JS to manage user data.
*
* @author Vladimir Curiel <vladimircuriel@outllook.com>
* @link https://github.com/NightmareVCO/pc-builder
*/


let componentId;
let componentCategory;
let componentBrand;
let componentName;
let componentPrice;

/**
 * Sets the component information in the session storage.
 *
 * @param {Object} component - The component object containing the information.
 * @param {string} component.id - The ID of the component.
 * @param {string} component.category - The category of the component.
 * @param {string} component.brand - The brand of the component.
 * @param {string} component.name - The name of the component.
 * @param {number} component.price - The price of the component.
 */
function setComponent(component) {
   sessionStorage.setItem("id", component.id);
   sessionStorage.setItem("category", component.category);
   sessionStorage.setItem("brand", component.brand);
   sessionStorage.setItem("name", component.name);
   sessionStorage.setItem("price", component.price);
}

/**
 * Retrieves the component details from the session storage.
 *
 * @return {undefined} This function does not return any value.
 */
function getComponent() {
   componentId = sessionStorage.getItem("id");
   componentCategory = sessionStorage.getItem("category");
   componentBrand = sessionStorage.getItem("brand");
   componentName = sessionStorage.getItem("name");
   componentPrice = sessionStorage.getItem("price");
}

//sessionStorage
function createComponentLocal() {
   const componentToList = {
      id: componentId,
      category: componentCategory,
      brand: componentBrand,
      name: componentName,
      price: parseInt(componentPrice)
   };
   return componentToList;
}

/**
 * Retrieves the list of components from the session storage.
 *
 * @return {Array} The list of components retrieved from the session storage. If no components are found, an empty array is returned.
 */
function getComponentsLocal() {
   let componentsList = JSON.parse(localStorage.getItem("components"));
   return componentsList || [];
}

/**
 * Checks if a component already exists in the components list.
 *
 * @param {Object} component - The component to check.
 * @param {Array} componentsList - The list of existing components.
 * @return {boolean} Returns true if the component does not exist in the list, otherwise false.
 */
function checkLocalStorageComponent(component, componentsList) {
   for (const existingComponent of componentsList)
      if (JSON.stringify(existingComponent) === JSON.stringify(component))
         return false;

   return true;
}

/**
 * Deletes a component from the local storage.
 *
 * @param {type} component - the component to be deleted
 * @return {type} undefined
 */
function deleteComponentLocal(component) {
   let componentsList = getComponentsLocal();
   if (!checkLocalStorageComponent(component, componentsList))
      componentsList.splice(componentsList.indexOf(component), 1);

   localStorage.setItem("components", JSON.stringify(componentsList));
}

/**
 * Generates a list of components and stores it in local storage.
 *
 * @return {undefined} No return value.
 */
function componentsList() {
   const component = createComponentLocal();
   let componentsList = getComponentsLocal();

   if (checkLocalStorageComponent(component, componentsList))
      componentsList.push(component);

   localStorage.setItem("components", JSON.stringify(componentsList));
}
