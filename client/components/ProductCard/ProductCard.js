import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { bindActionCreators } from 'redux';
import { addToCart } from '../../redux/cartActions';

import './ProductCard.scss';

import Container from 'react-bootstrap/Container';
import GoBackButon from '../GoBackButton/GoBackButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductCard = ({ movies, router, addToCart, products }) => {
  const productId = +router.query.product_id;
  const product = movies.find(movie => movie.id === productId);
  const productInCart = products.find(
    cartElement => productId === cartElement.product.id
  );

  return (
    <Container>
      <GoBackButon />
      <div className="product-card">
        <Row>
          <Col xl="5">
            <div className="product-card__image">
              <img
                src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
                alt={product.original_title}
              />
            </div>
          </Col>
          <Col xl="7">
            <div className="product-card__product-decription-wrapper">
              <div className="product-card__product-description">
                <h2 className="product-card__title">
                  {product.original_title}
                </h2>
                <p className="product-card__desc-element">
                  Gatunek:{' '}
                  {Array.isArray(product.genres_data)
                    ? product.genres_data.join(', ')
                    : product.genres_data}
                </p>
                <p className="product-card__desc-element">
                  Rok wydania: {product.release_year}
                </p>
                <p className="product-card__desc-element">
                  Czas trwania: {product.time_str}
                </p>
                <p className="product-card__overview">{product.overview}</p>
                <p className="product-card__price">Cena: {product.price} zł</p>
              </div>
              <button
                className="product-card__button"
                onClick={
                  productInCart
                    ? null
                    : () => {
                        addToCart(product);
                      }
                }
              >
                Dodaj do koszyka
              </button>
              {productInCart ? (
                <span className="product-card__cart-info">
                  Film został dodany do koszyka
                </span>
              ) : null}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  products: state.cart.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addToCart }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductCard)
);