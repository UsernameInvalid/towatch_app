class MovieDbService

  def initialize
    Tmdb::Api.key("63014a5b")
    @tmdb = Tmdb::Movie
  end

end