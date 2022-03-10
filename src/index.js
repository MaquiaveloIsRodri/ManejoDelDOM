const API = 'https://platzi-avo.vercel.app';
const app = document.getElementById('app');
function formatPrice(price){
  const precioEcho=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
  return precioEcho
}


async function extration(){
    const response = await fetch(`${API}/api/avo`)
    const JSONEstract = await response.json(),
    allProducts=[];
    JSONEstract.data.forEach(item => {
        const title = document.createElement('h2');
        title.textContent= item.name
        title.className = 'tituloJS'

        const precio= document.createElement('p');
        precio.textContent= formatPrice(item.price);
        precio.className = 'PriceJS'

        const imagen = document.createElement('img');
        imagen.src= `${API}${item.image}`;
        imagen.className = 'imagenjs'

        const conteiner= document.createElement('div');
        conteiner.className='container'
        

        conteiner.append(imagen,title,precio);
        
        formatPrice()
        allProducts.push(conteiner);
        
    });
  app.append(...allProducts);
    

}

extration();