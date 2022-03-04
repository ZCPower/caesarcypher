function caesarCypher(secret, shift){
    secret = secret.toLowerCase();
    array = [];
    newWord = '';
    alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === ' ') {
            array.push(secret[i])
        }
        for (let j = 0; j < alphabet.length; j ++) {
            if (secret[i] === alphabet[j]) {
                if (j + shift > 26) {
                    array.push(alphabet[j + shift])
                } 
            } 
        } 
    } newWord = array.join("").toString().toLowerCase();
        return newWord;
  }