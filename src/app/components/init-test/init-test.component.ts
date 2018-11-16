import { Component, OnInit } from '@angular/core';
import { InitTestService } from '../../services/init-test.service';

@Component({
  selector: 'app-init-test',
  templateUrl: './init-test.component.html',
  styleUrls: ['./init-test.component.css']
})
export class InitTestComponent implements OnInit {

  constructor(private initService: InitTestService) { }

  recentURLs: any;
  ngOnInit() {
    this.initService.getRecentURL().subscribe(
      data => {
        this.recentURLs = data;
      },
      error => {});
  }

}
