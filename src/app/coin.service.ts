import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CoinService {

	result: any;
	
	constructor(private http: HttpClient) { }
  
	addCoin(name, price) {
		const uri = 'http://localhost:3000/coin';
		const obj = {
			name: name,
			price: price
		};
		this.http.post(uri, obj).subscribe(res => console.log('Done! Coin added'));
	}
	
	getCoins() {
		const uri = 'http://localhost:3000/coin';
		return this.http.get(uri).map(res => {return res; });
	}
	
	editCoin(id) {
		const uri = 'http://localhost:3000/coin/edit/' + id;
		return this.http.get(uri).map(res => {
			return res;
		});
	}
	
	updateCoin(name, price, id) {
		const uri = 'http://localhost:3000/coin/update/' + id;
		const obj = {
			name: name,
			price: price
		};
		this.http.post(uri, obj).subscribe(res => console.log('Coin updated successful'));
	}
	
	deleteCoin(id) {
		const uri = 'http://localhost:3000/coin/delete/'+id;
		return this.http.get(uri).map(res => {
			return res;
		});
	}

}
