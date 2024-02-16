const price=document.getElementById("content");
const discount=document.getElementById("click");

const rate=0.10;

function updateprice(){

    const selectamt=parseInt(price.value);


    const discount1=selectamt-(selectamt*rate);

    discount.textContent=`Total: ${discount1}`;


}

price.addEventListener("change", updateprice);

// updateprice();