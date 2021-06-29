import React, {Component} from "react";

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Error from "../error/error";
import host from "../../services/host";
import Spinner from "../spinner/spinner";
import WithServices from "../hoc/with_services";
import GetTokenFromLocalStorage from "../../services/token_from_localstorage";
import {productsLoaded, productsRequested, productsError, setCartCount} from "../../redux/action";

import "./card.scss";


/* Карточки товаров */

class Products extends Component {

    componentDidMount() {
        const {productsLoaded, productsRequested, productsError, getProducts} = this.props;
        productsRequested();
        getProducts().then(products => productsLoaded(products)).catch(error => productsError);
    }

    addToCart = (productId) => {
        /* Добавление товара в корзину */

        const {Services, userIsAuthenticated, setCartCount, cartCount} = this.props;
        Services.addNewProductInCart(productId, GetTokenFromLocalStorage())
            .then(res => {
                alert('Товар добавлен в корзину!');
                setCartCount(cartCount + 1);
            })
            .catch(error => {
                if (!userIsAuthenticated) {
                    alert('Необходимо авторизироваться!');
                } else {
                    alert('Товар уже в корзине!');
                }
            });
    }

    render() {

        const {products, loading, error} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/>
        }

        return (
            <>
                <div className="products__body">
                    {
                        products.map(({title, id, image, price, slug}) => (
                            <div className="card" key={id}>
                                <div className="card__title">{title}</div>
                                <Link to={`/products/${slug}`}>
                                    <img className="card__image" src={host + image} alt={title}/>
                                </Link>
                                <div className="card__content">
                                    <div className="card__price">Цена: {price} руб.</div>
                                </div>
                                <div className="products__action">
                                    <button className="buttons buttons__success" onClick={() => this.addToCart(id)}>
                                        Добавить в корзину
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        loading: state.loading,
        error: state.error,
        cartCount: state.cartCount,
        userIsAuthenticated: state.userIsAuthenticated,
    };
};

const mapDispatchToProps = {
    productsLoaded,
    productsRequested,
    productsError,
    setCartCount,
};

export default WithServices()(connect(mapStateToProps, mapDispatchToProps)(Products));
