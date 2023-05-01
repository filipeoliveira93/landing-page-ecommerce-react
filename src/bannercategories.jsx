function Bannercategories() {
	const categories = [
		{ 
			id: 1,
			name: 'For Men',
			description: 'Clothing Bundle Deal',
			cta: 'View Deal',
			img: '/src/assets/png/formen.png'
		}, 
		{
			id:2,
			name: 'For Woman',
			description: 'Clothing Bundle Deal',
			cta: 'View Deal',
			img: '/src/assets/png/forwoman.png'
		},
		{
			id:3,
			name: 'Accessories',
			description: 'Handle Bag Collection',
			cta: 'View Deal',
			img: '/src/assets/png/accessories.png'
		}

	]

	const itemlist = categories.map(item =>(
		<div key={item.id} className=" bg-center bg-cover flex flex-col pt-[145px] w-[407px] h-[267px]" style={{backgroundImage: `url(${item.img})`}}>
			<p className="font-semibold text-[16px]">{item.name}</p>
			<p className="font-semibold text-[16px]">{item.description}</p>
			<a className=" font-medium text-[13px]">{item.cta}</a>
		</div>
	)) 

	return (
		<>
			<div className=" flex flex-row justify-center gap-5 my-5">
			{itemlist}
			</div>
		</>
	);
}

<style>
	.button
</style>

export default Bannercategories;
