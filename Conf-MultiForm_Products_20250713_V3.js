const formData = {};
Webflow.push(function() {
  const tabs = document.querySelectorAll('.w-tab-pane');
});
let attemptedStepValidation = {};

const stepDirs = {
  3: '3-dak',
  4: '4-rechter-zijkant',
  5: '5-linker-zijkant',
  6: '6-voorkant',
  7: '7-zonwering',
  8: '8-verlichting'
};

const inputNameByStep = {
  3: 'dak',
  4: 'rechter',
  5: 'linker',
  6: 'voorkant',
  7: 'zonwering',
  8: 'verlichting'
};

const imageMap = {
  "1": {
    "4": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6872a7d6d30dd6495a39d710_start-4m.jpg",
    "5": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6872a7d6f00ae2d98c06da96_start-5m.jpg",
    "6": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6872a7d681428b13e9234ecc_start-6m.jpg",
    "7": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6872a7d67d0489bf5060c655_start-7m.jpg"
  },
  "2": {
    "creme": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6872a886e47d50201ca68eea_creme.jpg",
    "antraciet": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6872a886018f012fc2174053_antraciet.jpg",
    "zwart": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6872a88636e4676afd5e40ba_zwart.jpg"
  },
  "3": {
    "4": {
      "creme": {
        "Glas-getint": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9651136bc431fab1a12_Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9667500d2a7e3ea5aee_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a965e0c1702f3d3fab65_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a965a6d143c4050e30ac_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a965958ec6cc6c5a720d_Polycarbonaat-opaal.jpg"
      },
      "antraciet": {
        "Glas-getint": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a95ce71ab7b188ba6757_Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a95ca6d143c4050e2b5d_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a95c62e8e842f3d3c0ca_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a95c05396a81b7c0def1_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a95c9cbcf23b6dd3d5b2_Polycarbonaat-opaal.jpg"
      },
      "zwart": {
        "Glas-getint": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a96c3f954fe802e4abff_Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a96cbf1558c7cfcf50e6_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a96ca3984d218d2d5b80_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a96c851424a1b8fcbbca_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a96c3bb69653a70464d1_Polycarbonaat-opaal.jpg"
      }
    },
    "5": {
      "creme": {
        "Glas-getint": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9801401e8e740b58a6b_Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a98033838b796171f7a2_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a98033838b796171f79c_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a98019560dc19e90ff50_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a980510c10b7495bb663_Polycarbonaat-opaal.jpg"
      },
      "antraciet": {
        "Glas-getint": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a976de0e69517a6daa27_Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a97692953bb8b0dda421_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9761dd2d8c3fb39eed8_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a976c59498b19fcb1d54_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a97601fef86d7c6a4198_Polycarbonaat-opaal.jpg"
      },
      "zwart": {
        "Glas-getint": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a98619560dc19e9102dc_Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a98653d9a25e35a35a02_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a986cca5623a42aaf396_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a986dead9c15335b9102_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a986c41a80753e7deda7_Polycarbonaat-opaal.jpg"
      }
    },
    "6": {
      "creme": {
        "Glas-getint": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a996741ce3f32326a7f7_Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a996403ef4a65e48ec45_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a996b3064782ad26b15a_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a996dd7dd8df43ff3f08_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a99634fcf89b534f5dec_Polycarbonaat-opaal.jpg"
      },
      "antraciet": {
        "Glas-getint": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a98df2372d5bf6690fef_Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a98df3b36e7f53e49eb4_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a98df8f01a6fd08d200f_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a98d74991b101fecb02c_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a98d882256860c21a8e1_Polycarbonaat-opaal.jpg"
      },
      "zwart": {
        "Glas-getint": "assets/imgs/3-dak/6/zwart/Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a99d1dd2d8c3fb3a028f_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a99ccf3a7bf39fa60660_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a99c64bdc2deec055b46_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a99c09c5e71a96cf4fca_Polycarbonaat-opaal.jpg"
      }
    },
    "7": {
      "creme": {
        "Glas-getint": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9e3f32746abeddc5fcb_Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9e38df2ae8cbe24a4ad_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9e3a6d143c4050e6bc7_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9e3510c10b7495bd8ae_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9e37500d2a7e3ea8753_Polycarbonaat-opaal.jpg"
      },
      "antraciet": {
        "Glas-getint": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9db9cbcf23b6dd40c5d_Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9dbf73b6b65f7a3b801_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9dbc41a80753e7e0e60_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9db9cbcf23b6dd40c60_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9db72955961e116d238_Polycarbonaat-opaal.jpg"
      },
      "zwart": {
        "Glas-getint": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9ebe71ab7b188baa034_Glas-getint.jpg",
        "Glas-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9ebcf3a7bf39fa61bfe_Glas-helder.jpg",
        "Glas-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9eb1841454b4a4e6a62_Glas-opaal.jpg",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9eb8df2ae8cbe24a7c0_Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6873a9ebcca5623a42ab1523_Polycarbonaat-opaal.jpg"
      }
    }
  },
  "4": {
    "4": {
      "creme": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/4/creme/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/4/creme/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/4/creme/Helder-glazen-schuifwanden.jpg"
      },
      "antraciet": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/4/antraciet/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/4/antraciet/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/4/antraciet/Helder-glazen-schuifwanden.jpg"
      },
      "zwart": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/4/zwart/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/4/zwart/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/4/zwart/Helder-glazen-schuifwanden.jpg"
      }
    },
    "5": {
      "creme": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/5/creme/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/5/creme/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/5/creme/Helder-glazen-schuifwanden.jpg"
      },
      "antraciet": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/5/antraciet/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/5/antraciet/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/5/antraciet/Helder-glazen-schuifwanden.jpg"
      },
      "zwart": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/5/zwart/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/5/zwart/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/5/zwart/Helder-glazen-schuifwanden.jpg"
      }
    },
    "6": {
      "creme": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/6/creme/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/6/creme/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/6/creme/Helder-glazen-schuifwanden.jpg"
      },
      "antraciet": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/6/antraciet/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/6/antraciet/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/6/antraciet/Helder-glazen-schuifwanden.jpg"
      },
      "zwart": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/6/zwart/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/6/zwart/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/6/zwart/Helder-glazen-schuifwanden.jpg"
      }
    },
    "7": {
      "creme": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/7/creme/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/7/creme/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/7/creme/Helder-glazen-schuifwanden.jpg"
      },
      "antraciet": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/7/antraciet/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/7/antraciet/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/7/antraciet/Helder-glazen-schuifwanden.jpg"
      },
      "zwart": {
        "Aluminium-kozijn": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-kozijn.jpg",
        "Aluminium-schuifpui": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-schuifpui.jpg",
        "Aluminium-zijwand": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-zijwand.jpg",
        "Geen-zijwand": "assets/imgs/4-rechter-zijkant/7/zwart/Geen-zijwand.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/7/zwart/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/4-rechter-zijkant/7/zwart/Helder-glazen-schuifwanden.jpg"
      }
    },
  },
  "4.5": {
    "4": {
      "creme": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/creme/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/4/creme/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/creme/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/creme/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/creme/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/creme/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/creme/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/creme/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/creme/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/creme/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/creme/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/creme/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/creme/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/creme/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      },
      "antraciet": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/antraciet/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/antraciet/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/antraciet/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/antraciet/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/antraciet/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/antraciet/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/antraciet/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/antraciet/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      },
      "zwart": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/zwart/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/zwart/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/zwart/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/zwart/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/zwart/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/4/zwart/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/4/zwart/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/4/zwart/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      }
    },
    "5": {
      "creme": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/creme/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/5/creme/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/creme/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/creme/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/creme/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/creme/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/creme/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/creme/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/creme/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/creme/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/creme/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/creme/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/creme/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/creme/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      },
      "antraciet": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/antraciet/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/antraciet/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/antraciet/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/antraciet/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/antraciet/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/antraciet/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/antraciet/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/antraciet/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      },
      "zwart": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/zwart/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/zwart/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/zwart/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/zwart/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/zwart/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/5/zwart/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/5/zwart/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/5/zwart/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      }
    },
    "6": {
      "creme": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/creme/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/6/creme/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/creme/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/creme/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/creme/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/creme/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/creme/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/creme/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/creme/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/creme/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/creme/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/creme/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/creme/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/creme/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      },
      "antraciet": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/antraciet/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/antraciet/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/antraciet/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/antraciet/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/antraciet/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/antraciet/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/antraciet/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/antraciet/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      },
      "zwart": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/zwart/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/zwart/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/zwart/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/zwart/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/zwart/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/6/zwart/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/6/zwart/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/6/zwart/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      }
    },
    "7": {
      "creme": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/creme/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/7/creme/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/creme/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/creme/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/creme/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/creme/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/creme/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/creme/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/creme/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/creme/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/creme/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/creme/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/creme/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/creme/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      },
      "antraciet": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/antraciet/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/antraciet/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/antraciet/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/antraciet/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/antraciet/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/antraciet/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/antraciet/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/antraciet/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      },
      "zwart": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-kozijn/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-kozijn/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-kozijn/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-schuifpui/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-schuifpui/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/zwart/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Geen-zijwand": {
          "Geen-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Geen-zijwand/Geen-spie.jpg",
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Geen-zijwand/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Geen-zijwand/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/zwart/Geen-zijwand/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/zwart/Geen-zijwand/Polycarbonaat-opaal.jpg"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Getint-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/zwart/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/zwart/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
          "Glazen-spie": "assets/imgs/4-rechter-zijkant/7/zwart/Helder-glazen-schuifwanden/Glazen-spie.jpg",
          "Polycarbonaat-helder": "assets/imgs/4-rechter-zijkant/7/zwart/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "assets/imgs/4-rechter-zijkant/7/zwart/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
        }
      }
    },
  },
  "5": {
    "creme": {
      "Aluminium-kozijn": "assets/imgs/5-linker-zijkant/creme/Aluminium-kozijn.jpg",
      "Aluminium-schuifpui": "assets/imgs/5-linker-zijkant/creme/Aluminium-schuifpui.jpg",
      "Aluminium-zijwand": "assets/imgs/5-linker-zijkant/creme/Aluminium-zijwand.jpg",
      "Geen-zijwand": "assets/imgs/5-linker-zijkant/creme/Geen-zijwand.jpg",
      "Getint-glazen-schuifwanden": "assets/imgs/5-linker-zijkant/creme/Getint-glazen-schuifwanden.jpg",
      "Helder-glazen-schuifwanden": "assets/imgs/5-linker-zijkant/creme/Helder-glazen-schuifwanden.jpg"
    },
    "antraciet": {
      "Aluminium-kozijn": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-kozijn.jpg",
      "Aluminium-schuifpui": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-schuifpui.jpg",
      "Aluminium-zijwand": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-zijwand.jpg",
      "Geen-zijwand": "assets/imgs/5-linker-zijkant/antraciet/Geen-zijwand.jpg",
      "Getint-glazen-schuifwanden": "assets/imgs/5-linker-zijkant/antraciet/Getint-glazen-schuifwanden.jpg",
      "Helder-glazen-schuifwanden": "assets/imgs/5-linker-zijkant/antraciet/Helder-glazen-schuifwanden.jpg"
    },
    "zwart": {
      "Aluminium-kozijn": "assets/imgs/5-linker-zijkant/zwart/Aluminium-kozijn.jpg",
      "Aluminium-schuifpui": "assets/imgs/5-linker-zijkant/zwart/Aluminium-schuifpui.jpg",
      "Aluminium-zijwand": "assets/imgs/5-linker-zijkant/zwart/Aluminium-zijwand.jpg",
      "Geen-zijwand": "assets/imgs/5-linker-zijkant/zwart/Geen-zijwand.jpg",
      "Getint-glazen-schuifwanden": "assets/imgs/5-linker-zijkant/zwart/Getint-glazen-schuifwanden.jpg",
      "Helder-glazen-schuifwanden": "assets/imgs/5-linker-zijkant/zwart/Helder-glazen-schuifwanden.jpg"
    }
  },
  "5.5": {
    "creme": {
      "Aluminium-kozijn": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/creme/Aluminium-kozijn/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/creme/Aluminium-kozijn/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/creme/Aluminium-kozijn/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/creme/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
      },
      "Aluminium-schuifpui": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/creme/Aluminium-schuifpui/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/creme/Aluminium-schuifpui/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/creme/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/creme/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
      },
      "Aluminium-zijwand": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/creme/Aluminium-zijwand/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/creme/Aluminium-zijwand/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/creme/Aluminium-zijwand/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/creme/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
      },
      "Geen-zijwand": {
        "Geen-spie": "assets/imgs/5-linker-zijkant/creme/Geen-zijwand/Geen-spie.jpg",
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/creme/Geen-zijwand/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/creme/Geen-zijwand/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/creme/Geen-zijwand/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/creme/Geen-zijwand/Polycarbonaat-opaal.jpg"
      },
      "Getint-glazen-schuifwanden": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/creme/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/creme/Getint-glazen-schuifwanden/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/creme/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/creme/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
      },
      "Helder-glazen-schuifwanden": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/creme/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/creme/Helder-glazen-schuifwanden/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/creme/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/creme/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
      }
    },
    "antraciet": {
      "Aluminium-kozijn": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-kozijn/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-kozijn/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-kozijn/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
      },
      "Aluminium-schuifpui": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-schuifpui/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-schuifpui/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
      },
      "Aluminium-zijwand": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-zijwand/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-zijwand/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-zijwand/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/antraciet/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
      },
      "Geen-zijwand": {
        "Geen-spie": "assets/imgs/5-linker-zijkant/antraciet/Geen-zijwand/Geen-spie.jpg",
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/antraciet/Geen-zijwand/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/antraciet/Geen-zijwand/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/antraciet/Geen-zijwand/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/antraciet/Geen-zijwand/Polycarbonaat-opaal.jpg"
      },
      "Getint-glazen-schuifwanden": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/antraciet/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/antraciet/Getint-glazen-schuifwanden/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/antraciet/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/antraciet/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
      },
      "Helder-glazen-schuifwanden": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/antraciet/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/antraciet/Helder-glazen-schuifwanden/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/antraciet/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/antraciet/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
      }
    },
    "zwart": {
      "Aluminium-kozijn": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/zwart/Aluminium-kozijn/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/zwart/Aluminium-kozijn/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/zwart/Aluminium-kozijn/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/zwart/Aluminium-kozijn/Polycarbonaat-opaal.jpg"
      },
      "Aluminium-schuifpui": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/zwart/Aluminium-schuifpui/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/zwart/Aluminium-schuifpui/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/zwart/Aluminium-schuifpui/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/zwart/Aluminium-schuifpui/Polycarbonaat-opaal.jpg"
      },
      "Aluminium-zijwand": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/zwart/Aluminium-zijwand/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/zwart/Aluminium-zijwand/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/zwart/Aluminium-zijwand/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/zwart/Aluminium-zijwand/Polycarbonaat-opaal.jpg"
      },
      "Geen-zijwand": {
        "Geen-spie": "assets/imgs/5-linker-zijkant/zwart/Geen-zijwand/Geen-spie.jpg",
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/zwart/Geen-zijwand/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/zwart/Geen-zijwand/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/zwart/Geen-zijwand/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/zwart/Geen-zijwand/Polycarbonaat-opaal.jpg"
      },
      "Getint-glazen-schuifwanden": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/zwart/Getint-glazen-schuifwanden/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/zwart/Getint-glazen-schuifwanden/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/zwart/Getint-glazen-schuifwanden/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/zwart/Getint-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
      },
      "Helder-glazen-schuifwanden": {
        "Aluminium-spie": "assets/imgs/5-linker-zijkant/zwart/Helder-glazen-schuifwanden/Aluminium-spie.jpg",
        "Glazen-spie": "assets/imgs/5-linker-zijkant/zwart/Helder-glazen-schuifwanden/Glazen-spie.jpg",
        "Polycarbonaat-helder": "assets/imgs/5-linker-zijkant/zwart/Helder-glazen-schuifwanden/Polycarbonaat-helder.jpg",
        "Polycarbonaat-opaal": "assets/imgs/5-linker-zijkant/zwart/Helder-glazen-schuifwanden/Polycarbonaat-opaal.jpg"
      }
    }
  },
  "6": {
    "4": {
      "creme": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/4/creme/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/4/creme/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/4/creme/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/4/creme/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/4/creme/Helder-glazen-schuifwanden.jpg"
      },
      "antraciet": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/4/antraciet/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/4/antraciet/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/4/antraciet/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/4/antraciet/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/4/antraciet/Helder-glazen-schuifwanden.jpg"
      },
      "zwart": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/4/zwart/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/4/zwart/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/4/zwart/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/4/zwart/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/4/zwart/Helder-glazen-schuifwanden.jpg"
      }
    },
    "5": {
      "creme": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/5/creme/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/5/creme/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/5/creme/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/5/creme/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/5/creme/Helder-glazen-schuifwanden.jpg"
      },
      "antraciet": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/5/antraciet/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/5/antraciet/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/5/antraciet/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/5/antraciet/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/5/antraciet/Helder-glazen-schuifwanden.jpg"
      },
      "zwart": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/5/zwart/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/5/zwart/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/5/zwart/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/5/zwart/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/5/zwart/Helder-glazen-schuifwanden.jpg"
      }
    },
    "6": {
      "creme": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/6/creme/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/6/creme/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/6/creme/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/6/creme/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/6/creme/Helder-glazen-schuifwanden.jpg"
      },
      "antraciet": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/6/antraciet/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/6/antraciet/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/6/antraciet/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/6/antraciet/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/6/antraciet/Helder-glazen-schuifwanden.jpg"
      },
      "zwart": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/6/zwart/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/6/zwart/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/6/zwart/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/6/zwart/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/6/zwart/Helder-glazen-schuifwanden.jpg"
      }
    },
    "7": {
      "creme": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/7/creme/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/7/creme/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/7/creme/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/7/creme/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/7/creme/Helder-glazen-schuifwanden.jpg"
      },
      "antraciet": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/7/antraciet/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/7/antraciet/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/7/antraciet/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/7/antraciet/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/7/antraciet/Helder-glazen-schuifwanden.jpg"
      },
      "zwart": {
        "Aluminium-schuifpui": "assets/imgs/6-voorkant/7/zwart/Aluminium-schuifpui.jpg",
        "Getint-schuifpui": "assets/imgs/6-voorkant/7/zwart/Getint-schuifpui.jpg",
        "Open-voorkant": "assets/imgs/6-voorkant/7/zwart/Open-voorkant.jpg",
        "Getint-glazen-schuifwanden": "assets/imgs/6-voorkant/7/zwart/Getint-glazen-schuifwanden.jpg",
        "Helder-glazen-schuifwanden": "assets/imgs/6-voorkant/7/zwart/Helder-glazen-schuifwanden.jpg"
      }
    },
  },
  "7": {
    "4": {
      "creme": {
        "Ja": "assets/imgs/7-zonwering/4/creme/Ja.jpg"
      },
      "antraciet": {
        "Ja": "assets/imgs/7-zonwering/4/antraciet/Ja.jpg"
      },
      "zwart": {
        "Ja": "assets/imgs/7-zonwering/4/zwart/Ja.jpg"
      }
    },
    "5": {
      "creme": {
        "Ja": "assets/imgs/7-zonwering/5/creme/Ja.jpg"
      },
      "antraciet": {
        "Ja": "assets/imgs/7-zonwering/5/antraciet/Ja.jpg"
      },
      "zwart": {
        "Ja": "assets/imgs/7-zonwering/5/zwart/Ja.jpg"
      }
    },
    "6": {
      "creme": {
        "Ja": "assets/imgs/7-zonwering/6/creme/Ja.jpg"
      },
      "antraciet": {
        "Ja": "assets/imgs/7-zonwering/6/antraciet/Ja.jpg"
      },
      "zwart": {
        "Ja": "assets/imgs/7-zonwering/6/zwart/Ja.jpg"
      }
    },
    "7": {
      "creme": {
        "Ja": "assets/imgs/7-zonwering/7/creme/Ja.jpg"
      },
      "antraciet": {
        "Ja": "assets/imgs/7-zonwering/7/antraciet/Ja.jpg"
      },
      "zwart": {
        "Ja": "assets/imgs/7-zonwering/7/zwart/Ja.jpg"
      }
    },
  },
