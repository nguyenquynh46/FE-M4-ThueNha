function loadHomeUser(){
    loadHome()
    let user= `hien thong tin user`
    document.getElementById('home').innerHTML=
        ` <button class="nav-link" onclick="loadHomeUser()">Trang chủ <span class="sr-only">(current)</span></button>`
    document.getElementById('listProduct').innerHTML=`<button class="nav-link" onclick="listProductUser()" id="listProduct">
                Sản phẩm
              </button>`
    document.getElementById('user').innerHTML= user
    document.getElementById('login').innerHTML= ''
}
