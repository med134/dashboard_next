import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            fill
          />
        </div>
        smart phone 15
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value={1} />
          <label>Title</label>
          <input type="text" name="title" placeholder={"product.title"} />
          <label>Price</label>
          <input type="number" name="price" placeholder={"15"} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={"inStock"} />
          <label>Color</label>
          <input type="text" name="color" placeholder={"color"} />
          <label>Size</label>
          <textarea type="text" name="size" placeholder={"size"} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={"product.desc"}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
