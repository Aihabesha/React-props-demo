import React, { Component } from "react";
import styles from "./Product.module.css";
export default class Product extends Component {
  render() {
    const { color, title, imgLink, price, description } = this.props;
    return (
      <>
        <div className={`${styles["product-card"]}`}>
          {/* <!-- product title --> */}
          <div className={`${styles["card-header"]} ${styles[color]}`}>
            <h2 className={styles["product-title"]}>{title}</h2>
          </div>

          {/* <!-- product image --> */}
          <div className={styles["product-image"]}>
            <img src={imgLink} alt={title} />
          </div>

          {/* Conditional rendering */}
          {/* {text && (
            <div>
              <p>{text}</p>
            </div>
          )} */}

          {/* <!-- product price and description --> */}
          <div className={styles["product-content"]}>
            <h3 className={styles["product-price"]}>{price}</h3>
            <p className={styles["product-description"]}>{description}</p>
          </div>

          {/* <!-- Add to cart --> */}
          <div className={styles["add-to-cart"]}>
            <button className={styles.btn} type="submit">
              Add to cart
            </button>
          </div>
        </div>
      </>
    );
  }
}
