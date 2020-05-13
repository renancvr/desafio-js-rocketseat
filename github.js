listElement = document.querySelector('#app ul');
btnElement = document.querySelector('#app button');
inputElement = document.querySelector('#app input');

function searchRepos(){
    var user = inputElement.value;
    url = 'https://api.github/users'+user+'/repos';
    console.log(url);
}

btnElement.onclick = searchRepos();