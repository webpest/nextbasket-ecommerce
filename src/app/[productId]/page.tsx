import React from "react";

interface Props {
  params: {
    productId: string;
  };
}

function ProductPage({ params: { productId } }: Props) {
  return <div>ProductPage: {productId}</div>;
}

export default ProductPage;
