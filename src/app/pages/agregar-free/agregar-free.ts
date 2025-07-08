import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Freestyle } from '../../services/freestyle';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-free',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-free.html',
  styleUrl: './agregar-free.css',
})
export class AgregarFree {
  raperoForm: FormGroup;
  enviado = false;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private freestyle: Freestyle,
    private router: Router
  ) {
    this.raperoForm = this.fb.group({
      nombre: ['', Validators.required],
      alias: ['', Validators.required],
      origen: ['', Validators.required],
      campeonatos: ['', Validators.required],
    });
  }

  onSubmit() {
    this.enviado = true;
    if (this.raperoForm.invalid) return;
    this.freestyle.agregarRapero(this.raperoForm.value).subscribe({
      next: () => this.router.navigate(['/listar-free']),
      error: (err) => (this.errorMsg = err),
    });
  }
}
