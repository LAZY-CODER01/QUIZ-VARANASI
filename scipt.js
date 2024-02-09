const questions = [
    {
        'que': "What is the other name for Varanasi?",
        'a': "Benaras",
        'b': "Kashi",
        'c': "Both a and b",
        'd': "None of the above",
        correctAnswer: "c"
    },
    {
        que: "Which river flows through Varanasi?",
        a: "Ganges",
        b: "Yamuna",
        c: "Brahmaputra",
        d: "Godavari",
        correctAnswer: "a"
    },
    {
        que: "Varanasi is known for its ghats. How many ghats are there along the river in Varanasi approximately?",
        a: "50",
        b: "100",
        c: "80",
        d: "200",
        correctAnswer: "b"
    },
    {
        que: "Which famous ancient university is located in Varanasi?",
        a: "Nalanda University",
        b: "Takshashila University",
        c: "Vikramshila University",
        d: "Banaras Hindu University",
        correctAnswer: "d"
    },
    {
        que: "What is the famous Hindu temple dedicated to Lord Shiva in Varanasi?",
        a: "Kashi Vishwanath Temple",
        b: "Sankat Mochan Temple",
        c: "Durga Temple",
        d: "Kashi Naresh Temple",
        correctAnswer: "a"
    },
    {
        que: "Varanasi is known for its silk weaving industry. What is the famous silk fabric produced in Varanasi?",
        a: "Pashmina",
        b: "Kanjeevaram",
        c: "Banarasi Silk",
        d: "Chanderi",
        correctAnswer: "c"
    },
    {
        que: "Which festival is celebrated with great fervor in Varanasi, where thousands of diyas (lamps) are lit along the ghats?",
        a: "Diwali",
        b: "Holi",
        c: "Dussehra",
        d: "Makar Sankranti",
        correctAnswer: "a"
    },
    {
        que: "Varanasi is believed to be one of the oldest continuously inhabited cities in the world. Approximately, how old is Varanasi?",
        a: "1000 years",
        b: "3000 years",
        c: "5000 years",
        d: "7000 years",
        correctAnswer: "c"
    },
    {
        que: "Who famously described Varanasi as the 'oldest living city in the world' in his writings?",
        a: "William Shakespeare",
        b: "Mark Twain",
        c: "Charles Dickens",
        d: "Leo Tolstoy",
        correctAnswer: "b"
    },
    {
        que: "What is the significance of Varanasi in Hinduism?",
        a: "It is believed to be the birthplace of Lord Krishna",
        b: "It is one of the four main pilgrimage sites for Hindus",
        c: "It is the place where Lord Rama meditated",
        d: "It is the place where Lord Buddha attained enlightenment",
        correctAnswer: "b"
    }
];
var container=document.querySelector("#container");
var container1=document.querySelector("#container1");
var heading=document.querySelector("#heading");
var option=document.querySelectorAll('label');
var btn=document.querySelector("#submit");
var btnf=document.querySelector("#finalsubmit");
var go=document.querySelector("#go");
var previous=document.querySelector("#previous");
var after=document.querySelector("#after");
var inputs=document.querySelectorAll("input");
var correctbar=document.querySelector("#correctbar");
var wrongbar=document.querySelector("#wrongbar");

var index=0;

const total=10;
wrong=0;
correct=0;
let answer2="";
displayQuestion();
function  displayQuestion(){
    const data=questions[index];
heading.innerText=data.que;
option[0].innerText=data.a;
option[1].innerText=data.b;
option[2].innerText=data.c;
option[3].innerText=data.d;


};
// setInterval(displayQuestion,1000);
function reset(){
       inputs.forEach(
        (input)=>{
            input.checked=false;
        }
       )
};

function submit(){
    const data=questions[index];
    const answer=data.correctAnswer;
inputs.forEach(
    (input)=>{
        if(input.checked){
        answer2=input.value;
        }
    }
   )

console.log(answer,answer2);
if(answer===answer2){
    correct++;
}
else{
 wrong++;
}
console.log(correct,wrong);
};
btn.addEventListener('click',()=>{
    submit();
    index++;
displayQuestion();

reset();

if(index===9){
    btn.style.display="none";
    btnf.style.display="inline-block";
}

}

);
go.addEventListener('click',()=>{
container.style.display="inline-block";   
go.style.display="none";
});
btnf.addEventListener("click", () => {
             
    submit();
    result(); 
    bar();
    btnf.style.display="none";
    container.style.display="none";         
    container1.style.display="inline-block";    
});


function result(){
correctpercentage=(correct*100)/10;
wrongpercentage=(wrong*100)/10;
console.log(correctpercentage,wrongpercentage);
};
function bar(){
    correctbar.style.width=`${correctpercentage}%`;
    correctbar.innerText=`${correctpercentage}%`;
    wrongbar.style.width= `${wrongpercentage}%`;
    wrongbar.innerText= `${wrongpercentage}%`;
};