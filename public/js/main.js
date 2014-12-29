require.config({
  paths: {
    "d3": "vendor/d3.min"
  },

  shims: {
    "d3": {
      exports: "d3"
    }
  }
});

require(['d3'], function(d3){
  //TODO write your code here

  console.log('------ d3 -------');
  console.log(d3);
  console.log('-----------------');
  console.log("Looks like everyone works appropriately.");
});
