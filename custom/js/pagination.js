class Pagination {
    constructor(itemsPerPage, shoesTab) {
        this.itemsPerPage = itemsPerPage;
        this.shoesTab = shoesTab;
        this.selectedPage = 1;
        this.html = document.createElement("nav");
        this.html.setAttribute("aria-label", "Page navigation example");
        this.initShoes();
    }

    get getHtml() {
        const ulBlock = document.createElement("ul");
        ulBlock.classList.add("pagination", "pagination-lg");
        for (let i = 0; i <= this.shoesTab.length; i++) {
            if (i % this.itemsPerPage == 0 && i != this.shoesTab.length) {
                const newLi = document.createElement("li");
                newLi.classList.add("page-item");
                const newA = document.createElement("a");
                newA.classList.add("page-link", "font-weight-bold", "text-dark");
                newA.textContent = i / this.itemsPerPage +1;
                newLi.append(newA);
                newLi.addEventListener("click", () => {
                    this.selectedPage = i / this.itemsPerPage+1;
                    document.querySelectorAll(".page-link").forEach(linkA => {
                        linkA.style.backgroundColor = "yellow";
                        linkA.style.color = "black";
                    })
                    newA.setAttribute('style', 'color:yellow !important');
                    newA.style.backgroundColor = "black";
                    this.initShoes();
                })
                if (i == 0) {
                    newA.setAttribute('style', 'color:yellow !important');
                    newA.style.backgroundColor = "black";
                } else {
                    newA.setAttribute('style', 'color:black !important');
                    newA.style.backgroundColor = "yellow";
                }
                ulBlock.append(newLi);
            }

        } this.html.append(ulBlock);
        return this.html;
    }
    initShoes() {
        this.shoesTab.forEach((shoe, index) => {
            if (index >= (this.selectedPage * this.itemsPerPage) - this.itemsPerPage && index < this.selectedPage * this.itemsPerPage) {
                shoe.setVisible = true;
            } else {
                shoe.setVisible = false;
            }
        })
    }

}