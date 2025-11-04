function loadFooter() {
    document.addEventListener("DOMContentLoaded", () => {
        const footerElement = document.getElementById("footer");

        fetch("footer.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                footerElement.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading footer:", error);
            });
    });
}

function loadSubscription() {
    document.addEventListener("DOMContentLoaded", () => {
        const footerElement = document.getElementById("fillSubscribe");

        fetch("subscribeSection26.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                footerElement.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading footer:", error);
            });
    });
}

function loadPastEditionsVersion() {
    document.addEventListener("DOMContentLoaded", () => {
        const footerElement = document.getElementById("past-editions");

        fetch("pastEditions.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                footerElement.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading footer:", error);
            });
    });
}

function loadPastEditions() {
    document.addEventListener("DOMContentLoaded", () => {
        const footerElement = document.getElementById("past-editions-custom");

        fetch("../../pastEditionsCustom.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                footerElement.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading footer:", error);
            });
    });
}
loadPastEditionsVersion();
loadPastEditions();
loadSubscription();
loadFooter();