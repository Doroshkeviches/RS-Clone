export const testTemplate = `
  <section class="basket">
  <div class="product">
    <div class="product__control">
      <h2 class="product__control-title">Product In Cart</h2>
      <div class="product__control_items">
        <h4 class="control__items-title">Items:</h4>
        <p class="control__items-value">3</p>
      </div>
      <div class="product__control_page">
        <button class="control_page-btn"> &#60; </button>
        <p class="control_page-value">1</p>
        <button class="control_page-btn"> > </button>
      </div>
    </div>
    <app-cart-items></app-cart-items>
  </div>
  <div class="sum">
    <h2 class="sum-title">Summary</h2>
    <div class="sum__products">
      <h3 class="products-title">Products:</h3>
      <p class="products-amount">0</p>
    </div>
    <div class="sum__price">
      <h3 class="price-title">Total:</h3>
      <p class="price-amount">0</p>
    </div>
    <div class="promo__wraper">
      <input type="text" class="promo" placeholder="Enter promo code">
    </div>
    <p class="promo-test">Promo for test: 'RS', 'EPM'</p>
    <button class="buy">Buy now</button>
  </div>
</section>`;
