window.SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;


  const recognition = new SpeechRecognition();


recognition.interimResults = true;
recognition.lang = "pt-BR;q=0.6,pt;q=0.4";

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});

recognition.addEventListener("end", recognition.start);
recognition.start();
