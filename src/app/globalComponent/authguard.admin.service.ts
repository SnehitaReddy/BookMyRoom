import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthState } from '../modules/hotel/hotelStore/hotelStore.State';
import { LoginModalComponent } from '../modules/auth/login/modals/login-modal/login-modal.component';
import { FirebaseService } from './firebase.service';
@Injectable()
export class AuthguardadminService implements CanActivate {
    constructor(private store: Store<{auth: AuthState}>, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('auth').map((authState: AuthState) => {
            if (authState.admin && authState.authenticated) {
                return true;
            } else {
                this.router.navigate(['/home']);
            }

        });
    }
}
