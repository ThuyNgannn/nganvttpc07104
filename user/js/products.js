const API_URL = "http://localhost:3000/products";

fetch(API_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let html = "";
        let show = document.getElementById('product');
        data.forEach(Product => {
            html += `
            <div class="col-12 col-md-6 col-lg-4 mt-2">
                        <div class="card">
                            <img class="card-img-top" src="${Product.photo}"
                                alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title"><a href="product.html" title="View Product">${Product.name}</a>
                                </h4>
                                <div class="row">
                                    <div class="col">
                                        <p class="btn font-weight-bold btn-block">${Product.price}</p>
                                    </div>
                                    <div class="col">
                                        <a href="#" class="btn btn-danger btn-block">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
        });
        show.innerHTML = html;
    })
    .catch(function (error) {
        console.error("Error fetching data:", error);
    });