$(document).ready(function(e) {   
   
    $("#signHere").click(function(){
        $("#login").hide("fade");
        $form = $("<form></form>");
        $form.append(
        '<label for="username">Email</label>' +
        '<input type="text" placeholder="Email or Phone" id="username">' +
        '<label for="username">Username</label>' +
        '<input type="text" placeholder="Email or Phone" id="username">' +
        '<label for="password">Password</label>' +
        '<input type="password" placeholder="Password" id="password">' +
        '<label for="password">Re-Type Password</label>' +
        '<input type="password" placeholder="Re-Type Password" id="password">' +
        '<button>Create</button>');
        $('body').append($form);
    });

 });
