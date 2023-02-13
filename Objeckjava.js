// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
//В этом задании я не понял как сделать по другому бился головой над этим номером дня 3 как бы покрасивее сделать
//
const numbers = 
{
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,

keybigthr: function(){
//forin
    console.log(`${this.keyin7} to ${this.keyin6} and ${this.keyin5} and ${this.keyin4}  last ${this.keyin3}`)
}

}
numbers.keybigthr();

// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//     {
//     userId: 10,
//     userName: "Alex",
//     text: "lorem ipsum",
//     rating: {
//     likes: 10,
//     dislikes: 2, // вывести это число
//     },
//     },
//     {
//     userId: 5, // вывести это число
//     userName: "Jane",
//     text: "lorem ipsum 2", // вывести этот текст
//     rating: {
//     likes: 3,
//     dislikes: 1,
//     },
//     },
//     ],
//     };
// я ичего не понял как и что работает хоть и пересмативал вебинары семинары по 4 разу ,но это за гранью видимо моих нынешних  знаний



// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
];
products.forEach ( function(elem,index){
    console.log(elem);
})
//same to same я пок не знаю как изменять 