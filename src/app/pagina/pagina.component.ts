import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  public apiGreeting = '';
  public date = '';
  public text = ''

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getHello().pipe(
      catchError((err) => {
        this.apiGreeting = 'Falha na comunicação com o servidor.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.apiGreeting = response.mensagem;
      }
    });

    this.apiService.getDate().pipe(
      catchError((err) =>{
        this.date = 'Erro ao recuperar data'
        return [];
      })
    ).subscribe((response)=>{
      if(response){
        this.date = response.date
      }
    })
  }

}
