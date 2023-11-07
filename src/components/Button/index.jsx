export default function Button(props) {
    return (
       <button className="px-4 py-2 border border-black border-1 rounded-lg" onClick={props.onClick}>{props.text}</button> 
    )
}