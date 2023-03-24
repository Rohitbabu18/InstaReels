import React, { memo, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'

import Video from 'react-native-video';

const VideoComponent = (props) => {
    const { item, index, currentIndex } = props
    const [play, setPlay] = useState(false)
    const [mute, setMute] = useState(false)
    return (
        <Pressable
            onLongPress={() => {
                setPlay(!play)
            }}
            onPressOut={() => {
                setPlay(false)
            }}
            onPress={() => {
                setMute(!mute)
            }}>
            <Video
                source={{ uri: item?.videos?.large?.url }}
                paused={index !== currentIndex || play}
                muted={mute}
                style={styles.backgroundVideo}
                repeat
                resizeMode={'cover'}
            // disableDisconnectError={true}
            />
        </Pressable>
    )
}

export default memo(VideoComponent);

const styles = StyleSheet.create({
    backgroundVideo: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,

    },
})
