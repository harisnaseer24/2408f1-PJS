//IIFE Immediately invoked function expressions
(async function (){
    let data = await fetch("https://dummyjson.com/users")
    .then(
    (resp)=>resp.json()
    .then(
    (data)=>{
        let users=data.users;
        let userList=document.getElementById("userlist");
        let search=document.getElementById("search");
        let searchBtn=document.getElementById("searchBtn");
        searchBtn.addEventListener("click",Search);
console.log(data.users)
function Search(event){
  event.preventDefault();
// your search logic here
let query= search.value.toLowerCase();
console.log(query)
let searchResult=users.filter(user=> user.firstName.toLowerCase().includes(query) || user.email.toLowerCase().includes(query) )
console.log(searchResult)
if (searchResult.length > 0) {
  userList.innerHTML =""
  searchResult.forEach(element => {
    userList.innerHTML +=
`<div class="col-lg-4 col-md-6 col-sm-12 my-2">
    <div class="card">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.firstName}</h5>
          <p class="card-text">${element.email} </p>
          <p class="card-text">${element.phone} </p>
          <a href="#" class="btn btn-primary">${element.university}</a>
        </div>
      </div>
</div>
`



});
} else {
  userList.innerHTML="No result found";
}



}

users.forEach(element => {
    userList.innerHTML +=
`<div class="col-lg-4 col-md-6 col-sm-12 my-2">
    <div class="card">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.firstName}</h5>
          <p class="card-text">${element.email} </p>
          <p class="card-text">${element.phone} </p>
          <a href="#" class="btn btn-primary">${element.university}</a>
        </div>
      </div>
</div>
`



});
}
 )
)
})();
