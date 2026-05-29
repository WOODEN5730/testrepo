const breakfastMenu = ['Pancakes -$12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15.00'];
const mainCourseMenu = ['Steak -$45.00', 'Pasta -$25.00', 'Burger -$20.00', 'Salmon -$32.50'];
const dessertMenu = ['Cake -$9.99', 'Ice Cream -$8.99', 'Pudding -$10.99', 'Fruit Salad -$12.99'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
