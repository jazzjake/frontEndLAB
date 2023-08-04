

export default class Suggestion {

    constructor(form) {
        this.recipeName = form.elements["recipeName"];
        this.ingredients = form.elements["ingredients"];
        this.fullName = form.elements["fullName"];
        this.email = form.elements["email"];
        this.form = form;
    }

    recipeName = "";
    ingredients = "";
    fullName = "";
    email = "";
    form = "";

    send() {
        if(!this.checkIt(this.recipeName, this.ingredients, this.fullName, this.email)) {
            alert("Thank you " + this.fullName.value + " for your suggestion!");
            this.form.reset();
        };
 
    };

    checkIt(...args){
        let missing = false;
        args.forEach(element => {
            if(!element.value){
                element.style.borderColor = "red";
                missing = true;
            } else {
                element.style.borderColor = "lightskyblue";
            }
        })
        return missing;
    };

};


