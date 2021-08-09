
import Image from '../../components/Image'
import design from '../../assets/design.svg'
import front from '../../assets/front.svg'
import back from '../../assets/back.svg'

import '../../styles/about/knw.scss'


export default function KnowledgeSection () {
	return (
		<section className='my-5 d-flex flex-column justify-content-center align-items-center flex-md-row'>
			<div className="skill-card shadow-sm  align-items-center d-flex flex-column">
				<Image src={design} size='50px' className='mx-auto'/>
				<h2>Design</h2>
			</div>
			<div className="skill-card shadow-sm  align-items-center d-flex flex-column">
				<Image src={front} size='50px' className='mx-auto'/>
				<h2>Front-end</h2>
			</div>
			<div className="skill-card shadow-sm  align-items-center d-flex flex-column">
				<Image src={back} size='50px' className='mx-auto'/>
				<h2>Back-end</h2>
			</div>
		</section>
	)
}