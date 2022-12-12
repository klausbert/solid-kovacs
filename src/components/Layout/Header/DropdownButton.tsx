import { createMemo, createSignal } from 'solid-js'


const classTypes = {
    nav: { group: 'nav-item dropdown', button: 'nav-link dropdown-toggle' },
    ham: { group: 'btn-group',         button: 'btn btn-lg' },
    hup: { group: 'btn-group dropup',  button: '' }
}


export const styles = {
    light: { row: { backgroundColor: "#ffffff" }, link: { color: "#555555" }}, 
    dark:  { row: { backgroundColor: "#362e2f" }, link: { color: "#febd33" }}
}

export default function DropdownButton({ className = '', type='nav', label, styles={}, children }) {
    const [show, setShow] = createSignal(false)
    const showStatus = createMemo(() => show() ? 'show' : '')

    const handleClick = () => setShow( show => !show )
    const classes = classTypes[type]

    return (
        <div class={`${className} ${classes.group}`} onClick={ handleClick }>
            <span class={ classes.button } 
                data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
            >
                { label }
            </span>

            <div class={`dropdown-menu ${showStatus}`} style={ styles.row }>
                { children }
            </div>
        </div>
    )
}
