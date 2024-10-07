

export function changePage(pageName){
    if(pageName == ""){

        $.get("pages/home.html",(data) =>{
    $("#app").html(data);
        }).fail((error)=>{
            console.log("error ",error);
    
         
        });
   
    }else{
       
    
        
        $.get(`pages/${pageName}.html`,(data) =>{
            $("#app").html(data);


    
    if(pageName === "login") {
        
        initListeners();
        
    }

                }).fail((error)=>{
                    console.log("error ",error);
            
                   
                });
    }
        
    }

   
    
function initListeners() {
   

    $("#subBTN").on("click", (e) => {
        var userName=  $('#fname').val();
        var password=  $('#password').val();


         if(userName === "" || password === ""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Both fields are required",
               
              });
          } else{
        Swal.fire({
            
             icon: "success",
             title:  `Welcome, <strong style="color: #FF5733;">${userName} </strong> You are now logged in to your recipe account.`,

            
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });

        }
         
    });


    
}

$("#response").on("click", function (e) {
    e.preventDefault(); 
    Swal.fire({
        title: "Do you want to login?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
        icon: 'info',
        
    }).then((result) => {
        if (result.isConfirmed) {
            changePage("login"); 
        }else{
            changePage("home");
        }
    });
});


$("#response").on("click", function () {
    changePage("login");
});