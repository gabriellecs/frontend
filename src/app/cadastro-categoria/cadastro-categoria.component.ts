import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {
  id: number;
  cliente: Cliente;
  form: FormGroup;
  nomeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  descricaoFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  emailFormControl: any;
  categoriaService: any;
 
  
  
 

  
  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,) {
    this.form = this.fb.group({
      nomeFormControl: this.nomeFormControl,
      cpfFormControl: this.descricaoFormControl,
    });
  }


  ngOnInit(): void {
    let id: string;
    id = this.route.snapshot.paramMap.get("id");
    if (id != undefined || id != null) {
      this.id = Number.parseInt(id);
      this.categoriaService.getPeloId(this.id).subscribe((cadastro: Cliente) => {
        this.nomeFormControl.setValue(cadastro.nome);
        this.descricaoFormControl.setValue(cadastro.nome);


      })
    }
  }
  
}