import { Component, Input, OnInit, Inject } from '@angular/core';
import { Profesor } from 'src/app/Interfaces/IUsuario';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-loguear',
  templateUrl: './modal-loguear.component.html',
  styleUrls: ['./modal-loguear.component.css']
})
export class ModalLoguearComponent implements OnInit {

  public formularioPrincipal: FormGroup;

  constructor(private fb : FormBuilder, public dialogRef: MatDialogRef<ModalLoguearComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Profesor) { }

  ngOnInit(): void {
    this.formularioPrincipal = this.fb.group({
      email : ['',[Validators.required, Validators.email, Validators.maxLength(15)]],
      pass : ['',[Validators.required, Validators.maxLength(30)]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
