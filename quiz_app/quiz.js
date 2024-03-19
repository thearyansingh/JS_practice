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
const quesbox=document.getElementById("queBox");
const loadQuestion =()=>{
   const data=question[index];
   console.log(data);
   quesbox.innerHTML=data.que

}
loadQuestion();