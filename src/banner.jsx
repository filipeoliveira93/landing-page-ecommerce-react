import "./style.css";

function Banner() {
	return (
		<section className=' mx-auto flex items-center justify-center h-[667px] bg-red-500'>
			<div className='flex justify-center relative  flex-col items-center '>
				<img
					className='w-full h-[667px]'
					src='/public/assets/png/bannerprincipal.png'
					alt=''
				/>
				<div className=' absolute left-[80px] items-start flex-col h-10 flex justify-start font-light'>
					<p className='font-normal'>Premium High Waisted</p>
					<h2 className='bg-slate-50/0 text-[48px] flex-wrap w-[20ch] font-normal '>
						Women Tracks NOW Avaliable
					</h2>
					<a className=' button bg-slate-50/0'>shop now</a>
				</div>
			</div>
		</section>
	);
}

export default Banner;
