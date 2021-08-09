
import '../styles/app.scss'

export default function Loader() {
	return (
		<div className="row">
			<div className="d-flex justify-content-center align-items-center text-center loader-container">
			<div className="spinner-grow spinner-grow-sm mx-3 dot" role="status">
			</div>
			<div className="spinner-grow spinner-grow-sm mx-3" role="status">
			</div>
			<div className="spinner-grow spinner-grow-sm mx-3 dot" role="status">
			</div>
			</div>

		</div>
	)
}