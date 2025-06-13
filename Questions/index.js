// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function reverseString(str){
     return str.split("").reverse().join("")
}

function reverseStringLoop(str){
    let reversedString='';
    for(let i=str.length-1;i>=0;i--){
        reversedString=reversedString+str[i];
    }
    return reversedString;
}

// check if pallindrome
function isPallindrome(str){
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

//count character frequency
function countFrequency(str){
    let obj={};
    for(let i=0; i<str.length; i++){
        if(obj[str[i]]){
            obj[str[i]]=obj[str[i]]+1;
        }else{
            obj[str[i]]=1;
        }
    }
    return obj;
}


//remove duplicates
function removeDuplicates(str){
    let updatedStr='';
    for(let char of str){
        if(!updatedStr.includes(char)){
            updatedStr+=char;
        }
    }
    return updatedStr;
}

//count vowels
function countVowels(str){
    let vowels='aeiou';
    let count=0;
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)) count++;
    }
    return count;
}

console.log(reverseStringLoop("Try programiz.pro"));
console.log(isPallindrome("naman"));
console.log(countFrequency("tanmay"));
console.log(removeDuplicates("tanmay"));
console.log(countVowels("AeIoU"));