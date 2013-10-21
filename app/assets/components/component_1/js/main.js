$(function() {

  $(".component-1 .header a").off("click").click(function(e) {
    e.preventDefault();
    alert("Component 1");
  });

});
