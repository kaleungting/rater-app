Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:create, :index, :show] do
      resources :reviews, only: [:index, :create, :update, :destroy]
    end
  end

end
