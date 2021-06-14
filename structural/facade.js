// Facade for jQuery
$.get( url, data, callback, dataType );

// This is translated behind the scenes to:
// $.get()
$.ajax({
  url: url,
  data: data,
  dataType: dataType
}).done( callback );