import '../index.css';

function Item(props){
    return (
        <li><a href = {props.location}>{props.name}</a></li>
    )
}

export default Item