
let count = 0

export function patJeff (jeff) {
    jeff.addEventListener("click", ()=>{
        count++
        console.log(count)
        jeff.innerHTML = "Pats " + count
    });
};
