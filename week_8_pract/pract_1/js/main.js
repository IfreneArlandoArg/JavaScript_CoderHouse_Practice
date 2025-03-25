const url = 'https://jsonplaceholder.typicode.com/posts';

const dataLayoutSection = document.getElementById("dataLayout");


function createDiv(data){
  let divElement = document.createElement("div");
  divElement.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.body}</p>
  `;

  return divElement;

}

function appendElementtoBlock(block, element){
    block.appendChild(element);
}


async function getData(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;

    }
    catch(error){
        console.error(`Error occurrido : ${error}`);
        return null;
        
    }
}


getData().then(data => {
    if(data){
         data.forEach(element => {
            appendElementtoBlock(dataLayoutSection, createDiv(element));
         });
    }
    else{
        alert("No data found!!!")
    }
})


