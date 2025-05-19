import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView, Platform, ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Toast from 'react-native-toast-message';
import { colorConstant } from '../assets/styles';
import GradientButton from '../components/common/GradientButton';

const backgroundImage = require('../assets/images/bggreen.jpg');

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter email and password',
      });
      return;
    }
  
    setLoginLoading(true);
  
    try {
      await auth().signInWithEmailAndPassword(email, password);
      setTimeout(() => {
        setLoginLoading(false);
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'Welcome back!',
        });
        navigation.replace('HomeScreen');
      }, 300);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Login Error',
        text2: 'Check Password and Try Again',
      });
      setLoginLoading(false);
    }
  };



  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

<KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1 }}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} 
  >
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}

    >
      <View style={styles.container}>
        <View style={styles.loginCard}>
          <View style={{justifyContent:'space-between', flex:1}}>
            <View>
            <View style={styles.header}>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text style={styles.loginText}>Login to your account</Text>
            </View>

            <View style={{ width: '100%' }}>
              <View style={{ paddingBottom: 16 }}>
                {/* Email Input */}
                <View style={styles.inputContainer}>
                  <Image
                    source={require('../assets/images/email.png')}
                    style={styles.icon}
                    height={16}
                    width={16}
                    tintColor={colorConstant.secondaryDarkGreen}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor={colorConstant.secondaryDarkGreen}
                    value={email}
                    onChangeText={text => {
                      setEmail(text);
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      if (text.length === 0) {
                        setEmailError('Email is required');
                      } else if (!emailRegex.test(text)) {
                        setEmailError('Please enter a valid email');
                      } else {
                        setEmailError('');
                      }
                    }}
                    keyboardType="email-address"
                  />
                </View>

                {/* Email Error */}
                <View style={{ minHeight: 12, justifyContent: 'center', marginLeft: 10, marginTop: 5 }}>
                  {emailError ? (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        source={require('../assets/images/error.png')}
                        height={16}
                        width={16}
                        tintColor={'red'}
                        style={{ height: 16, width: 16, marginRight: 6 }}
                      />
                      <Text style={{ color: 'red', fontSize: 12 }}>{emailError}</Text>
                    </View>
                  ) : null}
                </View>
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                  <Image
                    source={require('../assets/images/padlock.png')}
                    style={styles.icon}
                    height={16}
                    width={16}
                    tintColor={colorConstant.secondaryDarkGreen}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor={colorConstant.secondaryDarkGreen}
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)} activeOpacity={0.8}>
                    <Image
                      source={
                        showPassword
                          ? require('../assets/images/eye.png')
                          : require('../assets/images/visible.png')
                      }
                      style={styles.icon}
                      height={20}
                      width={20}
                      tintColor={colorConstant.secondaryDarkGreen}
                    />
                  </TouchableOpacity>
                </View>

                {/* Forgot Password */}
                <TouchableOpacity style={styles.forgotPasswordButton}>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
            
            </View>
            </View>

            {/* Login Button */}

            <View>
            <GradientButton
              title="Login"
              onPress={handleLogin}
              buttonStyle={{ marginHorizontal: 40, marginTop: 20 }}
            />

            {/* Signup Prompt */}
            <View style={styles.signupContainer}>
              <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={styles.signupText}> Sign up</Text>
              </TouchableOpacity>
            </View>

            </View>
          </View>
        </View>
      </View>
      </ScrollView>

      {/* Loader Overlay */}
      {loginLoading && (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color={colorConstant.secondaryDarkGreen} />
        </View>
      )}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  loginCard: {
    backgroundColor: colorConstant.oliveGreenBg,
    borderRadius: 16,
    padding: 15,
    width: '90%',
    maxWidth: 400,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colorConstant.secondaryDarkGreen,
    marginBottom: 5,
  },
  loginText: {
    fontSize: 16,
    color: colorConstant.secondaryDarkGreen,
    marginBottom: 15,
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
    color: '#1C3A2E',
  },
  icon: {
    marginRight: 8,
    marginLeft: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colorConstant.secondaryDarkGreen,
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  forgotPasswordButton: {
    marginTop: 15,
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: colorConstant.secondaryDarkGreen,
    fontSize: 14,
    fontWeight: '500',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dontHaveAccountText: {
    color: 'black',
    fontSize: 14,
  },
  signupText: {
    color: colorConstant.secondaryDarkGreen,
    fontWeight: 'bold',
    fontSize: 14,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
});

export default LoginScreen;
