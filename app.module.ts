import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './component/user/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './component/footer/footer.component';
import { CouponsComponent } from './component/Coupon/coupons/coupons.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './component/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './component/user/login/login.component';
import { authInterceptorProviders } from './service/userService/auth.interceptor';
import { adminAuthInterceptorProviders } from './service/adminService/admin-auth.interceptor';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { AdminNavBarComponent } from './component/admin/admin-nav-bar/admin-nav-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import { ViewCategoriesComponent } from './pages/view-categories/view-categories.component';
import { FashionComponent } from './pages/fashion/fashion.component';
import { ElectronicComponent } from './pages/electronic/electronic.component';
import { FoodComponent } from './pages/food/food.component';
import { FootwareComponent } from './pages/footware/footware.component';
import { CouponListComponent } from './pages/coupon-list/coupon-list.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ProfileComponent } from './component/admin/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { AdminSidebarComponent } from './component/admin/admin-sidebar/admin-sidebar.component';
import { WelcomeComponent } from './component/admin/welcome/welcome.component';
import { AddCouponComponent } from './component/admin/add-coupon/add-coupon.component';
import { GetUsersComponent } from './component/get-users/get-users.component';
import { UpdateCouponComponent } from './component/admin/update-coupon/update-coupon.component';
import { UserSidebarComponent } from './component/user/user-sidebar/user-sidebar.component';
import { UserProfileComponent } from './component/user/user-profile/user-profile.component';
import { UpdateAdminComponent } from './component/admin/update-admin/update-admin.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { RedirectCouponComponent } from './pages/redirect-coupon/redirect-coupon.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { GetCartComponent } from './component/user/get-cart/get-cart.component';
import { AddAdminComponent } from './component/admin/add-admin/add-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CouponsComponent,
    HomeComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminNavBarComponent,
    ViewCategoriesComponent,
    FashionComponent,
    ElectronicComponent,
    FoodComponent,
    FootwareComponent,
    CouponListComponent,
    NavbarComponent,
    AboutUsComponent,
    ProfileComponent,
    AdminSidebarComponent,
    WelcomeComponent,
    AddCouponComponent,
    GetUsersComponent,
    UpdateCouponComponent,
    UserSidebarComponent,
    UserProfileComponent,
    UpdateAdminComponent,
    UpdateUserComponent,
    RedirectCouponComponent,
    GetCartComponent,
    AddAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatSnackBarModule,
    MatListModule,
    ReactiveFormsModule,
    MatExpansionModule
    
  ],
  providers: [
    authInterceptorProviders,
    adminAuthInterceptorProviders
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
