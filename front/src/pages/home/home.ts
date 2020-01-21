import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { LoginPage } from '../login/login';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fname = '';
  lname = '';
  email = '';
  role = '';
  avatar ='';
  hide:Boolean;
  imagePath: any;
  posts: any;
  imgPreview = 'assets/imgs/email.png';
  url :any;
  // canvaElement:any;
  //storedImage: [];
  //base64Image :string;
  constructor(public nav: NavController, private auth: ApiProvider) {
   
    let info = this.auth.getUserInfo();
    if(info) {
      //this.auth.getImageProfil(info.email);  

      this.fname = info.fname ;
      this.lname = info.lname
      this.email = info.email;
      this.role = info.role;
      this.hide = info.isVerified;  
  } 
  
    };

public logout() {
  this.auth.logout().subscribe(succ => {
    this.nav.setRoot(LoginPage);
  });
}
/*saveCanvasImage(){
  var dataUrl=this.avatar;
  let ctx =this.canvaElement.getContext('2d');
  ctx.clearRect(0,0,ctx.width,ctx.canva.height);
  let name=new Date().getTime()+'.png';
  let path =this.file.dataDirectory;
  var data =dataUrl.split(',')[1];
  let blob =this.b64toBlob(data,'image/png');
this.file.writeFile(path,name,blob).then(res=>{
  this.storeImage(name);
},err=>{
  console.log('err:',err);
});
}*/
/*storeImage(imageName){
  let saveObj={img:imageName};
  this.storedImage.push(saveObj);
  this.storeImage.set(STORAGE_KEY,this.storedImages).then(()=>{
    setTimeout(()=>{
      this.content.scrollTobuttom();
    },500);
  });
}*/
/*b64toBlob(b64Data,contentType){
  contentType=contentType||'';
  var sliceSize=512;
  var byteCaracters=atob(b64Data);
  var byteArrays=[];
  for (var offset=0;offset<byteCaracters.length;offset+=sliceSize){
    var slice =byteCaracters.slice(offset,offset+sliceSize);
    var byteNumbers=new Array(slice.length);
    for(var i=0;i<slice.length;i++){
      byteNumbers[i]=slice.charCodeAt(i);
    }
    var byteArray =new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  var blob =new Blob(byteArrays,{type:contentType});
  return blob;
}*/
}
