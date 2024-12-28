document.getElementById('fetchData').addEventListener('click', () => { 
    console.log('Кнопка нажата'); // Отладочное сообщение 
    fetch('https://jsonplaceholder.typicode.com/users') 
        .then(response => { 
            console.log('Ответ получен'); // Отладочное сообщение 
            return response.json(); 
        }) 
        .then(data => { 
            console.log('Данные:', data); // Отладочное сообщение 
            const formsContainer = document.getElementById('formsContainer'); 
            formsContainer.innerHTML = ''; 
 
            data.forEach(user => { 
                const formDiv = document.createElement('div'); 
                formDiv.classList.add('form-container'); 
 
                const form = document.createElement('form'); 
 
                const nameLabel = document.createElement('label'); 
                nameLabel.textContent = 'Имя: '; 
                const nameInput = document.createElement('input'); 
                nameInput.type = 'text'; 
                nameInput.value = user.name; 
                nameInput.readOnly = true; 
 
                const usernameLabel = document.createElement('label'); 
                usernameLabel.textContent = 'Фамилия: '; 
                const usernameInput = document.createElement('input'); 
                usernameInput.type = 'text'; 
                usernameInput.value = user.username; 
                usernameInput.readOnly = true; 
 
                const addressLabel = document.createElement('label'); 
                addressLabel.textContent = 'Адрес: '; 
                const addressInput = document.createElement('input'); 
                addressInput.type = 'text'; 
                addressInput.value = user.address.street + ', ' + user.address.city; 
                addressInput.readOnly = true; 
 
                form.appendChild(nameLabel); 
                form.appendChild(nameInput); 
                form.appendChild(usernameLabel); 
                form.appendChild(usernameInput); 
                form.appendChild(addressLabel); 
                form.appendChild(addressInput); 
 
                formDiv.appendChild(form); 
                formsContainer.appendChild(formDiv); 
            }); 
        }) 
        .catch(error => console.error('Ошибка:', error)); 
});