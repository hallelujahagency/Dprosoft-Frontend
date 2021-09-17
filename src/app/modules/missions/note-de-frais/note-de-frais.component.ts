import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteFraisService } from 'src/app/core/services/note-frais.service';



@Component({
  selector: 'app-note-de-frais',
  templateUrl: './note-de-frais.component.html',
  styleUrls: ['./note-de-frais.component.css']
})
export class NoteDeFraisComponent implements OnInit {

  viewMode: any;
  submitted: boolean = false ;
  noteForm: FormGroup;
  
  types = [];
  restaurants = [];
  paiements = [];
  carburants = [];
  invite= [];


  constructor( private formBuilder: FormBuilder, private service: NoteFraisService) {
        this.noteForm = new FormGroup({
          type : new FormControl(),
          nature : new FormControl(),
          date : new FormControl(),
          motif : new FormControl(),
          destination : new FormControl(),
          lieu_depart : new FormControl(),
          nombre_kilometre : new FormControl(),
          service : new FormControl(),
          invites : new FormControl(),
          ville : new FormControl(),
          hotel : new FormControl(),
          nombre_nuitee : new FormControl(),
          prix : new FormControl(),
          tva : new FormControl(),
          nom_station : new FormControl(),
          moyen_de_paiement : new FormControl(),
          commentaire : new FormControl(),
          piece_justificative : new FormControl(),
        });
  }


  ngOnInit(): void {
    this.initNoteForm();
    this.getListe();
  }

    get motif() { return this.noteForm.get('motif');}

    getListe() {
      this.types = this.service.typeList;
      this.restaurants = this.service.restnatureList;
      this.paiements = this.service.paiementList;
      this.carburants = this.service.carburantList;
      this.invite = this.service.inviteList;
    }

    private  initNoteForm() {
      this.noteForm = this.formBuilder.group({
        type : ['', Validators.required],
        nature : ['', Validators.required],
        date : ['', Validators.required],
        motif : ['', Validators.required],
        destination : ['', Validators.required],
        lieu_depart : ['', Validators.required],
        nombre_kilometre : ['', Validators.required],
        service : ['', Validators.required],
        invites : ['', Validators.required],
        ville : ['', Validators.required],
        hotel : ['', Validators.required],
        nombre_nuitee : ['', Validators.required],
        montant : ['', Validators.required],
        prix : ['', Validators.required],
        tva : ['', Validators.required],
        nom_station : ['', Validators.required],
        moyen_de_paiement : ['', Validators.required],
        commentaire : ['', Validators.required],
        piece_justificative : ['', Validators.required],
      });

  }

      
    get noteControl() { return this.noteForm.controls; }

      submitForm() { 
        this.submitted = true;
        console.log(this.noteForm.value)
        if (this.noteForm.invalid) {return;} 
      }


}
