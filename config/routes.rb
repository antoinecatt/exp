Rails.application.routes.draw do
  resources :experiences
  root 'pages#index'
  devise_for :users
  get '/profile', to: 'experiences#profile', as: 'profile'
  get '/profile', to: 'experiences#profile', as: 'user_root' 
  get '/pins', to: 'experiences#pins', as: 'pins' 

end
