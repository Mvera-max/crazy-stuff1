bitchData=[
  {
    question:`How would you describe yourself in one word?`,
    answer:`loving, caring, good, amazing`
  },
  {
    question:`Has anyone called you a bitch before?`,
    answer:`no`
  },
  {
    question:`If mangos and oranges had a fight how would the sun stop jupiter from getting to uranus`,
    answer:`cows drink water`
  },
  {
    question:`If Alex from Madagascar was gay, who would he most likely end up with?`,
    answer:`Marty`
  },
  {
     question:`How long does it take for you to travel from sukin all the way to sukin on deez nuts?`,
     answer:`45 minutes`
  }
];
/*function questionHtml(){
  const quizSection=document.querySelector('.quiz-section');

  const questionDisplay=document.createElement('p');
  questionDisplay.className='question'
  
  const answerInput=document.createElement('input');
  answerInput.className='answer-input'
  
  const submitBtn=document.createElement('button');
  submitBtn.textContent='Submit';
  submitBtn.className='submit-button'
  
  quizSection.appendChild(questionDisplay);
  quizSection.appendChild(answerInput);
  quizSection.appendChild(submitBtn);

  created=true;
}*/ //pro tip, never use document.createElement when creating quizes. too much complicated shit

const openingSect=document.querySelector('.opening-section');
const questionDisplay=document.querySelector('.question');
const quizSection=document.querySelector('.quiz-section');
const answerInput=document.querySelector('.answer-input');
const submitBtn=document.querySelector('.submit-button')

let index=0
bitchScore=0


function showQuiz(){
  if(index>=bitchData.length){
    showResult();
    return
  }
  const bitchObj=bitchData[index];
  questionDisplay.textContent=bitchObj.question
  openingSect.style.display='none'
  quizSection.style.display='block'

  //quizlogic();
}

document.querySelector('button').addEventListener('click',()=> showQuiz())


// putting event listeners in functions is a bad idea. everytime the function is called so is the eventlistener logic making the code buggy
//function quizLogic(){
  document.querySelector('.submit-button').addEventListener('click',()=>{
    if(answerInput.value===``){
      alert('Enter something you gay ass nigga🫃');
      return;
    }
    if(document.querySelector('.answer-input').value.trim().toLowerCase()!==bitchData[index].answer){
      bitchScore++
      answerInput.value=``
    }
    index++
    showQuiz();
  });
//}

answerInput.addEventListener('keypress',(e)=>{
  if(e.key==='Enter'){
  if(answerInput.value===``){
    alert('Enter something you gay ass nigga🫃');
    return;
  }
  if(document.querySelector('.answer-input').value.trim().toLowerCase()!==bitchData[index].answer){
    bitchScore++
    answerInput.value=``
  }else{
    answerInput.value=``
  }
  index++
  showQuiz();
}});

function showResult(){
 quizSection.innerHTML=`
 <h1>Congratulations! You have completed the survey🙂</h1>
 <h3>You are ${(bitchScore/bitchData.length)*100}% Bitch<h3>
 <p>Well, there you have it. an accurate assesment of your bitchines all for free and from the comfort of your home. No need for thanks. I live to help others. If your still reading this then you either have nothing to do or your just a bitch😂. Go to sleep. Nothing else will happen👀. But wait... a button appears out of nowhere?
 What will happen when you click it? Fuck around and find out😏</p>
  <button class="surprise-btn" style="opacity:0">Click Me!</button>
 `
  setTimeout(()=>{
    document.querySelector('.surprise-btn').style.opacity=1// ensure target class name aligns with the original class name. Mistake: surprise-button instead of surprise-btn
  },7000)

 document.querySelector('.surprise-btn').addEventListener('click',()=>{
  quizSection.innerHTML=`
   <div class="video-div">
    <video width="70%" height="100%" autoplay>
      <source src="rickroll.mp4" type="video/mp4">
    </video>
    </div>
    <p>Click the button below if you Dare👀</p>
    <button id="apology">BUTTON</button>`

    document.getElementById('apology').addEventListener('click',()=>{
      quizSection.innerHTML=`
      <p>Please enter your last name(for verification purposes) </p>
      <div class="verify-div">
        <input class=sarah-name type="text" placeholder="Enter your name">
        <button id="name-btn">Submit</button>
      </div>
      
      `
      const  nameInput=document.querySelector('.sarah-name');

      const submitName=document.getElementById('name-btn');

      submitName.addEventListener('click',()=>{
        const userName=`awil`
        if(!nameInput.value){
          alert('Enter something')
          return;
        }else
        if(nameInput.value.trim().toLowerCase()!==userName){
          alert(`Sorry but you lack authorization to proceed. Your're journey ends here🤝`)
    
        }else{
        document.body.classList.add('apology');
        quizSection.innerHTML=`
        <h1 class="sarah-h1">If your reading this it means your Sarah. Hey babes👋. It's now 1:10 am as of the time I am writing this. I am listening to weird indian songs.Yeah.... my mind is blank. Enda uuze uji🗣️😂😂. The background image is a city view of paris. Romantic right😏 Fun fact did you know the Eifel Tower is very tall👀. Anyways, lemme go to sleep 🚶‍♂️‍➡️<p>
        Yours truly,<br>The Bitch Assessor™</br>
        </p></h1>
        `}
      })      

      nameInput.addEventListener('keypress',(e)=>{
        if(e.key==='Enter'){//remember to select the button
        const userName=`awil`
        if(nameInput.value===``){
          alert('Enter something')
        }
        if(userName!==nameInput.value.trim().toLowerCase()){
          alert(`Sorry but you lack authorization to proceed. Your're journey ends here🤝`)
          return;
        }else{
        document.body.classList.add('apology');
        quizSection.innerHTML=`
        <h1 class="sarah-h1">If your reading this it means your Sarah. Hey babes👋. It's now 1:10 am as of the time I am writing this. I am listening to weird indian songs.Yeah my mind is blank. Enda uuze uji🗣️😂😂. The background image is a city view of paris. Romantic right😏 Fun fact did you know the Eifel Tower is very tall👀. Anyway, lemme go to sleep 🚶‍♂️‍➡️<p>
        Yours truly,<br>The Bitch Assessor™  </br>
        </p></h1>
        `}
       }})
    })
  })
}
   



