/**
 * @description a script wiht a UI that will do something really fucking cool in AE
 * @name km-batch-render-default-output-module
 * @author Kyle Harter <kylenmotion@gmail.com>
 * @version 1.0.0
 * 
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 * 
 * 
 * 
 * 
*/


(function(){

    //@include "./library/km-functionLibrary.jsx"


    try {
        app.beginUndoGroup("Batch export renders with default render token");
        var proj = kmFunctions.getProj();
        if(!proj) return null
        var comps = kmFunctions.getComps(proj);
        if(!comps || comps.compItems.length === 0) return null;
        var setWorkArea = setCompWorkArea(comps.compItems);
        var renderQueue = proj.renderQueue;
        var addToQueue = addToRenderQueue(comps.compItems,renderQueue);
        var setFilePath = setOutputFilePath(renderQueue);

    } catch(error) {
        alert("An error occured on line: " + error.line + "\nError message: " + error.message);
    } finally {
        // this always runs no matter what
        app.endUndoGroup()
    }
    
    /// RENDERRRRRR ////
    app.beginSuppressDialogs();
    renderQueue.render();
    app.endSuppressDialogs(false);

    var alertMessage = 
        'Success!\r\r\
        Your compositions:\r\r\
        '+setFilePath.outputFileNames.join("\r")+'\r\r\
        Have been exported to:\r\r\
        '+setFilePath.outputFilePath+'\r\r\
        Click okay to reveal render location\
        ';

    alert(alertMessage);
    var destinationFolder = new Folder(setFilePath.outputFilePath);
    destinationFolder.execute();
      
      function addToRenderQueue(comp,queue){

        for(var b = queue.numItems; b>0; b--){
            var rqItem = queue.item(b);
            rqItem.remove();
        }

        for(var i=0; i<comp.length; i++){
            var renderQueueComp = comp[i];
            queue.items.add(renderQueueComp);
        }

        return

      }

      function setCompWorkArea(comp){
        for(var i = 0; i<comp.length; i++){
            var item = comp[i];
            item.workAreaStart = item.duration-item.duration;
            item.workAreaDuration = item.duration;
        }
        return
      }

      function setOutputFilePath(queue){
        var outputFileNames = [];
        for(var i=1; i<=queue.numItems;i++){
            var item = queue.item(i);
            var outputModule = item.outputModule(1);
            outputModuleFile = File.decode(outputModule.file);
            var outputModuleFileSplit = outputModuleFile.split("/");
            outputFileNames.push(outputModuleFileSplit[outputModuleFileSplit.length-1]);
            var outputFilePath = outputModuleFileSplit.slice(0,-2).join("/") + "/";
            
        }
        return {
            outputFileNames: outputFileNames,
            outputFilePath: outputFilePath
        }
      }
      
    
      




}())
