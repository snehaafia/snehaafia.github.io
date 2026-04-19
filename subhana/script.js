let attempts = 0;

// 🔐 ENTRY CHECK
function checkEntry() {

    let year = document.getElementById("year").value;
    let date = document.getElementById("date").value;
    let msg = document.getElementById("msg");

    attempts++;

    if(year === "2024" && date === "29") {

        document.getElementById("gate").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");

    } else {

        if(attempts >= 3) {
            msg.innerHTML = "Are you tired? Try 2024 & 29 ";
        } else {
            msg.innerHTML = "Wrong key. Try again!";
        }
    }
}

//  GO TO WISH PAGE
function goToWishes() {
    window.location.href = "wishes.html";
}

/* =========================
   WISH SYSTEM (FULL FIX)
   ========================= */

// ➕ ADD WISH (NEW)
function addWish() {

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if(name === "" || message === "") {
        alert(" write something ");
        return;
    }

    let wishes = JSON.parse(localStorage.getItem("wishes")) || [];

    wishes.push({
        name: name,
        message: message
    });

    localStorage.setItem("wishes", JSON.stringify(wishes));

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";

    showWishes();
}

// 📜 SHOW WISHES
function showWishes() {

    let wishes = JSON.parse(localStorage.getItem("wishes")) || [];

    let list = document.getElementById("list");
    if(!list) return;

    list.innerHTML = "";

    wishes.forEach(w => {
        list.innerHTML += `
            <div class="card">
                <b>${w.name}</b><br><br>
                ${w.message}
            </div>
        `;
    });
}