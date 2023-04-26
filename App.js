import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Pressable, Image, TextInput, Button } from 'react-native'
import { useEffect, useState } from 'react'
const App = () => {

  const userDatas = [
    {
      id: 1,
      name: "Ali",
      isFollow: true
    },
    {
      id: 2,
      name: "Rashad",
      isFollow: true
    },
    {
      id: 3,
      name: "Alican",
      isFollow: false
    },
  ]
  const [count, setCount] = useState(0)
  const [isPressed, setisPressed] = useState(1)
  const [datas, setDatas] = useState(userDatas)
  const [name, setName] = useState('')
  const handleFollow = (id) => {
    const updatedDatas = datas.map(item => {
      if (item.id == id) {
        item.isFollow = !item.isFollow
      }
      return item
    })
    setDatas(updatedDatas)
    console.log(updatedDatas);
  }
  const handleAdd = () => {
    let obj = {
      id: 2342,
      name: name,
      isFollow: false
    }

    setDatas([...datas, obj])
    setName('')
  }
  useEffect(() => {
  }, [])
  const handleMinus = () => {
    setCount(count - 1)

    setisPressed(2)
  }
  const handlePlus = () => {
    setisPressed(1)

    setCount(count + 1)
  }
  const handleReset = () => {
    setCount(0)
  }

  return (
    <SafeAreaView >
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
        <TouchableOpacity onPress={handleMinus} style={{ backgroundColor: "red", width: 80, transform: [{ scale: isPressed }] }}>
          <Text style={{ fontSize: 28, textAlign: "center" }}>-</Text>
        </TouchableOpacity>
        <View>
          <Text>{count}</Text>
        </View>
        <TouchableOpacity onPress={handlePlus} style={{ backgroundColor: "red", width: 80, }}>
          <Text style={{ fontSize: 28, textAlign: "center" }}>+</Text>
        </TouchableOpacity>

      </View>
      <Pressable onPress={handleReset}>
        <Text>reset</Text>
      </Pressable>
      {
        datas.map(item => (
          <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "green" }} onPress={() => handleFollow(item.id)}  >
            <Image style={{ width: 40, height: 40 }} source={require("./assets/blank-profile-picture-973460__340.webp")} />
            <Text style={item.isFollow ? { color: "blue" } : { color: "aqua" }} >{item.name}</Text>
            {
              item.isFollow ?
                <Text>unfollow</Text> :
                <Text>follow</Text>

            }
          </TouchableOpacity>
        ))
      }

      <Text>Name</Text>
      <View style={{ padding: 20, borderWidth: 1, borderColor: "black", borderRadius: 30 }}>
        <TextInput onChangeText={setName} value={name} />
      </View>
      <Button onPress={handleAdd} title='add' />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({

})