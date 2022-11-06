import './style.css'

const Link = (props) => (
    <a className={props.className} href={props.href}>{props.text}</a>
)

export default Link;