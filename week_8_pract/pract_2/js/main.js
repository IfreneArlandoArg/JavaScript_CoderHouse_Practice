let productsContainer = document.getElementById("products");

async function getData() {
    try {
        const response = await fetch("./db/data.json");
        const data = await response.json();
        return data;
        
    } 
    catch (error) {
        console.log(`${error}`);
        return null;
        
    }
    
}

function createDiv(data){
    let divElement = document.createElement("div");
    divElement.innerHTML = `
      <h2>${data.name}</h2>
      <p>Category: ${data.category}</p>
      <p>${data.description}</p>
      <h3>Price: $${data.price}</h3>
      <br> 
    `;
  
    return divElement;
  
  }
  
  function appendElementtoBlock(block, element){
      block.appendChild(element);
  }
  
  
  getData().then(data => {
    if (data) {
           data.forEach(item => {
            appendElementtoBlock(productsContainer, createDiv(item));
           });
    }
    else{
        console.log("No data available");
    }
  });