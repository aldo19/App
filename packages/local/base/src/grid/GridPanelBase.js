Ext.define("base.grid.GridPanelBase",{
	extend:"Ext.grid.Panel",

	alternateClassName:"base.GridPanelBase",

	xtype:"gridpanelbase",


	enableRowNumber: true,//inventada

	enableEliminar: true,

	enableEditar: true,


	enablePaging: true,


	plugins: {
        cellediting: {
            clicksToEdit: 1
        }
    },


    initComponent: function (){
    	this.store = this.buildStore();
    	this.columns = this.crearColumnas();

    	if( this.enablePaging ){
    		this.bbar = this.buildPaging();
    	}
    	this.callParent();
    },

    crearColumnas: function (){
    	let columnas = this.buildColumnas();

	    if( this.enableRowNumber ){
			columnas.splice( 0, 0 , {
				xtype:"rownumberer"
			});
	    }

	    if( this.enableEliminar ){
			columnas.push({
				xtype:'actioncolumn',
				width:50,
				items:[{
					iconCls: 'x-fa fa-times',
	                tooltip: 'Eliminar',
	                handler: function(grid, rowIndex, colIndex) {
	                    grid.getStore().removeAt(rowIndex);
	                }
				}]
			});
	    }

	    return columnas;
    },

    buildPaging: function (){
    	return {
	        xtype: 'pagingtoolbar',
	        displayInfo: true
	    };
    },

    buildStore:  Ext.emptyFn,


    buildColumnas: Ext.emptyFn
});