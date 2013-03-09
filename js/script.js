// fit header to width
$(".title").fitText(.67);

$.getJSON('../data/data.json',function(data){
  $('.f-is-list').empty();
  $.each(data, function(entryIndex, entry){
    var html = '<li class="f-is-item">';            
    html += '<p class="f-is">' + entry['copy'] + '</p>';
    html += '<p class="name">' + entry['name'] + '</p>';
    html += '<a href="' + entry['linkUrl'] +'" class="linky">' + entry['linkText'] + '</a>';
    $('.f-is-list').append(html);
  });              
});

