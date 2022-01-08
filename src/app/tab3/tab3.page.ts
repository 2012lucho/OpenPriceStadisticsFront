import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public listado_noticias:any = [];

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.newsService.getAll().subscribe(
      ok => {
        this.listado_noticias = ok;
        console.log(this.listado_noticias);
      },
      err => {}
    );
  }
}
