let currentPage = 1;

function getDetails(page) {
    if (page === 1) {
        document.getElementById("previous").disabled = true;
        document.getElementById("next").disabled = false;
    } else {
        document.getElementById("next").disabled = true;
        document.getElementById("previous").disabled = false;
    }
    currentPage = page;
    fetch(`https://reqres.in/api/users?page=${currentPage}`)
        .then(response => response.json())
        .then((data) => {
            let elements = document.querySelectorAll('.col-lg-4');
            if (elements.length) {
                removeElements(elements);
            }
            for (let i = 0; i < data.data.length; i++) {

                //Creation of required elements
                let outerDiv = document.createElement('div');
                let innerDiv = document.createElement('div');
                let innermostDiv = document.createElement('div');
                let img = document.createElement('img');
                let name = document.createElement('h5');
                let para = document.createElement('p');

                //Creation of required attributes for the elements
                let imgClass = document.createAttribute('class');
                let outerClass = document.createAttribute('class');
                let innerClass = document.createAttribute('class');
                let innermostClass = document.createAttribute('class');
                let paraClass = document.createAttribute('class');
                let outerDivId = document.createAttribute('id');

                //Addition of the class names
                outerClass.value = 'col-lg-4 col-md-6 col-sm-12 m-1 p-1';
                innerClass.value = 'card';
                innermostClass.value = 'card-body';
                imgClass.value = 'card-img-top';
                paraClass.value = 'card-text';
                outerDivId.value = 'outer';

                //Adding required details
                name.innerHTML = `${data.data[i].first_name} ${data.data[i].last_name}`;
                para.innerHTML = data.data[i].email;
                img.src = data.data[i].avatar;

                //Adding the required attributes to the elements
                outerDiv.setAttributeNode(outerClass);
                outerDiv.setAttributeNode(outerDivId);
                innerDiv.setAttributeNode(innerClass);
                innermostDiv.setAttributeNode(innermostClass);
                img.setAttributeNode(imgClass);

                //Adding all the created elements to DOM
                document.getElementById('row').appendChild(outerDiv);
                outerDiv.appendChild(img);
                outerDiv.appendChild(innerDiv);
                innerDiv.appendChild(innermostDiv);
                innerDiv.appendChild(img);
                innermostDiv.appendChild(name);
                innermostDiv.appendChild(para);
            }
        }).catch(err => console.error(err));
}

function removeElements(elements) {
    elements.forEach(element => {
        element.remove();
    });
}

getDetails(1);



