Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/movies/:id', :to => 'movies#show', :as => 'movies_show'
  get '/movies', :to => 'movies#index'
  root 'movies#index'
end
