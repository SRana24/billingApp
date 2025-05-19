import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform, StatusBar } from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../components/common/GradientButton';
import { colorConstant } from '../assets/styles';
import StatusBarGradient from '../components/common/StatusBarGradient';
import Toast from 'react-native-toast-message';
import { useTheme } from '@react-navigation/native';


const User = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const handleSignOut = async () => {
    try {
      await auth().signOut();
      navigation.replace('LoginScreen'); 
    } catch (error) {
        Toast.show({
            type: 'error',
            text1: 'Sign Out Error',
            text2: 'Try Again',
          });
    }
  };

  return (
    <View style={[styles.container,{ backgroundColor: colors.background }]}>
        <StatusBarGradient/>
      <View style={styles.content}>
        <Text style={styles.heading}>Profile</Text>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <GradientButton
              title="Sign Out"
              onPress={handleSignOut}
              buttonStyle={{ marginHorizontal: 40, marginTop: 20, marginBottom:25 }}
            />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    content: {
      marginTop:45,
      padding:20
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: colorConstant.secondaryDarkGreen,
    },
    option: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor:colorConstant.secondaryDarkGreen,
    },
    optionText: {
      fontSize: 16,
      color: colorConstant.secondaryDarkGreen,
      fontWeight:600
    },
    
  });
  