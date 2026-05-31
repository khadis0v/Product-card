import { comments } from "./comments.js";


//1.2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.filter(el => el >= 5);

console.log(result); //5,6,7,8,9,10  


//1.3
const cars = ["Toyota", "Honda", "Ford", "BMW", "Audi"];
const hasMersedes = cars.includes("Mercedes");

console.log(hasMersedes) //false


//1.4
const getReversed = (arr) => {
  return arr.reverse();
};

console.log(getReversed(result)); //[10, 9, 8, 7, 6, 5]
console.log(getReversed(cars)); //["Audi", "BMW", "Ford", "Honda", "Toyota"]





//2.7
const commentsByCom = comments.filter(comment => comment.email.endsWith(".com"));

console.log(commentsByCom); //Вывелись комментарии с id 2 и 6 


//2.8
const updatedComments = comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log(updatedComments); 
//Комментарии с id от 1 до 5 получили postId 2,
//а остальные, от 6 до 10 получили postId 1


//2.9
const formattedComments = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));

console.log(formattedComments);
//Вывелись объекты с id и name всех комментариев, 
//без полей postId, email и body


//2.10
const validatedComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(validatedComments);
//Комментариq с id 3 получил isInvalid: true, 
//а остальные 9 - isInvalid: false.





//3.11
const emailsByReduce = comments.reduce((acc, comment) => [
...acc,
comment.email
],[]);

console.log(emailsByReduce);


const emailsByMap = comments.map(comment => comment.email);
console.log(emailsByMap);
//Вывел все(10) email из массива comments в виде массива строк с помощью метода Reduce.
//Вывел все(10) email из массива comments в виде массива строк с помощью метода Map.


//3.12
const emailsToString = emailsByReduce.toString();
console.log(emailsToString);


const emailsByJoin = emailsByMap.join(", ");
console.log(emailsByJoin);
//Вывел все(10) email из массива 11 задания в виде одной строки с помощью метода toString.
//Вывел все(10) email из массива 11 задания в виде одной строки с помощью метода Join.  