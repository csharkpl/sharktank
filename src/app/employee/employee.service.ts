import { Injectable, Inject } from "@angular/core";
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class AuthService {
}