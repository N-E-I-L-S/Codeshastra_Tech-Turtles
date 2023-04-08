import Error from '../components/404-error-page.gif'
import './ErrorPage.css'

export default function ErrorPage() {
  return (
    <div className='errorpage'>
        <img className='err' src={Error} alt="" />
    </div>
  )
}
