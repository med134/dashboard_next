import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";

const ProductsPage = async ({ searchParams }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src={"https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Smart Iphone 15
              </div>
            </td>
            <td>
              simply dummy text of the printing.
            </td>
            <td>${123}</td>
            <td>12/2/2023</td>
            <td>inStock</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/1`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form>
                  <input type="hidden" name="id" />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src={"https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Smart Iphone 15
              </div>
            </td>
            <td>
              simply dummy text of the printing.
            </td>
            <td>${123}</td>
            <td>12/2/2023</td>
            <td>inStock</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/1`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form>
                  <input type="hidden" name="id" />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                   src={"https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Smart Iphone 15
              </div>
            </td>
            <td>
              simply dummy text of the printing.
            </td>
            <td>${123}</td>
            <td>12/2/2023</td>
            <td>inStock</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/1`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form>
                  <input type="hidden" name="id" />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
