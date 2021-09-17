export interface IMenuItem {
    id?: string;
    icon?: string;
    label: string;
    to: string;
    newWindow?: boolean;
    subs?: IMenuItem[];
  }
  
  const data: IMenuItem[] = [
    {
    id: 'tableau-de-bord',
    icon: 'ri-home-4-line',
    label: 'Tableau de bord',
    to: '/tableau-de-bord'
  },
 

  {
    id: 'missions',
    icon: 'ri-chat-check-line',
    label: 'Missions',
    to: '/missions',
    subs: [
      {
        label: 'Liste des besoins',
        to: '../missions/liste-des-besoins'
      },
      {
        label: 'Missions assignées',
        to: '../missions/liste-des-requetes'
      },
      {
        label: 'Ordres de mission',
        to: '../missions/ordres-de-mission'
      },
      {
        label: 'Valider ordres de mission',
        to: '../missions/validate-ordres-de-mission'
      },
      {
        label: 'Note de frais',
        to: '../missions/note-de-frais'
      }
    ]
    
  },

  /* {
    id: 'parametres',
    icon: 'las la-cog',
    label: 'Parametres',
    to: '/parametres',
    subs: [{
        label: 'Template ordre de mission',
        to: '../parametres/template-ordre-de-mission'
      },
      {
        label: 'Worflow ordre de mission',
        to: '../parametres/configuration-du-worflow-ordre-de-mission'
      },
      {
        label: 'Liste des services',
        to: '../parametres/liste-des-services'
      },
      {
        label: 'Liste des collaborateurs',
        to: '../parametres/liste-des-collaborateurs'
      }

    ]
    
  }, */
  
  ];
  export default data;
  