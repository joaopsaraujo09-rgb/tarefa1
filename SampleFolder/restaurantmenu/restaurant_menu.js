const breakfastMenu = ['panquecas', 'omelete', 'batata frita', 'bacons'];
const mainCourseMenu = ['burguer', 'salmão', 'pastas'];
const dessertMenu = ['bolo', 'sorvete', 'pudim','salada de fruta'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

 let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

//A variável mainCourseItem é inicializada como uma string vazia (''). 
// Esta variável será usada para acumular strings HTML geradas para cada item do menu principal.
//O método forEach percorre cada elemento no array mainCourseMenu. 
// Para cada item no array, a função de seta (item, index) => {…} é executada. 
// Dentro da função de seta, uma string HTML é composta para cada item do menu, incorporando o conteúdo do item e seu índice correspondente.
//Em seguida, o conteúdo HTML é atualizado dinamicamente definindo a propriedade innerHTML do elemento HTML com o ID maincourseMenuItems para a string acumulada mainCourseItem, que irá inserir os itens do menu principal no elemento específico dentro da página da web.

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;