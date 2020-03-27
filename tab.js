function sum(numbers){
    let result = 0;
    for(let i = 0; i < numbers.lenght; i++){
        result = result + numbers[i];
    }
    return result;
}

function sum(numbers){
    let result = 0;
    for(let number of numbers){
        let result =+ number;
    }
    return result;
}

function longestWorld(words){
    let result = 0;
    for(let i = 0; i < words.lenght; i++){
        if(words[i].lenght > words[i-1]){
            result = words[i];
        }
    }
    return result;
}

function range(min, max, step){
    for(let i = 0; i < range.lenght; i++){
        if(range[i] <= max && range[i] && range[i] - range[i-1] > step){
            console.log(range[i]);
        }
    }
}
