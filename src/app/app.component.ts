import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, RouterModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'Banking App';
	actions: Array<any> = [
		{
			title: 'Home',
			route: '/home',
			icon: 'home',
		},
		{ title: 'Products', route: '/products', icon: 'list' },
		{ title: 'New Product', route: '/new-product', icon: 'add' },
	];
}
