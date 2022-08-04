// bring the button by id
let btn = document.getElementById('btn');

// bring th input by id
let inp = document.getElementById('inp');

// bring all boxs by class
let boxs = document.querySelectorAll('.box'); // return array of boxs

// creat drag var and set it to null
let drag = null;

// wa9t ncliko 3al button bech yzid lel box ech ktbna fel input
btn.onclick = function(){
    // verifi in input not empty
    if (inp.value != '') {
        // bech n7oto el conent fel box loul
        boxs[0].innerHTML += `<p class="item" draggable="true">${inp.value}</p>`
        inp.value = '';
    }
    dragItem();
}
function dragItem(){
    let items = document.querySelectorAll('.item');

    // we gonna loop through all items
    items.forEach(item =>{
        // listner on the start of drag
        item.addEventListener('dragstart',function(){
            drag = item;
            item.style.opacity = '0.5';
        });

        // linstenr to drag end
        item.addEventListener('dragend', function(){
            drag = null;
            item.style.opacity = '1';
        });

        // wa9t nabda ched el element bel mouse
        boxs.forEach(box=>{
            // wa9t nabda ndor bel element
            box.addEventListener('dragover', function(e){
                e.preventDefault();
                this.style.background = 'linear-gradient(180deg, #F7971E, #FFD200)';
                this.style.color = '#fff'
            });

            // wa9t nabd salmt fel element
            box.addEventListener('dragleave', function(){
                this.style.background = 'rgba(255, 255, 255, 0.5)';
                this.style.color = '#333';
            });

            // the drop
            box.addEventListener('drop', function(){
                this.append(drag);
                this.style.background = 'rgba(255, 255, 255, 0.5)';
                this.style.color = '#333';
            });
        });
    })
}