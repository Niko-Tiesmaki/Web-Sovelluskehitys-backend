
let count = 0

export function patJeff (jeff) {
    jeff.addEventListener("click", ()=>{
        count++
        jeff.innerHTML = "Pats " + count
    });
};
