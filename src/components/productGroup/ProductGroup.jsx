import React from 'react'
import DividerTitle from '../DividerTitle'
import ProductCard from '../productCard/ProductCard'
import { ProductsLabelWise } from '../../staticData'
import { TbLoader } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";

const ProductGroup = () => {
    return (
        <section className='section-space'>
            {
                ProductsLabelWise.length > 0 && (
                    <>
                        {ProductsLabelWise.map((productGrp, index) => (
                            <div className='product-grp-sec' key={index}>
                                <DividerTitle title={productGrp.label} side='left' />
                                <div className="product-list-wrap">
                                    {
                                        productGrp.products.length > 0 && (
                                            productGrp.products.map((product, index) => (
                                                <div key={index}>
                                                    <ProductCard data={product} />
                                                </div>
                                            ))
                                        )
                                    }
                                </div>
                            </div>
                        ))}
                    </>
                )
            }
            <div className="d-flex align-items-center gap-2 justify-content-between flex-wrap">
                <div></div>
                <button className="ctm-btn white-btn">
                    <TbLoader />Click to view more items...</button>
                <div className="go-to-cart-wrap">
                    <div>
                        <span>12 items</span>
                        <small>Added in cart</small>
                    </div>
                    <button className='ctm-btn white-btn'><TbShoppingBag />GO TO CART</button>
                </div>
            </div>
        </section>
    )
}

export default ProductGroup