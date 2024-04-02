import { Link } from 'react-router-dom'

export default function Button({ href, icon, classes, text }) {
    
    const classesSplit = String(classes).replaceAll(',', ' ')

    return (
        <Link to={href} target='_blank' className={`btn ${classesSplit}`}><span>{text}</span> {icon && (<img src={icon[0]} alt={icon[1]} />)}</Link>
        /* <a href={href} target="_blank" className={`btn ${classesSplit}`}><span>{text}</span> {icon && (<img src={icon[0]} alt={icon[1]} />)}</a> */
    )
}