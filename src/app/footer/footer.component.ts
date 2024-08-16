import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  list:string [] = ["Contact Us","FAQ’s","Return and Exchange Policy "];
  arr:string [] = [`
About Us Levai & Loris`,`
Privacy policy`,`
Wishlist`];

}
