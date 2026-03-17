let count = 0; //inicializa a conta a partir do zero 

function increaseCount(){
    count ++ ;
    displayCount();
    CheckCountValue();
    redefinir();

}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Exibir a contagem no HTML
}

function CheckCountValue(){
    if (count == 10){
        alert ("Seu post ganhou 10 seguidores !!");
    }
    else if (count == 20){ 
        alert ("seu post ganhou 20 seguidores ");

    }
}

function resetCount(){
    count = 0;
    displayCount();
    alert("A contagem de seguidores foi redefinida!");
}   




