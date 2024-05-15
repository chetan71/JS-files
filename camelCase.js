let s = "app_dsd_sdda";
let nstr = "";
for (let i = 0; i < s.length; i++) {
    if (s[i]=="_"){
        nstr+= s[i+1].toUpperCase();
        i++;
    }
    else {
        nstr+=s[i];
    }
    
}
console.log(nstr);