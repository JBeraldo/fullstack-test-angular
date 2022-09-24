import { Component, EventEmitter, Input, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'Content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() public apiGreeting: string
  @Input() public date: string
  @Input() public value: string
  public text: string = ''


  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
  }

  submit(): void {
    this.apiService.postText(this.text).pipe(
      catchError((err) => {
        this.value = 'Erro ao recuperar texto'
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.value = response.text
      }
    })
  }
}


