# React-Navigation_React-Native
⚛️ React Native 0.58.4 Android 📲 React Navigation 3.2.1

1. Install React Navigation package:
>> $ npm i react-navigation

2. Install React Native Gesture Handler:
>> $ npm i react-native-gesture-handler

3. Link all dependencies:
>> $ react-native link react-native-gesture-handler

3. Go to MainActivity.java then add lines below with plus ('+') sign:

path: [yourProject]/android/app/src/main/java/com/[yourProject]/MainActivity.java

    package com.reactnavigation.example;
    import com.facebook.react.ReactActivity;
      + import com.facebook.react.ReactActivityDelegate;
      + import com.facebook.react.ReactRootView;
      + import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
    public class MainActivity extends ReactActivity {
    @Override
    protected String getMainComponentName() {
        return "Example";
    }
      +  @Override
      +  protected ReactActivityDelegate createReactActivityDelegate() {
      +    return new ReactActivityDelegate(this, getMainComponentName()) {
      +      @Override
      +      protected ReactRootView createRootView() {
      +       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      +      }
      +    };
      +  }
      }

4. Go to [yourProject]/android/settings.gradle then change all backslash '\' with slash '/' sp it will look like:

        rootProject.name = 'navigasi'
        include ':react-native-gesture-handler'
        project(':react-native-gesture-handler').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-gesture-handler/android')

        include ':app'
