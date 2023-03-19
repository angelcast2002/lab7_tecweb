import "./Button.css"

const Button = (props) => 
{
    return (
        <div>
            <button className={props.className}>{props.children}</button>
        </div>
    )
}

export { Button }
