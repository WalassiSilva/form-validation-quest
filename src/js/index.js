const inputs = document.querySelectorAll(".input-check");
const submit = document.getElementById("submit");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => 
{
    e.preventDefault();
    validateInputs();
} )

function validateInputs() 
{
    inputs.forEach(input => 
        {
        const complete = input.value !== "";     

        if(complete){
            input.classList.remove("incomplete");
            input.classList.add("complete");
        }else if(!complete){
            input.classList.remove("complete");
            input.classList.add("incomplete");
        };
    });
};
