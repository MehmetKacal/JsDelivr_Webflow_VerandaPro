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
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297193d730ee3e7af4659_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829719222d5a61a62843cd_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829719d3cebf62af42ea55_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829718a14229706ba17f70_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297190a28a50eea1a8202_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829719f3ca1e2904c394cc_Helder-glazen-schuifwanden.avif"
      },
      "antraciet": {
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296088ef948a67e9f745d_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296098b088ef5427ea711_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829608eb9f1da4d9eb1f6b_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829608536d829387e1ce13_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296084ddde03f62dbd2b2_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829608b8c62cfbb9050353_Helder-glazen-schuifwanden.avif"
      },
      "zwart": {
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297bb43be2b310639b005_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297bb41474dd53c04f3a4_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297bbaf0c9a8d437af220_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297bbab22aa0f544e4818_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297bba3e6a08f4e1cdc9a_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297bb1b83dd31018757e4_Helder-glazen-schuifwanden.avif"
      }
    },
    "5": {
      "creme": {
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882991617987c5025ba93b9_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829916e4eb1c21f523b289_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299165ddf689aa2c84791_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299161b83dd310187fdc3_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299168c33961f9cc0a59e_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882991611c94530e3750984_Helder-glazen-schuifwanden.avif"
      },
      "antraciet": {
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829881d3cb046768d2a8f3_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298811562907552e2f83d_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882988184c9094baef4a3c0_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829881f3ca1e2904c46330_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298810a28a50eea1b2328_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829881d124539073af40d3_Helder-glazen-schuifwanden.avif"
      },
      "zwart": {
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ecd3cebf62af443833_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ec28f18c59f66e79bc_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ecc695395b5ed52475_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299eca6209dc2bb0c3adf_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ecd876de142e7c4d30_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ecccdb8cb2dc09f92d_Helder-glazen-schuifwanden.avif"
      }
    },
    "6": {
      "creme": {
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882991617987c5025ba93b9_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829916e4eb1c21f523b289_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299165ddf689aa2c84791_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299161b83dd310187fdc3_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299168c33961f9cc0a59e_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882991611c94530e3750984_Helder-glazen-schuifwanden.avif"
      },
      "antraciet": {
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829881d3cb046768d2a8f3_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298811562907552e2f83d_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882988184c9094baef4a3c0_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829881f3ca1e2904c46330_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298810a28a50eea1b2328_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829881d124539073af40d3_Helder-glazen-schuifwanden.avif"
      },
      "zwart": {
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ecd3cebf62af443833_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ec28f18c59f66e79bc_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ecc695395b5ed52475_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299eca6209dc2bb0c3adf_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ecd876de142e7c4d30_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ecccdb8cb2dc09f92d_Helder-glazen-schuifwanden.avif"
      }
    },
    "7": {
      "creme": {
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b21c389b3d8db070107_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b2102c421587c364bd8_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b21f122d9c2e163d311_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b21eb9f1da4d9ed683e_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b2183933ba761060ed8_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b2168780b8ba135dfc6_Helder-glazen-schuifwanden.avif"
      },
      "antraciet": {
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a7572b257c89dfd2d9e_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a75f44066d87039f815_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a757d64d4f93537ac50_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a75d2ddd64704689bd1_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a75a848b93dd35abf13_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a7502c421587c35fe67_Helder-glazen-schuifwanden.avif"
      },
      "zwart": {
        "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bf8ffa5bda9d5e625c5_Aluminium-kozijn.avif",
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bf8f44066d8703ab2c1_Aluminium-schuifpui.avif",
        "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bf8adcc77ba7256df11_Aluminium-zijwand.avif",
        "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bf803330f764a70124b_Geen-zijwand.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bf8ce75572ebea85bf3_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bf8a840d0fb01112a95_Helder-glazen-schuifwanden.avif"
      }
    },
  },
  "4.5": {
    "4": {
      "creme": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882974eb1c537cedab5ecb6_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882974eb65768321b910ee6_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882974e11c94530e3746d22_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882974e28f18c59f66d7f9e_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297637d1b36662fda5fc1_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829763e083f02d183aca77_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829763f122d9c2e162388e_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882976324f8e4cffaa0b0a5_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882976f23a237f732135927_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882976f5ddf689aa2c77454_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882976f62536c0ba06270cc_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882976fd876de142e7b5c56_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829783c54236f7a3cd4a70_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297831562907552e29efd_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297838ef948a67e9ff9c8_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829783893a65e8f2912bd3_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829783a6209dc2bb0b4c70_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829791a840d0fb010f2024_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829791b1c537cedab5fed0_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297911120b86aa820a1fc_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297918cffc2192bb43e23_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882979d35a208a598376383_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882979d5e3db6688ef98601_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882979d3546a43b5538e410_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882979e9e70e917a72fee22_Polycarbonaat-opaal.avif"
        }
      },
      "antraciet": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296835b5da3378c7d5c6d_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296830b2d8cf5b29d997a_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296838cffc2192bb3bd2e_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882968372b257c89dfb61ec_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882969b9e70e917a72f94aa_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882969b1738b5e7f63edc29_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882969bad14b3c1a3c196b7_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882969b070f9600243c76aa_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296a95aa7334a2724de15_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296a9222d5a61a628168e_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296a99e70e917a72f995e_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296a9a2217b2b02aeb547_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296c584803024739efdab_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296c565c3c2ad1b19a439_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296c568e111c0ebc7152f_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296c51b83dd310186ef39_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296c6a2217b2b02aec045_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296d97d1b36662fda37c6_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296d92a23a879b6b5dde6_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296d959f8d2f09df7de99_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296d90a36562219e5053e_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296eade6714aea4216be7_Aluminium-spie.jpg",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296ea8c44e035a1baefa7_Glazen-spie.jpg",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296ea536d829387e231cd_Polycarbonaat-helder.jpg",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688296ea7d64d4f93535f52f_Polycarbonaat-opaal.jpg"
        }
      },
      "zwart": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297ea35a208a59837a146_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297ea4700304426cdc5dc_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297ea1120b86aa820ca44_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297ea5e3db6688efa3312_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297fe472c1642c1977575_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297fed544208fe9570c8a_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297fe0f3473c31e9220be_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688297fe40275ab755e93758_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298138f6b1921feb8f21f_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829813ad14b3c1a3c23be1_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882981302c421587c350321_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829813fad0f1daaf822a32_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882981f83d98a67cbff0555_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882981f841d4a9ba9768c6c_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882981f68780b8ba1348b8c_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882981fadcc77ba72552646_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882981f7d64d4f93536709a_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882983bce75572ebea6e423_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882983bd3cb046768d284e9_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882983ba3e6a08f4e1dac0b_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882983bc260dd99486c2af6_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882985c68e111c0ebc7ba41_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882985c5ae557270ad7aa50_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882985cb1c537cedab64b36_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882985ca9626b87dba6e949_Polycarbonaat-opaal.avif"
        }
      }
    },
    "5": {
      "creme": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299459b6619a6be6c6b6e_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829945ad14b3c1a3c2aeb1_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829945ce75572ebea74ba3_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829945752a4ce016687fb6_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829951156877a67e3343a5_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829951bd632928c6444fbd_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299519fb6f0b9869f4c5e_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829951b1c537cedab6b19f_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882996772b257c89dfcbce7_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829967f12669fca4f9fe1d_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882996743be2b31063a4b1f_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299677fa0e557e73e3f47_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882998347dfbaed4ef0035b_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882998388ea3d1a9950344e_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829983c54236f7a3ce8df2_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882998d65c3c2ad1b1aeed5_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882998343be2b31063a6136_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882999d1738b5e7f6402a5f_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882999dbd632928c6446d4d_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882999dc54236f7a3ce9a78_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882999d63fcfe57f7a89235_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299aeb65768321b921a0d_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299aedb2322a0743efaf2_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ae9fb6f0b9869f74db_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ae68e111c0ebc85164_Polycarbonaat-opaal.avif"
        }
      },
      "antraciet": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298a41120b86aa8212491_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298a4d9d4cc33543525a5_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298a9d3cebf62af43a01a_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298a45ddf689aa2c81a0c_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298b703330f764a6e89f0_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298b61b83dd310187d51a_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298b69cf7c4c6c0207c8e_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298b6a7c0eb3814f0f615_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298c4de6714aea42237ba_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298c4e7f16a47ef35290c_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298c4e7f16a47ef352910_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298c4ffa5bda9d5e4d5ea_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298d413d3cbab35a84d4e_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298d4a9626b87dba71fa9_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298d4330a55533b8c3a94_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298d4548a3286bef6612b_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298d4842ebe1f36b9a039_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298e1ff046c75a84a087f_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298e1307ee9b4a13189ad_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298e160510b95799e6f91_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298e1548a3286bef6653b_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298f4d124539073af6338_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298f47d1b36662fdb280b_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298f4edf4ca2b558016dd_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298f4c034bd156b5f7278_Polycarbonaat-opaal.avif"
        }
      },
      "zwart": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a05fad0f1daaf82fee5_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a05070f9600243e09a3_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a051fd614e4e6e8e958_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a05d8feacb8ad183eec_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a11893a65e8f2921add_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a108ef948a67ea131b3_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a1020c5f58a5d34ed54_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a10ab22aa0f544f693f_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a2417ab411dd159d469_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a24db2322a0743f22a4_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a24a14229706ba2975a_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a250b0dd640a9452981_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a340f3473c31e931958_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a3468e111c0ebc87fe5_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a3402c421587c35e40f_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a348b088ef54280a115_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a34d8feacb8ad185694_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a44de6714aea422bbb1_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a4454685edcd079ccac_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a4465c3c2ad1b1b4d02_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a440b2d8cf5b29f22f1_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a52af0c9a8d437c2a9f_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a524ddde03f62ddcb79_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a522a23a879b6b797bb_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a52eb9f1da4d9ed19f8_Polycarbonaat-opaal.avif"
        }
      }
    },
    "6": {
      "creme": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299459b6619a6be6c6b6e_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829945ad14b3c1a3c2aeb1_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829945ce75572ebea74ba3_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829945752a4ce016687fb6_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829951156877a67e3343a5_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829951bd632928c6444fbd_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299519fb6f0b9869f4c5e_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829951b1c537cedab6b19f_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882996772b257c89dfcbce7_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829967f12669fca4f9fe1d_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882996743be2b31063a4b1f_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299677fa0e557e73e3f47_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882998347dfbaed4ef0035b_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882998388ea3d1a9950344e_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829983c54236f7a3ce8df2_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882998d65c3c2ad1b1aeed5_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882998343be2b31063a6136_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882999d1738b5e7f6402a5f_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882999dbd632928c6446d4d_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882999dc54236f7a3ce9a78_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6882999d63fcfe57f7a89235_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299aeb65768321b921a0d_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299aedb2322a0743efaf2_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ae9fb6f0b9869f74db_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688299ae68e111c0ebc85164_Polycarbonaat-opaal.avif"
        }
      },
      "antraciet": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298a41120b86aa8212491_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298a4d9d4cc33543525a5_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298a9d3cebf62af43a01a_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298a45ddf689aa2c81a0c_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298b703330f764a6e89f0_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298b61b83dd310187d51a_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298b69cf7c4c6c0207c8e_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298b6a7c0eb3814f0f615_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298c4de6714aea42237ba_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298c4e7f16a47ef35290c_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298c4e7f16a47ef352910_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298c4ffa5bda9d5e4d5ea_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298d413d3cbab35a84d4e_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298d4a9626b87dba71fa9_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298d4330a55533b8c3a94_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298d4548a3286bef6612b_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298d4842ebe1f36b9a039_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298e1ff046c75a84a087f_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298e1307ee9b4a13189ad_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298e160510b95799e6f91_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298e1548a3286bef6653b_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298f4d124539073af6338_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298f47d1b36662fdb280b_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298f4edf4ca2b558016dd_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688298f4c034bd156b5f7278_Polycarbonaat-opaal.avif"
        }
      },
      "zwart": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a05fad0f1daaf82fee5_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a05070f9600243e09a3_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a051fd614e4e6e8e958_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a05d8feacb8ad183eec_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a11893a65e8f2921add_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a108ef948a67ea131b3_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a1020c5f58a5d34ed54_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a10ab22aa0f544f693f_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a2417ab411dd159d469_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a24db2322a0743f22a4_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a24a14229706ba2975a_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a250b0dd640a9452981_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a340f3473c31e931958_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a3468e111c0ebc87fe5_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a3402c421587c35e40f_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a348b088ef54280a115_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a34d8feacb8ad185694_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a44de6714aea422bbb1_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a4454685edcd079ccac_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a4465c3c2ad1b1b4d02_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a440b2d8cf5b29f22f1_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a52af0c9a8d437c2a9f_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a524ddde03f62ddcb79_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a522a23a879b6b797bb_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a52eb9f1da4d9ed19f8_Polycarbonaat-opaal.avif"
        }
      }
    },
    "7": {
      "creme": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b5611c94530e3763acf_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b56f44066d8703a6693_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b5623a237f73215212f_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b565135ecb371b3e793_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b67321b761a25255cc0_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b67b1c537cedab7b6c4_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b6743be2b31063b2fea_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b67a1943db50b8d7a96_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b79793217378ced7546_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b79e083f02d183c7161_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b79548a3286bef784d0_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b798480302473a14fd9_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bbd548a3286bef7a378_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bbd4700304426cf4d0e_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bbd741e06ee04a0259a_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bbd098ecf872f3a4a96_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bbd28f18c59f66f2cd3_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bcc2a7b289052c75a56_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bcc825ab90873d7a976_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bcc35fd39d8d8384c18_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bccaf9a5fee51847172_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bdac3d2ff6a741f921d_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bdaf63523136d0b4479_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bda7b975feb9d3e7884_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829bda11c94530e3768ca3_Polycarbonaat-opaal.avif"
        }
      },
      "antraciet": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a906cad4066b154dae6_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a90c54236f7a3ceeca1_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a90bd5071ea1462ad74_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829a915b5da3378c7f16b6_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aa6321b761a25251266_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aa68c99aa23c5fdfbcd_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aa66f14a2eda98a095d_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aa635a208a59838d099_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aba43be2b31063ae04c_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aba83933ba76105ec41_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aba09eaf86a8f2ef3ae_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829abaf462a023e04e61cf_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aceba66cee6e236b352_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829acea10cb3e8b738089f_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829ace5e3db6688efbab01_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829ace125612e3b90b5fc6_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829ace741e06ee049fc87f_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aedddc57c10b5de4891_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aedddc57c10b5de4891_Aluminium-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aee5248bd4127b0db9a_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829aee13d3cbab35a94789_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829afba6209dc2bb0cb33c_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829b08a14229706ba31bc4_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829afb0994cc27a8afe37d_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829afccb10221ae4810164_Polycarbonaat-opaal.avif"
        }
      },
      "zwart": {
        "Aluminium-kozijn": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c1326b7bf42db5022c3_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c130a28a50eea1c969f_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c13a217b575415f0191_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c1361e8c5f1f5092301_Polycarbonaat-opaal.avif"
        },
        "Aluminium-schuifpui": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c1f08b95509ee46c160_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c1f548a3286bef7dce6_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c1f63fc3ada6374982c_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c1fd2ddd64704695f5e_Polycarbonaat-opaal.avif"
        },
        "Aluminium-zijwand": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c367b975feb9d3e9751_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c36c54236f7a3cfc946_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c36538b223a5b3882f9_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c3641474dd53c072b19_Polycarbonaat-opaal.avif"
        },
        "Geen-zijwand": {
          "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c4dad55221c553023d2_Geen-spie.avif",
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c4dab22aa0f545078f9_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c4da10cb3e8b738a204_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c4d722bda8015ba0fbc_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c4d7b975feb9d3ea0b7_Polycarbonaat-opaal.avif"
        },
        "Getint-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c5e2790455483914c80_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c5e221f91a8fa53fc31_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c5ef818f4a4d0e3fe4c_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c5f7a0334c4ebb81890_Polycarbonaat-opaal.avif"
        },
        "Helder-glazen-schuifwanden": {
          "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c6e8dbb531fdbb261a1_Aluminium-spie.avif",
          "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c6ecc756056b27319fe_Glazen-spie.avif",
          "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c6e311800378daf9452_Polycarbonaat-helder.avif",
          "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68829c6ef5188381cec0bead_Polycarbonaat-opaal.avif"
        }
      }
    },
  },
  "5": {
    "creme": {
      "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6af80f97c11de55a28a_Aluminium-kozijn.avif",
      "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6af2a63a1885014f130_Aluminium-schuifpui.avif",
      "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6affa1a1189992e5795_Aluminium-zijwand.avif",
      "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6af0007bdc0d69b4728_Geen-zijwand.avif",
      "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6afc00d6d6ea01d9f36_Getint-glazen-schuifwanden.avif",
      "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6aff74b709059469960_Helder-glazen-schuifwanden.avif"
    },
    "antraciet": {
      "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68849975584d53ea85533ed7_Aluminium-kozijn.avif",
      "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68849975bf4b436c8432e321_Aluminium-schuifpui.avif",
      "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6884997528e1e50ce7078083_Aluminium-zijwand.avif",
      "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68849975efad34b3dc498174_Geen-zijwand.avif",
      "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688499756af475a86bed7932_Getint-glazen-schuifwanden.avif",
      "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688499751da9335bae8af9a7_Helder-glazen-schuifwanden.avif"
    },
    "zwart": {
      "Aluminium-kozijn": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6c3f74b709059469b1b_Aluminium-kozijn.avif",
      "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6c387543ef5d42c4b0a_Aluminium-schuifpui.avif",
      "Aluminium-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6c313f8918ac536c9d2_Aluminium-zijwand.avif",
      "Geen-zijwand": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6c3efcab4b193f17682_Geen-zijwand.avif",
      "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6c38d241af6e80a65d4_Getint-glazen-schuifwanden.avif",
      "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f6c30c9a07b93b69bc6d_Helder-glazen-schuifwanden.avif"
    }
  },
  "5.5": {
    "creme": {
      "Aluminium-kozijn": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f79440d2b35d3d23e899_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f79432ebea93d1e58fa4_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f794938c163faf758041_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f794161faac4bd91a9f4_Polycarbonaat-opaal.avif"
      },
      "Aluminium-schuifpui": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7a3b2d8f485921f5786_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7a31f429b43900e4473_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7a3aaff27465da2dc1d_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7a3af72390465b5e670_Polycarbonaat-opaal.avif"
      },
      "Aluminium-zijwand": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7b3740a71f6296a06e6_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7b36756b58458d87e55_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7b30584072faaccf0b6_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7b31a40063af823912b_Polycarbonaat-opaal.avif"
      },
      "Geen-zijwand": {
        "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7c3d36be5e41afd8659_Geen-spie.avif",
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7c30842b3ce675a941d_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7c39c093fad609b6c29_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7c3d57507843b15aa8b_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7c39297eaa439b48ddc_Polycarbonaat-opaal.avif"
      },
      "Getint-glazen-schuifwanden": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7d2aa5f64c1e43906c9_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7d216d96d9d69c17b5d_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7d249247233db821ab5_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7d21edcf2430c3438a1_Polycarbonaat-opaal.avif"
      },
      "Helder-glazen-schuifwanden": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7e7dfdca9f9140d4c7f_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7e74d456b2ded382524_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7e7ea8f52f9e4c1f106_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7e724ae8991693d42f0_Polycarbonaat-opaal.avif"
      }
    },
    "antraciet": {
      "Aluminium-kozijn": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7164c79d5e6131e2953_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f716c4a168e60b48f3b4_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f71666bb85d741c01b71_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f71609370b706fba5973_Polycarbonaat-opaal.avif"
      },
      "Aluminium-schuifpui": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f726f34c5e02ca3d8ce2_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7265bb87aa37c168a61_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f726244a251ec29d743e_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f726801227c046005b7b_Polycarbonaat-opaal.avif"
      },
      "Aluminium-zijwand": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f73650f20ac7be8f1c62_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f736b18ab1756c9cb74e_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f73645dc217b10626513_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f736253078ca0c590d38_Polycarbonaat-opaal.avif"
      },
      "Geen-zijwand": {
        "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7450cd7e54403ade628_Geen-spie.avif",
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f745efcab4b193f18dd1_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f745105219c626f85dc7_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f74572116e4c8a3ff198_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f7450a7a34e95575d3ba_Polycarbonaat-opaal.avif"
      },
      "Getint-glazen-schuifwanden": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f76059c4754926ee4b03_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f760a43bb3fbe72fb41d_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f760d389d8df9913c5d2_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f760d36be5e41afd79dd_Polycarbonaat-opaal.avif"
      },
      "Helder-glazen-schuifwanden": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f770afbe13287c4c273e_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f77009370b706fba69ef_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f770e93c1e38a3934d2f_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f770ad2c5c0d137fefdc_Polycarbonaat-opaal.avif"
      }
    },
    "zwart": {
      "Aluminium-kozijn": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f80c66bb85d741c04645_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f80c5ce5b5ccb75fbbb4_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f80c30d0419e407a2763_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f80c37c8f3408b54c6d0_Polycarbonaat-opaal.avif"
      },
      "Aluminium-schuifpui": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f81b0007bdc0d69b7a43_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f81b5bb87aa37c16c631_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f81b486e9c6d7e3bf5c2_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f81bfe99593508c3d0d1_Polycarbonaat-opaal.avif"
      },
      "Aluminium-zijwand": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f82f50f20ac7be8f3c40_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f82f1bfa52469d057a35_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f82feaa76c813f2704d3_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f830a76e2babd6f1b343_Polycarbonaat-opaal.avif"
      },
      "Geen-zijwand": {
        "Geen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f8404933c2b4d514fd74_Geen-spie.avif",
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f8405632001a61b18b86_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f840ff23fbbaeaf64cf8_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f84004366a92d903e883_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f84080fdbf02fa0fd0a4_Polycarbonaat-opaal.avif"
      },
      "Getint-glazen-schuifwanden": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f85740d2b35d3d23fdea_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f857ea8f52f9e4c20563_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f8576780c9ca9b5e4b9a_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f8576780c9ca9b5e4bab_Polycarbonaat-opaal.avif"
      },
      "Helder-glazen-schuifwanden": {
        "Aluminium-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f866d36be5e41afd97c0_Aluminium-spie.avif",
        "Glazen-spie": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f866aa73283c099f9578_Glazen-spie.avif",
        "Polycarbonaat-helder": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f866aa73283c099f9574_Polycarbonaat-helder.avif",
        "Polycarbonaat-opaal": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885f86640d2b35d3d23ff1a_Polycarbonaat-opaal.avif"
      }
    }
  },
  "6": {
    "4": {
      "creme": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa720584072faacd6cdc_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa72253078ca0c59b68e_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa72ea775e4767927249_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fab25068c92a751cb45f_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa7231a371dd91d27a98_Helder-glazen-schuifwanden.avif"
      },
      "antraciet": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa5b44d75f6ed5423991_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa5b192044cdab0deb45_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa5bb18ab1756c9d3008_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa5b8c36de15c2628377_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa5b5c3bbaacad95e003_Helder-glazen-schuifwanden.avif"
      },
      "zwart": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa854822f4cb466ddfec_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa858c36de15c2628a59_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa856991f33c6c5de228_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa8587543ef5d42cd38d_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fa854822f4cb466ddfff_Helder-glazen-schuifwanden.avif"
      }
    },
    "5": {
      "creme": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fae940d710d7fc7acd01_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fae911f8986a34f7383d_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fae94556601bce8abf39_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fae98b03c8659ce59090_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fae9eaa76c813f2797e7_Helder-glazen-schuifwanden.avif"
      },
      "antraciet": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885facf038fbf5446d05b14_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885facf04366a92d9046363_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885facfad2c5c0d138055b4_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885facfff3dcd6cc8b3f2c7_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885facf5c3bbaacad95f331_Helder-glazen-schuifwanden.avif"
      },
      "zwart": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb126ef73f6e48cfec78_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb12af72390465b680a1_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb12486e9c6d7e3c67ed_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb1247ec9f1d1566df7f_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb120cd7e54403ae85bc_Helder-glazen-schuifwanden.avif"
      }
    },
    "6": {
      "creme": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fae940d710d7fc7acd01_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fae911f8986a34f7383d_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fae94556601bce8abf39_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fae98b03c8659ce59090_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fae9eaa76c813f2797e7_Helder-glazen-schuifwanden.avif"
      },
      "antraciet": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885facf038fbf5446d05b14_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885facf04366a92d9046363_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885facfad2c5c0d138055b4_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885facfff3dcd6cc8b3f2c7_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885facf5c3bbaacad95f331_Helder-glazen-schuifwanden.avif"
      },
      "zwart": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb126ef73f6e48cfec78_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb12af72390465b680a1_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb12486e9c6d7e3c67ed_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb1247ec9f1d1566df7f_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb120cd7e54403ae85bc_Helder-glazen-schuifwanden.avif"
      }
    },
    "7": {
      "creme": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb50acecba76737d7419_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb50941095af1752087a_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb51ad2c5c0d13806ae8_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb502a63a1885015c993_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb514b5c50beb65a7bc5_Helder-glazen-schuifwanden.avif"
      },
      "antraciet": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb39520e9bfc8e117392_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb396a3b290a1fa6debd_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb39701f5855f4a6a0c2_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb394f10b7c298f931b1_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb3962b247ca76d9ed88_Helder-glazen-schuifwanden.avif"
      },
      "zwart": {
        "Aluminium-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb7aa43bb3fbe730726e_Aluminium-schuifpui.avif",
        "Getint-schuifpui": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb7a520e9bfc8e117f63_Getint-schuifpui.avif",
        "Open-voorkant": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb7a0007bdc0d69c0946_Open-voorkant.avif",
        "Getint-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb7aeaa76c813f27b1c8_Getint-glazen-schuifwanden.avif",
        "Helder-glazen-schuifwanden": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fb7a8f1b6e4a62b296c8_Helder-glazen-schuifwanden.avif"
      }
    },
  },
  "7": {
    "4": {
      "creme": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688602edcdf0a5f4b699cebc_Ja.avif"
      },
      "antraciet": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6885fcc9ef3624273afe38c5_Ja.avif"
      },
      "zwart": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/688602f696d37b0d8dacf775_Ja.avif"
      }
    },
    "5": {
      "creme": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6886030705b1f2db80125d92_Ja.avif"
      },
      "antraciet": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68860300253078ca0c5b254e_Ja.avif"
      },
      "zwart": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6886030e32ebea93d1e7bd32_Ja.avif"
      }
    },
    "6": {
      "creme": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6886030705b1f2db80125d92_Ja.avif"
      },
      "antraciet": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68860300253078ca0c5b254e_Ja.avif"
      },
      "zwart": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6886030e32ebea93d1e7bd32_Ja.avif"
      }
    },
    "7": {
      "creme": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68860320aaff27465da4cf03_Ja.avif"
      },
      "antraciet": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6886031cf74b709059488ef9_Ja.avif"
      },
      "zwart": {
        "Ja": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/68860325ab719c8ed235a35e_Ja.avif"
      }
    },
  },
  "8": {
    "creme": {
      "Koud-wit-1w": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6886038f8d241af6e80d3d8c_Koud-wit-1w.avif",
      "Warm-wit-3w": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6886038fab719c8ed235b387_Warm-wit-3w.avif"
    },
    "antraciet": {
      "Koud-wit-1w": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6886038432ebea93d1e7de1a_Koud-wit-1w.avif",
      "Warm-wit-3w": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6886038425b283ac060480bf_Warm-wit-3w.avif"
    },
    "zwart": {
      "Koud-wit-1w": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6886039e5bb87aa37c18dc79_Koud-wit-1w.avif",
      "Warm-wit-3w": "https://cdn.prod.website-files.com/644970d7bfb0ffbd0d52d837/6886039e9297eaa439b66eae_Warm-wit-3w.avif"
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
