# react-native-date-picker-light
Date picker for react native, light and does not use modals (will work on all platforms)



This is the first implementation of this date picker. The date picker is controlled by arrows, it sits on the screen,
and does not use modals (For react native windows).


Format: ![Before change of date](https://i.imgur.com/0t7KyZU.png)

Format: ![After change of date](https://i.imgur.com/XMpZCWH.png)


There are various props that can be passed, I will soon add more modularity
(for icons since this depends on react native vector and for more styling control)

the props allowed are 

selected = function (returns the date and day)

depressedColor = String (color for when the date is selected (default color : #7d7c7b)

pressedColor = String (color for when the date is not selected) (default color : #fff)

dateFormat = String (String from the date formats available in moment js) (default format: "D")

iconColor = String (changes the color of the icons from react native vector) (default color : #FF7500)

iconSize = Number (changes the size of the arrows for navigation) (default size : 30)
