//variables and fetching
let quote=document.querySelector("quote")
let person=document.querySelector(".person")
let btn=document.getElementById("new-quote")

const quotes=[
    {
        quote:`"If your actions inspire others to dream more, learn more, do more and become more, you are a leader."`,
        person:`John Quincy Adams`
    },
    {
        quote:`"There are certain things in which mediocrity is not to be endured, such as poetry, music, painting, public speaking."`,
        person:`Jean de la Bruyere`
    },
    {
        quote:`"If you think you can do a thing or think you can't do a thing, you're right"`,
        person:``
    },
    {
        quote:`"The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires."`,
        person:`William Arthur Ward `
    },
    {
        quote:`"People will forget what you said, people will forget what you did, but people will never forget how you made them feel"`,
        person:`Maya Angelou`
    },
    {
        quote:`"Never doubt that a small group of thoughtful, concerned citizens can change world. Indeed it is the only thing that ever has."`,
        person:`Margaret Mead`
    },
    {
        quote:`"You can speak well if your tongue can deliver the message of your heart."`,
        person:`John Ford`
    },
    {
        quote:`"Be still when you have nothing to say; when genuine passion moves you, say what you’ve got to say, and say it hot."`,
        person:`D. H. Lawrence `
    },
    {
        quote:`"Let thy speech be better than silence, or be silent."`,
        person:` Dionysius Of Halicarnassus`
    },
    {
        quote:`"What we say is important… for in most cases the mouth speaks what the heart is full of."`,
        person:` Jim Beggs `
    }
]
btn.addEventListener("click", function(){
    let random=Math.floor(Math.random()*quotes.length)//calls the objects in the array randomly. random is the index basically
    quote.innerText=quotes[random].quote//calls the specific property in the random object in the quotes array
    person.innerText=quotes[random].person//this one calls the person property in a random index, specifiying the value to be the person only

})