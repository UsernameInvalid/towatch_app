$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});


function getMovies(searchText){
  axios.get('https://www.omdbapi.com?apikey=63014a5b&type=movie&s='+searchText)
    .then((response) => {
      let movies = response.data.Search;
      let output = '';
      let count = 0;
      console.log(movies)
      $.each(movies, (index, movie) => {
        if(count%4==0){
          output+= '<div class="row">'
        }
        output += `
        <div class ="col-md-3">
          <div class ="well text-center">
            <img src = "${movie.Poster}">
            <h5>${movie.Title}</h5>
          </div>
        </div>
        `;
        if(count%4==3){
          output+= '</div>'
        }
        count += 1;
      });
      $('#movies').html(output);
      $("img").error(function(){
        $(this).attr('src', 'https://vignette.wikia.nocookie.net/madannooutovanadis/images/6/60/No_Image_Available.png');
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
