import React from 'react';
import {
  View,
  Text,
  Button,
  Icon,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
function ItemDetails({ route, navigation }) {
  // Render 2 with Parent return
  function renderFooter() {
    return (
      /* Parent View*/
      <View
        style={{
          position: 'absolute',
          bottom: '5%',
          left: SIZES.padding,
          right: SIZES.padding,
          flexDirection: 'row',
          /* contentla yellaam row ah irukkum*/
          height: 70,
          backgroundColor: COLORS.white,
          borderRadius: 35,
        }}>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.dashboard}
              style={{
                tintColor: COLORS.gray,
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'yellow',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: 50,
              borderRadius: 10,
              backgroundColor: COLORS.primary,
            }}
            onPress={() => console.log('Add on clicked')}>
            <Image
              source={icons.plus}
              style={{
                tintColor: COLORS.white,
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'purple',
          }}>
          <TouchableOpacity onPress={() => console.log('Profile on clicked')}>
            <Image
              source={icons.user}
              style={{
                tintColor: COLORS.gray,
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Render 1:1
  function renderHeader() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
          marginHorizontal: SIZES.padding,
          backgroundColor: 'blue',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              backgroundColor: 'red',
            }}>
            <TouchableOpacity onPress={() => console.log('Menu on clicked')}>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{
                  // imgae ah iruntha ah tintColor use pannanum
                  tintColor: COLORS.white,
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              backgroundColor: 'yellow',
            }}>
            <TouchableOpacity onPress={() => console.log('Search on clicked')}>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  tintColor: COLORS.white,
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  // Render 1
  function renderInfo() {
    let { itemInfo } = route.params;
    // ithula itemInfola data yellaam irukku.
    if (itemInfo) {
      return (
        <ImageBackground
          source={itemInfo.image}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}>
          {/* inge image header design pannina ah component ah inge render pandrom */}
          {renderHeader()}

          {/* Product Tag */}

          <View
            style={{
              position: 'absolute',
              top: '45%',
              left: '15%',
              borderRadius: 80,
              backgroundColor: COLORS.transparentLightGray1,
              height: 40,
              width: 40,
              /* aI and jC use panni dot ball blue ah centerla kondu vanthurukom */
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: COLORS.blue,
                height: 10,
                width: 10,
              }}></View>
          </View>
          {/* ===============  Text With Price ========================== */}
          <View
            style={{
              position: 'absolute',
              top: '43%',
              left: '30%',
              flexDirection: 'row',
              padding: SIZES.radius * 1.5,
              backgroundColor: COLORS.transparentLightGray1,
              width: '50%',
              borderRadius: 10,
            }}>
            {/* Flex use panni athodo size ah change pani irukom */}
            <View style={{ flex: 2, backgroundColor: 'red' }}>
              <Text style={{ color: COLORS.darkGray, ...FONTS.h3 }}>
                {itemInfo.productName}
              </Text>
            </View>
            {/* Flex use panni athodo size ah change pani irukom */}

            <View
              style={{
                flex: 1.5,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                backgroundColor: 'yellow',
              }}>
              <Text style={{ color: COLORS.darkGreen, ...FONTS.h3 }}>
                $ {itemInfo.price.toFixed(2)}
              </Text>
            </View>
          </View>
          {/* ============ name text========== */}

          <View
            style={{
              position: 'absolute',
              bottom: '20%',
              left: SIZES.padding,
              right: SIZES.padding,
              backgroundColor: 'lightblue',
            }}>
            <Text
              style={{
                color: COLORS.lightGray2,
                ...FONTS.body2,
                backgroundColor: 'red',
              }}>
              Furniture
            </Text>
            <Text
              style={{
                marginTop: SIZES.radius,
                color: COLORS.white,
                ...FONTS.h1,
                backgroundColor: 'yellow',
              }}>
              {itemInfo.productName}
            </Text>
          </View>
        </ImageBackground>
      );
    } else {
      <View style={{}}></View>;
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderInfo()}
      {renderFooter()}
    </View>
  );
}
export default ItemDetails;
