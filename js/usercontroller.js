$(() => {

    $("#pkbutton").on("click", () => {
        getOne();
    });
})
//     const getAll = () => {
//         $.getJSON("http://localhost:8080/api/users/")
//             .done(users => {
//                 console.log(users)
//                 let tbody = $("#tbody")
//                 for (let use of users) {
//                     let tr = $("<tr></tr>");
//                     let tduserName = $(`<td>${use.userName}</td>`);
//                     let tdfirstName = $(`<td>${use.firstName}</td>}`);
//                     let tdlastName = $(`<td>${use.lastName}</td>}`);
//                     tr.append(tduserName).append(tdfirstName).append(tdlastName);
//                     tbody.append(tr);

//                 }

//           });
//  getAll(); 
//    }

const getOne = () => {
    let id = $("#ppk").val();
    console.log(id);
       $.getJSON(`http://localhost:8080/api/users/${id}`)
        .done(users => {
        console.log(users);
        $("#pid").val(users.id);
        $("#puserName").val(users.userName);
                

            })
          
      };
   


