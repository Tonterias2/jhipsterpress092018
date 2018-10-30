import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vquestion } from 'app/shared/model/vquestion.model';
import { VquestionService } from './vquestion.service';
import { VquestionComponent } from './vquestion.component';
import { VquestionDetailComponent } from './vquestion-detail.component';
import { VquestionUpdateComponent } from './vquestion-update.component';
import { VquestionDeletePopupComponent } from './vquestion-delete-dialog.component';
import { IVquestion } from 'app/shared/model/vquestion.model';

@Injectable({ providedIn: 'root' })
export class VquestionResolve implements Resolve<IVquestion> {
    constructor(private service: VquestionService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((vquestion: HttpResponse<Vquestion>) => vquestion.body));
        }
        return of(new Vquestion());
    }
}

export const vquestionRoute: Routes = [
    {
        path: 'vquestion',
        component: VquestionComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'jhipsterpressApp.vquestion.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'vquestion/:id/view',
        component: VquestionDetailComponent,
        resolve: {
            vquestion: VquestionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterpressApp.vquestion.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'vquestion/new',
        component: VquestionUpdateComponent,
        resolve: {
            vquestion: VquestionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterpressApp.vquestion.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'vquestion/:id/edit',
        component: VquestionUpdateComponent,
        resolve: {
            vquestion: VquestionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterpressApp.vquestion.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const vquestionPopupRoute: Routes = [
    {
        path: 'vquestion/:id/delete',
        component: VquestionDeletePopupComponent,
        resolve: {
            vquestion: VquestionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterpressApp.vquestion.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
