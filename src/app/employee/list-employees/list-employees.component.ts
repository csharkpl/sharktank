import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { AuthService } from "@app/shared/auth.service";
import { UserInfo } from "@app/shared/user-info";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListEmployeesComponent implements OnInit  {
  userInfo: Observable<UserInfo>;
  isLoggedIn = new BehaviorSubject(false);

  employeesCollectionRef: AngularFirestoreCollection<any>;
  employees$: Observable<any[]>;

  constructor(private afs: AngularFirestore, private authService: AuthService, private router: Router) {
    this.userInfo = authService.userInfo;
    this.userInfo
      .map(userInfo => !userInfo.isAnonymous)
      .subscribe(this.isLoggedIn);
  }

  ngOnInit(): void {
    this.employeesCollectionRef = this.afs.collection('todos');
    this.employees$ = this.employeesCollectionRef.valueChanges();
  }
}
