/*var bookId;
var bookTitle;
var author;
var price;
var quantity;*/

var booksArray=[ [1, 'Start with why','Simon Sinek',80.0,13],[2, 'But how do it know','J. Clark Scott',59.9,22],
[3, 'Clean Code','Robert Cecil Martin',50.0,5],[4, 'Zero to One','Peter Thiel',45.0,12],
[5, 'You don\'t know JS','Kyle Simpson',39.9,9]]

console.table(booksArray);

// searchForBook through Book Id, Title, Author
function searchForBook(searchKey){
    for(var i=0;i<booksArray.length;i++){
        //id
        if(booksArray[i][0]==searchKey){
            return console.log("Book info: "+booksArray[i])
        }
        //title
        else if(booksArray[i][1]==searchKey){
            return console.log("Book info: "+booksArray[i])
        }
        //author
        else if(booksArray[i][2]==searchKey){
            return console.log("Book info: "+booksArray[i])
        } 
    }
    return console.log("Sorry, we can't found this book")

}


searchForBook(5)
searchForBook("Start with why")
searchForBook("Peter Thiel")
searchForBook("The land of Roar")
/////////////

function IssuanceOfInvoice(bookTitle,noOfBook,money){
    for(var i=0;i<booksArray.length;i++){
        //check book title, quantity is available, money is enough 
        //total price
        var totalPrice=noOfBook*booksArray[i][3];
        if(booksArray[i][1]==bookTitle&&booksArray[i][4]>=noOfBook&&totalPrice<=money){
            booksArray[i][4]=booksArray[i][4]-noOfBook;
            var newBalance=money-totalPrice;
            return console.log("You buy "+booksArray[i][1]+" book successfully, your balance now is:" +newBalance +" and the remaining quantity from this book is: " +booksArray[i][4]);
        } 
    }
    return console.log('Sorry, you can\'t buy successfully ')
}
//success
IssuanceOfInvoice("Clean Code",3,150)
//success
IssuanceOfInvoice("Zero to One",2,100)
//quantity problem
IssuanceOfInvoice("But how do it know",30,2000)
//money problem
IssuanceOfInvoice('You don\'t know JS',2,39)
//book title wrong
IssuanceOfInvoice('The land of Roar',2,50)
