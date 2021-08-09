import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Image from '../../components/Image'
import SlickSlider from '../../components/SlickSlider'
import HeroItem from '../../components/HeroItem'
import gh from "../../assets/gh.svg"
import page from "../../assets/page.svg"
import Loader from '../../components/Loader'
import { getWorkByLink } from '../../services'
import '../../styles/details/index.scss'

export default function Details() {
	const [work, setWork] = useState<any>(null)
	const { id }: any = useParams()


	useEffect(() => {
		async function getWork() {
			const res = await getWorkByLink(id)
			setWork(res[0])
		}
		getWork()
	}, [])


	if (!work) {
		return <Loader/>
	}



	return (
		<div className="row">

			<div className="col-12 text-center my-md-5 py-5">
				<div className="d-flex flex-column">
					<a href={work.appUrl} className='title'>{work.title}</a>
					<small className='mx-2 sub-title'>{work.type}</small>
				</div>
			</div>

			<div className="col-12">
				<Image src={work.portrait} width='100%' height='158px' className='portrait' />
			</div>

			<div className="col-4 offset-4  my-5 d-flex text-center">
				<div className="d-flex flex-column">
				<p className=''>{work.description}</p> 
					<div>
					{work.inspired && <> <small>inspired by</small> <a href={work.inspired.url} className='inspired'> {work.inspired.name}</a> </>}
					</div>
				</div>
			</div>


			<div className="col-12 col-md-6 my-5">
				<h4 className='text-center'>Technologies</h4>
				<SlickSlider items={work.technologies} />
			</div>
			<div className="col-12 col-md-6 my-5">
				<h4 className='text-center'>Source</h4>
				<div className="d-flex justify-content-center mt-5">
					<HeroItem text='github' src={gh} className='mx-3' imgSize='50px' anchor url={work.github} />
					{work.type === 'Mobile' ? '' : <HeroItem text='page' src={page} imgSize='50px' anchor url={work.appUrl} />}
				</div>
			</div>
		</div>
	)
}