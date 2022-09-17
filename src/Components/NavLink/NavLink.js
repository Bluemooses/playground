function NavLink({...props}){

    return(
        <a href={props.href} target={props.target} onClick={props.onClick}>
            {props.children}
        </a>
    )
}

export default NavLink