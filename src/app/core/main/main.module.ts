import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CoreModule } from '../core.module';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { HomeComponent } from '../home/home.component';
import { CategorySearchModule } from '../../category/category-search/category-search.module';
import { BrandSearchModule } from '../../brand/brand-search/brand-search.module';
import { LoginModule } from '../../login/login.module';
import { UnitSearchModule } from '../../unit/unit-search/unit-search.module';
import { StoreSearchModule } from '../../store/store-search/store-search.module';
import { ProductSearchModule } from '../../product/product-search/product-search.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: './../../login/login.module#LoginModule'
  },
  {
    path:'home',
    component: HomeComponent,
    children:[
      {
        path: 'categorySearch',
        loadChildren: './../../category/category-search/category-search.module#CategorySearchModule'
      },
      {
        path:'brandSearch',
        loadChildren:'./../../brand/brand-search/brand-search.module#BrandSearchModule'
      },
      {
        path:'unitSearch',
        loadChildren:'./../../unit/unit-search/unit-search.module#UnitSearchModule'
      },
      {
        path:'storeSearch',
        loadChildren:'./../../store/store-search/store-search.module#StoreSearchModule'
      },
      {
        path:'productSearch',
        loadChildren:'./../../product/product-search/product-search.module#ProductSearchModule'
      }
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  exports:[MainComponent],
  declarations: [MainComponent]
})
export class MainModule { }
