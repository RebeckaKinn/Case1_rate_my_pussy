//Create profile 
function createProfile(){
    let newPassword = document.getElementById(`newPasswordBox`).value;
    let newUsername = document.getElementById(`newUserNameBox`).value;
    let userIndex = model.users.length + 1;
    model.users.push({name: newUsername, 
                    password: newPassword,
                    img: 'img/default_profile.png',
                    info: 'Skriv litt om deg selv',
                    id: userIndex});
    model.userOnline = true;
    model.currentUser.push(model.users[model.users.length -1]);
    profile();
}
//log inn
function logInnUser(){
    let password = document.getElementById(`passwordBox`).value;
    let username = document.getElementById(`usernameBox`).value;
    for(let i = 0; i< model.users.length; i++){
        if(password == model.users[i].password && username == model.users[i].name){
            model.currentUser.push(model.users[i]);
            model.userOnline = true;
            profile();
        }
    }
    if(model.userOnline == false){
        password = '';
        username = '';
        model.site.innerHTML += /*HTML*/`
        <h3 class="wrongLogIn">Password or username is incorrect. Please try again.</h3>
        `;
    }
}
//log out
function logOut(){
    model.users.push(model.currentUser[0]);
    model.currentUser.splice(0, model.currentUser.length);
    model.userOnline = false;
    frontPage();
}
//personal info
function updateInfoButton(){
    let infoInput = document.getElementById(`userInfoBox`);
    model.edit = !model.edit;
    if(model.edit == true){
        model.infoToUser = /*HTML*/`
        <input class="inputUserInfoBox" type="text" id="userInfoBox" placeholder="Write something about yourself..." value="${model.currentUser[0].info}"/>
        `;
    }else{
        model.currentUser[0].info = infoInput.value;
        model.infoToUser = /*HTML*/`
        <div class="userInfo">${model.currentUser[0].info}</div>
        `;
    }
    profile();
}
//save rating for each cat
function updateRatings(newRating, number, cat){
    model.cats[model.currentCat].ratings[number] = newRating;
    model.cats[cat].points = (model.cats[model.currentCat].ratings[0] + model.cats[model.currentCat].ratings[1] + model.cats[model.currentCat].ratings[2] + model.cats[model.currentCat].ratings[3]) / 4;
    rating();
};
//tuggle which cat is visible 
function nextCat(side){
    if(side == 'right'){
        model.currentCat++;
    }
    if(side == 'left'){
        model.currentCat--;
     }
    if(model.currentCat === - 1){
        model.currentCat += model.cats.length;
        }
    else{
        model.currentCat = model.currentCat % model.cats.length;
    }
    rating();
    return model.cats[model.currentCat];
}
//check who is top rated 
function topRatedSite(){
    model.cats.sort((a,b) => b.points - a.points).slice(0, 3)
}
//new cat upload 
function uploadCatImage(){
    const fileUpload = document.getElementById(`uploadFile`);
    fileUpload.addEventListener("change", function() {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            model.newCatImg = reader.result;
        });
        reader.readAsDataURL(this.files[0]);
    }); 
}
function uploadCat(){
    let newNameInput = document.getElementById(`newNameInput`);
    model.newCatName = newNameInput.value;
    let catIndex = model.cats.length + 1;
    model.cats.push(
        {name: model.newCatName, 
        img: model.newCatImg, 
        points: 0,
        owner: model.currentUser[0].name,
        ratings: [0, 0, 0, 0],
        id: catIndex}
        );
        profile();
    return model.cats;
}