var employees = JSON.parse(localStorage["employees"]);

var tbody = document.querySelector("tbody");
tbody.innerHTML = '';

    employees.forEach((item)=>{

        var render = `
        <tr>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.age}</td>
            <td>${item.phone}</td>
            <td>${item.aadhar}</td>
            <td>${item.address}</td>
            <td>${item.date}</td>
        </tr>
    `;

        tbody.innerHTML += render;
    });