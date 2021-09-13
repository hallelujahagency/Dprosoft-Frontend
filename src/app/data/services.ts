import { ServiceUserEntreprise } from "src/app/core/models/service-user-entreprise";

import { ServiceEntreprise } from "src/app/core/models/service-entreprise";

export const services = [
    { 
        id:1,
        libelle:"La Direction",
        entreprise_id:1,
        service_users: [
            { 
                id:1,
                service_id:1,
                user_id:2,
                user: { 
                    id: 2,
                    fullname: "Mme. DAGO",
                    rolesId: 6,
                    entrepriseID: 1,
                    email: "dago@entreprise.com",
                    contact: "0708968475", 
                    created_at: null,
                    update_at: null
                    },
                responsable:"true", 
                created_at: null,
                update_at: null
            }
            
        ],
        created_at: null,
        update_at: null
    },
    { 
        id:2,
        libelle:"Le DAF",
        entreprise_id:1,
        service_users: [
            { 
                id:1,
                service_id:2,
                user_id:3,
                user: { 
                    id: 3,
                    fullname: "Mme. KOUAME",
                    rolesId: 6,
                    entrepriseID: 1,
                    email: "kouame@entreprise.com",
                    contact: "0708968489",
                    created_at: null,
                    update_at: null
                    },
                responsable:"true", 
                created_at: null,
                update_at: null
            }
            
        ],
        created_at: null,
        update_at: null
    },
    { 
        id:3,
        libelle:"La Comptabilité",
        entreprise_id:1,
        service_users: [
            { 
                id:1,
                service_id:3,
                user_id:3,
                user: { 
                    id: 4,
                    fullname: "Mr. KOUAKOU",
                    rolesId: 6,
                    entrepriseID: 1,
                    email: "kouakou@entreprise.com",
                    contact: "0708968896",
                    created_at: null,
                    update_at: null
                    },
                responsable:"true", 
                created_at: null,
                update_at: null
            }
            
        ],
        created_at: null,
        update_at: null
    },
    { 
        id:4,
        libelle:"Le Sécretariat",
        entreprise_id:1,
        service_users: [
            { 
                id:1,
                service_id:4,
                user_id:3,
                user: { 
                    id: 5,
                    fullname: "Mme. ADOU",
                    rolesId: 6,
                    entrepriseID: 1,
                    email: "adou@entreprise.com",
                    contact: "0708968785",
                    created_at: null,
                    update_at: null
                    },
                responsable:"true", 
                created_at: null,
                update_at: null
            }
            
        ],
        created_at: null,
        update_at: null
    }

]

export const service_users: ServiceUserEntreprise[] = [
    { 
        id: 1,
        userID: 2,
        serviceID: 1,
        responsable:true,
        entrepriseID : 1,       
    },
    { 
        id: 2,
        userID: 3,
        serviceID: 2,
        responsable:true,
        entrepriseID : 1,

    },
    { 
        id: 3,
        userID: 4,
        serviceID: 3,
        responsable:true,
        entrepriseID : 1,
        
    },
    { 
        id:4,
        userID: 5,
        serviceID: 4,
        responsable:true,
        entrepriseID : 1,
    }

]

export const services_entreprise: ServiceEntreprise[] = [
    { 
        id: 1,
        libelle:"La Direction",
        entrepriseID : 1,       
    },
    { 
        id: 2,
        libelle:"Le DAF",
        entrepriseID : 1,

    },
    { 
        id: 3,
        libelle:"La Comptabilité",
        entrepriseID : 1,
        
    },
    { 
        id:4,
        libelle:"Le Sécretariat",
        entrepriseID : 1,
    }

]