console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",   //#The-Shire   #Rivendell   #Mordor
  "Rivendell",
  "Mordor"
];
const $body = $('body');

// ====================================
//           Chapters
// ====================================
//$(.startgame).click((e) =>{
//humanPlyer.handforEach((card)=>){
  // $('.playerhand').append("text here")
//}
//})
//putting stuff on and taking it off, changing stuff
//make an empty div$('.choices').append("button class='choice-button id = hit>hit me'></button>")
//now we have button need fuction ${'choice-button).click((e)=>{
//})} jauz jamsadam jolly/fife
//give event listener to something that does exist because dynamic content won't work because it's not in html
//when you give a function to a jquery listener, it has a parameter even if you don't put one in currentTarget uses e.currentTarget
// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  //console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const MiddleEarth = $('<section id="middle-earth"></section>');
  console.log(MiddleEarth);
 $body.append(MiddleEarth)
 for ( let i = 0; i < lands.length; i++ ) {
  let land = $(`<article id="${lands[i]}">${lands[i]}</article>`);
  $(MiddleEarth).append(land)
  console.log(land);

$('*').css('border', '4px solid blue');
  // 2. append the section to the body of the DOM.
 
  // 3. use a for loop to iterate over the lands array that does the following:


  //   3a. creates an article tag (there should be one for each land when the loop is done)
  
  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article
  let header = $('<h1/>');
  header.html(land);
$('body').append(header)
    console.log(header);
 
  //   3d. appends each land to the middle-earth section
$('#middle-earth').append(land);
}
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.
  $ul = ('<ul class="hobbit"></ul>')
  $body.append($ul)

  for ( let i = 0; i < hobbits.length; i++ ){
  let $li =(`<li class ="${hobbits[i]}" >${hobbits[i]}</li>`)
  $('.hobbit').append($li)
  console.log($ul)}
  
  // 2. give each hobbit a class of "hobbit"
  // $('.hobbit').addClass('hobbit');
  let hop = $('ul.hobbit');
  console.log(hop);
  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
   $('*').css('border', '4px solid green');
  let $div = $('<div id="the-ring">Ring</div>');
  $body.append($div)
   console.log($div)
  // 2. add the ring as a child of Frodo
$('.hobbit li:first').append($div) ////////////////////////////////////////////////
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor
  $ulb = ('<ul class="baddies"></ul>')
  $body.append($ulb)
  for ( let i = 0; i < baddies.length; i++ ){
  let $lib = (`<li class ="baddy">${baddies[i]}</li>`)
  $('.baddies').append($lib);
   console.log($ulb)
 
}
$('.Mordor').append('.baddies');

  // 2. give each of the baddies a class of "baddy"
  $('*').css('border', '4px solid yellow');
  // 3. remember to append them to Mordor
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor
  let aside = $('<aside></aside>');
    let buddyList = $('<ul>');
    for(let i = 0; i < buddies.length; i++) {
      let buddy = $(`<li class="buddy">${buddies[i]}</li>`);
      buddyList.append(buddy);
      aside.append(buddyList);
 
    }
    // insert your aside as a child element of rivendell
    $('#Rivendell').append(aside);
    $('*').css('border', '4px solid purple');
  };
 
  // 2. display an unordered list of buddies in the aside

  // 3. give each of the buddies a class of "buddy"



// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {
  $('*').css('border', '4px solid gray');
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // $('#hobbits').appendTo( $('.middle-earth #Rivendell') );
    const hobbits= document.querySelector("ul");
      Rivendell.append(hobbits)
  };
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes



// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
  let searchNames = document.getElementsByTagName("li");

  // Once you go through the names, update the tag that has Stringer to Aragorn
  for (let i = 0; i < searchNames.length; i ++) {
    if (searchNames[i].innerHTML === "Strider"){
      searchNames[i].innerHTML = "Aragorn";
      break;
    };
  };
  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'
  let $div = $('<div id="the-fellowship">The Fellowship</div>');
  let $body = $('body');
$body.append($div)
console.log($body);

  // 2. add an h1 with the text 'The Fellowship' to this new div

  // 3. append the fellowship to middle-earth
$('#the-fellowship').appendTo('.middle-earth')
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  let searchAgain = document.getElementsByClassName("buddy");
  for (let i = 0; i < searchAgain.length; i ++) {
    if (searchAgain[i].text === "Gandalf the Grey"){
      searchAgain[i].text = "Gandalf the White";
      break;
    };
  };

  // 2. add a class "the-white" to this element
$('li.buddy').addClass("the-white")
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
$('.the-white').css({
'border': '4px solid gray', 
'background': 'white'
});
};

  // makeMiddleEarth(lands);
  // makeHobbits(hobbits);

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
window.alert("the horn of gondor has been blown");
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
window.alert("too soon :(")

(document.buddies[4]).css('text-decoration', 'line-through')
boromir.css('text-decoration', 'line-through');

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page


};
// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  $('.hobbit').eq(0).appendTo($('#Mordor'))
  $('.hobbit').eq(1).appendTo($('#Mordor'))
  // 2. add a div with an id of 'mount-doom' to Mordor
  let mountDoom = $('<div>');
  mountDoom.attr('id', 'mount-doom');
  //any specific member of a class is an instance
  //alexander dohrmann first tamagotchi
  console.log(mountDoom)
};
$('.hobbit').eq(0).appendTo($('#Mordor'))
// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
// $('body').append('div')
const $body = $("body");
//creates section tag, creates the elements and can chain on text with .text()
const $div = $('<div id="gollum"></div>').text("My precious");
 $body.append($div);
  // 2. Move the ring from Frodo and give it to Gollum
  $('ul.hobbit[0]').appendTo($('#gollum'));
  // 3. Move Gollum into Mount Doom
$div.appendTo(('#mordor'))
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
  $('body').remove($('#gollum'))

  // 2. remove all the baddies from the DOM
  $('body').remove($('#baddies'))
  // 3. Move all the hobbits back to the shire
  const hobbits= document.querySelector("ul");
  $('#the-shire').append(hobbits)

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".
//contains() to find thing

// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
