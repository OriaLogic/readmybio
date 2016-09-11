Rails.application.routes.draw do
  root 'application#index'

  devise_for :users, path: 'auth'

  scope :format => true, :constraints => { :format => 'json' }, :defaults => { :format => 'json' } do
    resources :events, only: [:index, :create]

    resources :users, only: [] do
      get 'current', on: :collection
    end

    resources :tags, only: [:create] do
      get 'autocomplete', on: :collection
    end
  end

  get '*path', to: 'application#index'
end
