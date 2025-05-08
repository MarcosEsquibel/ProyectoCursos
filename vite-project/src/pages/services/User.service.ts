import { userAdapter } from "../adapters/user.adapter"

export async function getUser() {
    return fetch ("/users")
    .then((response) => response.json())
    .then (data => userAdapter(data, false));
}

export async function editUser(id:number, name:string){
    const adaptedUser = userAdapter({id, name},true);

    return fetch(`/user/${id}`,{
        method: "PUT",
        body: JSON.stringify(adaptedUser),
        
    })
     .then ((response) => response.json())
     .then ((data) => userAdapter(data, false));
    
}
