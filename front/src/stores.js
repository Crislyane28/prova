import { writable } from "svelte/store";

export const currentPage = writable('home');
export const users = writable([]);
export const currentUser = writable(null);
export const email = writable ([]);

users.subscribe(v => {
    const user = v.at(-1);
    
    if (!user) return;

    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('password', user.pw);
    formData.append('email', email.email);
  
    

    fetch('http://localhost:8000/add-user.php', {
        method: 'post',
        body: formData
    }); // non blocking
    console.log('oi');
})

export function addProduct(name, user_id, email) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('user_id', user_id);
    formData.append('email', email);
    

    fetch('http://localhost:8000/add-product.php', {
        method: 'post',
        body: formData
    });

    loadContato(user_id)
}

export async function removeContato(id, user_id, email) {
    await fetch('http://localhost:8000/remove-product.php?id=' + id, {
        method: 'get'
    });
    loadContato(user_id)
}

async function loadContato(user_id) {
    // console.log('deve carregar os produtos do usuário ' + user_id)
    const response = await fetch('http://localhost:8000/get-products.php?user_id=' + user_id, {
        method: 'get'
    });
    const data = await response.json();
    contato.set(data);
}

export const login = async (username, pw, email) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', pw);
    formData.append('email', email.em);
    const response = await fetch('http://localhost:8000/login.php', {
        method: 'post',
        body: formData
    });
    if (!response.ok) {
        alert('usuário ou senha incorretos');
        return;
    }
    const data = await response.json();
    currentUser.set(data);
    loadContato(data.id)
}