import React from 'react';
import  {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { MdShoppingBasket} from 'react-icons/md'

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png'

function Header({cart , cartSize}) {

  return (
    <Container>
        <Link to="/">
            <img src={logo} alt="StoreShoes"/> 
        </Link>

        <Cart to="/cart">
            <div>
                <strong>Meu carrinho</strong>
                <span>{cartSize} itens</span>
            </div>
            <MdShoppingBasket size={36} color="#fff" />
        </Cart>
    </Container>
  );
}

export default connect(state => ({
  cart: state.cart,
  cartSize: state.cart.length
}))(Header);
