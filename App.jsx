import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, Dimensions, StyleSheet, View, FlatList } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import VideoComponent from './VideoComponent';
const App = () => {
  const [data, setData] = useState([
    {
      "id": 152740, "pageURL": "https://pixabay.com/videos/id-152740/", "type": "film", "tags": "reeds, grass, wind",
      "duration": 17, "picture_id": "1622424622-b8ab595b7bba31031a1082de3a7ffd5d5fa2d725c76364da1433ec3f2dceab06-d",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/803732906/Reeds%20-%20152740.mp4?width=1920&hash=50d51604204600251f9a1dd3fc0af0af7acb6f75",
          "width": 1920, "height": 1080, "size": 12705648
        }
      }, "views": 65847, "downloads": 21985, "likes": 186, "comments": 64,
      "user_id": 33735105, "user": "kinmeow", "userImageURL": "https://cdn.pixabay.com/user/2023/02/18/04-10-05-59_250x250.jpeg"
    },
    {
      "id": 152741, "pageURL": "https://pixabay.com/videos/id-152740/", "type": "film", "tags": "reeds, grass, wind",
      "duration": 17, "picture_id": "1622424622-b8ab595b7bba31031a1082de3a7ffd5d5fa2d725c76364da1433ec3f2dceab06-d",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/803732906/Reeds%20-%20152740.mp4?width=1920&hash=50d51604204600251f9a1dd3fc0af0af7acb6f75",
          "width": 1920, "height": 1080, "size": 12705648
        }
      }, "views": 65847, "downloads": 21985, "likes": 186, "comments": 64,
      "user_id": 33735105, "user": "kinmeow", "userImageURL": "https://cdn.pixabay.com/user/2023/02/18/04-10-05-59_250x250.jpeg"
    },
    {
      "id": 152742, "pageURL": "https://pixabay.com/videos/id-152740/", "type": "film", "tags": "reeds, grass, wind",
      "duration": 17, "picture_id": "1622424622-b8ab595b7bba31031a1082de3a7ffd5d5fa2d725c76364da1433ec3f2dceab06-d",
      "videos": {
        "large": {
          "url": "https://cdn.pixabay.com/vimeo/803732906/Reeds%20-%20152740.mp4?width=1920&hash=50d51604204600251f9a1dd3fc0af0af7acb6f75",
          "width": 1920, "height": 1080, "size": 12705648
        }
      }, "views": 65847, "downloads": 21985, "likes": 186, "comments": 64,
      "user_id": 33735105, "user": "kinmeow", "userImageURL": "https://cdn.pixabay.com/user/2023/02/18/04-10-05-59_250x250.jpeg"
    }
  ])
  const url = 'https://pixabay.com/api/videos/?key=32415825-5fa62ce69fc37f8d4760ede43'
  // const getData = useCallback(() => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(result => {
  //       // setData(result?.hits.slice(0, 5))
  //       console.log(result?.hits.slice(0, 1))
  //     })
  //     .catch(error => console.log('error', error));
  // }, [data])

  // useEffect(() => {
  //   getData()
  // }, [])
  const [currentIndex, setCurrentIndex] = useState(0)
  const changedIndex = ({ index = Number }) => {
    setCurrentIndex(index)
  }
  const renderItem = useMemo(() => ({ item, index }) => {
    return (
      <View style={styles.flatContainer}>
        <VideoComponent item={item} index={index} />
      </View>
    )
  }, [data])
  const onViewableItemsChanged = (props) => {
    setCurrentIndex(props.viewableItems[0].index)
    console.log(props.viewableItems[0].index)
  }
  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        renderItem={renderItem}
        onViewableItemsChanged={onViewableItemsChanged}
        keyExtractor={(item, index) => item?.id + index}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  flatContainer: {
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    backgroundColor: 'black'
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  },

});

export default App;