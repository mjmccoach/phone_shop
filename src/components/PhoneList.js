import phoneListItem from './PhoneListItem'
import PhoneListItem from './PhoneListItem'


const phoneList = ({iphones, options}) => {

    const sizeChoices = options.size.map((option) =>
        <span>{option}</span>
        );

    return(
        <>
        <h1>Phone List</h1>
        <ul>
            <li>
                <button>{sizeChoices}</button></li>
            <li>{options.color}</li>
            <li>{options.grade}</li>
        </ul>
        </>
    )
}

export default phoneList