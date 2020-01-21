import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
//import { map } from 'rxjs/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = 'http://192.168.1.103:3000/';
/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/
@Injectable()
export class ApiProvider {
  currentUser;
  posts: any;
  searchedUser=[];
  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

 /* private extractData(res: Response) {
    let body = res;
    return body || { };
  }*/
/*
fileTransfer.upload(this.imageURI, 'http://192.168.12.194:8080/upload', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.12.194:8080/ionicfile.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });



  */

 public search(Name){
console.log(Name)
      // At this point store the credentials to your backend!
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      return this.http.post(apiUrl+'search/'+Name, JSON.stringify(Name)).subscribe(res => {
        var data = res.json();
        this.searchedUser[0]= data["fname"];
        this.searchedUser[1]= data["lname"];
        this.searchedUser[2]= data["email"];
        this.searchedUser[3]= data["role"];
        //this.searchedUser = data;
      });
    
 }

 /*console.log(Name)
   if (Name == null) {
      return Observable.create(observer => {
        observer.next(false);
        observer.complete();
      });
    } else {
      return Observable.create(observer => {
        // At this point store the credentials to your backend!
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(apiUrl+'search/'+Name, JSON.stringify(Name), { headers: headers })
          .subscribe(res => {
            console.log(res.json());
            var data = res.json();
            if(data) {
              this.searchedUser = data.user;
              observer.next(data);
              observer.complete();
            }
          });
      })}
    */  



  userdelete(email){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(apiUrl+'delete/'+email, JSON.stringify(email))
    .subscribe(res => {
      //console.log(res.json());
      })
  }
  uppassword(email,pw){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(apiUrl+'update/'+email, JSON.stringify(pw,email))
    .subscribe(res => {
      //console.log(res.json());
      })
  }

  getImageProfil(email){ 
    
       // At this point store the credentials to your backend!
       // let headers = new Headers();
        //headers.append('Content-Type', 'application/json');

         return this.http.post(apiUrl+'users/'+email, JSON.stringify(email))
          .subscribe(res => {
            //console.log(res.json());
            })
        }


   


  public login(credentials) {
    console.log(credentials)
    if (credentials.email == null || credentials.password == null) {
      return Observable.create(observer => {
        observer.next(false);
        observer.complete();
      });
    } else {
      return Observable.create(observer => {
        // At this point store the credentials to your backend!
        let headers = new Headers(
          {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin':'*'
          });

          let options = new RequestOptions({ headers: headers });

        this.http.post(apiUrl+'users/login', JSON.stringify(credentials),options)
          .subscribe(res => {
            console.log(res.json());
            var data = res.json();
            if(data) {
              this.currentUser = data.user;
              observer.next(data);
              observer.complete();
            }
          });
      });  
    }
  }


  register(data): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(apiUrl+'users', JSON.stringify(data), { headers: headers });
  }

 /* getUser(id): Observable<any> {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');
    return this.http.get(apiUrl+'users/'+id, { headers: headers }).pipe(
      map(this.extractData));
  }*/
  public getsearchInfo() {
    return this.searchedUser;
  }
  public getUserInfo() {
    return this.currentUser;
  }
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