"8": {
  "creme": {
    "Koud-wit-1w": "assets/imgs/8-verlichting/creme/Koud-wit-1w.jpg",
    "Warm-wit-3w": "assets/imgs/8-verlichting/creme/Warm-wit-3w.jpg"
  },
  "antraciet": {
    "Koud-wit-1w": "assets/imgs/8-verlichting/antraciet/Koud-wit-1w.jpg",
    "Warm-wit-3w": "assets/imgs/8-verlichting/antraciet/Warm-wit-3w.jpg"
  },
  "zwart": {
    "Koud-wit-1w": "assets/imgs/8-verlichting/zwart/Koud-wit-1w.jpg",
    "Warm-wit-3w": "assets/imgs/8-verlichting/zwart/Warm-wit-3w.jpg"
  }
}
};

Webflow.push(function() {
  document.getElementById("rechterGeenSpieLabel").style.display = "none";
  document.getElementById("linkerGeenSpieLabel").style.display = "none";
});

function getBreedteFolder(breedte) {
  if (breedte <= 499) return "4";
  if (breedte <= 599) return "5";
  if (breedte <= 699) return "6";
  return "7";
}

function showTab(step) {
//   tabs.forEach(tab => tab.classList.remove('w--tab-active'));
//   const currentTab = document.querySelector(`.w-tab-pane[data-step="${step}"]`);
//   if (currentTab) currentTab.classList.add('w--tab-active');
  currentStepIndex = stepsOrder.indexOf(step.toString());
  const link = document.querySelector(`.w-tab-link[data-step="${step}"]`);
  if (link) link.click();
  updateNavButtons();
  updateNextButtonState();
  const img = document.getElementById(`step${step}Img`);
  if (!img) return;

  const color = formData.color;
  const breedte = formData.breedte;
  // console.log("Breedte value used:", breedte); //Debug
  const folder = getBreedteFolder(breedte);
  // console.log("folder value used:", folder); //Debug
  if (step === "1") {
    img.src = formData.breedteImage || imageMap['1']['4'];
  }
  if (step === "2") {
    if (formData.breedteImage) {
      img.src = formData.breedteImage;
      formData.prevImgSrc = img.src;
    }
  } else if (["3", "4", "5", "6"].includes(step)) {
    const key = inputNameByStep[step];
    const value = formData[key];
    if (color && value) {
      // let path = `assets/imgs/${stepDirs[step]}/${color}/${value}.jpg`;
      let path = imageMap?.[step]?.[color]?.[value];
      if (["3", "4", "6"].includes(step)) {
        // path = `assets/imgs/${stepDirs[step]}/${folder}/${color}/${value}.jpg`;
        path = imageMap[step][folder][color][value];
      }
      img.src = path;
      formData.prevImgSrc = path;
    } else if (formData.prevImgSrc) {
      img.src = formData.prevImgSrc;
    }
  } else if (step === "4.5") {
    const { rechterSpie, rechter } = formData;
    if (rechterSpie && color && rechter) {
      // const path = `assets/imgs/4-rechter-zijkant/${folder}/${color}/${rechter}/${rechterSpie}`;
      const path = imageMap[step][folder][color][rechter][rechterSpie];
      img.src = path;
      formData.prevImgSrc = path;
    } else if (rechter && color) {
      // const path = `assets/imgs/4-rechter-zijkant/${folder}/${color}/${rechter}.jpg`;
      const path = imageMap["4"][folder][color][rechter];
      img.src = path;
      formData.prevImgSrc = path;
    } else if (formData.prevImgSrc) {
      img.src = formData.prevImgSrc;
    }
  } else if (step === "5.5") {
    const { linkerSpie, linker } = formData;
    if (linkerSpie && color && linker) {
      // const path = `assets/imgs/5-linker-zijkant/${color}/${linker}/${linkerSpie}`;
      const path = imageMap[step][color][linker][linkerSpie];
      img.src = path;
      formData.prevImgSrc = path;
    } else if (linker && color) {
      // const path = `assets/imgs/5-linker-zijkant/${color}/${linker}.jpg`;
      const path  = imageMap["5"][color][linker];
      img.src = path;
      formData.prevImgSrc = path;
    } else if (formData.prevImgSrc) {
      img.src = formData.prevImgSrc;
    }
  } else if (step === "7") {
    const value = formData.zonwering;
    if (value === "Ja" && color) {
      // const path = `assets/imgs/7-zonwering/${folder}/${color}/Ja.jpg`;
      const path = imageMap[step][folder][color][value];
      img.src = path;
      formData.prevImgSrc = path;
    } else if (value === "Nee") {
      const dak = formData.dak;
      if (dak && color) {
        // const dakPath = `assets/imgs/3-dak/${folder}/${color}/${dak}.jpg`;
        const dakPath = imageMap["3"][folder][color][dak];
        img.src = dakPath;
        formData.prevImgSrc = dakPath;
      }
    } else if (formData.prevImgSrc) {
      img.src = formData.prevImgSrc;
    }
  } else if (step === "8") {
    const value = formData.verlichting;
    if (value === "Koud-wit-1w" && color) {
      // const path = `assets/imgs/8-verlichting/${color}/Koud-wit-1w.jpg`;
      const path = imageMap[step][color][value];
      img.src = path;
      formData.prevImgSrc = path;
    } else if (value === "Warm-wit-3w" && color) {
      // const path = `assets/imgs/8-verlichting/${color}/Warm-wit-3w.jpg`;
      const path = imageMap[step][color][value];
      img.src = path;
      formData.prevImgSrc = path;
    } else if (formData.prevImgSrc) {
      img.src = formData.prevImgSrc;
    } else {
      img.src = "";
    }
  } else if (step === "9") {
    const img = document.getElementById('step9Img');
    if (img && formData.prevImgSrc) {
      img.src = formData.prevImgSrc;
    }
  } else if (step === "10") {
    const img = document.getElementById('step10Img');
    if (img && formData.prevImgSrc) {
      img.src = formData.prevImgSrc;
    }
  }
}


