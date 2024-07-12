let users = []
const handleData = (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let salary = document.getElementById('salary').value;
    let user = {
        username: username,
        number: number,
        email: email,
        salary: salary
    }
    users.push(user);
    console.log(users);
}

document.getElementById("userData").addEventListener("submit", handleData);
