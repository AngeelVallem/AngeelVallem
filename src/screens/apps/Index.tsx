import { useEffect, useState } from "react"
import { getWorks } from "../../services"

import WorkCard from "../../components/WorkCard"
import Loader from "../../components/Loader"
import '../../styles/apps/card.scss'


export default function App() {
	const [works, setWorks] = useState<any>(null)

	useEffect(() => {
		async function getAllWorks() {
			const res = await getWorks()
			setWorks(res)
		}
		getAllWorks()
	}, [])

	if (!works) {

		return <Loader/>
	}
	console.log(works);

	return (
		<div className="row">
			<div className="col-12">
				<h1 className='text-center my-4'>My work</h1>
			</div>
			{works.map((work: any, i: number) => <WorkCard key={i} src={work.image} title={work.title} open to={`/apps/${work.routerLink}`} ghUrl={work.github} appUrl={work.appUrl} type={work.type} />)}
		</div>


	)
}
