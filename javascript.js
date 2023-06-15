// Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.

// pseudo code

// Input
// managment of books
// cataloging books

// output
// descriptive string that shows the number of books in the Library
// results showing new books added those removed

// Processing
// create a class LibraryCatalog
// create subclasses
// create methods


class LibraryCatalog{
    constructor(author,title,bookDetails){
        this.author=author
        this.title=author
        this.book=book

         let booking=[]
        let allBooks = new LibraryCatalog("Becky","The hood","available")
        booking.push(allBooks)

    }
}

class Management{
    constructor(numberOfBooks){
        this.numberOfBooks
    }

addBooks(book){
    for(book in book){
        if(this.book =this.bookDetails){
            allBooks.add(book)
            console.log(`${this.bookDetails} is available`)
            
        }
        else{
            console.log("book is not available")
        }
    }
}
searchBook(title){
    if(this.title!==this.title){
        console.log(`the book of ${this.title} is present`)
        this.title.add(title)
    }
    else{
        console.log("The book of {this.title} is already present")
    }
}
removeBook(){
    for(book in book){
        if(this.book ===this.author){
            this.book.remove(this.book)
            console.log(`${this.book} with the author name ${this.author} was removed successfully`)
        }
        else{
            console.log(`the ${this.author} is not present`)
        }
        
    }
}
addNewBook(book) {
    this.books.push(book);
    

    }

}
let mybooks=new LibraryCatalog("becky","Jguar","available");
mybooks.addBooks("New Irin Man")
mybooks.searchBook("Home sweet home");
mybooks.removeBook()

// if(totalpric- this.budget){
//     console.log(total budget exceeds $this.busget)
// }


// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.


// pseudo Code 
// Input
// characteristics
// behaviors

// output
// descriptive string that displys the life span and the animal migration plus its prey


// Proces
// main class
//  3 subclasses for the `Species`, `Predator`, `Prey`
//  methods

class Wildlife{
    constructor(diet, lifeSpan, migration,carnivorous){
        this.diet=diet
        this.lifeSpan
        this.migration
        this.carnivorous

    }
    commonBehavior(fast){

        console.log(` during${this.birth}all this animals can ${this.constructor.name} feed on ${this.diet} and live for ${this.lifeSpan} as they migrate to ${this.migration}`)
        

    }
}
class Spieces extends Wildlife{
    constructor(diet, lifeSpan, migration,carnivorous,animal){
        super(diet, lifeSpan, migration,carnivorous)
        this.animal=animal
    }
    commonBehavior(){
        if(this.animal !=="prey" || this.animal == "young"){
            return(`${this.animal} will not ${this.migration} before ${death}` )

        }
        else{
            return (`"${this.animal} will migrate to ${this.migration}`)
        }
       
    }
   
}
class migrationPrediction{
    super(diet, lifeSpan, migration,carnivorous){
        if(this.lifeSpan==="20 years"  || this.migration =="north"){
            console.log(` the animal was born ${this.birth} and ${this.migration}`)
        }
        else{
            console.log(`"${this.lifeSpan} for the animal `)
    }

}


}












