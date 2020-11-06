$(() => {

    var user = {
        id: 0, userName : "zz", password: "xx",
           firstName: "xx", lastName: "xx", phoneNumber: "911",
                isReview: true, isAdmin: true, 
                email: "mgberg.man@gmail.com"
    };


$.ajax({
    method: "POST",
    url: "http://localhost:8080/api/users",
    data: JSON.stringify(user),
    contentType: "application/json"
})
    .done(res => {
        console.log(res);
        getAll();
    })
    .fail(err => {
        console.error(err);
    });

const getAll = () => {
$.getJSON("http://localhost:8080/api/users/")
    .done(users =>{
        console.log(users);
    });
}
    console.log("After the getJSON call");


})