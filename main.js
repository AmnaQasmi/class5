"use strict";
// for loop make this kinda work easy  it is used to do repeted tasks.
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// { FOR LOOP SESSION } :)
// here i is presenting index
// at first statement we make variable and tell taht i = 0.
// and after completing the first statement we must should have to put ; semicolon before starting the next statement . 
//  for(let i = 0 ; false  ; i--){
//  console.log ("Hello Amna Qasmi")
//  }
// for (let index = 1; index < arr.length; index++) {
//     console.log ( arr[index]);
// }
// for (let i = 2; i < 12 ; i++){
// console.log(`${i}`);
// }
// const 	Stdnt = ["Aiman","Mustafa","Ashar","Rahima","Momina","sunbul","Altaf Nadeem","Darakshan","Alishba","Huda","Urooj","Fatima","Iqbal","Hayat"];
// this is how you know that which stdnt is present on index no [5] you can easily go through it 
// for(let i = 1; i < 10 ; i++){
//     console.log(Stdnt[5]);
// }
// const 	Stdnt = ["Aiman","Mustafa","Ashar","Rahima","Momina","sunbul","Altaf Nadeem","Darakshan","Alishba","Huda","Urooj","Fatima","Iqbal","Hayat"];
// wrong way must try :{
// for(let i = 0; i < 6; i++){
//     console.log(`std${1}👏`);
// }    
//}
//correct way must try:
// for(let i = 0; i < 6; i++){
//     console.log(i)
// }
// for(let i = 0; i < 6; i++){
//    console.log(Stdnt[0]);
// }
// don't make it case sensetive otherwise it will give you an error:  
//correct way must must practice:
// An amazing and nice piece of work for practice for coders
// for(let i = 0; i < 8; i++){
//    console.log(`${Stdnt [i]} you are corodially invited to my  gitrepo Welcome :) `);
// }
// Now here we are writting tables :
//Plz must practice alot of tables :
// this will only give you answer the counting 1 till 10 in a sequence.
// for(let i = 1; i <= 10; i++){
//     let ans = i * 2
//     console.log(i);
// }  
// if put i into "" it won't console but if you write the i without "" it will console easily.
// try it in this way much better, easier and convenient ;
// for(let i = 1; i <= 10; i++){
//     let ans = i * 2
//     console.log("2 x ", i ,"=", ans);
// }  
//in this case ans and i must be without "" so it will work properly.
// for(let i = 1; i <= 10; i++){
//     let ans = i * 2
//     console.log("2","x", i,"=",ans);
// //  }
// let arry = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"];
// for(let i = 1; i <= 14; i++){
//     console.log(arry[i]);
// }
// for loop examples :
//example  # 1 
// for (let i = 0; i < 6; i++) {
//     console.log("Selam Dünya");
//  };
//example  # 2
//  for (let i = 0; i < 9; i++) {
//     console.log("Merhaba" + i);
//   };
//example  # 3 
//  let cleanestCities = ["Turkey", "China", "Japan", "Europe"];
//  for (let i = 0; i <= 4; i++) {
//     if ("Turkey" === cleanestCities[i]) {
//       console.log("It's one of the cleanest cities");
//       break;
//     }
//   }
//example  # 4
// let cleanestCities : string[] = ["Turkey", "China", "Japan", "Europe"];
// var matchFound = "no";
// my this program hasn't run because of <alert> it wasn't working on my Vs code.
// for (var i = 0; i <= 4; i++){
//     if ("Islambad" === cleanestCities[i]) {
//       matchFound = "yes";
//       alert("It's one of the cleanest cities");
//     }
//     }
//     if (matchFound === "no") {
//       alert("It's not on the list");
//     }
//example  # 5
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// var numElements = cleanestCities.length;
// var matchFound = false;
// for (var i = 0; i < numElements; i++) {
//   if ("oman" === cleanestCities[i]) {
//     matchFound = true;
//     console.log("It's one of the cleanest cities");
//     break;
//   }
// }
// if (matchFound === false) {
//   console.log("It's not on the list");
// }
// { NESTED _ FOR LOOP SESSION } :)
// means loop in a loop similarly like (if...else nested as we work on it previous).
// in this we have a "parent loop" which carries child loops
// a one parent loop can have more then one child loops if we run the cmd the parent loop first executes and then it will executes child loops.
// for(let i = 0; i < 3; i++){
//     console.log("parent loop");
// if you guys applied break before child loop it won't proceed or run furtur.
// break;
//     for (let j = 0; j < 4; j++) {
//         console.log("Child Loop", j)
//     }
// }
// First time - parent loop Done // and break
// this is how you can check the length
// let videos = ["video1", "video2", "video3", "video4", "video5"];
// console.log(videos.length) // 5
// for  (let i = 0; i < videos.length; i++){
//     console.log(videos[i])
// }
// let video1 = {
//     title: "video1",
//     description: "video 1 description",
//     image: "https://image.com"
// }
// const videos = [
//     {
//         title: "video1 code with harry JScript course",
//         description: "video 1 description",
//         image: "https://image.com"
//     },
//     {
//         title: "video2 code with harry the Ultimate JScript course",
//         description: "video 2 description",
//         image: "https://image.com"
//     },
// ]
// for (let i = 0; i < videos.length; i++) {
//     console.log(videos[i].title )
// }
//Example you must should solve it :
// const TourPlaces = [
// {
// Pakistan: ["sawat","Naran","Naltar Valley","Attabad Lake","Ranikot Fort","Ansoo Lake","Fairy Meadows"],
// Turkey : ["Topkapi Palace","Istanbul","Pamukkale","Antalya","Mount Nemrut","Ephesus","Bursa"],
// },
// {
// Turkey : ["Topkapi Palace","Istanbul","Pamukkale","Antalya","Mount Nemrut","Ephesus","Bursa"],
// England:["Warwick Castle","Tower of London","Angel of the North"],
// Poland:["Krakow","Old Town. 13,941","Państwowe Muzeum ","Warsaw"]
// },
// ]
// for(let i = 0; i < TourPlaces.length; i++){
//     console.log(TourPlaces[i].Turkey)
// }
// let videos : string[] =["Videos1","Videos2","Videos3","Videos4","Videos5","Videos6","Videos7",];
// // console.log(videos.length); // 7
// for (let i = 0; i < videos.length; i++){
// console.log(videos,(i)); 
// }
// let video1 = {
//     title: "video1",
//     description: "video 1 description",
//     image: "https://image.com",
//     views: 1000,
//     log: () => { console.log("hello") }
// }
// video1.log()
// console.log( video1);
//                                           X********X********X
