
$(document).ready(function(){
  $("#search").click(function(){
    var searchTerm = $("#searchBar").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    
    $.ajax({
      type: 'GET',
      url: url,
      contentType: "application/json; charset=utf-8",
      async:false,
      dataType:'JSON',
      success:function (data, textStatus, jqXHR) {
          $('#output').html('');
          for(var i=0;i<data[1].length;i++){
            $('#output').prepend("<div><div class='btn-info'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>" );        
          }    
   $("#searchBar").val('');
        },
        error: function (errorMessage) {
         console.log(errorMessage);
        }
    });
  });
});
