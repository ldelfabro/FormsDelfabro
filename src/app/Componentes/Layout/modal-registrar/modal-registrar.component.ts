import { Component, Input, OnInit, Inject } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-registrar',
  templateUrl: './modal-registrar.component.html',
  styleUrls: ['./modal-registrar.component.css']
})
export class ModalRegistrarComponent implements OnInit {

  public formularioPrincipal: FormGroup;

  constructor(private fb : FormBuilder, public dialogRef: MatDialogRef<ModalRegistrarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario) { }

  ngOnInit(): void {

    this.formularioPrincipal = this.fb.group({
      nombre : ['', [Validators.required, Validators.maxLength(15)]],
      apellido : ['', [Validators.required, Validators.maxLength(15)]],
      email : ['',[Validators.required, Validators.email, Validators.maxLength(15)]],
      pass : ['',[Validators.required, Validators.maxLength(30)]]
    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
