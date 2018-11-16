import { Component, OnInit } from '@angular/core';
import { InitTestService } from '../../services/init-test.service';
import { UserState } from '../../_entities/user-state';

@Component({
  selector: 'app-init-test',
  templateUrl: './init-test.component.html',
  styleUrls: ['./init-test.component.css']
})
export class InitTestComponent implements OnInit {

  constructor(private initService: InitTestService) { }

  recentURLs: UserState[];
  ngOnInit() {
    this.initService.getRecentURL().subscribe(
      data => {
        this.recentURLs = data;
        console.log(this.recentURLs);
      },
      error => {});
  }

}
