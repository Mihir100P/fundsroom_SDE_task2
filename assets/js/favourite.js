function toggleFavourite(el) {

    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    const id = el.dataset.id;

    const exists = favourites.some(item => item.id === id);

    if (exists) {
        // Remove from favourites
        favourites = favourites.filter(item => item.id !== id);
        el.classList.remove("active");
        el.querySelector("img").src = "assets/images/icons/heart.svg";
    } else {
        // Add to favourites
        favourites.push({
            id: el.dataset.id,
            title: el.dataset.title,
            price: el.dataset.price,
            location: el.dataset.location,
            img: el.dataset.img
        });

        el.classList.add("active");
        el.querySelector("img").src = "assets/images/icons/favorite.png";
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
}
