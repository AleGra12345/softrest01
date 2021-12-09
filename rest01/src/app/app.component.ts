import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  righe: Riga[] = [];

  // 1) Angular instanzia un oggetto di tipi HttpClient e lo passa come argomento
  // 2) definite una proprietà http:
  //    http: HttpClient;
  // 3) valorizzate this.http = http;
  constructor(private http: HttpClient) { }

  carica() {
    let oss: Observable<Riga[]> = this.http
      .get<Riga[]>("https://jsonplaceholder.typicode.com/posts");
      oss.subscribe(r => {
        this.righe = r;
      });
  }
}
// commento++++
export class Riga {
  userId: number = 0;
  id: number = 0;
  title: string = "";
  body: string = "";
}
