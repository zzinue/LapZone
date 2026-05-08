export default function Header({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
}) {
  console.log(cart.map((computer) => computer.name));
  const isEmpty = () => cart.length === 0;
  const cartTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  //  mi cosecha
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./img/lapzone2.png"
                alt="imagen logo"
                style={{ width: "60px", height: "60px" }}
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-3 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="./img/carrito.png
                
                "
                alt="imagen carrito"
              />
              <div id="carrito" className="bg-white p-3">
                {isEmpty() ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((computer) => (
                        <tr key={computer.id}>
                          <td>
                            {totalItems > 0 && (
                              <span className="cart-badge">{totalItems}</span>
                            )}
                            <img
                              className="img-fluid"
                              src={`/img/${computer.image}.jpg`}
                              alt="imagen guitarra"
                            />
                          </td>
                          <td>{computer.name}</td>
                          <td className="fw-bold">${computer.price}</td>
                          <td className="flex align-items-start gap-4">
                            <button
                              type="button"
                              className="btn btn-dark"
                              onClick={() => decreaseQuantity(computer.id)}
                            >
                              -
                            </button>
                            {computer.quantity}
                            <button
                              type="button"
                              className="btn btn-dark"
                              onClick={() => increaseQuantity(computer.id)}
                            >
                              +
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              type="button"
                              onClick={() => removeFromCart(computer)}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                <p className="text-end">
                  Total pagar: <span className="fwbold">{cartTotal()}</span>
                </p>
                <button
                  className="btn btn-dark w-100 mt-3 p-2"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
