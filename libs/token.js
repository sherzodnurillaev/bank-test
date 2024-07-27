export function generateRandomToken() {
    let num = "ABCDEFGHIJCLMNOPQYZabcdefghijklmnopqyz1234567890";
    let token = '';

    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * num.length);

        token += num[random];
    }

    return token;
}
