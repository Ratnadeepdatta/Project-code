let speech = new SpeechSynthesisUtterance();
console.log("speech", speech)

let voices = [];


let voiceSelect = document.querySelector("select");
let textArea = document.querySelector("textarea");

window.speechSynthesis.onvoiceschanged = () => {
    voices= window.speechSynthesis.getVoices();

    // console.log(voices);

    speech.voice = voices[0];
    voices.forEach((voice, i) => {
        (voiceSelect.options[i] = new Option(voice.name,i));

        // console.log((voiceSelect.options[i] = new Option(voice.name,i)))
        // console.log("voiceSelect", voiceSelect.options[i]);
        // console.log("Options", new Option(voice.name,i))
        // console.log("Voice", voice.name);
    }
    );
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click",() =>{
speech.text = textArea.value;

window.speechSynthesis.speak(speech);

});
//  console.log("Roni", textArea.value)