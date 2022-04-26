import React, { Component } from 'react';
import axios from 'axios';
import clientConfig from '../client-config';

class Productslist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false, //set True while fetching Data
            products: [], 
            cardproducts: [], //products added to Shopping card
            total: 0, 
            totaltax: 0
        };

    }
    // Before rendering
    componentDidMount() {
        const website = clientConfig.siteUrl;
        //set Loding True to get data
        this.setState({ loading: true }, () => { 
            axios.get(website)
                .then(res => {
                    this.setState({ loading: false, products: res.data }) //save response in State
                }).catch(error => {
                    console.log(error);
                });
        });
    }

    //add items to card
    sendtocard(product) {
        this.setState((prevState) => {
            return {
                cardproducts: prevState.cardproducts.concat(product),
                total: this.state.total + Number(product.acf.totalprice),
                totaltax: this.state.totaltax + Number(product.acf.taxprices)

            };
        });
    }
    //Empty Shopping card
    deleteItem() {
        this.setState({
            cardproducts: [],
            total: 0,
            totaltax: 0
        });
    }


    render() {
        /**
         * Map each Product in Card with Prices
         */
        const products = this.state.products.map((product) => {
            return (
                <div key={product.id} >
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <img className='cardimg' alt="" src={product.acf.product_picture} />
                        </div>
                        <div className="uk-card-body products">
                            <p>{product.title.rendered}</p>
                            <p>Price incl. Tax {product.acf.totalprice}</p>
                        </div>
                        <div className="uk-card-footer products">
                            <button id={product.id} onClick={() => this.sendtocard(product)} className="uk-button uk-button-text" >Add to Card</button>
                        </div>
                    </div>
                </div>
            );
        });

        /**
         * Map all Products saved in shoppingcard
         */
        const shoppingcard = this.state.cardproducts.map((cardproduct) => {
            return (
                <div key={cardproduct.id}>
                    Product Name: {cardproduct.title.rendered} | Price : {cardproduct.acf.totalprice}
                </div>
            );
        });

        return (
            <div className='content'>
                <div class="uk-grid" data-uk-grid>
                    <div>
                        <div className='shoppingcard'>
                            <div>
                                <button onClick={() => this.deleteItem()} className="uk-button uk-button-text remove" >Remove Products from shopping Card</button>
                            </div>
                            <div>
                                {shoppingcard}
                            </div>
                            <div>
                                Sales Taxes: {this.state.totaltax.toFixed(2)} | Total: {this.state.total.toFixed(2)}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='uk-grid-match uk-child-width-1-4@s uk-text-center products-card' data-uk-grid>
                            {products}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Productslist;