function nextTab(current) {
  const stepStr = current.toString();

  if (stepStr === "1") {
    const input = document.getElementById('conf-Input-BreedteVeranda');
    const value = parseInt(input.value, 10);
    formData.breedte = value;

    const folderBreedte = getBreedteFolder(value) || getBreedteFolder(400)
    const path = imageMap["1"][getBreedteFolder(value)]
    formData.breedteImage = path;

    document.getElementById('step1Img').src = path;
    formData.prevImgSrc = path;
  }

  const tab = document.querySelector(`.w-tab-pane[data-step="${stepStr}"]`);
  const selected = tab.querySelector('input[type="radio"]:checked');
  if (selected) {
    const name = selected.name;
    formData[name] = selected.value;

    if (name === "rechterSpie") {
      updateSpie("4.5", formData.breedte, formData.color, formData.rechter, selected.value);
    }
    if (name === "linkerSpie") {
      updateSpie("5.5", formData.breedte, formData.color, formData.linker, selected.value);
    }
  }

  showTab(getNextStep(stepStr));
}

function prevTab(current) {
  showTab(getPrevStep(current.toString()));
}

function getNextStep(step) {
  const order = ["1", "2", "3", "4", "4.5", "5", "5.5", "6", "7", "8", "9"];
  const idx = order.indexOf(step);
  return order[idx + 1];
}

