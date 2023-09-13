const followers = document.querySelectorAll('.followers');

followers.forEach((followrsCount) => {
    followrsCount.innerHTML = "0";
    const updateFollowersCounter = () => {
        const target = +followrsCount.getAttribute("data-target")
        const c = +followrsCount.innerText;

        const increment = target / 500;
        if (c < target) {
            followrsCount.innerHTML = `${Math.ceil(c + increment)}`;
            setTimeout(updateFollowersCounter,1);
        }else{
            followrsCount.innerHTML = target;
        }
    }

    updateFollowersCounter();
})

