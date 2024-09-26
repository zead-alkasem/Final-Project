import { Routes } from '@angular/router';
import { CategoriesListComponent } from './category/categories-list/categories-list.component';
import { AppComponent } from './app.component';
import { KindListComponent } from './kind/kind-list/kind-list.component';
import { SectorListComponent } from './sector/sector-list/sector-list.component';

export const routes: Routes = [
    {
        path:'category',component:CategoriesListComponent
    },
    {
        path:'welcome',component:AppComponent
    },   
    {
        path:'kind',component:KindListComponent
    },
    {
        path:'sector',component:SectorListComponent
    }
//       {
//           path:'products/:id',component:ProductDetailComponent,
//           canActivate:[pruductDetailGuard]
//       },
//   //المسار الثاني
//       {   
//         path:'welcome',component:WelcomeComponent
//       },
//       //استخدام مفهوم الlazyloding على الmodule
//       {   
//           path:'news',loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
//       },
//       {  
//           //استخدام مفهوم الlazylaoding 
//           path:'about',loadComponent: () => import('./about-us/about-us.component').then(c => AboutUsComponent)
//       },
//       {
//           //فيحال المستحدم لم يطلب شيء ناخذه للموقع الافتراضي
//           path:'',component:WelcomeComponent
//       },
//       {
//           //فيحال المستحدم لم يطلب شيء ناخذه للموقع الافتراضي
//           path:'login',component:LoginComponent
//       },
//       {
//           //في حال ادخل المستخد عنوان غير موجود 
//          path:'**',component:WelcomeComponent
//       } 
];