function getPrevStep(step) {
  const order = ["1", "2", "3", "4", "4.5", "5", "5.5", "6", "7", "8", "9"];
  const idx = order.indexOf(step);
  return order[idx - 1];
}

function updateSpie(stepKey, breedte, color, parentChoice, spieName) {
  const img = document.getElementById(`step${stepKey}Img`);
  if (img && color && parentChoice && spieName) {
    // const folder = stepKey === "4.5" ? "4-linker-zijkant" : "5-rechter-zijkant";
    // const path = `assets/imgs/${folder}/${color}/${parentChoice}/${spieName}`;
    const path = stepKey === "4.5" ? imageMap[stepKey][getBreedteFolder(breedte)][color][parentChoice][spieName] : imageMap[stepKey][color][parentChoice][spieName];
    img.src = path;
    formData.prevImgSrc = path;
  }
}

//Turns gray back immediately on valid input or selection — no refresh needed.
Webflow.push(function() {
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const name = radio.name;
      formData[name] = radio.value; // update formData
  
      const stepByName = {
        color: "2",
        dak: "3",
        rechter: "4",
        rechterSpie: "4.5",
        linker: "5",
        linkerSpie: "5.5",
        voorkant: "6",
        zonwering: "7",
        verlichting: "8"
      };
  
      const step = stepByName[name];
      if (step) {
        const label = document.getElementById(`verplicht-${step}`);
        if (label) label.classList.remove('invalid');
      }
      //active class next button
      updateNextButtonState();
    });
  });
  });

