import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Userservice} from './services/user';
import { PagerService } from './services/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient, private pagerService: PagerService, private userservice: Userservice) {
  }
  title = 'Angular-pagination';
  characters: any[];
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  ngOnInit() {
    this.userservice.getalluser()
      .subscribe(
        res => {
          this.allItems = res.data;
          console.log('user data from server', res.data);
          this.setPage(1);
        });


    // this.allItems = [
    //   // ... list of items
    //
    //   {
    //     id: 11,
    //     name: 'Nicholas DuBuque',
    //     username: 'Nicholas.Stanton',
    //     email: 'Rey.Padberg@rosamond.biz'
    //   },
    //   {
    //     id: 1,
    //     name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz'
    //   },
    //
    //   {
    //     id: 11,
    //     name: 'Nicholas DuBuque',
    //     username: 'Nicholas.Stanton',
    //     email: 'Rey.Padberg@rosamond.biz'
    //   },
    //   {
    //     id: 1,
    //     name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz'
    //   },
    //   {
    //     id: 2,
    //     name: 'Ervin Howell',
    //     username: 'Antonette',
    //     email: 'Shanna@melissa.tv'
    //   },
    //
    //   // ... list of items
    //
    //   {
    //     id: 11,
    //     name: 'Nicholas DuBuque',
    //     username: 'Nicholas.Stanton',
    //     email: 'Rey.Padberg@rosamond.biz'
    //   },
    //   {
    //     id: 1,
    //     name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz'
    //   },
    //   {
    //     id: 2,
    //     name: 'Ervin Howell',
    //     username: 'Antonette',
    //     email: 'Shanna@melissa.tv'
    //   },
    //
    //   // ... list of items
    //
    //   {
    //     id: 11,
    //     name: 'Nicholas DuBuque',
    //     username: 'Nicholas.Stanton',
    //     email: 'Rey.Padberg@rosamond.biz'
    //   },
    //   {
    //     id: 1,
    //     name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz'
    //   },
    //   {
    //     id: 2,
    //     name: 'Ervin Howell',
    //     username: 'Antonette',
    //     email: 'Shanna@melissa.tv'
    //   },
    //
    //   // ... list of items
    //
    //   {
    //     id: 11,
    //     name: 'Nicholas DuBuque',
    //     username: 'Nicholas.Stanton',
    //     email: 'Rey.Padberg@rosamond.biz'
    //   },
    //   {
    //     id: 1,
    //     name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz'
    //   },
    //   {
    //     id: 2,
    //     name: 'Ervin Howell',
    //     username: 'Antonette',
    //     email: 'Shanna@melissa.tv'
    //   },
    //
    //   // ... list of items
    //
    //   {
    //     id: 11,
    //     name: 'Nicholas DuBuque',
    //     username: 'Nicholas.Stanton',
    //     email: 'Rey.Padberg@rosamond.biz'
    //   },
    //   {
    //     id: 1,
    //     name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz'
    //   },
    //   {
    //     id: 2,
    //     name: 'Ervin Howell',
    //     username: 'Antonette',
    //     email: 'Shanna@melissa.tv'
    //   },
    //
    //   // ... list of items
    //
    //   {
    //     id: 11,
    //     name: 'Nicholas DuBuque',
    //     username: 'Nicholas.Stanton',
    //     email: 'Rey.Padberg@rosamond.biz'
    //   },
    //   {
    //     id: 1,
    //     name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz'
    //   },
    //   {
    //     id: 2,
    //     name: 'Ervin Howell',
    //     username: 'Antonette',
    //     email: 'Shanna@melissa.tv'
    //   },
    //
    //   // ... list of items
    //
    //   {
    //     id: 11,
    //     name: 'Nicholas DuBuque',
    //     username: 'Nicholas.Stanton',
    //     email: 'Rey.Padberg@rosamond.biz'
    //   },
    //   {
    //     id: 1,
    //     name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz'
    //   },
    //
    //   {
    //     id: 11,
    //     name: 'Nicholas DuBuque',
    //     username: 'Nicholas.Stanton',
    //     email: 'Rey.Padberg@rosamond.biz'
    //   },
    //
    //
    // ];

    // initialize to page 1

    // this.setPage(1);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
