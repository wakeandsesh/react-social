

const Commentary = (props) => {
    return (
        <div className="commentary" style={{display: 'flex', alignItems: 'center', marginBottom: '25px'}}>
            <div className="commentary__avatar" style={{width: '70px', height: '70px', paddingRight: '25px'}}>
                <img style={{width: '100%', height: '100%', borderRadius: '50%'}} src={props.image} alt="" />
            </div>
            <div className="commentary__text">
                {props.message}
            </div>
        </div>
    )
}

export default Commentary;