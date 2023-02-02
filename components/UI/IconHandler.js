import {Ionicons, AntDesign} from '@expo/vector-icons';

const IconHandler = (props) => {
    //console.log(props);
    let name = String(props.icon);
    let size = String(props.size);
    let color = String(props.color);
    if(props.libraryName == 'Ionicons'){
        return (<Ionicons name={name} size={35} color={color} />);
    }
        
    if(props.libraryName == 'AntDesign'){
        
        
        return (<AntDesign name={name} size={26} color={color} />);
        //return (<AntDesign name={name} size={size} color={color} />);
    }
        
}

export default IconHandler;