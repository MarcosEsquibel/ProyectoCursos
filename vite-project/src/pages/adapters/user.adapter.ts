
export function userAdapter (user:any, external:boolean){
    if (external){
        return {
            id: user.id,
            nombre: user.name,

        }
    }

    return {
        id: user.id,
        name: user.nombre,
    };
}