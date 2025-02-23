const ulProducts = document.getElementById("ulProducts");


const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 29990,
      stock: 50,
      description: "Ergonomic wireless mouse with adjustable DPI and silent clicks."
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      category: "Electronics",
      price: 89990,
      stock: 30,
      description: "RGB mechanical keyboard with customizable keys and blue switches."
    },
    {
      id: 3,
      name: "Gaming Headset",
      category: "Electronics",
      price: 59990,
      stock: 40,
      description: "Surround sound gaming headset with noise-canceling microphone."
    },
    {
      id: 4,
      name: "USB-C Charging Cable",
      category: "Accessories",
      price: 12990,
      stock: 100,
      description: "Fast-charging USB-C to USB-A cable (1m length)."
    },
    {
      id: 5,
      name: "Smartwatch",
      category: "Wearable Tech",
      price: 199990,
      stock: 20,
      description: "Water-resistant smartwatch with heart rate and fitness tracking."
    },
    {
      id: 6,
      name: "Laptop Stand",
      category: "Accessories",
      price: 34990,
      stock: 60,
      description: "Adjustable aluminum laptop stand for better ergonomics."
    },
    {
      id: 7,
      name: "Portable Bluetooth Speaker",
      category: "Audio",
      price: 45990,
      stock: 35,
      description: "Compact waterproof Bluetooth speaker with deep bass."
    },
    {
      id: 8,
      name: "External Hard Drive - 1TB",
      category: "Storage",
      price: 79990,
      stock: 25,
      description: "High-speed external hard drive with USB 3.0 support."
    },
    {
      id: 9,
      name: "Smart LED Light Bulb",
      category: "Smart Home",
      price: 19990,
      stock: 70,
      description: "WiFi-enabled smart bulb with voice control and color change."
    },
    {
      id: 10,
      name: "Wireless Charger",
      category: "Accessories",
      price: 25990,
      stock: 45,
      description: "Fast wireless charging pad compatible with Qi-enabled devices."
    }
  ];
  
  console.log(products);
  
  products.forEach((product) => {
    
    ulProducts.innerHTML += `<li> 
      name: ${product.name}<br>
      category: ${product.category}<br>
      price: ${product.price}<br>
      stock: ${product.stock}<br>
      description: ${product.description} </li>`;
  } );


  let totalPriceAvailableProducts = products.filter(product => product.stock > 0).reduce((acc, product) => acc + product.price , 0);

  console.log(`totalPriceAvailableProducts :\n${totalPriceAvailableProducts}`);



//35 percent off(price) on all products
products.map(product => product.price *= 0.65);