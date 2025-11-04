function mobileMenu() {
    let btnMenuMobile = document.getElementById("burger-menu-mobile");
    let dropDownMenu = document.getElementById("myLinks");

    btnMenuMobile.addEventListener("click", (e) => {
        if (dropDownMenu.style.display === "none") {
            dropDownMenu.style.display = "block";
        } else {
            dropDownMenu.style.display = "none";
        }
    })
}

function loadPastEditionsMobileCustom() {
    document.addEventListener("DOMContentLoaded", () => {
        const menuElement = document.getElementById("past-editions-mobile-custom");

        fetch("../../pastEditionsCustom.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                menuElement.innerHTML = data;

            })
            .catch(error => {
                console.error("Error loading footer:", error);
            });
    });
}

function loadPastEditionsMobile() {
    document.addEventListener("DOMContentLoaded", () => {
        const menuElement = document.getElementById("past-editions-mobile");

        fetch("pastEditions.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                menuElement.innerHTML = data;

            })
            .catch(error => {
                console.error("Error loading footer:", error);
            });
    });
}

function listPastEditionsMobile() {
    let btnToggle = document.getElementById("btn-mobile-menu");
    let listPast = document.getElementById("past-editions-mobile");

    let clicked = false;

    btnToggle.addEventListener("click", (e) => {
        if (!clicked) {
            listPast.style.display = "block";
            clicked = true;
        } else {
            listPast.style.display = "none";
            clicked = false;
        }
    })

}
loadPastEditionsMobileCustom()
listPastEditionsMobile()
mobileMenu()
loadPastEditionsMobile()