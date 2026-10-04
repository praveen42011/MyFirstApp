import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { ControlFlowStatement } from './components/control-flow-statement/control-flow-statement';
import { SignalExample } from './components/signal-example/signal-example';
import { AttributeDirective } from './components/attribute-directive/attribute-directive';
import { GetApi } from './components/get-api/get-api';
import { User } from './components/user/user';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { Formvalidation } from './components/formvalidation/formvalidation';
import { Pipeexample } from './components/pipeexample/pipeexample';
import { ResoureAPI } from './components/resoure-api/resoure-api';

export const routes: Routes = [

{
    path: 'admin',
    component: Admin
},
{
    path: 'databinding',
    component: DataBinding
},
{
    path: 'control-flow-statement',
    component: ControlFlowStatement
},
{
    path: 'signal-example',
    component: SignalExample
},
{
    path:'app-attribute-directive',
    component: AttributeDirective
},
{
    path:'get-api',
    component: GetApi
}
,
{
    path:'user',
    component: User
}
,
{
    path:'ReactiveForm',
    component: ReactiveForm
},
{
    path:'Formvalidation',
    component: Formvalidation
}
,
{
    path:'PipeExample',
    component: Pipeexample
},
{
    path:'ResoureAPI',
    component: ResoureAPI
}
];
