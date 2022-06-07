import preloader from '../../images/loading.gif'

const Preloader = () => {
    return (
        <img style={{display: 'block', width: '50px', height: '50px'}} alt='Loading...' src={preloader}/>
    )
}

export default Preloader;