import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    {
      name: "Inicio",
      url: "http://pagina1.com"
    },
    {
      name: "Lista",
      url: "http://pagina1.com"
    },
    {
      name: "Formulario",
      url: "http://pagina1.com"
    }
  ]
  title = 'angular-material-example';
}
