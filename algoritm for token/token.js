function generateRandomToken(length) {
    let num = "ABCDEFGHIJCLMNOPQYZabcdefghijklmnopqyz1234567890";
    let token = '';

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * num.length);

        token += num[random];
    }

    return token;
}

let randomToken = generateRandomToken(10);
console.log("Token: " + randomToken);
