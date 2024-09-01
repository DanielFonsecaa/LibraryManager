function render(onClick) {

    const buttonContainer = document.querySelector("#button-container");
    const container = document.querySelector('#container');
    const button = document.createElement('button');
    const div = document.createElement('div');
    div.id = "randomCharButton";
    div.className = `text-center`;
    button.className = `btn btn-primary`;
    button.type = `button`;
    button.style = "margin-top: 10%;"
    div.appendChild(button);

    container.innerHTML = ''; //removes the previous elements
    
    button.innerText = `Click me for a random character`;

    button.addEventListener('click', async e => {
        try{
             e.preventDefault();
           const {
            name,
            status,
            species,
            type,
            gender,
            location,
            image
        } = await onClick(parseInt(Math.random() * 20));   
        const elem = document.createElement('div');
        elem.className = `text-center-home`;
        elem.style = "text-align: center;"
        elem.innerHTML = `<br>
                        <h1>${name}</h1>
                        <h3>Status: ${status}</h3>
                        <h3>Species: ${species}</h3>
                        <h3>Type: ${type}</h3>
                        <h3>Gender: ${gender}</h3>
                        <h3>Location: ${location.name}</h3>
                        <div style="max-width:20%;  margin-left: auto;
                        margin-right: auto;">
                        <br>
                        <img src="${image}" style= "width:100%; border: 5px solid black;">
                        </div>`;

        if (container.childElementCount > 1) {
            container.removeChild(container.lastChild);
        }

        container.appendChild(elem);  
        } catch(error) {
            console.error('Error fetching character:', error);
          }
       
        });

    container.appendChild(div);
}

export default { render };