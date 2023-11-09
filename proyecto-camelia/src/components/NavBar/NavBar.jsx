import CartWidget from "../CartWidget/CartWidget"

const  NavBar = () => {
    return (
        <nav>
            <h3>Camelia</h3>
            <div>
                <button>Aceites</button>
                <button>Inciensos</button>
                <button>Velas</button>
                <button>Adornos</button>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default NavBar