import React, { PureComponent } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { SliderBox } from "react-native-image-slider-box"
import ItemMenu from './ItemMenu';
export default class MainHeader extends PureComponent {
    render() {
        const { slide_img, menu_item } = this.props;
        return (
            <View>
                <SliderBox
                    images={slide_img}
                    sliderBoxHeight={180}
                    dotColor={'white'}
                    imageLoadingColor={'white'}
                    resizeMode={'stretch'}
                    autoplay={true}
                    circleLoop={true}
                />
                {/* Menu */}
                <FlatList
                    style={styles.flat_list}
                    numColumns={5}
                    data={menu_item}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <ItemMenu
                            item_menu={item}
                        />
                    )}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    flat_list: {
        height: 300,
        marginBottom: 0,
        paddingBottom: 0,
        flexGrow: 0,
    },
})