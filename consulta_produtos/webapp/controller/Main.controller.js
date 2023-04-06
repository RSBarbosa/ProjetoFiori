sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
    // "sap/m/livrary"

],
   /** 
   *   @param {typeof sap.ui.core.mvc.Controller} Controller
  */
    
    function (Controller, library, JSONModel) {
        "use strict";

        // var urlObject = library.URLHelper;

        return Controller.extend("consultaprodutos.controller.Main", {
            onInit: function () {
                // let produto = { };
                // let productModel = new JSONModel(produto);
                // let view = this.getView( );
                // view.setModel(productModel, "ModeloProduto")

            },
            // onClickImage: function(oEvent){
            //     urlObject.redirect(oEvent.getSource().getSrc(), true)
                

            // },


            onPressBuscar: function( ){
               const input = this.byId( "inpBusca");
               let valor = input.getValue( );
               alert(valor);

               let material = "Água minet"


            }
        });
    });

    