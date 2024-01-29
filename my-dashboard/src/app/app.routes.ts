import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'dashboard',
    loadComponent:() => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Chane Detection',
        loadComponent: ()=> import('./dashboard/pages/change-detection/change-detection.component'),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: ()=> import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-option',
        title: 'Defer Options',
        loadComponent: ()=> import('./dashboard/pages/defer-option/defer-option.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: ()=> import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: ()=> import('./dashboard/pages/user/user.component'),
      }
      ,
      {
        path: 'user-list',
        title: 'User List',
        loadComponent: ()=> import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: ()=> import('./dashboard/pages/view-transition/view-transition.component'),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch:'full'
    }


    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];


