const data = [4,6,2,1,5,7]
const n = data.length
const container = document.querySelector(".container")
const cards = document.getElementsByClassName("card")

var html = ''

for(i = 0; i < n; i++){
    var card = `<div class="card">${data[i]}</div>`
    html += card
}
container.innerHTML = html

// Selection Sort
const timer = ms => new Promise(res => setTimeout(res, ms))
async function SelectionSort(){
    for(let i = 0; i < n; i++){
        cards[i].style.backgroundColor = "red"
        var simpan = data[i]
        var simpanIndexJ
        for(let j = i+1; j < n; j++){
            var simpanIndexKe;
            if(data[j] < simpan){
                data[i] = data[j]
                data[j] = simpan
                simpan = data[i]

                simpanIndexJ = j
                console.log(simpanIndexJ);
                
                // if(simpanIndexKe == null){
                //     cards[j].classList.add("iniDia")
                // }
                // else{
                //     cards[parseInt(simpanIndexKe)].classList.remove("iniDia")
                //     cards[j].classList.add("iniDia")
                // }
                // simpanIndexKe = j
            }
            cards[j].style.backgroundColor = "blue"
            await timer(1000)
            cards[j].style.backgroundColor = "mediumslateblue"
        }
        cards[simpanIndexJ].innerHTML = data[i].innerHTML
        cards[i].innerHTML = simpan
        cards[i].style.backgroundColor = "green"
    }
    console.log(data);
}
// End Selection Sort

async function BubleSort(){
    for(let i = 0; i < n; i++){
        for(let j = n-1; j > i; j--){
            if(data[j] < data[j-1]){
                var simpan = data[j]
                data[j] = data[j-1]
                data[j-1] = simpan
            }
        }
        cards[i].innerHTML = data[i]
    }
    console.log(data);
}

function timeLoop(){
    var count = 0
    setTimeout(function(){
        cards[count].style.backgroundColor = "red"
        count++
        if(count < cards.length){
            timeLoop()
        }
    }, 1000)
}

// Bubble sort
// for(let i = 0; i < n; i++){
//     for(let j = n-1; j > i; j--){
//         if(data[j] > data[j-1]){
//             var simpan = data[j]
//             data[j] = data[j-1]
//             data[j-1] = simpan
//         }
//     }
// }

// Selecetion Sort
// for(let i = 0; i < n; i++){
//     var simpan = data[i]
//     for(let j = i+1; j < n; j++){
//         if(data[j] < simpan){
//             data[i] = data[j]
//             data[j] = simpan
//             simpan = data[i]
//         }
//     }
// }