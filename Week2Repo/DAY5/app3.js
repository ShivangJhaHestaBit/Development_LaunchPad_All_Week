const url = 'https://dummyjson.com/products';
let productList = [];
// function to fetch the data
fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Network failed!');
    }
    return response.json();
}).then(data => {
    productList = data.products;
    renderProducts(productList);
}).catch(error => {
    console.error("Error:", error);
});
// function to render the products on the screen
function renderProducts(products) {
    const container = document.querySelector('.product-list');
    container.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: ₹${product.price}</p>
        `;
        container.appendChild(card);
    });
}
// function for search implementation
const searchInput = document.querySelector(".Search input");
function handleSearch() {
    const keyword = searchInput.value.toLowerCase();
    const filtered = productList.filter(product =>
        product.title.toLowerCase().includes(keyword)
    );
    renderProducts(filtered);
}
searchInput.addEventListener("input", handleSearch);
// Filter function
const filterRadios = document.querySelectorAll('.filters input[type="radio"]');
function applyFilter() {
    const selected = document.querySelector('.filters input[type="radio"]:checked').value;
    let filteredProducts = [...productList];
    if (selected === "option2") {
        filteredProducts = filteredProducts.filter(p => p.price < 10);
    } 
    else if (selected === "option3") {
        filteredProducts = filteredProducts.filter(p => p.price < 100);
    } 
    else if (selected === "option4") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }
    renderProducts(filteredProducts);
}
filterRadios.forEach(radio => {
    radio.addEventListener("change", applyFilter);
});