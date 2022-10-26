$(document).ready(function () {
  $.getJSON("https://api.tvmaze.com/shows?page=1", function (result) {
    $.each(result, function (i, data) {
      $("#list-film").append(`
            <div class="col-md-3 text-center mb-3">
                <a href=`+ data.url +` id="movie-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.externals['imdb'] +`">
                    <img src="` + data.image['medium'] + `" class="img-fluid rounded">
                </a>
                <h5 class='mt-2' >`+data.name+` - `+data.status+`</h5>
            </div>
      `);
    });
  });
});

$("#list-film").on("click","#movie-detail", function(){
    console.log($(this).data('id'));
    $('.modal-body').html('');
    $.getJSON("https://api.tvmaze.com/lookup/shows?imdb="+ $(this).data('id'), function (result) {
        $('.modal-body').html(`
            <img src="` + result.image['medium'] + `" class="img-fluid rounded mb-3">
            <h3>`+ result.name + `</h3>
            <div id='summary'>`+result.summary+`</div>
            <a href=`+result.url+` target="_blank" class="btn btn-success">Tonton Sekarang</a>
        `)
    });
})


