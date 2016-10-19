Rails.application.routes.draw do
  root 'application#index'

  devise_for :users, path: 'auth'

  scope :format => true, :constraints => { :format => 'json' }, :defaults => { :format => 'json' } do
    resources :events

    resources :users, only: [] do
      get 'current', on: :collection
      get 'data', on: :member
      patch 'validate_onboarding', on: :collection
    end

    resources :tags do
      get 'autocomplete', on: :collection
    end
  end

  post 'events/:id/images', to: 'events#images'
  post 'events/:id/pdfs', to: 'events#pdfs'

  get '*path', to: 'application#index'
end
