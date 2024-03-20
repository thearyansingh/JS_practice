const question = [
    {
        'que': 'which of the following is a markup language'
       , 'a':'CSS',
       'b':'html',
       'c':'javascript',
       'd':"php",
       'correct':'a'
    }
    ,
    {
        'que': 'what year was javascript lanched?'
       , 'a':'1996',
       'b':'1995',
       'c':'1994',
       'd':"none of the above",
       'correct':'b'
    },
    {
        'que': 'what does css stand for?'
       , 'a':'Cascadin Style Sheet',
       'b':'hyper text markup',
       'c':'jason object notation',
       'd':"none of the above",
       'correct':'a'
    }

    
]
let index=0;
let total=question.length;
let right=0;
let wrong=0;
const quesbox=document.getElementById('queBox');
const optionsInputs=document.querySelectorAll('.options')
const loadQuestion =()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
   const data=question[index];
 
   quesbox.innerHTML=`${index+1})${data.que}`;
   optionsInputs[0].nextElementSibling.innerText=data.a;
   optionsInputs[1].nextElementSibling.innerText=data.b;
   optionsInputs[2].nextElementSibling.innerText=data.c;
   optionsInputs[3].nextElementSibling.innerText=data.d;

}
const submitQuiz=()=>{            // for submit button
    const data=question[index];
    const answer=getAnswer();

    if(answer == data.correct){
  right++;
    }
    else{
        wrong++;
    } 
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{          
    let ans;
    optionsInputs.forEach(
        (input)=>{
            if(input.checked){
            ans= input.value;
            }

        }
    )
    return ans;
}
const reset=()=>{
optionsInputs.forEach(
    (input)=>{
  input.checked=false;
    }
)
}
const endQuiz=()=>{
    document.getElementById('queBox').innerHTML=`<h3> thankyou for playing in Quiz </h3>
    <h2>${right}/${total} are correct</h2>`
    
}
loadQuestion(index);

