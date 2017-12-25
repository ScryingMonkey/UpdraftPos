import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { Observable } from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Product } from '../models/index';

@Injectable()
export class ProductService {
  private product: BehaviorSubject<Product> = 
    new BehaviorSubject(new Product());
  private productList: BehaviorSubject<Array<any>> = 
    new BehaviorSubject([new Product(), new Product(), new Product()]);
  private productRef: AngularFireList<Product>;
  

  constructor(private _afdb: AngularFireDatabase) { 
    console.log('[ ProductService.constructor...');
    this.productRef = _afdb.list<Product>('products');
    // this.productRef.valueChanges().subscribe (res=> {
    //   this.productList.next(res);
    //   console.log("...pulled product:" +res);       
    //   console.dir(res);
    // });
  }
  // ###############################################
  // #  Helpers
  // ###############################################
  checkForProductInList(product:Product):boolean {
    return this.productList.value.includes(product);
  }
  checkForProductInDb(product:Product):Promise<boolean> {
    console.log('[ ProductService.checkForProductInDb...');
    return new Promise((resolve, reject) => {
      console.log("...TODO!! Checking for " +product.displayName+ " in db."); 
      // check DB for item   
      this._afdb.list('/items', ref => 
        ref.equalTo(product.eanucc13)).valueChanges().toPromise()
        .then(p => {
          console.log("...Pulled product from db:"); 
          console.dir(p);
          let res = false;
          // let res = product == p;
          if(res) { 
            console.log("...TODO!! Successfully located " +product.displayName+ " in db.");
            resolve(res);
          } else { 
            console.log("...TODO!! Failed to locate " +product.displayName+ " in db.");    
            resolve(res);
          }
        }).catch(err => {
          console.log("...ERROR!! Error pulling " +product.displayName+ " from db.");
          reject(err);
        });   
    });
  }
  // ###############################################
  // #  Getters
  // ###############################################
  get product$() { 
    return this.product.asObservable(); 
  }
  get productList$() {
    return this.productList.asObservable();
  }
  pullProductFromDB(eanucc13:number):Product {
    let product = new Product();
    // Pull Product from database by eanucc13 number

    console.log("...TODO!! Pull product from database by eanucc13 number.");
    return product;
  }
  // ###############################################
  // #  Setters
  // ###############################################
  updateProduct(product:Product) { 
    this.product.next(product); 
  }
  updateProductAttrib(key:string, value:any) {
    let p = this.product.value;
    p[key] = value;
    this.updateProduct(p);
  }
  addProductToFirebase(product:Product):boolean {
    console.log('[ ProductService.addProductToFirebase...');   
    console.log('...product: ');
    console.dir(product);
    // check for product number in database
    if(this.checkForProductInList(product)){      
      console.log("..." +product.displayName+ " already in db.  Doing nothing."); 
    } else {
      this.productRef.push( product );
      console.log("...Added " +product.displayName+ " to db.");     
    }    
    let result = this.checkForProductInList(product);
    return result;
  }
  updateProductInFirebase(product:Product):boolean {
    console.log('[ ProductService.updateProductInFirebase...');   
    console.log('...product: ');
    console.dir(product);
    // check for product number in database
    if(this.checkForProductInList(product)){
      // send product to firebase
      this.productRef.push( product );
      console.log("...Updated " +product.displayName+ " in db.");
    } else {
      console.log("..." +product.displayName+ " not in db.  Doing nothing.");      
    }    
    let result = this.checkForProductInList(product);
    return result;
  }
  removeProductFromDb(product:Product):boolean {
    console.log('[ ItemService.constructor...');    
    console.log("...Removing " +product.displayName+ " from db.");    
    // remove item from DB
    let productKey = String(product.eanucc13);
    this.productRef.remove(productKey);
    let res = this.checkForProductInList(product);
    if(res) { 
      console.log("...Failed to remove " +product.displayName+ " from db.");    
    } else { 
      console.log("...Successfully removed " +product.displayName+ " from db.");
    }
    return res;
  }
  saveNewProduct(product:Product) { 
    console.log("...saving new product: " +product.displayName);
  }
}
