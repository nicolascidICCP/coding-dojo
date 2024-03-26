let likesCount = {
    definition1: 0,
    definition2: 0,
    definition3: 0
};


function addLike(definitionId) {
    likesCount[definitionId]++;
    let likesElement = document.getElementById('likes' + definitionId.slice(-1));
    likesElement.textContent = likesCount[definitionId] + " " + "Like(s)";
}