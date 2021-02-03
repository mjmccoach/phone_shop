import PhoneList from '../components/PhoneList'

const DisplayBox = () => {

    const [phones, setPhones] = useState([]);

    const phones = [
        {
            size: "50gb",
            color: "Red"
        },
        {
            size: "50gb",
            color: "Blue"
        },
        {
            size: "50gb",
            color: "Pink"
        },
        {
            size: "100gb",
            color: "Red"
        },
        {
            size: "100gb",
            color: "Blue"
        }
    ]

    return(
        <>
        <h1>hiya</h1>
        <PhoneList></PhoneList>
        </>
    )
}

export default DisplayBox