Ext.define("app.view.erp.tpv.ventas.GridVentas",{
	extend:"base.GridPanelBase",

	xtype:"gridventas",

	storeName: "app.view.erp.tpv.ventas.data.StoreVentas",

	buildColumnas: function (){
		return [{
			text:"Codigo",
			width:100,
			dataIndex:"venta_k"
		},{
			text:"Cajero",
			flex: 1,
			dataIndex:"nameusuario"
		},{
			text:"Importe",
			width:100,
			dataIndex:"monto_venta",
			renderer: Ext.util.Format.usMoney
		}]
	}
});