// Breedte input listener
Webflow.push(function() {
document.getElementById('conf-Input-BreedteVeranda').addEventListener('input', () => {
  const value = parseInt(document.getElementById('conf-Input-BreedteVeranda').value, 10);

    // Remove red "verplicht" if valid
    if (!isNaN(value) && value > 0) {
        document.getElementById('verplicht-1')?.classList.remove('invalid');
      }

  const folderBreedte = getBreedteFolder(value) || getBreedteFolder(400)
  const path = imageMap["1"][getBreedteFolder(value)]
  formData.breedteImage = path;

  document.getElementById('step1Img').src = path;
  formData.prevImgSrc = path;
  //active class next button
  updateNextButtonState();
});
});

// Color selection
Webflow.push(function() {
document.querySelectorAll('input[name="color"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const value = radio.value;
    formData.color = value;
    const path = imageMap["2"][value]

    document.getElementById('step2Img').src = path;
    formData.prevImgSrc = path;
    //active class next button
    updateNextButtonState();
  });
});
});

// Dak, rechter, linker, voorkant
Webflow.push(function() {
Object.entries(inputNameByStep).forEach(([step, name]) => {
  document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
    radio.addEventListener('change', () => {
      const color = formData.color;
      const value = radio.value;
      formData[name] = value;

      if (!["7", "8"].includes(step)) {
        const breedte = formData.breedte;
        const folder = breedte !== undefined ? getBreedteFolder(breedte) : "4";
        // let path = `assets/imgs/${stepDirs[step]}/${color}/${value}.jpg`;
        let path = imageMap?.[step]?.[color]?.[value];
        // console.log("First path:", path); //Debug
      
        if (["3", "4", "6"].includes(step)) {
          // path = `assets/imgs/${stepDirs[step]}/${folder}/${color}/${value}.jpg`;
          path = imageMap[step][folder][color][value];
          // console.log("Second path:", path); //Debug
        }
      
        document.getElementById(`step${step}Img`).src = path;
        formData.prevImgSrc = path;
      }
       else if (step === "7") {
        showTab("7");
      } else if (step === "8") {
        showTab("8");
      }
      //active class next button
      updateNextButtonState();
    });
  });
});
});

