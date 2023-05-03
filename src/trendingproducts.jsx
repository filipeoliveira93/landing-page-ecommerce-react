import { useState, useEffect } from "react";

const products = [
	{
		name: "Parka TOM LIVER",
		category: "categoria-01",
		rs: 'Rs: 1440',
		img: "/public/assets/png/trending-products/image.png",
	},
	{
		name: "Parka TOM LIVER",
		category: "categoria-01",
		rs: 'Rs: 1440',
		img: "/public/assets/png/trending-products/image-1.png",
	},
	{
		name: "Parka TOM LIVER",
		category: "categoria-01",
		rs: 'Rs: 1440',
		img: "public/assets/png/trending-products/image-2.png",
	},
	{
		name: "Parka TOM LIVER",
		category: "categoria-02",
		rs: 'Rs: 1440',
		img: "public/assets/png/trending-products/image-3.png",
	},
	{
		name: "Parka TOM LIVER",
		category: "categoria-02",
		rs: 'Rs: 1440',
		img: "public/assets/png/trending-products/image-4.png",
	},
	{
		name: "Parka TOM LIVER",
		category: "categoria-03",
		rs: 'Rs: 1440',
		img: "public/assets/png/trending-products/image-5.png",
	},
	{
		name: "Product-08",
		category: "categoria-03",
		rs: 'Rs: 1440',
		img: "public/assets/png/trending-products/image-6.png",
	},
];
function TrendingProducts() {
	//chama o usestate para atribuir um estado atualizável a uma variável
	let [selectedCategory, setSelectedCategory] = useState("all");
	//atualiza a categoria quando o botão é
	const handleTabClick = (category) => {
		setSelectedCategory(category);
	};
	// se nada for selecinado usa o estado padrão "all", caso não, mostra a categoria selecioanda
	const filteredProducts =
		selectedCategory === "all"
			? products
			: products.filter((product) => product.category === selectedCategory);


	useEffect(() => {
		const categoryselector = document.querySelectorAll(".category-selector button");
		console.log(categoryselector)
		categoryselector.forEach((button) => {
			button.addEventListener("click", () => {
				handleTabClick(button.dataset.category);
			});
		});
		return () => {
			categoryselector.forEach((button) => {
				button.removeEventListener("click", () => {
					handleTabClick(button.dataset.category);
				});
			});
		};
	}, []);

	return (
		<div className="w-[1260px] h-[1167px] mx-auto grid-cols-1 ">
			<h3 className="font- text-[53px] mx-auto text-center">Trending Product</h3>
			<div className='category-selector flex items-center justify-center gap-2 p-5 mx-auto'>
				<button className="py-3 px-6 my-4 bg-grey-900 text-grey-50" data-category='all'>all products</button>
				<button className="py-3 px-6 my-4 bg-grey-50" data-category='categoria-01'>Categoria 02</button>
				<button className="py-3 px-6 my-4 bg-grey-50" data-category='categoria-02'>Categoria 03</button>
				<button className="py-3 px-6 my-4 bg-grey-50" data-category='categoria-03'>Categoria 04</button>
			</div>
			<div className="px-auto grid grid-cols-4 gap-5">
				{filteredProducts.map((product) => (
					<div key={product.name}						
						className='  duration-150'>					
					<img className="w-[300px] h-[383px]" src={product.img} ></img>
					<p className="font-medium text-[20px] text-grey-600 mt-[20px] mb-[6px]">{product.name}</p>
					<p className="font-medium text=[16px]">{product.rs}</p>
					</div>
				))}
			</div>
		</div>
	);
}
export default TrendingProducts;
