// fit header to width
$(".title").fitText(.67);

$(document).ready(print);

$(".more").click(print);

function print(){
  $.getJSON('data/data.json',function(data){
    var rand = Math.floor(Math.random()*data.length);

    $('.f-is-list').empty()
    var html = '<li class="f-is-item">';            
    html += '<p class="f-is">' + data[rand].copy + '</p>';

    if (data[rand].name.length === 0){
      html += '<p class="name">' + "anonymous" + '</p>';
    }
    else {
      html += '<p class="name">' + data[rand].name + '</p>';
    }

    if (data[rand].linkText.length === 0){

    }
    else{
      html += '<a href="' + data[rand].linkUrl +'" class="linky">' + data[rand].linkText + '</a>';
    }
    
    $('.f-is-list').append(html);
  });
};