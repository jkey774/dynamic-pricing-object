(function() {
  "use strict";
  var pricing = {
    pricingInfo: (function() {
      var info = digitalData.page.pageInfo;
      return {
        communityName: digitalData.page.pageInfo.pageName,
        careLevels: info.levelsOfCare,
        IL: info.pricingIL,
        AL: info.pricingAL,
        MC: info.pricingMC,
        careIncluded: {
          IL: "0",
          AL: info.pricingAllCareIncludedAL || "n/a",
          MC: info.pricingAllCareIncludedMC || "n/a"
        },
        medicaid: info.pricingMedicaid,
        semiPrivate: info.pricingSemiPrivateAvailable
      };
    })(),
    strConstants: {
      careIconLinkTails: {
        MC: "memory-care",
        AL: "assisted-living",
        IL: "independent-living"
      },
      careDescriptions: {
        MC: [
          "Our memory care program is deeply rooted in a person-centered approach. We offer the necessary resources and nurturing staff to care for those with Alzheimer’s and other forms of dementia.",
          "Personalize care options to get the support your loved one needs."
        ],
        AL: [
          "Our caregivers are available to provide assistance with daily living, balancing independence with assistance while delivering service with compassion, understanding, and respect.",
          "Personal care with a personalized monthly rate."
        ],
        IL: [
          "Enjoy carefree living and leave the responsibility of home maintenance behind. You'll have the comforts of home with the added benefits of a warm and caring staff.",
          "Customize your experience for a full and independent lifestyle."
        ]
      },
      svgLogo: '<svg class="pricing-info__item--leaf" height="82px" version="1.1" viewbox="0 0 50 82" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <polygon id="path-1" points="0.0972927242 0.353634043 43.1687817 0.353634043 43.1687817 31.6585191 0.0972927242 31.6585191"></polygon></defs><g fill="none" fill-rule="evenodd" id="Page-1" opacity="0.146266" stroke="none" stroke-width="1"><g id="community-pricing-overview-section-three" transform="translate(-301.000000, -2532.000000)"><g id="3-Care-Price-Blocks" transform="translate(139.000000, 2161.000000)"><g id="Independant-Living-Block-Price"><g id="Leaf" transform="translate(162.000000, 371.000000)"><path d="M29.4919245,7.92416559 C29.7928342,7.47658922 30.1189598,7.05377993 30.4568528,6.65043048 C30.2450393,6.09847859 30.0180962,5.57306286 29.7911532,5.08656681 C28.6429894,2.58155443 27.504912,1 27.504912,1 C27.504912,1 20.2410531,6.79726383 19.1735802,15.0853874 C18.1010641,23.371742 23.6300694,31 23.6300694,31 C23.6300694,31 27.4141348,27.97311 29.9256379,23.1665291 C27.8478482,23.9307701 26.3668346,24.1837481 26.3668346,24.1837481 C26.3668346,24.1837481 24.8673293,14.7227267 29.4919245,7.92416559" fill="#007845" id="Fill-49"></path><path d="M42.6059681,0 C42.6059681,0 34.8082157,1.32261209 30.0327185,6.90103464 C31.1314168,9.67386415 32.0097075,13.2243965 31.5271486,16.9025341 C31.2833644,18.72867 30.7256665,20.4409957 30.0076722,21.9860549 C29.8490455,22.3326586 29.6720516,22.6706403 29.5050761,23 C31.3635126,22.3240366 33.6994988,21.2618084 35.8584911,19.611561 C37.1859457,18.5855451 38.4532892,17.3491528 39.4918764,15.8472035 C42.001517,12.2414905 42.6961348,7.85807467 42.8080083,4.61620933 C42.9132029,1.90890688 42.6059681,0 42.6059681,0" fill="#6DAB88" id="Fill-50"></path><path d="M32.2079559,16.948542 C32.7507618,13.2898799 31.7628175,9.75814751 30.526948,7 C30.1494256,7.39108062 29.7850507,7.80102916 29.4488491,8.23499142 C24.281863,14.8267581 25.9572362,24 25.9572362,24 C25.9572362,24 27.611949,23.754717 29.9334302,23.0137221 C30.1212523,22.6861063 30.3203437,22.3499142 30.4987747,22.0051458 C31.3064098,20.4682676 31.9337356,18.7650086 32.2079559,16.948542" fill="#288F62" id="Fill-51"></path><path d="M6.92144585,38 C6.92144585,38 4.75888325,42.8028692 4.75888325,48.4731635 C7.41914029,50.1231759 11.2240945,53.1202078 13.1426263,57.6841454 C14.1797573,60.1565669 14.5377762,62.7778877 14.547409,65.1723967 C15.3774349,65.7177838 15.9168715,66 15.9168715,66 C15.9168715,66 19.7282476,57.5560228 17.2413808,49.8253772 C14.7625414,42.0878061 6.92144585,38 6.92144585,38" fill="#6DAB88" id="Fill-52"></path><path d="M44.211082,42.7870224 C47.2714222,36.8346522 46.5670721,30 46.5670721,30 C46.5670721,30 37.1343728,30.9464165 31.9172878,37.2957269 C26.6984551,43.648504 27.6737092,53 27.6737092,53 C27.6737092,53 28.3570861,52.9306655 29.4529361,52.7053282 C30.5400473,50.6027583 32.0518659,48.4672545 34.1404476,46.7806918 C37.2689508,44.2655814 41.103552,43.2099631 44.211082,42.7870224" fill="#6DAB88" id="Fill-53"></path><path d="M44.0526184,42.2801431 C43.5699255,43.3543463 42.9834454,44.3972798 42.2635247,45.3703166 C38.6688631,50.3017184 32.9523298,52.1686982 30.1418382,52.8051267 C28.0199665,57.4183143 27.6015228,61.9211384 27.6015228,61.9211384 C27.6015228,61.9211384 36.486037,62.9622326 42.5369957,57.4790141 C48.5846596,51.9994744 49.4923858,42.0759709 49.4923858,42.0759709 C49.4923858,42.0759709 47.1481129,41.8074201 44.0526184,42.2801431" fill="#007845" id="Fill-54"></path><g id="Group-58" transform="translate(0.000000, 43.000000)"><mask fill="white" id="mask-2"><use xlink:href="#path-1"></use></mask><g id="Clip-56"></g><path d="M41.4077834,3.2704 C42.1163988,2.35196596 42.6936689,1.36755745 43.1687817,0.353634043 C40.285674,0.777259574 36.7280034,1.83458723 33.8254371,4.35377021 C31.8876904,6.04306383 30.4850536,8.18202553 29.4764523,10.288 C32.2428088,9.68728511 37.8695713,7.92507234 41.4077834,3.2704" fill="#288F62" id="Fill-55" mask="url(#mask-2)"></path><path d="M5.24083474,11.8436085 C4.62464749,9.94250213 4.39114495,7.99278298 4.39114495,6.13160851 C2.69176537,5.09685106 1.45614777,4.58988936 1.45614777,4.58988936 C1.45614777,4.58988936 -1.64749013,13.4078979 1.5177665,20.8769021 C4.68626622,28.3511149 12.9220953,31.6585191 12.9220953,31.6585191 C12.9220953,31.6585191 14.3085166,27.7191489 14.2777073,22.8769702 C11.9021433,21.3161532 7.09426114,17.5781787 5.24083474,11.8436085" fill="#007845" id="Fill-57" mask="url(#mask-2)"></path></g><path d="M4.75888325,48 C4.75888325,49.8894764 4.9836755,51.868844 5.57687729,53.7988595 C7.36116581,59.6206325 11.9897008,63.4154484 14.2766497,65 C14.2672834,62.5623639 13.9191676,59.893831 12.9107246,57.3768792 C11.0452611,52.7307413 7.34555523,49.6797304 4.75888325,48" fill="#288F62" id="Fill-59"></path><path d="M15.2483683,81.9847655 C24.7673019,71.2262032 22.8268296,60.8331383 24.3779202,47.5545682 C26.4744669,29.5315282 37.1020119,23.040016 36.9185842,23.1606826 C37.2661315,22.9350885 37.1567184,22.9420837 36.6337885,23.2131463 C33.715035,24.7275993 23.9627943,31.1246768 21.9627885,49.9783926 C20.6916665,61.9593597 23.190467,68.0469012 15.2322782,81.9777703 C15.2226241,82.0022534 15.2322782,82.0092486 15.2483683,81.9847655" fill="#007845" id="Fill-60"></path></g></g></g></g></g></svg>',
      communitySpecials: {
        medicaid: '<p class="pricing-info__footer-medicaid"><span class="fa fa-arrow-down"></span>Medicaid accepted at this community</p>',
        semiPrivate: '<p class="pricing-info__footer-semiprivate"><span class="fa fa-dollar"></span>Semi-private rooms available at a lower cost</p>'
      }
    },
    domConstants: {
      communityName:   document.querySelector(".pricing-info__community-name"),
      date:            document.querySelector(".pricing-info__date"),
      pricingRow:      document.getElementById("pricing-info-row"),
      pricingFooter:   document.querySelector('.pricing-info__footer-community-specials')
    },
    contentRendering: {
      getLastBusinessDay: function() {
        var today = new Date();
        var dayOfWeek = today.getDay();
        var dayOffset;
        var lastBusinessDay = new Date(today);
        if (dayOfWeek === 1) {
          dayOffset = 3;
        } else if (dayOfWeek === 0) {
          dayOffset = 2;
        } else {
          dayOffset = 1;
        }
        lastBusinessDay.setDate(today.getDate() - dayOffset);
        var dd = lastBusinessDay.getDate();
        var mm = lastBusinessDay.getMonth() + 1;
        var yyyy = lastBusinessDay.getFullYear();
        if (dd < 10) { dd = "0" + dd; }
        if (mm < 10) { mm = "0" + mm; }
        lastBusinessDay = mm + "/" + dd + "/" + yyyy;
        return lastBusinessDay;
      },
      renderHeader: function() {
        pricing.domConstants.communityName.insertAdjacentHTML('beforeEnd', digitalData.page.pageInfo.pageName);
        pricing.domConstants.date.insertAdjacentHTML('beforeEnd', 'As of ' + pricing.contentRendering.getLastBusinessDay());
      },
      // check whether price difference between Assisted Living and Memory Care is greater than 1500
      checkLargeAlMcPriceGap: function() {
        if (
          pricing.pricingInfo.AL &&
          pricing.pricingInfo.MC - pricing.pricingInfo.AL > 1500
        ) {
          return true;
        }
      },
      // show 'Call for Pricing' for Memory Care if any of the following are true:
      // a) price is NaN
      // b) price is less than 500
      // c) difference between Assisted Living and Memory Care price is greater than 1500
      renderPrice: function(price, careId) {
        if (
          price === "NaN" ||
          price < 500 ||
          (careId === "MC" &&
           pricing.contentRendering.checkLargeAlMcPriceGap() === true)
        ) {
          return "Call for Pricing";
        } else {
          return (
            '<p class="pricing-info__item--price-label">– Base Rental Rate –</p><p>Starting at <span id="itemPrice">$' +
            price +
            '</span><span class="pricing-info__item--price-asterisk">*</span>per month</p>'
          );
        }
      },
      // return the care included flag used in factory content classname for unique css styling
      getCareIncludedClassNum: function(careIncluded) {
        if (careIncluded === "1") {
          return "1";
        } else {
          return "0";
        }
      },
      // check whether care is included in price for the specific care level
      checkIfCareIncluded: function(careIncluded) {
        if (careIncluded === "1") {
          return '<div class="pricing-info__item--care-included"><span class="fa fa-heart"></span>Some Care Included</div>';
        } else {
          return "";
        }
      },
      // check whether medicaid is accepted at the community
      checkIfMedicaid: function() {
        if (pricing.pricingInfo.medicaid === '1') {
          pricing.domConstants.pricingFooter.insertAdjacentHTML('beforeEnd', pricing.strConstants.communitySpecials.medicaid);
        }
      },
      // check whether semiprivate rooms are available at the community
      checkIfSemiPrivate: function() {
        if (pricing.pricingInfo.semiPrivate === '1') {
          pricing.domConstants.pricingFooter.insertAdjacentHTML('beforeEnd', pricing.strConstants.communitySpecials.semiPrivate);
        }
      }
    },
    init: function() {
      pricing.contentRendering.renderHeader();
      pricing.contentRendering.checkIfMedicaid();
      pricing.contentRendering.checkIfSemiPrivate();

      // create arrays for each set of care level data
      function getCareName(item) {
        var careProfile = [item.care_type_id, item.name];
        var price = pricing.pricingInfo;
        var strConstants = pricing.strConstants;
        if (item.care_type_id === "IL") {
          careProfile.push(
            price.careIncluded.IL,
            strConstants.careIconLinkTails.IL,
            strConstants.careDescriptions.IL[0],
            parseInt(price.IL, 10).toLocaleString("en"),
            strConstants.careDescriptions.IL[1]
          );
        } else if (item.care_type_id === "AL") {
          careProfile.push(
            price.careIncluded.AL,
            strConstants.careIconLinkTails.AL,
            strConstants.careDescriptions.AL[0],
            parseInt(price.AL, 10).toLocaleString("en"),
            strConstants.careDescriptions.AL[1]
          );
        } else if (item.care_type_id === "MC") {
          careProfile.push(
            price.careIncluded.MC,
            strConstants.careIconLinkTails.MC,
            strConstants.careDescriptions.MC[0],
            parseInt(price.MC, 10).toLocaleString("en"),
            strConstants.careDescriptions.MC[1]
          );
        }
        return careProfile;
      }
      var careProfiles = pricing.pricingInfo.careLevels.map(getCareName);
      
      // Factory for dynamic content
      function createPriceCard(careId, careName, careIncluded, iconLinkTail, descriptionA, price, descriptionB) {
        return {
          careId: careId,
          careName: careName,
          careIncluded: careIncluded,
          iconLinkTail: iconLinkTail,
          descriptionA: descriptionA,
          price: price,
          descriptionB: descriptionB,
          render: function() {
            pricing.domConstants.pricingRow.insertAdjacentHTML(
              "beforeEnd",
              '<div class="col-md-4 text-center pricing-info__care-included-' +
              pricing.contentRendering.getCareIncludedClassNum(careIncluded) +
              '" id="pricingBlock' +
              careId +
              '"><div class="pricing-info__item"><img src="./images/' +
              iconLinkTail +
              '-icon.svg" alt="' +
              careName +
              ' Icon" height="84px" width="84px" /><p class="pricing-info__item--heading">' +
              careName +
              '</p><p class="pricing-info__item--description">' +
              descriptionA +
              '</p><div class="pricing-info__item--price-footer"><div class="pricing-info__item--price">' +
              pricing.contentRendering.renderPrice(price, careId) +
              '</div><div class="pricing-info__item--footer"><p>' +
              descriptionB +
              "</p>" +
              pricing.strConstants.svgLogo +
              "</div></div></div>" +
              pricing.contentRendering.checkIfCareIncluded(careIncluded) +
              "</div>"
            );
          }
        };
      }
      // pass each careProfile array as a parameter to the factory
      for (var i = 0, len = careProfiles.length; i < len; i++) {
        createPriceCard.apply({}, careProfiles[i]).render();
      }
    }
  };
  pricing.init();
})();
