let btn = document.getElementById('btn-tag-name-1')

btn.addEventListener('click', () => {
    let dogName = document.getElementById('balbec-name');
    let value = document.getElementById('dog-name').value;
    
    let description = document.getElementById('balbec-descr-inp').value;
    let balbecPlace = document.getElementById('balbec-description');
    

    if (value) {
        dogName.innerText = value;
    }
    
    if (description) {
        balbecPlace.innerText = description;
    }

});