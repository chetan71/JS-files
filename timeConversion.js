const s = "07:05:45PM";

let sym = s.slice(-2);
let frN = s.slice(0,2);
let midT = s.slice(2, -2);
// console.log(s.slice(0, 2));
console.log(s.slice(0, -2))
if (sym == "PM") {
    if (frN == "12") {
        console.log(frN+midT);
    }else {
        frN = parseInt(frN) + 12;
        console.log(frN.toString()+ midT);
    }
}else if (sym == "AM") {
    if (frN == "12") {
        frN = parseInt(frN)-12;
        console.log(frN.toString()+midT);
    }else {
        
        console.log(frN+ midT);
    }
}