let string = "";
let buttons = document.querySelectorAll("button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        // show result when user clicked =
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("textarea").innerText = string;
        }
        // clears full calculation
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector("textarea").innerText = string;
        }
        // removes last element using slice method
        else if(e.target.innerHTML == "←"){
            string = string.slice(0,-1)
            document.querySelector("textarea").innerText = string;
        }
        else{
            if(e.target.innerHTML!="Next"){
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector("textarea").innerText = string;
            }
        }
    })
})


let btn=document.getElementById('btn');
let output=document.getElementById('output');

let quotes = [
"There’s an enzyme named after Pikachu",
"The creator of Pokémon was inspired by insect-catching",
"Raikou is the only legendary Pokemon Ash hasn't encountered in the anime or in one of the movies.",
"One of Parasect's Pokedex entries says its spores are used as medicine in China, which is a rare reference to the real world.",

"When the show was first being planned, Ash was originally going to be given a Clefairy. It was switched out at the last minute with Pikachu.",
"Koffing & Weezing Used To Be Named After American Cities",
"Machamp Isn't Wearing Underwear",
"There Are No Fighting/Electric Type Pokemon",
"Rayquaza Eats Meteorites",
"There Are No Bug-Type Legendary Pokemon",
"Drampa Is A Chinese Dragon, Specifically A Zhulong ",
"Suicune Is Based On A Kirin, A Chinese Unicorn",
"People Eat Pokémon",
"It wears the skull of its dead mother on its head . When it becomes lonesome its said to cry loudly .",


];


btn.addEventListener('click',function(){
    var randomQuote=quotes[Math.floor(Math.random()*quotes.length)];
    output.innerHTML=randomQuote;
})