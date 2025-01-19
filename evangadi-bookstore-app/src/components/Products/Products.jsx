import React, { Component } from "react";
import styles from './Products.module.css'
import Product from "../Product/Product";
import { bookData } from "../../constants/data";

export default class Products extends Component {
  render() {
    return (
      <div className={styles.container}>
        {bookData?.map((item) => {
          const {color, title, imgLink, description, price} = item
          return (
            <Product
              color={color}
              title={title}
              imgLink={imgLink}
              price={price}
              description={description}
            />
          );
        })}
      </div>
    );
  }
}
