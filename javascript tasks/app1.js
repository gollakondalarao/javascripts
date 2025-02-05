let products = [
{title:'redmi', id:1, price:10000, img:'/'},
{title:'vivo',  id:2, price:20000, img:'/'},
{title:'nokia', id:3, price:30000, img:'/'},
{title:'oppo',  id:4, price:40000, img:'/'},   
{title:'iphone', id:5, price:50000, img:'/'},   
]

let cart = []
//render products
function renderproducts(productsData){
let container = document.getElementById('container')
container.innerHTML = ''
return productsData.map((item,i)=>{
    container.innerHTML +=`
    <div id="product">
    <img src ="" alt=${item.title}/>
    <h1>${item.title}</h1>
    <marker>${item.price}</marker>
    <button onclick = >fine(${item.id}) add product </button>
    </div>
    `
})

}
renderproducts(products)


//filter products
function filterproducts(){
    let searchbar = document.getElementById('searchbar').value.toLowerCase()
    let tempData = products.filter((item)=>item.title.toLowerCase().includes(searchbar))
    renderproducts(tempData)

}
//find inique data
function fine(cartitem){
   let cartData = products.find((product)=> product.id === cartitem)
   cart.push(cartData)
   alert(`productadded ${cartData.title}`)
   console.log(cartData)
   
   
}