Rails.application.routes.draw do
  devise_for :users

  resources :events, only: [:index, :new, :create]

  resources :tags, only: [:create] do
    get 'autocomplete', on: :collection
  end

  root 'events#index'
end
