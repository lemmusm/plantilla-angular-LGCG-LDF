import { RouterModule, Routes } from '@angular/router';
import {Y2013Component} from './components/pages/y2013/y2013.component';
import {Y2014Component} from './components/pages/y2014/y2014.component';
import {Y2015Component} from './components/pages/y2015/y2015.component';
import {Y2016Component} from './components/pages/y2016/y2016.component';
import {Y2017Component} from './components/pages/y2017/y2017.component';

const APP_ROUTES: Routes = [
  { path: 'EFiscal2013', component: Y2013Component },
  { path: 'EFiscal2014', component: Y2014Component },
  { path: 'EFiscal2015', component: Y2015Component },
  { path: 'EFiscal2016', component: Y2016Component },
  { path: 'EFiscal2017', component: Y2017Component },
  { path: '**', pathMatch: 'full', redirectTo: 'EFiscal2017' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
