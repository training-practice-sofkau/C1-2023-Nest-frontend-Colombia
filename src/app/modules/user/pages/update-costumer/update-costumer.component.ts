import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import Swal from 'sweetalert2';
import { IDocumenType } from '../../models/document-type.model';
import { IUpdateUser } from '../../models/update-user.model';
import { UserModel } from '../../models/user.model';
import { ServiceUserService } from '../../services/user-service/service-user.service';

@Component({
  selector: 'app-update-costumer',
  templateUrl: './update-costumer.component.html',
  styleUrls: ['./update-costumer.component.scss']
})
export class UpdateCostumerComponent implements OnInit {
  id: string | null;
  frmFormulario: FormGroup;

  constructor(
    private readonly userService: ServiceUserService,
    private readonly route: ActivatedRoute) {
    this.frmFormulario = new FormGroup({
      document: new FormControl(),
      fullName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      password: new FormControl(),
      documentTypeId: new FormControl()
    })
    this.id = ""
  }

  ngOnInit(): void {
    const idNew = this.route.snapshot.paramMap.get("id")
    this.id = idNew !== null ? idNew : '';
    this.userService.getUserById(this.id).subscribe({
      next: (data) => {
        this.frmFormulario.setValue({
          document: data.document,
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          password: data.password,
          documentTypeId: data.documentType.id
        })
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log("complete")
      }
    })
  }

  updateUser() {
    const idNew = this.route.snapshot.paramMap.get("id")
    this.id = idNew !== null ? idNew : '';
    this.userService.updateUser(this.id, this.frmFormulario.getRawValue()).subscribe({
      next: (data) => {
        Swal.fire({
          title: "Hecho",
          text: "Actualizacion Exitosa",
          icon: "success"
        })
      },
      error: (err) => { console.log(err) },
      complete: () => { console.log("complete") }
    })
  }
}
