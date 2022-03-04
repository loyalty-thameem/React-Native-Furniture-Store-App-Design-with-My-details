import React from 'react';
import {
  View,
  Text,
  Button,
  Icon,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
// Render 4
function renderPromotionCard() {
  return (
    <View
      // ethu white box design
      style={[
        styles.shadow,
        {
          height: 110,
          backgroundColor: COLORS.white,
          marginHorizontal: SIZES.padding,
          padding: SIZES.radius,
          borderRadius: 20,
          // flex direction use pandrom athanala content yellaam row ah irukkum. kadaisiya flexDirection row ah use pannumbothu athodo height and size ah big maaruthu
          flexDirection: 'row',
        },
      ]}>
      <View
        /*stylela width use pannumbothu athu start ah utkorum*/ style={{
          width: 50,
          backgroundColor: COLORS.lightGray2,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* First Image ah Desing panniyachi. athaavathu athoda size ah. athukku apuram athoda view thaan style use panni width and backgroundColor change aagum*/}
        <Image
          source={images.sofa}
          resizeMode="contain"
          style={{ width: '60%', height: '60%' }}
        />
      </View>
      {/* Wordings section */}
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          marginLeft: SIZES.radius,
          justifyContent: 'center',
        }}>
        <Text style={{ ...FONTS.h2 }}>Special Offer</Text>
        <Text style={{ ...FONTS.body3 }}>Adding to your card</Text>
      </View>
      {/* Button */}
      <View
        //  backgroundColorah  centerla kondu varamudiyum because jc and ai
        style={{
          backgroundColor: 'yellow',
          marginRight: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* TouchableOpacityla alignItemsla justifyContent ah use panni centerla konduvaramudinjithu*/}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: '70%',
            width: 40,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            alert('Promo on clicked');
          }}>
          <Image
            source={icons.chevron}
            resizeMode="contain"
            style={{ height: '50%', width: '50%' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
// ************************** render 333333333333333333***********************************

// productList vanthu params ah pass aagi. ethula itemla irunthu data kidaikkuthu. aana item epdi inge use aaguthunu theriyala. ethula navigation pass aagi itemDetails screenkku data passs aaguthu. ethula image selectedTabla irunthu data change aaguthu
const ScrollableCard = ({ productList, navigation }) => {
  const renderImage = ({ item }) => (
    <TouchableOpacity
      style={{ backgroundColor: 'yellow', padding: 10 }}
      onPress={() => {
        navigation.navigate('ItemDetails', { itemInfo: item });
      }}>
      {/* ============FLEX ah 1 aduthukuthu athai dimensionsla set aagum one pic ah athai / 2 ah size aaguthu=====================kila footer use panni height change aakithu. kaaram flex use aaguthu======= */}
      <View
        style={{
          width: SIZES.width / 2,
        }}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            backgroundColor: 'red',
            width: '100%',
            height: '100%',
            borderRadius: SIZES.radius,
          }}
        />
        {/* -------Just understand------headerName design-------- */}
        <View
          style={{
            position: 'absolute',
            top: 15,
            left: '10%',
            right: '10%',
            backgroundColor: 'green',
          }}>
          <Text style={{ color: COLORS.lightGray2, ...FONTS.h3 }}>
            Furniture
          </Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.white,
              ...FONTS.h2,
              backgroundColor: 'lightblue',
            }}>
            {item.productName}
          </Text>
        </View>
        {/* -------Just understand------Price design-------- */}

        <View
          style={{
            position: 'absolute',
            bottom: 20,
            left: 30,
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: COLORS.transparentLightGray,
          }}>
          <Text style={{ ...FONTS.h2 }}>$ {item.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{ marginTop: SIZES.padding, backgroundColor: 'red' }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productList}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// Render 3 but not render component. ethu vera component. ex.home.js and itemDetails.js file maathiri
{
  /*THANI COMPONENT*/
}

// function ScrollableTab({tabList,selectedTab,onPress}) { --------epadium use pannalaam.but const use panninaa ah diffrent ah irukkum
const ScrollableTab = ({ tabList1, selectedTab1, onPress }) => {
  // Render 4 but not same. this is another one
  // const renderImage = ({item}) => (
  //     <View>
  //       <Image source={item.image} resizeMode='contain' style={{ width:'100%', height:'100%'}}/>
  //     </View>
  //   );
  // const renderItem =({item})=>{} ethu maathiri ulla use panna koodathu. athai maathiri return() function kidaiyathu.
  {
    /*SEPERATE COMPONENTLA INSIDE THAAN RENDER PANNUVOM*/
  }
  {
    /*RENDER 1---------11111111111111111111111111---------------*/
  }
  // item value vanthu params ah HOME componentla irunthu data-ve receive aaguthu
  const renderItem = ({ item }) => (
    /*DATA vanthu data irukku athaala athula irukkura value yellaam setSelectedTab value pass aagum...*/
    // =============ITEMLA DATA IRUKKU ATHAAN VALUE KIDAIKITHU=======================================
    <TouchableOpacity
      style={{ marginHorizontal: SIZES.padding }}
      onPress={() => onPress(item)}>
      {/*onPress paramsla item data pass aaguthu*/}
      <Text
        style={{
          backgroundColor: 'green',
          color: COLORS.secondary,
          ...FONTS.body2,
        }}>
        {item.name}
      </Text>
      {/* Very Intersting here == selectedTab1 idla 0 iruntha athai thaan item id-laium irukkum item 0*/}
      {selectedTab1.id == item.id && (
        <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: COLORS.blue,
            }}></View>
        </View>
      )}
    </TouchableOpacity>
  );
  return (
    <View style={{ backgroundColor: 'blue', marginTop: SIZES.padding }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const Home = ({ navigation }) => {
  const [tabList, setTabList] = React.useState([
    {
      id: 0,
      name: 'Chair',
      title: 'chairs',
      productList: [
        {
          productId: 1,
          productName: 'Chair Green Colour',
          price: 10.0,
          image: images.greenChair,
        },
        {
          productId: 2,
          productName: 'Chair Peach Colour',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 3,
          productName: 'Chair White Colour',
          price: 10.0,
          image: images.whiteChair,
        },
      ],
    },
    {
      id: 1,
      name: 'Cupboard',
      title: 'cupboards',
      productList: [
        {
          productId: 4,
          productName: 'Product 4',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 5,
          productName: 'Product 5',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 6,
          productName: 'Product 6',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
    {
      id: 2,
      name: 'Table',
      title: 'tables',
      productList: [
        {
          productId: 7,
          productName: 'Product 7',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 8,
          productName: 'Product 8',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 9,
          productName: 'Product 9',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
    {
      id: 3,
      name: 'Accessories',
      title: 'accessories',
      productList: [
        {
          productId: 10,
          productName: 'Product 10',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 11,
          productName: 'Product 11',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 12,
          productName: 'Product 12',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
  ]);

  // dummyData2
  // render 2la titlekku selectedTab value pass aguthu
  // -------------------------scrollableTab component------------- vanthu setSelectedTabla ---item--- pass panni ethoda title ah change pannuthu
  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: 'Chair',
    title: 'chairs',
    productList: [
      {
        productId: 1,
        productName: 'Chair Green Colour',
        price: 10.0,
        image: images.greenChair,
      },
      {
        productId: 2,
        productName: 'Chair Peach Colour',
        price: 10.0,
        image: images.redChair,
      },
      {
        productId: 3,
        productName: 'Chair White Colour',
        price: 10.0,
        image: images.whiteChair,
      },
    ],
  });
  // ithu parent function inside the child function but i don't know this realname
  // Render 1
  function renderHeader() {
    return (
      // yean flex 1 ah flex use pannumbothu big screen size comfortah irukku but athu illame irukku anaa mistake varumnu neenaikiren
      <View
        style={{ paddingHorizontal: SIZES.padding, backgroundColor: 'yellow' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: 'purple' }}
            onPress={() => alert('Menu on clicked')}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'orange',
              alignItems: 'flex-end',
            }}
            onPress={() => alert('Cart on clicked')}>
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Render 2
  function renderTitle(title) {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          backgroundColor: 'red',
        }}>
        <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>
          Collection of
        </Text>
        <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>
          {title}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {/*renderTitle('Test title')*/}

      {/*renderTitle('dummyData2la irunthu ') statela ulla title params eduthukurom */}
      {renderTitle(selectedTab.title)}

      {/*Custome to ScrollableTab. ethu thani component--------------------------CUSTOMISED COMPONENT-----------------*/}
      {/*tabList vanthu params ah scrollableTab componentla value pass aagum*/}
      {/*selectedTab same*/}
      {/*onPress same but item vanthu setSelectedTabla hole valuevum pass aagum*/}
      <ScrollableTab
        tabList1={tabList}
        selectedTab1={selectedTab}
        onPress={(item) => setSelectedTab(item)}
        /*onPress item ah data-ve prams pass aagi SCROLLABLETAB componenntkku pass aaguthu. athai onPress ah antha componentla irunthu item inge Pass aagi setSelectedTab muliyama ah data change aagum........*/
      />
      {/* flex use pandrathu naale footer height use pannumbothu flex ah irukkum*/}
      <View style={{ flex: 1, backgroundColor: 'orange' }}>
        <ScrollableCard
          productList={selectedTab.productList}
          navigation={navigation}
        />
      </View>
      {/*========footer promotion card==========*/}
      <View
        // inge marginTop ah use pannala yeana ah. easy ah heightla irunthu justifyContent:'flex-end' ah use panni flex-endla use kondu varamudinjathu-------------- flex use pannala aana height base panni maaruthu--------------
        style={{
          height: '19%',
          justifyContent: 'flex-end',
          backgroundColor: 'orange',
        }}>
        {renderPromotionCard()}
      </View>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
