let turn = 'x';
let title = document.getElementById('title');
let array = [];
let divs = document.querySelectorAll('.divs')
let container = document.querySelector('.container')
let num = 0;
let num2 = 0;
let num3 = 0;
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');
let main = document.querySelector('.main');
let loading = document.querySelector('.loading');
let percent = document.getElementById('percent')
window.onload = function(){
    title.style.display = 'none';
    container.style.display = 'none';
}
let v = setInterval(function(){
        child.style.width = `${num++}px`
        if(num == 301){
            clearInterval(v)
            main.style.display = 'none';
            loading.style.display = 'none';
            title.style.display = 'flex';
            container.style.display = 'block'
            num = 0;
        }
            
        },48)
let m = setInterval(function(){
        percent.innerHTML = `${num2++} %`
        if(num2 == 101){
                clearInterval(m)
                num2 = 0;
        }
        },143)

let l = setInterval(function(){
    num3++;
    if(num3 > 4){
        num3 = 0;
    }
    loading.innerHTML = 'loading' + ' . '.repeat(num3);
       
},1000)
function Game(id){
    let div = document.getElementById(id)
    if(turn == 'x' && div.innerHTML == ''){
        div.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = 'o turn';
        title.style.cssText = `
            font-size: 50px;
            font-weight: 500px;
        `
    }else if (turn == 'o' && div.innerHTML == ''){
        div.innerHTML = 'o';
        turn = 'x'
        title.innerHTML = 'x turn'
      
    }
}
function end (num1,num2,num3){
    title.innerHTML = `${array[num1]} winner`;
    document.getElementById('item'+num1).style.background = 'rgb(50, 7, 130)';
    document.getElementById('item'+num2).style.background = 'rgb(50, 7, 130)';
    document.getElementById('item'+num3).style.background = 'rgb(50, 7, 130)';
    let z = setInterval(function(){
        num++
        if(num == 4){
            clearInterval(z)
            num = 0;
        }
        title.innerHTML += '.'},1000);
    setTimeout(function(){
            title.innerHTML = `<h1 style = 'font-size: 30px'><span style = 'color: rgba(218, 165, 32, 0.762)'>XO</span> GAME</h1>`;
            divs.forEach(Element => Element.innerHTML = '')
            divs.forEach(Element => Element.style.background = '')
        },4000)
}
function Compare(){
    for(let i = 1 ; i < 10 ; i++){
        array [i] = document.getElementById('item' + i).innerHTML;
    }
    if(array[1] == array[2] && array[2] == array[3] && array[2] != ''){
       end(1,2,3)
    }
    else if(array[4] == array[5] && array[5] == array[6] && array[6] != ''){
        end(4,5,6)
    }
    else if(array[7] == array[8] && array[8] == array[9] && array[9] != ''){
        end(7,8,9)
    }
    else if(array[1] == array[4] && array[4] == array[7] && array[7] != ''){
        end(1,4,7)
    }
    else if(array[2] == array[5] && array[5] == array[8] && array[8] != ''){
        end(2,5,8)
    }
    else if(array[3] == array[6] && array[6] == array[9] && array[9] != ''){
        end(3,6,9)
    }
    else if(array[3] == array[5] && array[5] == array[7] && array[7] != ''){
        end(3,5,7)
    }
    else if(array[1] == array[5] && array[5] == array[9] && array[9] != ''){
        end(1,5,9)
    }
   else{
    let filed = 0;
    for(let i = 1 ; i < 10 ; i++){
        if(array[i] != ''){
            filed++
        }
    }
    
    if(filed === 9){
        title.innerHTML = 'no one win';
        let x = setInterval(function(){
            num++;
            if(num == 4){
                clearInterval(x)
                num = 0;
            }
            title.innerHTML += '.'},1000);
        setTimeout(function(){
            title.innerHTML = `<h1 style = 'font-size: 30px'><span style = 'color: rgba(218, 165, 32, 0.762)'>XO</span> GAME</h1>`;
            divs.forEach(Element => Element.innerHTML = '')
        },4000)
    }
   }
    
}