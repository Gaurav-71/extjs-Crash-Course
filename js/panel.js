Ext.onReady(function () {
  var childPanel1 = Ext.create("Ext.Panel", {
    html: "First Panel",
  });
  var childPanel2 = Ext.create("Ext.Panel", {
    html: "Another Panel",
  });
  Ext.create("Ext.panel.Panel", {
    renderTo: Ext.getBody(),
    width: 100,
    height: 100,
    border: true,
    frame: true,
    items: [childPanel1, childPanel2],
  });
});
