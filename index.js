// Write your code here
class Breakfast {
    constructor (food, drink) {
        this.food = food,
        this.drink = drink
    }
}
let myBreakfast = new Breakfast ("egg", "mydrink")

class Lunch {
    constructor (salad, soup, drink) {
        this.salad = salad,
        this.soup = soup,
        this.drink = drink
    }
}

let myLunch = new Lunch ("salata", "mercemik", "tea")

class Dinner {
    constructor (salad, soup, entree, _dessert) {
        this.salad = salad,
        this.soup = soup,
        this.entree = entree
        this._dessert = _dessert
    }
}

let myDinner = new Dinner ("salata", "mercemik", "moutabbal", "dates")

