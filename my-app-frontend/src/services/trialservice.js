import axios from 'axios'

const Products_Rest_url_getProducts = 'http://localhost:8080/api/product';

const Products_Rest_url_getProductImage = 'http://localhost:8080/api/product/image'

const Products_Rest_url_getProductsBySeller = 'http://localhost:8080/api/product/seller';

const Category_Rest_url_getcategory = 'http://localhost:8080/api/category';

const Category_Rest_url_addCategory = 'http://localhost:8080/api/category';

const Products_Rest_url_getProductsByCategory = 'http://localhost:8080/api/product/category';

const Bid_Rest_url_postProductsBid = 'http://localhost:8080/api/bid';

const Bid_Rest_url_getAuctionBidByProduct = 'http://localhost:8080/api/bid/product';

const Bid_Rest_url_getAuctionsByProduct = 'http://localhost:8080.api/bid/getallbyprod';

const Bid_Rest_url_getAuctionByProductAndBider = 'http://localhost:8080/api/bid/productandbider';

const Winner_Rest_Url_getWinnerByProduct = 'http://localhost:8080/api/winner/product';

const Winner_Rest_Url_createWinner = 'http://localhost:8080/api/winner';

const Product_Rest_Url_soldProduct = 'http://localhost:8080/api/product/sold';

const Winner_Rest_Url_getAllWinners = 'http://localhost:8080/api/winner';

const Winner_Rest_Url_getAllWinnersByBuyerId = 'http://localhost:8080/api/winner/buyer';

class ProductService {

    getProducts(){
        return axios.get(Products_Rest_url_getProducts);
    }
    getProductImage(img){
        return axios.get(Products_Rest_url_getProductImage + "/" + img);
    }
    getCategory(){
        return axios.get(Category_Rest_url_getcategory);
    }
    createCategory(category){
        return axios.post(Category_Rest_url_addCategory,category);
    }
    getCategoryById(cat_id){
        return axios.get(Category_Rest_url_getcategory + "/" + cat_id);
    }
    createProduct(product){
        return axios.post(Products_Rest_url_getProducts, product);
    }
    uploadProductImg(picture){
        return axios.post(Products_Rest_url_getProductImage,picture);
    }
    getProductById(product_id){
        return axios.get(Products_Rest_url_getProducts + "/" + product_id);
    }
    getProductBySeller(seller_id){
        return axios.get(Products_Rest_url_getProductsBySeller + "/" + seller_id);
    }
    getProductByCategory(cat_id){
        return axios.get(Products_Rest_url_getProductsByCategory + "/" + cat_id);
    }
    createProductBid(auction){
        return axios.post(Bid_Rest_url_postProductsBid,auction);
    }
    getBidbyProductId(product_id){
        return axios.get(Bid_Rest_url_getAuctionBidByProduct + "/" + product_id);
    }
    getBidsByProduct(product_id){
        return axios.get(Bid_Rest_url_getAuctionsByProduct + "/" + product_id);
    }
    getAuctionByProductAndBider(product_id,bider_id){
        return axios.get(Bid_Rest_url_getAuctionByProductAndBider + "/" + product_id + "/" + bider_id);
    }
    getWinnerByProuct(product_id){
        return axios.get(Winner_Rest_Url_getWinnerByProduct + "/" + product_id);
    }
    createWinner(winner){
        return axios.post(Winner_Rest_Url_createWinner,winner);
    }
    soldProduct(product_id){
        return axios.get(Product_Rest_Url_soldProduct + "/" + product_id);
    }
    getAllWinners(){
        return axios.get(Winner_Rest_Url_getAllWinners);
    }
    getWinnerByWinnerId(winner_id){
        return axios.get(Winner_Rest_Url_getAllWinners + "/" + winner_id);
    }
    getAllWinnerByBuyerId(buyer_id){
        return axios.get(Winner_Rest_Url_getAllWinnersByBuyerId + "/" + buyer_id);
    }
}

export default new ProductService();