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
import { SupplierSearchModule } from '../../supplier/supplier-search/supplier-search.module';
import { EntrySearchModule } from '../../entry/entry-search/entry-search.module';
import { EntryMaintenanceModule } from '../../entry/entry-maintenance/entry-maintenance.module';
import { CashSearchModule } from '../../cash/cash-search/cash-search.module';
import { SaleSearchModule } from '../../sale/sale-search/sale-search.module';
import { CashOpenCloseModule } from '../../cash/cash-open-close/cash-open-close.module';
import { GlobalParametersSearchModule } from '../../global-parameters/global-parameters-search/global-parameters-search.module';

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
        path:'supplierSearch',
        loadChildren:'./../../supplier/supplier-search/supplier-search.module#SupplierSearchModule'
      },
      {
        path:'productSearch',
        loadChildren:'./../../product/product-search/product-search.module#ProductSearchModule'
      },
      {
        path:'entrySearch',
        loadChildren:'./../../entry/entry-search/entry-search.module#EntrySearchModule'
      },
      {
        path:'',
        loadChildren:'./../../entry/entry-maintenance/entry-maintenance.module#EntryMaintenanceModule'
      },
      {
        path:'cashSearch',
        loadChildren:'./../../cash/cash-search/cash-search.module#CashSearchModule'
      },
      {
        path:'saleSearch',
        loadChildren:'./../../sale/sale-search/sale-search.module#SaleSearchModule'
      },
      {
        path:'colletSale',
        loadChildren:'./../../cash/cash-open-close/cash-open-close.module#CashOpenCloseModule'
      }, 
      {
        path:'globalParametersSearch',
        loadChildren:'./../../global-parameters/global-parameters-search/global-parameters-search.module#GlobalParametersSearchModule'
      },
      {
        path:'userSearch',
        loadChildren:'./../../user/user-search/user-search.module#UserSearchModule'
      },
      {
        path:'changePasswordMaintenance',
        loadChildren:'./../../user/user-change-password/user-change-password.module#UserChangePasswordModule'
      },
      {
        path:'profileSearch',
        loadChildren:'./../../profile/profile-search/profile-search.module#ProfileSearchModule'
      },
      {
        path:'',
        loadChildren:'./../../profile/profile-maintenance/profile-maintenance.module#ProfileMaintenanceModule'
      },
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
