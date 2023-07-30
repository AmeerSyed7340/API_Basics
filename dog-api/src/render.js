const content = document.querySelector('.content');
function render(obj) {
    //div to hold obj info
    const dogDiv = document.createElement('div');

    //tags that will go inside the div
    const h1_objName = document.createElement('h1');
    h1_objName.innerHTML = `${obj.name}`;

    const p_countryCode = document.createElement('p');
    p_countryCode.innerHTML = `Country: ${obj.countryCode}`;

    const p_weight = document.createElement('p');
    p_weight.innerHTML = `Weight: (${obj.weight}) lbs`;

    dogDiv.appendChild(h1_objName);
    dogDiv.appendChild(p_countryCode);
    dogDiv.appendChild(p_weight);

    content.appendChild(dogDiv);
}

export default render