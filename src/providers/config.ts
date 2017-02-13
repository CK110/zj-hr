// function isHeroku()
// {
//   // Rudimentary check to see if we are running on Heroku. Should provide a more flexible config.
//   return window.location.hostname.indexOf('herokuapp.com') > 0;
// }
//
// export let SERVER_URL = isHeroku() ? "/" : "http://localhost:5000/";

// export let SERVER_URL = "http://10.34.10.110:8080";
export let SERVER_URL = "/api";



//
// get(property){
//
//   property={"userid":"kaichen","password":"000001"}
//   //所有需要传递的参数(js对象)放置在___p中
//   let body = new URLSearchParams();
//   body.set('___p', JSON.stringify(property));
//
//   let headers = new Headers({ 'Content-Type': 'application/json' });
//   let options = new RequestOptions({ headers: headers });
//
//   this.http.post(LOGIIN_HREF,body)
//     .map(res => res.json())
//     .subscribe(data => console.log(data))
// }
