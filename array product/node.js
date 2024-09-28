

const products = [
    {
        id: 1,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price: "price: $ 59999",
        title: "Product_iphone1",
        description: "Description for Product 1",
    },
    {
        id: 2,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 2",
        description: "Description for Product 2",
    },
    {
        id: 3,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 3",
        description: "Description for Product 2",
    },
    {
        id: 4,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 4",
        description: "Description for Product 2",
    },
    {
        id: 5,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 5",
        description: "Description for Product 2",
    },
    {
        id: 6,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 6",
        description: "Description for Product 2",
    },
    {
        id: 7,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 7",
        description: "Description for Product 2",
    },
    {
        id: 8,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 8",
        description: "Description for Product 2",
    },
    {
        id: 9,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 9",
        description: "Description for Product 2",
    },
    {
        id: 10,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 10",
        description: "Description for Product 20",
    },
    {
        id: 11,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 11",
        description: "Description for Product 20", 
    },
    {   id: 12,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product 12",
        description: "Description for Product 20",
    },
    {
        id: 13,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 13",
        description: "Description for Product 20",
    },
    {
        id: 14,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 14",
        description: "Description for Product 20",
    },
    {
        id: 15,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 15",
        description: "Description for Product 20",
    },
    {
        id: 16,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 16",
        description: "Description for Product 20",
    },
    {
        id: 17,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 17",
        description: "Description for Product 20",
    },
    {
        id: 18,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 18",
        description: "Description for Product 20",
    },
    {
        id: 19,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 19",
        description: "Description for Product 20",
    },
    {
        id: 20,
        image: "https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png",
        price:"price: $ 45999",
        title: "Product_iphone 20",
        description: "Description for Product 20",
    },
]

const itemsContainer = document.getElementById("items_container")

products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const image = document.createElement("img");
    image.src = product.image;
    image.classList.add("photo")

    const price =document.createElement("h4");
    price.textContent = product.price;

    const title = document.createElement("h3");
    title.textContent = product.title;

    const description = document.createElement("p");
    description.textContent = product.description;

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("imageDiv");

    imageDiv.appendChild(image);
    productDiv.appendChild(imageDiv);
    productDiv.appendChild(title);
    productDiv.appendChild(price);
    productDiv.appendChild(description);
    productDiv.appendChild(addToCartButton);


    itemsContainer.appendChild(productDiv);


}
);






