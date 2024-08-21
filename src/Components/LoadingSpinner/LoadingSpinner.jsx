import './LoadingSpinner.css'

//ASSETS
import loadingSpinnerGif from '../../assets/Gifs/loading-spinner.gif'




function LoadingSpinner() {

    return (
        <div className='d-flex al-center jc-center Loading-overlay-container'>
            <img src={loadingSpinnerGif} alt="Loading" height="80px"/>
        </div>


    )
}

export default LoadingSpinner