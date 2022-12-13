class Shoe {
    constructor(shoeData) {
        this.name = shoeData.name;
        this.price =  shoeData.price;
        this.image =  shoeData.image;
        this.html = document.createElement("div");
        this.html.className = "col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center position-relative";
        this.html.innerHTML = `<img src="images/${this.image}" width="100%" class="gray-scale">
        <div class="position-absolute price d-flex align-items-center justify-content-center fw-bolder h5">${this.price} €</div>
        <div class="position-absolute model p-3  fw-bolder h3">${this.name}</div>`;
    }

    get getHtml () {
        return this.html;
    }
    set setVisible (visibility) {
        if(visibility) {
            console.log(visibility)
            this.html.setAttribute('style', 'display:initial !important');
        } else {
            console.log(visibility)
            this.html.setAttribute('style', 'display:none !important');
        }
    }
}