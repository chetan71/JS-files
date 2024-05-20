let sym = s.slice(-2);
let frN = s.slice(0,2);
console.log(s.slice(0, 2));
console.log(s.slice(0, -2))
if (sym == "PM") {
    if (s.slice(0, 2) == "12") {
        console.log(s.slice(0, -2));
    }else {frN = parseInt(frN)}
}