// Spie radios
Webflow.push(function() {
["rechterSpie", "linkerSpie"].forEach(name => {
  document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
    radio.addEventListener("change", () => {
      const color = formData.color;
      const breedte = formData.breedte;
      const folder = breedte !== undefined ? getBreedteFolder(breedte) : "4";

      const parent = name === "rechterSpie" ? formData.rechter : formData.linker;
      const stepKey = name === "rechterSpie" ? "4.5" : "5.5";
      const img = document.getElementById(`step${stepKey}Img`);

      // console.log("First_ img:", img, "color: ",color,"parent: ",parent, "radio.value: ",radio.value); //Debug

      if (img && color && parent && radio.value) {
        // console.log("Second img:", img, "color: ",color,"parent: ",parent, "radio.value: ",radio.value); //Debug
        // const folderPath = name === "rechterSpie"
        //   ? `4-rechter-zijkant/${folder}/${color}/${parent}/${radio.value}`
        //   : `5-linker-zijkant/${color}/${parent}/${radio.value}`;
        // const fullPath = `assets/imgs/${folderPath}`;

        // const path = imageMap[stepKey][folder][color][parent][radio.value];
        const folderPath = name === "rechterSpie"
          ? imageMap["4.5"][folder][color][parent][radio.value]
          : imageMap["5.5"][color][parent][radio.value];
        const path = folderPath;
        // console.log("Third path: ", path); //Debug
        img.src = path;
        formData.prevImgSrc = path;
      }
    });
  });
});
});


