import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  products:any = [];

  constructor(private serv: GestionService) {
    this.getAllProducts();

  }
  getAllProducts() {
    this.serv.getAllProducts().subscribe(
      {
        next: (data) => { this.products=data; console.log(data) },
        error: (err) => { console.log(err) },
        complete: () => { }
      }
    )
  }

  deleteProduct(id:number){
    this.serv.deleteProduct(id).subscribe(
      {
        next: (data) => { console.log('rrrrrrrrrrr'); this.getAllProducts() },
        error: (err) => { console.log('zzzzzzzzz');},
        complete: () => {console.log('aaaaaaaaaaaaaa'); }
      }
    )
  }


}
