import Slider from "react-slick";
import {
	isMobile,
	isTablet,
} from "react-device-detect";

import Image from "./Image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const detectBreakPoint = () => {
	if (isMobile) {
		return 2
	} else if (isTablet) {
		return 3
	} else {
		return 5
	}
}

const settings = {
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
	speed: 3000,
	autoplaySpeed: 100,
	slidesToScroll: 1,
	pauseOnHover: true,
	slidesToShow: detectBreakPoint()
};


const settingsCustom = {
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
	speed: 3000,
	autoplaySpeed: 100,
	slidesToScroll: 1,
	pauseOnHover: true,
	slidesToShow: 2
};

export default function SlickSlider(props: { items?: Array<String>, }) {


	if (props.items) {


		return (

			<Slider {...settingsCustom} className='mt-5'>
				{props.items.map((tec: any, i: number) =>
					<div className='mx-1' key={i}>
						<Image src={tec} size='100px' />
					</div>
				)
				}
			</Slider>
		);
	}


	return (
		<Slider {...settings} className='mt-5'>
			<div className='mx-1'>
				<Image size='100px' src='https://midu.dev/images/tags/react.png' />
			</div>
			<div className='mx-1'>
				<Image size='100px' src='https://i.imgur.com/scrcyJ3.png' />
				{/* vue */}
			</div>
			<div className='mx-1'>
				<Image src='https://midu.dev/images/tags/node.png' />
				{/* node */}
			</div>
			<div className='mx-1'>
				<Image src='https://camo.githubusercontent.com/57e9a91d810d54caf00deaff5905c3c4950feb6c425b986572b63ce2ee12e7db/68747470733a2f2f7777772e706e676b69742e636f6d2f706e672f66756c6c2f3232352d323235343639315f396b69622d333534783431352d756e6e616d65642d6d6f6e676f64622d6c6f676f2d7376672e706e67' />
				{/* mongo */}
			</div>
			<div className='mx-1'>
				<Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png' />
				{/* bs */}
			</div>
			<div className='mx-1'>
				<Image src='http://www.priteshgupta.com/wp-content/uploads/2011/10/CSS3-Logo.png' />
				{/* css */}
			</div>
			<div className='mx-1'>
				<Image src='https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png' />
				{/* styled */}
			</div>
			<div className='mx-1'>
				<Image src='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/288_Sass-512.png' />
				{/* sass */}
			</div>
			<div className='mx-1'>
				<Image src='https://image.flaticon.com/icons/png/512/1216/1216733.png' />
				{/* html */}
			</div>
			<div className='mx-1'>
				<Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' />
				{/* typescript */}
			</div>
			<div className='mx-1'>
				<Image src=' https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' />
				{/* git */}
			</div>
			<div className='mx-1'>
				<Image src='https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png' />
				{/* react native */}
			</div>
			<div className='mx-1'>
				<Image src='https://www.joykal.com/wp-content/uploads/2019/09/jquery.png' />
				{/* Jquery */}
			</div>
		</Slider>
	);
}


