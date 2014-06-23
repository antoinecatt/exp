Rails.application.routes.draw do
  resources :experiences
  root 'experiences#index'
  devise_for :users
end
