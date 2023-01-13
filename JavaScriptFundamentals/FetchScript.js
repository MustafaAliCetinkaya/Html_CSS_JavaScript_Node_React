
const output = document.getElementById('output');
const clickMe = document.getElementById('clickMe');
clickMe.addEventListener('click',myJSON);

function myJSON(){
    console.log('click');
    const url = 'https://randomuser.me/api/?results=50';
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        console.log(data.results[0].name.first);
        //console.log(data.results[0].dob.age);
    }).catch(function(e){
        console.log(e);
    })
}