function renderQuestion(question) {
     const qdiv = document.querySelector(".question")
     console.log(question)
     qdiv.innerHTML = `
     <div class="title">${question.title}</div>
     <div> 
      <button class= "redbutton">🐵 <span class="redbutton">${question.a}</span></button> 
      <button class="greenbutton">🦁 <span class="greenbutton">${question.b}</span></button> 
      ${question.c != "" ? `<button class="bluebutton">🦎 <span class="bluebutton">${question.c}</span></button>` : ""}
      ${question.c != "" ? `<button class="purplebutton">🐔 <span class="purplebutton">${question.d}</span></button>` : ""}
     </div>
     `
}