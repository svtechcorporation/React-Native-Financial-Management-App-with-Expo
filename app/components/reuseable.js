import { MaterialCommunityIcons } from '@expo/vector-icons';



export const NairaSign = ({size, color}) => {
    return (
        <MaterialCommunityIcons name="currency-ngn" size={size} color={color?color:"black"} />
    )
}

export const addCommasToNumber = (number)=> {
    let numberString = number.toString();
    // Use a regular expression to add commas to the string
    numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numberString;
}



