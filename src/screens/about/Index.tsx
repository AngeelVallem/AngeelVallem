import { Link } from 'react-router-dom'
import '../../styles/about/index.scss'

import Image from "../../components/Image"
import me from '../../assets/me.jpg'
import SkillsSection from './Skills'
export default function About() {
	return (
		<>
			<section className="about-container flex-column flex-md-row justify-content-center align-items-center">
				<Image src={me} me shadow/>
				<div className='about-text my-3 my-md-0 mx-md-3'>
					<p>My name is <a rel="noopener noreferrer" target="_blank" className="links" href="https://www.linkedin.com/in/angel-valle-molina/">Angel Bernardo Valle Molina</a>, im a jr.
						full-stack developer im from Cuernavaca , currently living in Monterrey,
						have 1 year of experiences developing mobile and web applications,
						I am currently a freelanncer, looking for a job focused on front-end development,
						you can also check my <Link to='apps' className='links'>works</Link>, if you are interested <Link to='contact' className='links'>contact</Link> me :) </p>
					<a href="https://portfolio-angel-files.s3.us-east-2.amazonaws.com/CVeng.pdf"><button className='button-pdf bg-white'>Download resume</button></a>
				</div>
			</section>
			<SkillsSection />
		</>
	)
}