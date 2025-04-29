import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { createComponent } from '@angular/core';
import { CreateComponent } from './post/create/create.component';
import { ViewComponent } from './post/view/view.component';
import { EditComponent } from './post/edit/edit.component';
import { ProductIndexComponent } from './product/product-index/product-index.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';


export const routes: Routes = [
    {path:'post', redirectTo:'post/index',pathMatch:'full'},
    {path:'post/index', component:IndexComponent},
    {path:'post/create', component:CreateComponent},
    {path:'post/:postid/view', component:ViewComponent},
    {path:'post/:postid/edit', component:EditComponent},
    {path:'product', redirectTo:'product/index',pathMatch:'full'},
    {path:'product/index', component:ProductIndexComponent},
    {path:'product/create', component:ProductCreateComponent},
    {path:'product/:pid/view', component:ProductViewComponent},
    {path:'product/:pid/edit', component:ProductEditComponent},
    
];
