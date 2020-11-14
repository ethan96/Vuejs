//export default: 要輸出給其他檔案使用的資料
export default [
  {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "hue": "#0066ff"
          },
          {
              "saturation": 74
          },
          {
              "lightness": 100
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "weight": 0.6
          },
          {
              "saturation": -85
          },
          {
              "lightness": 61
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          },
          {
              "color": "#5f94ff"
          },
          {
              "lightness": 26
          },
          {
              "gamma": 5.86
          }
      ]
  }
];
//snazzy maps
export const vintageGold = [];

export const unsaturatedBrowns = [
  {
      "elementType": "geometry",
      "stylers": [
          {
              "hue": "#ff4400"
          },
          {
              "saturation": -68
          },
          {
              "lightness": -4
          },
          {
              "gamma": 0.72
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.icon"
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry",
      "stylers": [
          {
              "hue": "#0077ff"
          },
          {
              "gamma": 3.1
          }
      ]
  },
  {
      "featureType": "water",
      "stylers": [
          {
              "hue": "#00ccff"
          },
          {
              "gamma": 0.44
          },
          {
              "saturation": -33
          }
      ]
  },
  {
      "featureType": "poi.park",
      "stylers": [
          {
              "hue": "#44ff00"
          },
          {
              "saturation": -23
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "hue": "#007fff"
          },
          {
              "gamma": 0.77
          },
          {
              "saturation": 65
          },
          {
              "lightness": 99
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "gamma": 0.11
          },
          {
              "weight": 5.6
          },
          {
              "saturation": 99
          },
          {
              "hue": "#0091ff"
          },
          {
              "lightness": -86
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": -48
          },
          {
              "hue": "#ff5e00"
          },
          {
              "gamma": 1.2
          },
          {
              "saturation": -23
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "saturation": -64
          },
          {
              "hue": "#ff9100"
          },
          {
              "lightness": 16
          },
          {
              "gamma": 0.47
          },
          {
              "weight": 2.7
          }
      ]
  }
];