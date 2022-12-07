const model = {
    site: document.getElementById(`app`),

    cats: [
        {name: 'Pusifer', 
        img: '<img src="img/ståles_pus.jpg" style="height: 200px; width: auto"/>', 
        points: 0,
        owner: 'Ståle',
        ratings: [0, 0, 0, 0],
        id: 1},

        {name: 'Jasmine', 
        img: '<img src="img/marie_jasmine.jpg" style="height: 200px; width: auto"/>', 
        points: 0,
        owner: 'Marie',
        ratings: [0, 0, 0, 0],
        id: 2},

        {name: 'Mia', 
        img: '<img src="img/mia.png" style="height: 200px; width: auto"/>', 
        points: 0,
        owner: 'Ståle',
        ratings: [0, 0, 0, 0],
        id: 3},

        {name: 'Rolf', 
        img: '<img src="img/rolf.png" style="height: 200px; width: auto"/>', 
        points: 0,
        owner: 'Heine',
        ratings: [0, 0, 0, 0],
        id: 4},
    ],

    users: [
        {name: 'Ståle', 
        password: '123',
        img: '<img src="img/default_profile.png" style="height: 50px; width: auto"/>',
        info: '',
        id: 1},

        {name: 'Marie', 
        password: 'abc',
        img: '<img src="img/default_profile.png" style="height: 50px; width: auto"/>',
        info: '',
        id: 2},

        {name: 'Heine', 
        password: '123abc',
        img: '<img src="img/default_profile.png" style="height: 50px; width: auto"/>',
        info: '',
        id: 3},
    ],

    savedInfo: [
        {userID: 0,
        catID: 0,
        ratings: [0, 0, 0, 0]},
    ],

    ratingNames: ['Fur quality', 'Face cuteness', 'Shine and vibe', 'Tail beauty'],

    currentCat: 0,
    userOnline: false,
    currentUser: [],
    userCat: [],
    catInfo: '',
    newCatImg: "",
    newCatName: '',
    infoToUser: '',
    edit: false,

};
