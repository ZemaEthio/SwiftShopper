const products = [
  { name: "Product 1", price: 19.99, brand: "Brand A" },
  { name: "Product 2", price: 29.99, brand: "Brand B" },
  { name: "Product 3", price: 39.99, brand: "Brand A" },
];

const searchBar = document.getElementById("searchBar");
const suggestions = document.getElementById("searchSuggestions");
if (searchBar && suggestions) {
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    suggestions.innerHTML = "";
    if (query) {
      const filtered = products.filter((p) => p.name.toLowerCase().includes(query));
      filtered.forEach((p) => {
        const item = document.createElement("a");
        item.classList.add("list-group-item");
        item.textContent = p.name;
        suggestions.appendChild(item);
      });
    }
  });
}

const filterForm = document.getElementById("filterForm");
const productList = document.getElementById("productList");
if (filterForm && productList) {
  filterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const price = document.getElementById("priceRange").value;
    const brand = document.getElementById("brand").value;
    productList.innerHTML = "";
    const filtered = products.filter(
      (p) => p.price <= price && (brand === "All" || p.brand === brand)
    );
    filtered.forEach((p) => {
      const div = document.createElement("div");
      div.classList.add("col-md-4");
      div.innerHTML = `
        <div class="card">
          <img src="image${products.indexOf(p) + 1}.png" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">$${p.price}</p>
          </div>
        </div>
      `;
      productList.appendChild(div);
    });
  });
}