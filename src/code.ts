import * as fs from 'fs'

const {modes, variableIds} = figma.variables.getVariableCollectionById('VariableCollectionId:2665:225866');
let obj =[];

modes.forEach((mode) => {
  variableIds.forEach((variableId) => {
    const { name, valuesByMode } = figma.variables.getVariableById(variableId);
    const value = valuesByMode[mode.modeId];
    obj.push(name+" "+value);
  })
})

console.log(obj);

let objJson = JSON.stringify(obj);

fs.writeFile('user.json', objJson, (err) => {
    if (err) {
        console.log('Error writing file:', err);
    } else {
        console.log('Successfully wrote file');
    }
});
