import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.jsx";
import Banner from "./banner.jsx";
import Bannercategories from "./bannercategories.jsx";
import TrendingProducts from "./trendingproducts.jsx";
import BannerShirts from "./bannershirts.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode clasname='flex'>
		<Header />
		<Banner />
		<Bannercategories />
		<TrendingProducts />
		<BannerShirts />
	</React.StrictMode>
);
