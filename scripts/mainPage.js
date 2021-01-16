function loadUserDataFromSession() {
    const user = sessionStorage.getItem("user")

    displayCV(JSON.parse(user))
}

function displayCV(user) {
    let profileHtml = "";

    let key;
    for (key in user) {
        profileHtml += `
            <tr>
                <td>${key}:</td><td>${user[key]}</td>
            </tr>
        `;
    }

    document.querySelector("#cvFileDisplayArea")
        .innerHTML = profileHtml;
}