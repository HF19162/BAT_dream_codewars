// function generateHashtag(str){
//     if(str.length>140){
//         return false;
//     }
//     if(str===''){
//         return false;
//     }
//     str = '#' +str;
//     return str;
// }
//#How Are You
//node index.js

// "How are you".split(' ')
//["How", "are", "you"]

//"How are you".split(' ').map((w)=>{return w.charAt(0).toUpperCase() +w.slice(1)})
//["How", "Are", "You"]

// console.log(generateHashtag('How are you'));

function generateHashtag(str){
    return (str.length<140 ||str==='')?false: '#' + str.split(' ').map(capitalize).join(' ');
}
function capitalize(w){
    // console.log(w);
    return w.charAt(0).toUpperCase() + w.slice(1);
}
console.log(generateHashtag('How are you'));