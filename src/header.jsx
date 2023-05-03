function Header() {
	return (
		<>
			<nav className=' h-[136px] bg-red-400 '>
				<div className=' mx-auto flex flex-row-reverse  bg-grey-200 h-[36px] '>
					<span className='flex justify-center mr-20 font-semibold bg-grey-50 text-grey-200'>
						<p className='p-2 '>Track Order</p>
						<p className='p-2'>|</p>
						<p className='p-2 '>Register</p>
						<p className='p-2'>|</p>
						<p className='p-2 '>Sign in</p>
					</span>
				</div>
				<div className='px-[32px] h-[100px] mx-auto flex items-center bg-grey-50'>
					<div className='flex w-full justify-between items-center h-[40px]'>
						<span className='flex justify-center h-[40px] '>
							<img className="object-cover w-[40px] h-[40px]" src='/public/assets/logo.png' height={40} width={36}></img>
						</span>
						<div className='text-grey-200 gap-x-3 flex h-[24px] items-center justify-center duration-300'>
							<span className="flex flex-col dropdown">
							<a className=' font-semibold  text-grey-900 ' href=''>
								Home
							</a>
							<span className="dropdown dropdown-menu absolute pr-10 pl-2 z-50 flex flex-col my-5 opacity-0 bg-grey-50 duration:150;  ">
								<a className="p-2 h-10 hover:text-grey-800 it" href="">Category 1</a>
								<a className="p-2 h-10 hover:text-grey-800" href="">Category 1</a>
								<a className="p-2 h-10 hover:text-grey-800" href="">Category 1</a>
								<a className="p-2 h-10 hover:text-grey-800" href="">Category 1</a>
							</span>
							</span>
							<span>

							<a className='hover:text-grey-900 duration-200' href=''>
								New Arrivals
							</a>
							</span>
							<a className='hover:text-grey-900 duration-200' href=''>
								Men{" "}
							</a>
							<a className='hover:text-grey-900 duration-200' href=''>
								Women
							</a>
							<a className='hover:text-grey-900 duration-200' href=''>
								Kids
							</a>
							<a className='hover:text-grey-900 duration-200' href=''>
								Sale
							</a>
							<a className='hover:text-grey-900 duration-200' href=''>
								Blogs
							</a>
						</div>
						<div className='grid grid-cols-1 grid-flow-col gap-4'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
									stroke='#9D9D9D'
								/>
								<path d='M22 22L20 20' stroke='#9D9D9D' />
							</svg>
							<svg
								width='27'
								height='26'
								viewBox='0 0 27 26'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M18.19 19.75H7.53999C6.54999 19.75 5.59999 19.33 4.92999 18.6C4.25999 17.87 3.92 16.89 4 15.9L4.83 5.94C4.86 5.63 4.74999 5.33001 4.53999 5.10001C4.32999 4.87001 4.04 4.75 3.73 4.75H2C1.59 4.75 1.25 4.41 1.25 4C1.25 3.59 1.59 3.25 2 3.25H3.74001C4.47001 3.25 5.15999 3.56 5.64999 4.09C5.91999 4.39 6.12 4.74 6.23 5.13H18.72C19.73 5.13 20.66 5.53 21.34 6.25C22.01 6.98 22.35 7.93 22.27 8.94L21.73 16.44C21.62 18.27 20.02 19.75 18.19 19.75ZM6.28 6.62L5.5 16.02C5.45 16.6 5.64 17.15 6.03 17.58C6.42 18.01 6.95999 18.24 7.53999 18.24H18.19C19.23 18.24 20.17 17.36 20.25 16.32L20.79 8.82001C20.83 8.23001 20.64 7.67001 20.25 7.26001C19.86 6.84001 19.32 6.60999 18.73 6.60999H6.28V6.62Z'
									fill='#9D9D9D'
								/>
								<path
									d='M16.25 24.75C15.15 24.75 14.25 23.85 14.25 22.75C14.25 21.65 15.15 20.75 16.25 20.75C17.35 20.75 18.25 21.65 18.25 22.75C18.25 23.85 17.35 24.75 16.25 24.75ZM16.25 22.25C15.97 22.25 15.75 22.47 15.75 22.75C15.75 23.03 15.97 23.25 16.25 23.25C16.53 23.25 16.75 23.03 16.75 22.75C16.75 22.47 16.53 22.25 16.25 22.25Z'
									fill='#9D9D9D'
								/>
								<path
									d='M8.25 24.75C7.15 24.75 6.25 23.85 6.25 22.75C6.25 21.65 7.15 20.75 8.25 20.75C9.35 20.75 10.25 21.65 10.25 22.75C10.25 23.85 9.35 24.75 8.25 24.75ZM8.25 22.25C7.97 22.25 7.75 22.47 7.75 22.75C7.75 23.03 7.97 23.25 8.25 23.25C8.53 23.25 8.75 23.03 8.75 22.75C8.75 22.47 8.53 22.25 8.25 22.25Z'
									fill='#9D9D9D'
								/>
								<path
									d='M21 10.75H9C8.59 10.75 8.25 10.41 8.25 10C8.25 9.59 8.59 9.25 9 9.25H21C21.41 9.25 21.75 9.59 21.75 10C21.75 10.41 21.41 10.75 21 10.75Z'
									fill='#9D9D9D'
								/>
								<circle cx='21' cy='6' r='6' fill='#111111' />
								<path d='M20 2H22V10H20.8721V3.1307H20V2Z' fill='white' />
							</svg>
						</div>
					</div>
				</div>
			</nav>
			
		</>
	);
}

export default Header;
