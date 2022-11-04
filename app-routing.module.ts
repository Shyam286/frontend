import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/user/login/login.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { UserDashboardComponent } from './component/user/user-dashboard/user-dashboard.component';
import { CouponListComponent } from './pages/coupon-list/coupon-list.component';
import { ElectronicComponent } from './pages/electronic/electronic.component';
import { FashionComponent } from './pages/fashion/fashion.component';
import { FoodComponent } from './pages/food/food.component';
import { FootwareComponent } from './pages/footware/footware.component';
import { ProfileComponent } from './component/admin/profile/profile.component';
import { ViewCategoriesComponent } from './pages/view-categories/view-categories.component';
import { AdminGuard } from './service/adminService/admin.guard';
import { UserGuard } from './service/userService/user.guard';
import { WelcomeComponent } from './component/admin/welcome/welcome.component';
import { CouponsComponent } from './component/Coupon/coupons/coupons.component';
import { AddCouponComponent } from './component/admin/add-coupon/add-coupon.component';
import { GetUsersComponent } from './component/get-users/get-users.component';
import { UpdateCouponComponent } from './component/admin/update-coupon/update-coupon.component';
import { UserProfileComponent } from './component/user/user-profile/user-profile.component';
import { UpdateAdminComponent } from './component/admin/update-admin/update-admin.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { RedirectCouponComponent } from './pages/redirect-coupon/redirect-coupon.component';
import { GetCartComponent } from './component/user/get-cart/get-cart.component';
import { AddAdminComponent } from './component/admin/add-admin/add-admin.component';

const routes: Routes = [
   {path:'', component: HomeComponent, pathMatch: 'full'},
   {path:'signup', component: SignupComponent},
   {path:'signin', component: LoginComponent},
   {path:'admin', component: AdminDashboardComponent,canActivate:[AdminGuard],
      children:[
        {
          path:'addAdmin',
          component:AddAdminComponent
         },
        {
          path:'',
          component:WelcomeComponent,
        },
        {
          path:'profile',
          component:ProfileComponent,
        },
        {
          path:'allCoupon',
          component:CouponListComponent,
        },
        {
          path:'addCoupon',
          component:AddCouponComponent,
        },
        {
          path:'getUsers',
          component:GetUsersComponent,
         },
         {
          path:'updateCoupon/:cId',
          component:UpdateCouponComponent,
         },
         {
          path:'updateAdmin/:aId',
          component:UpdateAdminComponent,
         },
      ]
  },
   {path:'user', component: UserDashboardComponent, canActivate:[UserGuard],
  
    children:[
      {
        path:'userProfile',
        component:UserProfileComponent,
      },
      {
        path:'updateUser/:uId',
        component:UpdateUserComponent,
       },
       {
        path:'cart',
        component:GetCartComponent,
       },
           
    ]
  },
  
  {path:'redirectCoupon/:rId',component:RedirectCouponComponent,canActivate:[UserGuard]},
   {path:'adminLogin', component: AdminLoginComponent},
   {path:'categories', component: ViewCategoriesComponent},
   {path:'fashion', component: FashionComponent},
   {path:'electronic', component: ElectronicComponent},
   {path:'food', component: FoodComponent},
   {path:'footware', component: FootwareComponent},
   {path:'allCoupon', component: CouponListComponent},
   {path:'aboutUs', component: AboutUsComponent},
   {path:'coupon', component: CouponsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
