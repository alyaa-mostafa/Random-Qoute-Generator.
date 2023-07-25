var qoute = ['"Resentment is like drinking poison and waiting for your enemies to die."--Nelson Mandela',"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein","“To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde","“Live as if you were to die tomorrow. Learn as if you were to live forever.”― Mahatma Gandhi","“I am so clever that sometimes I don't understand a single word of what I am saying.”― Oscar Wilde, The Happy Prince and Other Stories"]

function newQoute(){
    console.log(qoute[Math.trunc(Math.random() * qoute .length)])
    document.getElementById("demo").innerHTML=(qoute[Math.trunc(Math.random() * qoute .length)])
}
