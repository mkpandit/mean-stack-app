import { Routes} from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

export const appRoutes: Routes = [
	{
		path: 'create',
		component: CreateComponent
	},
	{
		path: 'index',
		component: IndexComponent
	},
	{
		path: '',
		component: IndexComponent
	},
	{
		path: 'edit/:id',
		component: EditComponent
	}
];