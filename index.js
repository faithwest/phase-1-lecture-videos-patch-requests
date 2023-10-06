// first choose the card/position where the object is
card.querySelector('#set_free').addEventListener('click', () => {
    animalDonation = 10 //or card.innerHTML = "" NO VALUE DELETES IT
    card.querySelector('span').textContent = animal.donations
        //invoke then update it with fetch below  for it to show/the code to workf
});


//we need to update the deletion
function updateDonation(animalObj){ //create a function to delete  
    fetch (`url/${animalObj}`, {//THE TAGS ARE BACKFACING
    method: 'POST', //WE post
    headers: { //ensures the content we are requesting is json
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(animalObj)
})
.then(res => res.json())//ensures the server returns response as json
.then(animal => console.log(animal))//callback function to execute a promise
}
