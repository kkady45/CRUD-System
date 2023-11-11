var pName=document.getElementById('productName');
var pCat=document.getElementById('productCategory');
var pPrice=document.getElementById('productPrice');
var pDesc=document.getElementById('productDesc');
var tbody=document.getElementById('tbody');
var searcho=document.getElementById('search');
var addBtn=document.getElementById('addProduct');
var alerto=document.querySelector('.alert')

var globalIndex=0;

var listo=localStorage.getItem('data');
var list=JSON.parse(listo);

if(listo!=null){
    retreive();
}
else{
    var list=[];
}
function create(){
    if(checkProduct()){

    if(addBtn.innerHTML=='Add Product'){
        var obj={
            pName:pName.value,
            pCat:pCat.value,
            pPrice:pPrice.value,
            pDesc:pDesc.value
        }
        list.push(obj);
        localStorage.setItem('data',JSON.stringify(list))
        console.log(list);
        clearo();
        retreive();
    }
    else{
        updateBtn();
    }
    
    retreive();
}
}

function retreive(){
    var trs='';
    for(var i=0;i<list.length;i++){

        trs+=`
        <tr>
        <td>${i}</td>
        <td>${list[i].pName}</td>
        <td>${list[i].pCat}</td>
        <td>${list[i].pPrice}</td>
        <td>${list[i].pDesc}</td>
        <td><button class="fa-solid fa-pen btn  btn-outline-warning" onclick="retreiveUp(${i})"></button></td>
        <td><button class="fa-regular fa-trash-can btn btn-outline-danger" onclick='deletes(${i})'></button></td> 
      </tr>

        `
    }
    tbody.innerHTML=trs;

}

function clearo(){
    pName.value='';
    pCat.value='';
    pPrice.value='';
    pDesc.value='';

}

function search(){
    var trs='';

   for(var i=0;i<list.length;i++){
    if(list[i].pName.includes(searcho.value)){
        trs+=`
        <tr>
        <td>${i}</td>
        <td>${list[i].pName}</td>
        <td>${list[i].pCat}</td>
        <td>${list[i].pPrice}</td>
        <td>${list[i].pDesc}</td>
        <td><button class="fa-solid fa-pen btn  btn-outline-warning"></button></td>
        <td><button class="fa-regular fa-trash-can btn btn-outline-danger" onclick="deletes(${i})"></button></td> 
      </tr>

        `
    }
    tbody.innerHTML=trs;
    

    }
}

function deletes(index){
    list.splice(index,1);
    localStorage.setItem('data',JSON.stringify(list));
    retreive();
}

function retreiveUp(index){
    globalIndex=index;
    pName.value=list[globalIndex].pName;
    pCat.value=list[globalIndex].pCat;
    pPrice.value=list[globalIndex].pPrice;
    pDesc.value=list[globalIndex].pDesc;
    addBtn.innerHTML='update button';
}

function updateBtn(){
    list[globalIndex].pName=pName.value;
    list[globalIndex].pCat=pCat.value;
    list[globalIndex].pPrice=pPrice.value;
    list[globalIndex].pDesc=pDesc.value;
localStorage.setItem('data',JSON.stringify(list));
clearo();
addBtn.innerHTML='Add Product';
}

function checkProduct(){
    var pNameRegex=/^[A-Z][a-z]{4,8}[0-9]{0,4}$/;
    var pNames=pName.value;
    if(/^[A-Z]/.test(pNames)){
        if(/^[A-Z][a-z]{4,8}/.test(pNames)){
            if(/^[A-Z][a-z]{4,8}[0-9]{0,4}$/.test(pNames))
            {
                alerto.classList.add('d-none');
                pName.classList.add('is-valid')
                pName.classList.remove('is-invalid')
                return true;
            }
            else{
                alerto.classList.remove('d-none');
                pName.classList.remove('is-valid')
                pName.classList.add('is-invalid')
                alerto.innerHTML='the numbers should be less or equal 4'
                return false;

            }
      
        }
        else{
            alerto.classList.remove('d-none');
            pName.classList.remove('is-valid')
            pName.classList.add('is-invalid')
            alerto.innerHTML='the lenghth of string should be 4 or 8'
            return false;

        }
    }
    else{
        alerto.classList.remove('d-none');
        pName.classList.remove('is-valid')
        pName.classList.add('is-invalid')
        alerto.innerHTML='please start with capital letter'
        return false;


    }

}
function checkCat(){
    var pNameRegex=/^[A-Z][a-z]{4,8}[0-9]{0,4}$/;
    var pCats=pCat.value;
    if(/^[A-Z]/.test(pCats)){
        if(/^[A-Z][a-z]{4,8}/.test(pCats)){
            if(/^[A-Z][a-z]{4,8}[0-9]{0,4}$/.test(pCats))
            {
                alerto.classList.add('d-none');
                pName.classList.add('is-valid')
                pName.classList.remove('is-invalid')
                return true;
            }
            else{
                alerto.classList.remove('d-none');
                pName.classList.remove('is-valid')
                pName.classList.add('is-invalid')
                alerto.innerHTML='the numbers should be less or equal 4'
                return false;

            }
      
        }
        else{
            alerto.classList.remove('d-none');
            pName.classList.remove('is-valid')
            pName.classList.add('is-invalid')
            alerto.innerHTML='the lenghth should be 4 or 8'
            return false;

        }
    }
    else{
        alerto.classList.remove('d-none');
        pName.classList.remove('is-valid')
        pName.classList.add('is-invalid')
        alerto.innerHTML='please start with capital letter'
        return false;


    }

}
pName.addEventListener('blur',checkProduct);
pN.addEventListener('blur',checkProduct);








