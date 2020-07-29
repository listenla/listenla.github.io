var SUBCONTENT = SUBCONTENT || (function(){
  var _args = {}; // private

  return {
    init : function(Args) {
      _args = Args;
      $("#nav").load('../subfolder_content/nav.html', function() {
        for (i = 0; i < _args.length; i++) {
          argi = _args[i];
          element = document.getElementById(argi);
          console.log(element);
          element.classList.add("active");
        }s
      });
      $("#footer").load('../subfolder_content/footer.html');
    }
  };
}());
