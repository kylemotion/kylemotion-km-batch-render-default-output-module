/**
 * Kyle Harter function library
 * @author kylenmotion@gmail.com
 */


var kmFunctions = (function(){

    function getProj(){
        var proj = app.project;
  
        if(!proj){
          alert("Whoops!\rYou don't have a project open currently. Open an already created AE file or create a new one and try again.")
          return null
        }
  
        return proj
      };


    function getComps(proj){
        if(!proj) return null;
        var selItems = proj.selection;
        var compIds = [];
        var compNames = [];
        var compItems = [];
  
        if(selItems.length < 1){
          var activeComp = proj.activeItem;
          activeComp.openInViewer();
          if(activeComp instanceof CompItem){
            compIds.push(activeComp.id);
            compNames.push(activeComp.name);
            compItems.push(activeComp);
          }
        } else {
          for(var i = 0; i<selItems.length; i++){
            var item = selItems[i];
            if(item instanceof CompItem){
              compIds.push(item.id);
              compNames.push(item.name);
              compItems.push(item);
            }
          }
      }
  
        if(compIds.length === 0){
          alert("Whoops!\rYou don't have any comp items selected. Select atleast 1 comp item and try again.");
          return {
            compIds: [],
            compNames: [],
            compItems: []
          }
        };
  
        return {
          compIds: compIds,
          compNames: compNames,
          compItems: compItems
        };
  
      }

return {
    getComps: getComps,
    getProj: getProj
}

}())