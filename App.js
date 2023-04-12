import { useEffect,useRef,useState } from "react";
import { Text, View,TouchableOpacity } from "react-native";

// he
//hello2
export default App = function () {
   const cat=[
    {
        "id":1,
        "username": "Anka_nebo1"
    },            {
        "id":2,
        "username": "Anka_nebo2"
    },            {
        "id":2,
        "username": "Anka_nebo2"
    },            {
        "id":1,
        "username": "Anka_nebo1"
    },            {
        "id":2,
        "username": "Anka_nebo2"
    },

]
   const  [taskCom, setTaskCom] = useState(cat)

     return (
        <>
            <View style={{ flex: 1, backgroundColor: "#FFFFAA" }}>
                {taskCom.map(item => <Text>{item.username}</Text>)}
            </View>
            <TouchableOpacity onPress={()=>setTaskCom(cat.filter(item=>item.id==1))} >
                <Text>Kick me</Text>
            </TouchableOpacity>
        </>
    )
}