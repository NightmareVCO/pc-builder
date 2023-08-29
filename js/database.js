/*
* This is the database file of the application.
* JS to manage the form
*
* @author Vladimir Curiel <vladimircuriel@outllook.com>
* @link https://github.com/NightmareVCO/pc-builder
*/

const components = [
   {
      id: "1",
      category: "CPU",
      brand: "AMD",
      name: "Ryzen 5 5600X",
      price: 200
   },
   {
      id: "2",
      category: "CPU",
      brand: "AMD",
      name: "Ryzen 7 5800X",
      price: 300
   },
   {
      id: "3",
      category: "CPU",
      brand: "AMD",
      name: "Ryzen 9 5900X",
      price: 400
   },
   {
      id: "4",
      category: "GPU",
      brand: "AMD",
      name: "RX 6600XT",
      price: 300
   },
   {
      id: "5",
      category: "GPU",
      brand: "AMD",
      name: "RX 6700XT",
      price: 400
   },
   {
      id: "6",
      category: "GPU",
      brand: "AMD",
      name: "RX 6800XT",
      price: 500
   },
   {
      id: "7",
      category: "SSD",
      brand: "SAMSUNG",
      name: "860 EVO",
      price: 100
   },
   {
      id: "8",
      category: "SSD",
      brand: "SAMSUNG",
      name: "870 EVO",
      price: 200
   },
   {
      id: "9",
      category: "SSD",
      brand: "SAMSUNG",
      name: "970 EVO",
      price: 300
   },
   {
      id: "11",
      category: "HDD",
      brand: "SEAGATE",
      name: "BARRACUDA 1TB",
      price: 50
   },
   {
      id: "12",
      category: "HDD",
      brand: "SEAGATE",
      name: "BARRACUDA 2TB",
      price: 100
   },
   {
      id: "13",
      category: "HDD",
      brand: "SEAGATE",
      name: "BARRACUDA 4TB",
      price: 200
   },
   {
      id: "14",
      category: "MOTHERBOARD",
      brand: "GIGABYTE",
      name: "ROG STRIX B550-F GAMING",
      price: 200
   },
   {
      id: "15",
      category: "MOTHERBOARD",
      brand: "GIGABYTE",
      name: "ROG STRIX B550-F GAMING PRO",
      price: 300
   },
   {
      id: "16",
      category: "MOTHERBOARD",
      brand: "GIGABYTE",
      name: "ROG STRIX B550-F GAMING PLUS",
      price: 400
   },
   {
      id: "17",
      category: "RAM",
      brand: "CORSAIR",
      name: "Vengeance LPX 16GB (2x8GB)",
      price: 150
   },
   {
      id: "18",
      category: "RAM",
      brand: "CORSAIR",
      name: "Vengeance LPX 32GB (2x16GB)",
      price: 250
   },
   {
      id: "19",
      category: "RAM",
      brand: "CORSAIR",
      name: "Vengeance LPX 64GB (2x32GB)",
      price: 350
   },
   {
      id: "20",
      category: "CASE",
      brand: "THERMALTAKE",
      name: "CERES 300",
      price: 300
   },
   {
      id: "21",
      category: "CASE",
      brand: "THERMALTAKE",
      name: "CERES 500",
      price: 400
   },
   {
      id: "22",
      category: "CASE",
      brand: "THERMALTAKE",
      name: "CERES 700",
      price: 500
   }
];

/**
 * Retrieves the components.
 *
 * @return {Array} The array of components.
 */
function getComponents() {
   return components;
}