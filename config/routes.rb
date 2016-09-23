Rails.application.routes.draw do
  root 'application#index'

  devise_for :users, path: 'auth'

  scope :format => true, :constraints => { :format => 'json' }, :defaults => { :format => 'json' } do
    resources :events, only: [:index, :create, :show, :update]

    resources :users, only: [] do
      get 'current', on: :collection
      get 'categories', on: :member
      patch 'validate_onboarding', on: :collection
    end

    resources :tags do
      get 'autocomplete', on: :collection
    end
  end

  get '*path', to: 'application#index'
end
