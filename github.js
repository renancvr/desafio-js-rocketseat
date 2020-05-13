listElement = document.querySelector('#app ul');
btnElement = document.querySelector('#app button');
inputElement = document.querySelector('#app input');

function searchRepos(){
    var user = inputElement.value;
    url = 'https://api.github.com/users/'+user+'/repos';
    axios.get(url)
        .then(function(response){
            repos = [];
            for(repo of response.data){
                repos.push(repo.name)
            }
            render(repos);
        })
        .catch(function(error){
            console.warn(error);
        })
}

btnElement.onclick = searchRepos;

function render(repos){

    listElement.innerHTML = '';
    for(repo of repos){
        repoElement = document.createElement('li');
        textElement = document.createTextNode(repo);
        repoElement.appendChild(textElement);
        listElement.appendChild(repoElement);
    }
}