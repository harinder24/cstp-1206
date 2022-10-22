let customerData;
$(document).ready(function () {
    $("#btn").click(function (event) {
        event.preventDefault()
        let name = document.getElementById("#name");
        let email = document.getElementById("#email")
        let password = document.getElementById("#password");

        if(name.value.length == 0 || email.value.length == 0 ||password.value.length == 0){
            alert("Some fields are empty")
        }
        else{
            customerData = ""
            customerData = {
                name : name.value,
                email : email.value,
                date: Date(),
                password : password.value
            }
            
            $.post("/request", (customerData),
            function(request) { console.log(request); });

        }
        
    
    });
});