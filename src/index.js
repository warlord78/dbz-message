const message_sayaiyin = [
   "# Hi:Goku",
   "# Hi:Gohan",
   "# What's up: Vegeta ",
   "# How are you doing? : Freeza",
   "# How are you?: Dr. Gero (Andorid 20)",
   "# Hello: Cell ",
   "# How do you do?: Manjin buu",
   "# How’s it going?: Broly",
   "# Good to see you: Kame Sen'nin "
];

const randomMsg = () =>{
    const message = message_sayaiyin[Math.floor(Math.random() *
        message_sayaiyin.length)]
    console.log(message);
};

module.exports = { randomMsg };