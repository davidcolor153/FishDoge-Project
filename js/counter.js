let num = 0;
let totalNum = 0;
const maxnum = 5;

function btnAdd(){
    num = Number(document.getElementById("num").value);
    if(num < maxnum){
        num ++;
    }
    totalNum = num*0.08;
    document.getElementById("num").value = num;
    document.getElementById("totalNum").innerHTML = totalNum;
}

function btnReduce(){
    //1、獲取#num的值
    num = Number(document.getElementById("num").value);
    //2、判斷#num的值是否小於等於0，如果小於等於0的話，則將值改為0
    //3、否則，可以實現 - 1 操作
    if(num <= 0){
        num = 0;
    }else{
        num --;
    }
    //4、將 value 的值賦值給 #num
    totalNum = num*0.08;
    document.getElementById("num").value = num;
    document.getElementById("totalNum").innerHTML = totalNum;
}

function btnMax(){
    num = Number(document.getElementById("num").value);
    num = maxnum;
    totalNum = num*0.08;
    document.getElementById("num").value = num;
    document.getElementById("totalNum").innerHTML = totalNum;
}
