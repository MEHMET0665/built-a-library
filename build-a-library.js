class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title () {
    return this._title;
  }
 get isCheckedOut () {
    return this._isCheckedOut;
  }
  get ratings () {
    return this._ratings;
  }
  
  set isCheckedOut (CheckedOut) {
    this._isCheckedOut = CheckedOut;
  }
  
  toggleCheckedOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  getAverageRating () {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return ratingsSum/ this.ratings.length;
  }
  
  addRating (newRating) {
    this.ratings.push(newRating);
  }
  
}

class Book extends Media {
    constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._title = title;
    this._pages = 20;
    this._isCheckedOut = false;
    this._ratings = [];  
  }
  
  get author () {
    return this._author;
  }
  get pages () {
    return this._pages;
  }
}

class Movie extends Media {
    constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._title = title;
    this._runTime = 120;
    this._isCheckedOut = false;
    this._ratings = [];  
  }
  
  get director () {
    return this._director;
  }
 
  get runTime () {
    return this._runTime;
  }
};

const historyOfEverything  = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckedOutStatus;
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(6);

console.log(historyOfEverything.getAverageRating());

const speed  = new Movie ('Jan de Bont', 'Speed', 116);

speed.toggleCheckedOutStatus;
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

