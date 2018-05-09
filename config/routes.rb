Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/home', to: 'home#index'
  get '/new', to: 'users#new'
  get '/contact/:id', to: 'users#show', as:'contact'
  resources :users
end
