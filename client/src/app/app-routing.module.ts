import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 
    data: {breadcrumb: 'Home'}
  },
  {
    path: 'test-error', 
    component: TestErrorComponent
  },
  {
    path: 'not-found', 
    component: NotFoundComponent
  },
  {
    path: 'server-error', 
    component: ServerErrorComponent
  },
  {
    path: 'shop', 
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'basket', 
    loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule)
  },
  {
    path: 'checkout', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },

  // 2. lazy load the orders module in the app-routing.module.ts
  {
    path: 'orders', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'account', 
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
