Rails.application.routes.draw do
  
  scope '/api' do
    resources :discussions do
      resources :comments, only: [:index, :new, :create, :show]
    end
    resources :comments, only: :destroy

    get '/login', to: 'sessions#new'
    post '/login', to: 'sessions#create'
  
    delete '/signout', to: 'sessions#destroy'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
