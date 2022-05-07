let cart = [];
const addToCart = (url, name, price) => {
  Swal.fire(
    'Thành công!',
    'Thêm vào giỏ hàng thành công!',
    'success'
  )
  let product = [{ url: url, name: name, price: price, quatily: 1 }];
  //   console.log(product)
  let local = localStorage.getItem("cart");
  // console.log(local)
  if (local === null) {
    cart.push(product);
  } else {
      cart = JSON.parse(localStorage.getItem("cart"));
  }
  //   counter = {};

  //   cart.forEach(function (obj) {
  //     var key = JSON.stringify(obj);
  //     counter[key] = (counter[key] || 0) + 1;
  //   });

  let kt=0;
  for(let i=0; i<cart.length;i++) {
    let name = Object.assign({}, ...cart[i]).name;
    if(cart[i][0].name == product[0].name) {
      kt=1;
      cart[i][0].quatily +=1
      break;
    }
  }

if(kt == 0) {
  cart.push(product);
}

// console.log(cart)
  // console.log(kt)
  

  localStorage.setItem("cart", JSON.stringify(cart));
  
};


