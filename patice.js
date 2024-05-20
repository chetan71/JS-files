const Adrian = ["A", "B", "C"];
const Bruno = [ "B", "A", "B", "C"];
const Goran = ["C", "C", "A", "A", "B", "B"];
const correctAns = "BAACC";
let A = 0;
let B = 0;
let G = 0;
for (let i = 0; i < correctAns.length; i++) {
    if (Adrian[i%3]==correctAns[i]) {
        A++;
    }else if (Bruno[i%4]==correctAns[i]) {
        B++;
    }else if (Goran[i%6]==correctAns[i]) {
        G++;
    }

    
}

if (A > B && A > G) {
    console.log(A);
    console.log("Adrian");
}
if (B > A && B > G) {
    console.log(B);
    console.log("Bruno");
}
if (G > B && A < G) {
    console.log(G);
    console.log("Goran");
}
// if (A > B && A > G) {
//     return A, "Adrian";
// }
// if (B > A && B > G) {
//     return B, "Bruno";
// }
// if (G > B && A < G) {
//     return G, "Goran";
// }