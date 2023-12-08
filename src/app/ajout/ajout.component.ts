import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  product: any = { id: 0, titre: "", cat: "" }
  constructor(private gest: GestionService, private route:Router) {

  }
  addProduct() {
    this.gest.addProduct(this.product).subscribe(
      {
        next: (data) => { this.route.navigateByUrl("/liste")},
        error: (err) => { },
        complete: () => { }
      }
    )
  }
}
