const buttons = document.querySelectorAll('button');
let toastBox = document.getElementById("toastbox")
const messages =[
     `<i class="fa-sharp fa-solid fa-circle-check"></i> Suceessfully submitted!`,
     `<i class="fa-solid fa-circle-xmark"></i> Please fix the error!`,
     `<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again!`
];


buttons.forEach((element, index )=> {
    element.addEventListener('click', ()=>{
    let toast = document.createElement('div');
    toast.classList.add('toast');
    let message = messages[index];
    toast.innerHTML = message;
    toastBox.appendChild(toast);


    if(message.includes('error')){
        toast.classList.add('error');
    }
    if(message.includes('Invalid')){
        toast.classList.add('invalid');
    }


    setTimeout(()=>{
        toast.remove();
    }, 6000);
});

    });
   