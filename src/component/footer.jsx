import '../App.css'

function Footer(props){
    return(
        <div className='block'>
           <span className="icon">{props.icon}</span> 
           <h4 >{props.heading}</h4>
           <p>{props.paragraph}</p>
        </div>
    )
}


export default Footer;