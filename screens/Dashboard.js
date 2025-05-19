
import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorConstant } from '../assets/styles';
import DashboardCard from '../components/DashboardCard';
import UserCard from '../components/UserCard';
import Loader from '../components/common/Loader';
import StatusBarGradient from '../components/common/StatusBarGradient';
import api from '../services/api';

const Dashboard = ({route}) => {
  const preloadedUsers = route?.params?.preloadedUsers || [];
  const [users, setUsers] = useState(preloadedUsers);
  const [loading, setLoading] = useState(true); 
  const [refreshing, setRefreshing] = useState(false); 
  const [error, setError] = useState(null);

  const fetchUsers = async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const response = await api.get('/api/?results=1000');
      setUsers(response.data.results);
      setError(null);
    } catch (err) {
      console.error('API Error:', err);
      setError('Failed to load users. Please try again.');
    } finally {
      if (isRefresh) setRefreshing(false);
      else setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onRefresh = useCallback(() => {
    fetchUsers(true); 
  }, []);

  if (loading && !refreshing) {
    return (
      <Loader/>
    );
  }

  if (error && !refreshing) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <Text onPress={onRefresh} style={styles.retryText}>
          Tap to retry
        </Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return (
      <View style={{paddingHorizontal:10}}>
    <UserCard item={item}/>
    </View>
    );
  };

  const renderHeader = () => (
    <DashboardCard totalClients={users.length} name='Admin'/>
  );
  

  return (
    <SafeAreaView style={styles.container}>
    <StatusBarGradient/>  
    <LinearGradient
            colors={['#1b3b0f', '#274e13', '#3f7d20']}
            style={styles.card}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
      <View style={styles.header}>
        <Text style={styles.headerText}>BILLS APP</Text>
      </View>
      </LinearGradient>

     <FlatList
      data={users}
      keyExtractor={(item, index) => `${item.login.uuid}-${index}`}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={styles.listContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      windowSize={7}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={true}
    />
   
  </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colorConstant.white
  },
  listContainer: {
    // padding: 16,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  retryText: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  header: {
    padding: 12,

  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
  },
  dashboardCard: {
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 4,
  },
  dashboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  dashboardDetail: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Dashboard;


