//IIFE Immediately invoked function expressions
(async function (){
    let data = await fetch("https://dummyjson.com/users")
    .then(
    (resp)=>resp.json()
    .then(
    (data)=>{
        let users=data.users;

        let userList=document.getElementById("userlist")
console.log(data.users)
function Search(){
// your search logic here

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
