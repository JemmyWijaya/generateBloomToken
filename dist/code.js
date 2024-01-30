/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

const { modes, variableIds } = figma.variables.getVariableCollectionById('VariableCollectionId:2665:225866');
let obj = [];
modes.forEach((mode) => {
    variableIds.forEach((variableId) => {
        const { name, valuesByMode } = figma.variables.getVariableById(variableId);
        const value = valuesByMode[mode.modeId];
        obj.push(name + " " + value);
    });
});
console.log(obj);
let objJson = JSON.stringify(obj);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('user.json', objJson, (err) => {
    if (err) {
        console.log('Error writing file:', err);
    }
    else {
        console.log('Successfully wrote file');
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTnlCO0FBQ3pCLFFBQVEscUJBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlJQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2luaXRpdHNjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2luaXRpdHNjL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW5pdGl0c2MvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuY29uc3QgeyBtb2RlcywgdmFyaWFibGVJZHMgfSA9IGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUNvbGxlY3Rpb25CeUlkKCdWYXJpYWJsZUNvbGxlY3Rpb25JZDoyNjY1OjIyNTg2NicpO1xubGV0IG9iaiA9IFtdO1xubW9kZXMuZm9yRWFjaCgobW9kZSkgPT4ge1xuICAgIHZhcmlhYmxlSWRzLmZvckVhY2goKHZhcmlhYmxlSWQpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZXNCeU1vZGUgfSA9IGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWQodmFyaWFibGVJZCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzQnlNb2RlW21vZGUubW9kZUlkXTtcbiAgICAgICAgb2JqLnB1c2gobmFtZSArIFwiIFwiICsgdmFsdWUpO1xuICAgIH0pO1xufSk7XG5jb25zb2xlLmxvZyhvYmopO1xubGV0IG9iakpzb24gPSBKU09OLnN0cmluZ2lmeShvYmopO1xuZnMud3JpdGVGaWxlKCd1c2VyLmpzb24nLCBvYmpKc29uLCAoZXJyKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igd3JpdGluZyBmaWxlOicsIGVycik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IHdyb3RlIGZpbGUnKTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==