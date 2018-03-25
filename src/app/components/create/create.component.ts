import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../coin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	title = "Add Currency";
	angForm: FormGroup;

	constructor(private route: ActivatedRoute, private router: Router, private coinservice: CoinService, private fb: FormBuilder) { 
		this.createForm();
	}
	
	createForm() {
		this.angForm = this.fb.group({
			coinName: ['', Validators.required],
			coinPrice: ['', Validators.required]
		});
	}
	
	addCoin(name, price) {
		this.coinservice.addCoin(name, price);
		this.router.navigate(['index']);
	}

	ngOnInit() {
	}

}
