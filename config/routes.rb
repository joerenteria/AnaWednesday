Rails.application.routes.draw do

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :pages
  # delete "/pages/:id", to: "pages#destroy"
  # patch "/pages/:id", to: "pages#update"
  # get "/pages", to: "pages#index"
  # get "/pages/:id", to: "pages#show"
  # post "/pages", to: "pages#create"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
