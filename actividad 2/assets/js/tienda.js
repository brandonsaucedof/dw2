const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}

});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);
      // ACTUALIZAR LA VISUALIZACIÓN DEL CARRITO
		showHTML();
	}
});

// FUNCION PARA MOSTRAR HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// LIMPIAR HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});
	//DEFINE EL DOLAR Y LA CANTIDAD TOTAL A PAGAR
	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};
const btnComprar = document.querySelector('.btn-comprar');

btnComprar.addEventListener('click', () => {
    const confirmarCompra = confirm('¿Está seguro de que desea realizar la compra?');

    if (confirmarCompra) {
        mostrarMensajeCompra();
    }
});

function mostrarMensajeCompra() {
    alert('¡Gracias por su compra!');
};
function mostrarMensajeCompra() {
    alert('¡Gracias por su compra!');
    limpiarCarrito();
}

function limpiarCarrito() {
    allProducts = []; // Vacía el array de productos
    showHTML(); // Actualiza la visualización del carrito
}

// Obtener los botones "Info"
const btnsInfo = document.querySelectorAll('.btn-info');

// Asociar eventos de clic a cada botón "Info"
btnsInfo.forEach(btn => {
    btn.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const modalId = `modal-${productName}`;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            
            // Mostrar el formulario correspondiente
            const formToShow = document.getElementById(`${productName}-form`);
            if (formToShow) {
                formToShow.classList.remove('hidden-form');
            }
            
            // Cerrar el modal al hacer clic fuera de él
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    });
});

// Obtener los botones de cierre de cada modal
const closeButtons = document.querySelectorAll('.close');

// Asociar eventos de clic a cada botón de cierre de modal
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.parentElement.parentElement;
        modal.style.display = 'none';
    });
});