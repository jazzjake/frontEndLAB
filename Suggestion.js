

export default class Suggestion {

    constructor(form) {
        
        this.recipeName = form.elements["recipeName"];
        this.ingredients = form.elements["ingredients"];
        this.fullName = form.elements["fullName"];
        this.email = form.elements["email"];
        this.form = form;
        this.elements = document.getElementsByClassName("formInput");
    }

    recipeName = "";
    ingredients = "";
    fullName = "";
    email = "";
    form = "";
    elements ="";

    send() {
        const msg = document.getElementById("msg");
        msg.style.display = "block";
        if(!this.checkMissing(this.elements)) {
            msg.innerHTML = "Thank you " + this.fullName.value + " for your suggestion."
            this.form.reset();
        } else {
            msg.innerHTML = "Please enter required fields"
        }
    };

    checkMissing(elements){
        let missing = false;
        for (let i = 0; i < elements.length; i++) {
            if(!elements[i].value){
                elements[i].style.borderColor = "red";
                missing = true;
            } else {
                elements[i].style.borderColor = "lightskyblue";
            }

        }
        return missing;
    };

};


