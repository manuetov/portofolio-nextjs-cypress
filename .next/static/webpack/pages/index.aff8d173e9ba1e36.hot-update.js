"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; }\n/* harmony export */ });\nvar projects = [\n    {\n        title: \"Andaluc\\xeda Turismo\",\n        description: \"Este sitio web es un blog tur\\xedstico de Andaluc\\xeda, los post se pueden publicar mediante  \",\n        image: \"/images/andturismo.jpg\",\n        tags: [\n            \"NextJs\",\n            \"React\",\n            \"GraphQl\"\n        ],\n        source: \"https://github.com/manuetov/turiblog_next_graphcms\",\n        visit: \"https://www.andaluciaturismo.es/\",\n        id: 0\n    },\n    {\n        title: \"Nefluxkix\",\n        description: \"While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.\",\n        image: \"/images/netfluxkix.jpg\",\n        tags: [\n            \"React\",\n            \"JavaScript\"\n        ],\n        source: \"https://github.com/manuetov/movie-video-react\",\n        visit: \"https://movie-video-trailer.netlify.app/\",\n        id: 1\n    },\n    {\n        title: \"WebRTC App\",\n        description: \"This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.\",\n        image: \"/images/lyriks.jpg\",\n        tags: [\n            \"React\",\n            \"TailWind\"\n        ],\n        source: \"https://github.com/manuetov/spotilyrics-react-shazamApi\",\n        visit: \"https://shazam-lyriks.netlify.app/\",\n        id: 2\n    },\n    {\n        title: \"Unichat\",\n        description: \"This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application\",\n        image: \"/images/4.jpg\",\n        tags: [\n            \"React\",\n            \"ChatEngine\",\n            \"Firebase\"\n        ],\n        source: \"https://google.com\",\n        visit: \"https://google.com\",\n        id: 3\n    }, \n];\nvar TimeLineData = [\n    {\n        year: 2017,\n        text: \"Started my journey\"\n    },\n    {\n        year: 2018,\n        text: \"Worked as a freelance developer\"\n    },\n    {\n        year: 2019,\n        text: \"Founded JavaScript Mastery\"\n    },\n    {\n        year: 2020,\n        text: \"Shared my projects with the world\"\n    },\n    {\n        year: 2021,\n        text: \"Started my own platform\"\n    },\n    {\n        year: 2017,\n        text: \"Started my journey\"\n    },\n    {\n        year: 2018,\n        text: \"Worked as a freelance developer\"\n    },\n    {\n        year: 2019,\n        text: \"Founded JavaScript Mastery\"\n    },\n    {\n        year: 2020,\n        text: \"Shared my projects with the world\"\n    },\n    {\n        year: 2021,\n        text: \"Started my own platform\"\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLFFBQVEsR0FBRztJQUN0QjtRQUNFQyxLQUFLLEVBQUUsc0JBQW1CO1FBQzFCQyxXQUFXLEVBQUUsZ0dBQTBGO1FBQ3JHQyxLQUFLLEVBQUUsd0JBQXdCO1FBQy9CQyxJQUFJLEVBQUU7WUFBQyxRQUFRO1lBQUUsT0FBTztZQUFFLFNBQVM7U0FBQztRQUN0Q0MsTUFBTSxFQUFFLG9EQUFvRDtRQUM1REMsS0FBSyxFQUFFLGtDQUFrQztRQUN6Q0MsRUFBRSxFQUFFLENBQUM7S0FDTjtJQUNEO1FBQ0VOLEtBQUssRUFBRSxXQUFXO1FBQ2xCQyxXQUFXLEVBQUMsdVVBQXVVO1FBQ25WQyxLQUFLLEVBQUUsd0JBQXdCO1FBQy9CQyxJQUFJLEVBQUU7WUFBQyxPQUFPO1lBQUUsWUFBWTtTQUFDO1FBQzdCQyxNQUFNLEVBQUUsK0NBQStDO1FBQ3ZEQyxLQUFLLEVBQUUsMENBQTBDO1FBQ2pEQyxFQUFFLEVBQUUsQ0FBQztLQUNOO0lBQ0Q7UUFDRU4sS0FBSyxFQUFFLFlBQVk7UUFDbkJDLFdBQVcsRUFBRSwrSkFBK0o7UUFDMUtDLEtBQUssRUFBRSxvQkFBb0I7UUFDM0JDLElBQUksRUFBRTtZQUFDLE9BQU87WUFBRSxVQUFVO1NBQUM7UUFDN0JDLE1BQU0sRUFBRSx5REFBeUQ7UUFDakVDLEtBQUssRUFBRSxvQ0FBb0M7UUFDM0NDLEVBQUUsRUFBRSxDQUFDO0tBQ047SUFDRDtRQUNFTixLQUFLLEVBQUUsU0FBUztRQUNoQkMsV0FBVyxFQUFFLGdJQUFnSTtRQUM3SUMsS0FBSyxFQUFFLGVBQWU7UUFDdEJDLElBQUksRUFBRTtZQUFDLE9BQU87WUFBRSxZQUFZO1lBQUUsVUFBVTtTQUFDO1FBQ3pDQyxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCQyxLQUFLLEVBQUUsb0JBQW9CO1FBQzNCQyxFQUFFLEVBQUUsQ0FBQztLQUNOO0NBQ0YsQ0FBQztBQUVLLElBQU1DLFlBQVksR0FBRztJQUMxQjtRQUFFQyxJQUFJLEVBQUUsSUFBSTtRQUFFQyxJQUFJLEVBQUUsb0JBQW9CO0tBQUc7SUFDM0M7UUFBRUQsSUFBSSxFQUFFLElBQUk7UUFBRUMsSUFBSSxFQUFFLGlDQUFpQztLQUFHO0lBQ3hEO1FBQUVELElBQUksRUFBRSxJQUFJO1FBQUVDLElBQUksRUFBRSw0QkFBNEI7S0FBRztJQUNuRDtRQUFFRCxJQUFJLEVBQUUsSUFBSTtRQUFFQyxJQUFJLEVBQUUsbUNBQW1DO0tBQUc7SUFDMUQ7UUFBRUQsSUFBSSxFQUFFLElBQUk7UUFBRUMsSUFBSSxFQUFFLHlCQUF5QjtLQUFHO0lBQ2hEO1FBQUVELElBQUksRUFBRSxJQUFJO1FBQUVDLElBQUksRUFBRSxvQkFBb0I7S0FBRztJQUMzQztRQUFFRCxJQUFJLEVBQUUsSUFBSTtRQUFFQyxJQUFJLEVBQUUsaUNBQWlDO0tBQUc7SUFDeEQ7UUFBRUQsSUFBSSxFQUFFLElBQUk7UUFBRUMsSUFBSSxFQUFFLDRCQUE0QjtLQUFHO0lBQ25EO1FBQUVELElBQUksRUFBRSxJQUFJO1FBQUVDLElBQUksRUFBRSxtQ0FBbUM7S0FBRztJQUMxRDtRQUFFRCxJQUFJLEVBQUUsSUFBSTtRQUFFQyxJQUFJLEVBQUUseUJBQXlCO0tBQUc7Q0FDakQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcz8xYzA2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0FuZGFsdWPDrWEgVHVyaXNtbycsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJFc3RlIHNpdGlvIHdlYiBlcyB1biBibG9nIHR1csOtc3RpY28gZGUgQW5kYWx1Y8OtYSwgbG9zIHBvc3Qgc2UgcHVlZGVuIHB1YmxpY2FyIG1lZGlhbnRlICBcIixcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2FuZHR1cmlzbW8uanBnJyxcclxuICAgICAgdGFnczogWydOZXh0SnMnLCAnUmVhY3QnLCAnR3JhcGhRbCddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL21hbnVldG92L3R1cmlibG9nX25leHRfZ3JhcGhjbXMnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL3d3dy5hbmRhbHVjaWF0dXJpc21vLmVzLycsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTmVmbHV4a2l4JyxcclxuICAgIGRlc2NyaXB0aW9uOlwiV2hpbGUgYnVpbGRpbmcgaXQgeW91J3JlIGdvaW5nIHRvIGxlYXJuIG1hbnkgYWR2YW5jZWQgUmVhY3QgJiBKYXZhU2NyaXB0IHRvcGljcywgYXMgd2VsbCBhcyBob3cgdG8gdXNlIFN0cmlwZSBmb3IgY2FyZCB0cmFuc2FjdGlvbnMuIE9uIHRvcCBvZiB0aGF0LCBhdCB0aGUgZW5kIG9mIHRoZSB2aWRlbywgeW91IHdpbGwgaGF2ZSB0aGlzIHVuaXF1ZSBhbmQgY29tcGxleCB3ZWJzaG9wIGFwcCB0aGF0IHlvdSB3aWxsIGJlIGFibGUgdG8gYWRkIHRvIHlvdXIgcG9ydGZvbGlvLiBBbmQgdHJ1c3QgbWUsIGUtY29tbWVyY2UgYXBwbGljYXRpb25zIGFyZSBpbXByZXNzaXZlLlwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL25ldGZsdXhraXguanBnJyxcclxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL21hbnVldG92L21vdmllLXZpZGVvLXJlYWN0JyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9tb3ZpZS12aWRlby10cmFpbGVyLm5ldGxpZnkuYXBwLycsXHJcbiAgICBpZDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnV2ViUlRDIEFwcCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBZb3VUdWJlIHZpZGVvLiBJbiB0aGlzIHR1dG9yaWFsLCB3ZSdyZSBnb2luZyB0byBidWlsZCBhbmQgZGVwbG95IGEgUmVhY3QgVmlkZW8gQ2hhdCBBcHBsaWNhdGlvbiB1c2luZyBXZWJSVEMuXCIsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9seXJpa3MuanBnJyxcclxuICAgICAgdGFnczogWydSZWFjdCcsICdUYWlsV2luZCddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL21hbnVldG92L3Nwb3RpbHlyaWNzLXJlYWN0LXNoYXphbUFwaScsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vc2hhemFtLWx5cmlrcy5uZXRsaWZ5LmFwcC8nLFxyXG4gICAgaWQ6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1VuaWNoYXQnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmlkZW8gdHV0b3JpYWwuIEluIHRoaXMgdmlkZW8sIHdlIHdpbGwgY3JlYXRlIGEgZnVsbCBSZWFsdGltZSBDaGF0IEFwcGxpY2F0aW9uXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvNC5qcGcnLFxyXG4gICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxyXG4gICAgaWQ6IDMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXHJcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcclxuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdXb3JrZWQgYXMgYSBmcmVlbGFuY2UgZGV2ZWxvcGVyJywgfSxcclxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScsIH0sXHJcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkJywgfSxcclxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTdGFydGVkIG15IG93biBwbGF0Zm9ybScsIH0sXHJcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcclxuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdXb3JrZWQgYXMgYSBmcmVlbGFuY2UgZGV2ZWxvcGVyJywgfSxcclxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScsIH0sXHJcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkJywgfSxcclxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTdGFydGVkIG15IG93biBwbGF0Zm9ybScsIH0sXHJcbl07Il0sIm5hbWVzIjpbInByb2plY3RzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGFncyIsInNvdXJjZSIsInZpc2l0IiwiaWQiLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n"));

/***/ })

});