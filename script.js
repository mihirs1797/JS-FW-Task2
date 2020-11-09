var request = new XMLHttpRequest; // creating an instance of XMLHttpRequest

// does not open a connection instead prepares data to be sent
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//send a request

request.send();

//load the response

request.onload = function(){
    var data = JSON.parse(this.response);
    for(let i=0;i<data.length;i++){
        console.log(data[i].flag);
    }
    
}