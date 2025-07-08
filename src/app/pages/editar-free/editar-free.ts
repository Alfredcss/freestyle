import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Freestyle } from '../../services/freestyle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-free',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar-free.html',
  styleUrl: './editar-free.css',
})
export class EditarFree implements OnInit {
  raperoForm: FormGroup;
  enviado = false;
  errorMsg = '';
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private freestyle: Freestyle,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.raperoForm = this.fb.group({
      nombre: ['', Validators.required],
      alias: ['', Validators.required],
      origen: ['', Validators.required],
      campeonatos: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.freestyle.getRapero(this.id).subscribe({
      next: (data) => this.raperoForm.patchValue(data),
      error: (err) => (this.errorMsg = err),
    });
  }

  onSubmit() {
    this.enviado = true;
    if (this.raperoForm.invalid) return;
    this.freestyle.actualizarRapero(this.id, this.raperoForm.value).subscribe({
      next: () => this.router.navigate(['/listar-free']),
      error: (err) => (this.errorMsg = err),
    });
  }

  cancelar() {
    this.router.navigate(['/listar-free']);
  }
}
