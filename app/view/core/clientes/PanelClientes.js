Ext.define("app.view.core.clientes.PanelClientes",{
	extend:"Ext.Panel",

	xtype:"panelclientes",


	title:"Listado de clientes",

	layout:"fit",

	tbar:[{
		iconCls:"x-fa fa-plus-circle",
		text:"Agregar",

		handler: function (){
			let win = Ext.create("base.WindowForm",{
				title:"Agregar cliente",
				width: 400,

				xtypeItem: "formcliente"
			});

console.info(" TERMINA la construccion --------");

			//setTimeout( function (){
				console.info(" inicia la renderizacion--------");
				win.show();
			//}, 5000);
		}
	}],

	items:{
		xtype:"gridclientes"
		//-- configuraciones
	}
});
