function openMore(place, place2, place3){
    const list = document.querySelector(`.${place}`);
    const buttn = document.getElementById(`${place2}`);
    const rot = document.querySelector(`.${place3}`);

    buttn.addEventListener("click", () => {
        list.classList.toggle('action');
        rot.classList.toggle('rotate');
    })

}