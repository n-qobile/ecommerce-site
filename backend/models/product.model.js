import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
      default:
        "https://res.cloudinary.com/dibdgrnhf/image/upload/v123456789/default-product.jpg",
    },
    category: {
      type: String,
      required: true,
      enum: [
        "jeans",
        "t-shirts",
        "shoes",
        "glasses",
        "jackets",
        "suits",
        "bags",
      ],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
