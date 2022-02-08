

let inputSearchElement = document.getElementById("inputSearchElement");
let searchButtonElement = document.getElementById("searchButtonElement");


// on click search button 

searchButtonElement.onclick = ()=>{
    let username = inputSearchElement.value;
    //console.log(username);
    userData(username)
    inputSearchElement.value = "";
}


// on click enter after search a user name in search bar 
inputSearchElement.addEventListener("keydown",()=>{
    //console.log(event.key)
    if(event.key==="Enter"){
        let username = inputSearchElement.value;
        //console.log(username)
        userData(username)
        inputSearchElement.value = "";
    }
})

// user not found text 
let userNotFoundText = document.getElementById("userNotFound");
userNotFoundText.textContent="";

// user not found function 
let userAccountInformationContainer = document.getElementById("userAccountInformationContainer");
let githubButtonContainer = document.getElementById("githubButtonContainer");
userNotFound = ()=>{
    userAccountInformationContainer.style.display = "none";
    userNotFoundText.textContent="User Not Found";
    userImageElement.src="https://www.clipartmax.com/png/middle/424-4240396_thinking-clip-art-confused-cartoon.png";
    githubButtonContainer.style.display="none";
}

let userImageElement = document.getElementById("userImageElement");
let usernameElement = document.getElementById("usernameElement");
let fullNameElement = document.getElementById("fullNameElement");
let followersInfoElement = document.getElementById("followersInfoElement");
let followingInfoElement = document.getElementById("followingInfoElement");
let githubHrefAttribute = document.getElementById("githubHrefAttribute");


//update text on front end 
updateText = (userData)=>{
    githubButtonContainer.style.display="block";
    userAccountInformationContainer.style.display = "block";
    userNotFoundText.textContent="";
    let {avatar_url,name,login,followers,following,html_url} = userData;
    console.log(userData)
    userImageElement.src=avatar_url;
    usernameElement.textContent = login;
    fullNameElement.textContent = name;
    followersInfoElement.textContent = followers;
    followingInfoElement.textContent = following;
    githubHrefAttribute.href = html_url;
}

// function to generate json data 
let url = "https://api.github.com/users";
userData = async (username)=>{
    let searchUrl = `${url}/${username}`;
    //console.log(searchUrl)

    let response = await fetch(searchUrl);
    let responseData = await response.json();

    //console.log(responseData);
    if(responseData.message==="Not Found"){
        userNotFound()
    }else{
        updateText(responseData)
    }
}