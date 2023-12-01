
let input =document.getElementById('inp');
let addBtn =document.getElementById('addBtn');
let boxList = document.querySelectorAll('.box');
let drag=null;


addBtn.addEventListener('click',function(){
    if(input.value !==' '){
    boxList[0].innerHTML +=`
     <p class="item" draggable="true"> ${input.value}</p>
    `
    input.value =' ';
    };
    dragItem()
})


function dragItem(){
    let items = document.querySelectorAll('.item');
      items.forEach(item=>{
       item.addEventListener('dragstart',function(){
        drag = item;
        item.style.opacity='0.5';
        
       });
       item.addEventListener('dragend',function(){
        drag = null;
        item.style.opacity='1';
       
       });
       boxList.forEach(box =>{
        box.addEventListener('dragover',function(e){
        e.preventDefault()
        
            box.style.backgroundColor ='#aaa';
            box.style.color ='#fff';

        });
        box.addEventListener('dragleave',function(){
        
            box.style.backgroundColor ='#fff';
            box.style.color ='#000'

        });
        box.addEventListener('drop',function(){
        
            box.append(drag);
            box.style.backgroundColor ='#fff';
            box.style.color ='#000'

        });
        
        

       })
    })
}