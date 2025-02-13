import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Product = {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
  quantity: number;
};

class ProductRepository {
  // The C of CRUD - Create operation

  async create(product: Omit<Product, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into product (name, description, img, price, quantity) values (?, ?, ?, ?, ?)",
      [
        product.name,
        product.description,
        product.img,
        product.price,
        product.quantity,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from product where id = ?",
      [id],
    );

    if (rows.length === 0) {
      throw new Error(`Product with ID ${id} not found`);
    }

    // Return the first row of the result, which represents the item
    return rows[0] as Product;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from product");

    // Return the array of items
    return rows as Product[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new ProductRepository();
