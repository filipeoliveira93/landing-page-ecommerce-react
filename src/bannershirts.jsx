function BannerShirts() {
	const categories = [
		{
			id: 1,
			name: "Shorts",
			description: "t-shirt for Men's",
			cta: "View Deal",
			img: "/public/assets/png/shirts/tshirtmen.png",
		},
		{
			id: 2,
			name: "Full Sleeve",
			description: "Shirt for women's",
			cta: "View Deal",
			img: "/public/assets/png/shirts/shirtwoman.png",
		},
	];

	const itemlist = categories.map((item) => (
		<div
			key={item.id}
			className=' bg-center bg-cover flex flex-col pt-[145px] w-[620px] h-[344px]'
			style={{ backgroundImage: `url(${item.img})` }}>
			<p className='font-semibold text-[24px] w-[198px] ml-[12px]'>{item.name}</p>
			<p className='font-semibold text-[24px] w-[198px] ml-[12px]'>
				{item.description}
			</p>
			<a className=' font-medium text-[13px] ml-[12px]'>{item.cta}</a>
		</div>
	));

	return (
		<>
			<div className=' flex flex-row justify-center gap-5 my-5'>{itemlist}</div>
		</>
	);
}

<style>.button</style>;

export default BannerShirts;
