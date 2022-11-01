let customerData;
$(document).ready(function () {
    $("#btn").click(function (event) {
        event.preventDefault()
        let name = document.getElementById("#name");
        let email = document.getElementById("#email")

        if(name.value.length == 0 || email.value.length == 0){
            alert("Some fields are empty")
        }
        else{
            customerData = ""
            customerData = {
                name : name.value,
                email : email.value,
                date: Date(),
            }
            
            $.post("/request", (customerData),
            function(request) { console.log(request); });
            location.href = "http://localhost:5000/result"

        }
        
    
    });
});
