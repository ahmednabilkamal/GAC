import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

/**
 * Redux & Actions
 */
import {useSelector, useDispatch} from 'react-redux';
import {
  showAllNewsAction,
  showMostViewedNewsAction,
  showRecentNewsAction,
} from '../../../redux/actions/NewsAction/NewsAction';

/**
 * Style
 */
import Style from './Style';

const PaymentTabs = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news);

  return (
    <View>
      <View style={Style.newsTab}>
        {news.showAllNews === true ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(showAllNewsAction(true, false, false));
            }}>
            <Text style={Style.tabTextDisable}>الكل</Text>
            <Text style={Style.redPoint} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(showAllNewsAction(true, false, false));
            }}>
            <Text style={Style.tabText}>الكل</Text>
          </TouchableOpacity>
        )}

        {news.showRecentNews === true ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(showRecentNewsAction(false, true, false));
            }}>
            <Text style={Style.tabTextDisable}>جديد الأخبار</Text>
            <Text style={Style.redPoint} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(showRecentNewsAction(false, true, false));
            }}>
            <Text style={Style.tabText}>جديد الأخبار</Text>
          </TouchableOpacity>
        )}

        {news.showMostViewed === true ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(showMostViewedNewsAction(false, false, true));
            }}>
            <Text style={Style.tabTextDisable}>الأكثر مشاهده</Text>
            <Text style={Style.redPoint} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(showMostViewedNewsAction(false, false, true));
            }}>
            <Text style={Style.tabText}>الأكثر مشاهده</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PaymentTabs;
