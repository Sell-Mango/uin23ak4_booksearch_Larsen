
export default function Button({ href, icon, classes, text }) {
    

    const classesSplit = String(classes).replaceAll(',', ' ')

return (
    <a href={href} className={`btn ${classesSplit}`}><span>{text}</span> {icon && (<img src={icon[0]} alt={icon[1]} />)}</a>
)
}