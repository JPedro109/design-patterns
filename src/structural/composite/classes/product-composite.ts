import { ProductComponent } from "./product-component";

export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = [];
  
    add(...products: ProductComponent[]): void {
      products.forEach((product) => this.children.push(product));
    }
  
    remove(product: ProductComponent): void {
      const productIndex = this.children.indexOf(product);
      if (productIndex !== -1) this.children.splice(productIndex, 1);
    }
  
    getPrice(): number {
      return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
    }
}