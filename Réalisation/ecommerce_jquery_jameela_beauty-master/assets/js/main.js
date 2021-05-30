// ***********************PANIER ECO*********************** //

// ** Shopping Cart - Stockage des données API** // 
var shoppingCart = (function () {
  cart = [];
  // Les objets de classe item sont des vecteurs de données auxquels sont attachées les données contenu dans le shopping Cart
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  // *Sauvagarde du cart (panier)* //
  // JSON(JavaScript Object Notation) est un format léger d'échange de données.
  // La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON., elle remplace les valeurs inclues dans le tableau cart et permet de stocké les données
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  // *Chargement du cart (panier) *//
  // La méthode JSON.parse() analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne.
  //  On utilise cette fonction avec le paramètre shopingCart afin d'y afficher les données stockés.
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  // Si la fonction shopping (contenant une tableau vide sans chargement de donné stockés) on affiche mais vide 
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  // ** Methode pour les actions de l'utilisateur **//
  // variable obj est le tableau des objets (produits) avec des propriété et leur valeurs associés
  var obj = {};
  // *Ajouter au cart (panier)*//
  // avec .addItemToCart on ajoute a la variable obj l'ajout au panier par la fonction comprenant le nom le prix et le nombre de produit 
  obj.addItemToCart = function (name, price, count) {
    // Pour les produits du panier
    for (var item in cart) {
      // si le nom du produit selectionné est identique au nom d'un produit deja selectionné dans le panier
      //  on incrémente  dans le panier et il sera sauvé et s'affiche dans le panier (ici dans la modale)
      if (cart[item].name === name) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    // variable item pour l'ajout de nouveau produit
    var item = new Item(name, price, count);
    // La méthode .push ajoute les nouveaux éléments au Cart(panier) et son stocké
    cart.push(item);
    saveCart();
  }
  //fonction: avec.setCountForItem on ajoute à la variable obj par son nom et son comptage le nombre de produit (item) dans le panier
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      // si le nom du produit est identique on rajoute au compteur de celui-ci
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  //fonction: avec .removeItemFromCart on retirer (le nom) du produits de la variable obj dans le cart(panier)
  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      // si le produit existe dans panier on decrémente au compteur du produit  
      if (cart[item].name === name) {
        cart[item].count--;
        //  si le compteur est a 0 on le retire du panier
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  }
  //fonction: avec .removeItemFromCartAll on retirer tous les objet du cart(panier)
  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }
  // fonction: avec .clearCart on vide le tableau de la variable obj du cart et le sauvegarde
  obj.clearCart = function () {
    cart = [];
    saveCart();
  }
  // fonction: avec .totalCount on calcule le nombre de produit dans le cart(panier) ****
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }
  // fonction: avec .totalCart on calcule le total du prix dans le cart (panier)
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      // calcule du prix du panier en multipliant le prix du produit par le nombre de produit
      totalCart += cart[item].price * cart[item].count;
    }
    // La méthode .toFixed permet de formater un nombre en notation arrondi à 2 chiffre apres la virgule 
    return Number(totalCart.toFixed(2));
  }
  // fonction: obj.listCart on fait une copie....  de la list du cart (panier)*******************
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }
  return obj;
})();
// cart : Array
// Item : Object/Class
// addItemToCart : Function
// removeItemFromCart : Function
// removeItemFromCartAll : Function
// clearCart : Function
// countCart : Function
// totalCart : Function
// listCart : Function
// saveCart : Function
// loadCart : Function

// *** Declenchement des évenements  ***//
// fonction au clic on ajoute des produits au panier avec le bouton à la classe .add-to-cart (ajouter au panier)sur les produits***********
$('.add-to-cart').click(function (event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});
// *Remise a zéro du panier (fonction du bouton dans la modale)* //
//fonction au clic du bouton a la classe .clear-cart (vider le panier) le panier est vider par la fonction .clearCart et affiche un panier vide
$('.clear-cart').click(function () {
  shoppingCart.clearCart();
  displayCart();
});
// *Deploiment du panier dans la modal *//
// fonction de l'organisation dans le panier
function displayCart() {
  // variable ***********
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>"
      + "<td>" + cartArray[i].price + " € </td>"
      + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = "
      + "<td>" + cartArray[i].total + " €</td>"
      + "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}
// Retirer les produit (item) button au clic avec la croix à droite dans la modal 
$('.show-cart').on("click", ".delete-item", function (event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})
// gestion de la quantité au clic dans la modal avec le bouton -
// -1
$('.show-cart').on("click", ".minus-item", function (event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// gestion de la quantité au clic dans la modal avec le bouton +
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Affichage du changement du nombre de produit (Item) dans l'imput de la modal avec la classe input-count
$('.show-cart').on("change", ".item-count", function (event) {
  var name = $(this).data('name');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();