// Step 4 – rechter Zijwand logic
Webflow.push(function() {
document.querySelectorAll('input[name="rechter"]').forEach(radio => {
    radio.addEventListener('change', () => {
      formData.rechter = radio.value;
      const geenSpieLabel = document.getElementById('rechterGeenSpieLabel');
      if (radio.value === "Geen-zijwand") {
        geenSpieLabel.style.display = "inline-block";
      } else {
        geenSpieLabel.style.display = "none";
  
        // Uncheck if already selected
        const input = geenSpieLabel.querySelector('input');
        if (input.checked) input.checked = false;
      }
      //active class next button
      updateNextButtonState();
    });
  });
});
  
  // Step 5 – linker Zijwand logic
  Webflow.push(function() {
  document.querySelectorAll('input[name="linker"]').forEach(radio => {
    radio.addEventListener('change', () => {
      formData.linker = radio.value;
      const geenSpieLabel = document.getElementById('linkerGeenSpieLabel');
      if (radio.value === "Geen-zijwand") {
        geenSpieLabel.style.display = "inline-block";
      } else {
        geenSpieLabel.style.display = "none";
  
        // Uncheck if already selected
        const input = geenSpieLabel.querySelector('input');
        if (input.checked) input.checked = false;
      }
      //active class next button
      updateNextButtonState();
    });
  });
  });
  

// Submit
Webflow.push(function() {
document.getElementById('dynamicForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Formulier verzonden!\n" + JSON.stringify(formData, null, 2));
});
});



let currentStepIndex = 0;
const stepsOrder = ["1", "2", "3", "4", "4.5", "5", "5.5", "6", "7", "8", "9", "10"];

function updateNavButtons() {
  document.getElementById('prevBtn').style.display = currentStepIndex === 0 ? 'none' : 'flex'; //webflow uses div
  document.getElementById('nextBtn').textContent = currentStepIndex === stepsOrder.length - 1 ? 'Indienen' : 'Volgende';
}

