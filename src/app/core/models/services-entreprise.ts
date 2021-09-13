import { User } from "./user";


export interface ServicesEntreprise {
    id: number,
    libelle:string,
    entreprise_id : number,
    created_at: string,
    update_at: string,
    service_users: { 
        id:number,
        service_id:number,
        user_id:number, 
        user: User,
        responsable:string, 
        created_at: string,
        update_at: string
    }[],
}
