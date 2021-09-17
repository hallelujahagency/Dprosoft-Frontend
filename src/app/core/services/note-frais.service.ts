import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteFraisService {

  
  typeList = [
    {id: 1, libelle: 'RESTAURANT'},
    {id: 2, libelle: 'CARBURANT'},
    {id: 3, libelle: 'TAXI'},
    {id: 4, libelle: 'HÉBERGEMENT'},
    {id: 5, libelle: 'BUS'},
    {id: 6, libelle: 'PÉAGE'},
    {id: 7, libelle: 'TRAIN'},
    {id: 8, libelle: 'AUTRE'}
  ];
  restnatureList = [
    {id: 1, libelle: 'Petit déjeuner'},
    {id: 2, libelle: 'Déjeuner'},
    {id: 3, libelle: 'Taxi'}
  ];
  paiementList = [
    {id: 1, libelle: 'Espèce'},
    {id: 2, libelle: 'Mobile Money'},
    {id: 3, libelle: 'CB'},
    {id: 4, libelle: 'Carte entreprise'},
    {id: 5, libelle: 'Chèques'}
  ];
  carburantList = [
    {id: 1, libelle: 'Gazoil'},
    {id: 2, libelle: 'Essence'},
    {id: 3, libelle: 'Diesel'}
  ];
  inviteList = [
    {id: 1, libelle: 'Adam'},
    {id: 2, libelle: 'Samantha'},
    {id: 3, libelle: 'Adrian'},
    {id: 4, libelle: 'Nicole'},
    {id: 5, libelle: 'Nicole'},
  ];

  

  constructor() { }
}
