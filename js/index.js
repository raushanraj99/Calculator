var button = document.getElementById("buttons");
        var displayed = document.getElementById("display");
        var lists = button.querySelectorAll("li");
        for(var i =0 ;i<=lists.length;i++){
            lists[i].addEventListener("click",function(){
                

                if(this.innerHTML == "="){
                    displayed.innerHTML = eval(displayed.innerHTML);
                }
                else{
                    if(this.innerHTML=="Clear"){
                        displayed.innerHTML = "";
                    }
                    else{
                    displayed.innerHTML += this.innerHTML;
                    }
                }


            });




        }
        