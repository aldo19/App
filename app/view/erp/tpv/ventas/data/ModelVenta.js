Ext.define("app.view.erp.tpv.ventas.data.ModelVenta",{
	extend:"Ext.data.Model",
    field:["nameusuario", {
        name: "monto_costo",
        type: "float"
    },{
        name: "nombreterminal",
        type: "string"
    },{
        name: "timestamp",
        type: "date",
        //dateFormat : 'Y-m-d H:i:s'
        dateFormat : 'd-m-y  H:i'
    }]
});