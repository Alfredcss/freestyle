import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Freestyle } from '../../services/freestyle';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-free',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-free.html',
  styleUrl: './listar-free.css',
})
export class ListarFree implements OnInit {
  ListarRaperos: any[] = [];
  constructor(private rapero: Freestyle) {}

  ngOnInit(): void {
    this.getRaperos();
  }

  getRaperos() {
    this.rapero.getRaperos().subscribe((data) => {
      console.log(data);
      this.ListarRaperos = data;
    });
  }

  eliminarRapero(id: string) {
    if (window.confirm('¿Estás seguro que deseas eliminar este freestyle?')) {
      this.rapero.eliminarRapero(id).subscribe({
        next: () => {
          this.getRaperos(); // recarga lista desde servidor
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
        },
      });
    }
  }

  trackById(index: number, item: any): string {
    return item._id;
  }
}
