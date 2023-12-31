import imgPlaceholder from '../assets/img/img0.jpg';

export function ImageFileInput(props) {

    return (
        <span>
            <div className="mg-t-20 mg-sm-t-0 pointer" style={{position: 'relative', maxWidth: "80px"}}>
                <input type='file' onChange={e => props.handleFileChange(e, e.target.files[0])} accept='image/*'
                style={{top: 0, left: 0}} role="button" className="position-absolute w-100 h-100 fade"/>
                <img src={props.img_url !== '' ? props.img_url : imgPlaceholder} 
                className="img-fluid rounded" alt=""/>
            </div>
        </span>
    )
}