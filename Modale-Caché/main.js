const showModalBtn = document.querySelector("#showModal");


showModalBtn.addEventListener('click', handleClickShowModal);

function handleClickShowModal(){
    const modal = document.querySelector('#modal');
    modal.classList.remove("hidden");
    document.body.classList.add("dark-bg");
}

document.addEventListener("click", handleClickHideModal);

function handleClickHideModal(event){
    event.stop

    if(!modal.contains(event.target) && event.target !== showModalBtn){
        const modal = document.querySelector('#modal');
        modal.classList.add("hidden");
        document.body.classList.remove("dark-bg");
    }
    
}