Webflow.push(function() {
document.getElementById('prevBtn').addEventListener('click', () => {
  currentStepIndex--;
  showTab(stepsOrder[currentStepIndex]);
  updateNavButtons();
});
});


Webflow.push(function() {
document.getElementById('nextBtn').addEventListener('click', () => {
    const currentStep = stepsOrder[currentStepIndex];
    attemptedStepValidation[currentStep] = true;

  // ← NEW: populate formData for step 4.5 and 5.5 immediately
  if (currentStep === "4.5") {
    formData.rechterSpie = document.querySelector('input[name="rechterSpie"]:checked')?.value || '';
  }
  if (currentStep === "5.5") {
    formData.linkerSpie = document.querySelector('input[name="linkerSpie"]:checked')?.value || '';
  }

    // Validate current step before allowing user to proceed
    if (!validateStep(currentStep)) {
      return; // Do not go to next step if invalid
    }
  
    // Only process breedte input on step 1
    if (currentStep === "1") {
        const input = document.getElementById('conf-Input-BreedteVeranda');
        const value = parseInt(input.value, 10);
        if (!isNaN(value)) {
            formData.breedte = value;
        }
      //   else {
      //       alert("Voer een geldige breedte in.");
      //       return; // Stop if invalid
      //   }
        }

    // Save form data just like your original `nextTab()` logic here if needed
    formData.rechterSpie = document.querySelector('input[name="rechterSpie"]:checked')?.value || '';
    formData.linkerSpie = document.querySelector('input[name="linkerSpie"]:checked')?.value || '';
    
    if (currentStepIndex === stepsOrder.length - 1) {
      formData.naam = document.getElementById('naam').value;
      formData.email = document.getElementById('email').value;
      formData.telefoon = document.getElementById('telefoon').value;
      formData.adres = document.getElementById('adres').value;
  
      document.getElementById('dynamicForm').requestSubmit();
      return;
    }
  
    currentStepIndex++;
    showTab(stepsOrder[currentStepIndex]);
    updateNavButtons();
  });
  });

  function validateStep(step) {
    let valid = true;

    const markInvalid = (isInvalid) => {
      const label = document.getElementById(`verplicht-${step}`);
      if (label) {
        label.classList.toggle("invalid", isInvalid);
      }
    };
    // const markInvalid = (isInvalid) => {
    //   const label = document.getElementById(`verplicht-${step}`);
    //   if (label) {
    //     // Only mark red if user tried this step
    //     if (attemptedStepValidation[step]) {
    //       label.classList.toggle("invalid", isInvalid);
    //     } else {
    //       label.classList.remove("invalid");
    //     }
    //   }
    // };
    // const markInvalid = (isInvalid) => {
    //   const label = document.getElementById(`verplicht-${step}`);
    //   if (label && attemptedStepValidation[step] && mark) {
    //     label.classList.toggle("invalid", isInvalid);
    //   } else if (label && mark) {
    //     label.classList.remove("invalid");
    //   }
    // };
  
    switch (step) {
      case "1":
        const input = document.getElementById('conf-Input-BreedteVeranda');
        const value = parseInt(input.value, 10);
        valid = !isNaN(value) && value > 0;
        break;
  
      case "2":
        valid = !!formData.color;
        break;
  
      case "3":
        valid = !!formData.dak;
        break;
  
      case "4":
        valid = !!formData.rechter;
        break;
  
      case "4.5":
        valid = !!formData.rechterSpie;
        break;
  
      case "5":
        valid = !!formData.linker;
        break;
  
      case "5.5":
        valid = !!formData.linkerSpie;
        break;
  
      case "6":
        valid = !!formData.voorkant;
        break;
  
      case "7":
        valid = !!formData.zonwering;
        break;
  
      case "8":
        valid = !!formData.verlichting;
        break;
  
      default:
        valid = true;
    }
  
    markInvalid(!valid);
    return valid;
  }

  function updateNextButtonState() {
    const nextBtn = document.getElementById('nextBtn');
    const currentStep = stepsOrder[currentStepIndex];
    const isValid = validateStep(currentStep);
  
    nextBtn.disabled = !isValid;
  
    if (isValid) {
      nextBtn.classList.add('active');
    } else {
      nextBtn.classList.remove('active');
    }
  }
  // function updateNextButtonState() {
  //   const nextBtn = document.getElementById('nextBtn');
  //   const currentStep = stepsOrder[currentStepIndex];
  
  //   // Reuse validate logic but suppress marking invalid visuals
  //   const wasAttempted = attemptedStepValidation[currentStep];
  //   attemptedStepValidation[currentStep] = false;  // temporarily suppress
  //   const isValid = validateStep(currentStep);
  //   attemptedStepValidation[currentStep] = wasAttempted; // restore
  
  //   nextBtn.disabled = !isValid;
  //   nextBtn.classList.toggle('active', isValid);
  // }  

  Webflow.push(function() {
    // this runs after Webflow’s own tabs behavior is set up
    showTab(stepsOrder[0]);
    updateNavButtons();
  });
